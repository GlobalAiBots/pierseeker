#!/usr/bin/env node
/**
 * Fetch pier records for a single state from OpenStreetMap Overpass API.
 * Usage: node scripts/fetch-state-piers.js <stateName>
 * Example: node scripts/fetch-state-piers.js alaska
 *
 * Output matches the shape of existing src/data/{state}-piers.json files
 * so downstream scripts (city-pages generator, geocoder) work unmodified.
 */
const fs = require("fs");
const path = require("path");
const https = require("https");

const STATE = process.argv[2];
if (!STATE) {
  console.error("Usage: node fetch-state-piers.js <state>");
  process.exit(1);
}

// State name → bbox (matches fetch-piers.ts coverage) for fallback queries
const STATE_BBOX = {
  alaska: { lat: [51.2, 71.4], lng: [-180.0, -129.0], pretty: "Alaska", abbr: "AK" },
  hawaii: { lat: [18.9, 22.5], lng: [-160.5, -154.5], pretty: "Hawaii", abbr: "HI" },
};

const cfg = STATE_BBOX[STATE.toLowerCase()];
if (!cfg) {
  console.error(`No bbox configured for "${STATE}". Add to STATE_BBOX.`);
  process.exit(1);
}

// Query 3 categories matching fetch-piers.ts: pier, fishing, dock
const bbox = `${cfg.lat[0]},${cfg.lng[0]},${cfg.lat[1]},${cfg.lng[1]}`;
const queries = [
  {
    label: "piers",
    q: `[out:json][timeout:120];(node["man_made"="pier"](${bbox});way["man_made"="pier"](${bbox}););out center tags;`,
  },
  {
    label: "fishing spots",
    q: `[out:json][timeout:120];node["leisure"="fishing"](${bbox});out tags;`,
  },
  {
    label: "docks",
    q: `[out:json][timeout:120];(node["waterway"="dock"](${bbox});way["waterway"="dock"](${bbox}););out center tags;`,
  },
];

function postOverpass(query) {
  return new Promise((resolve, reject) => {
    const data = `data=${encodeURIComponent(query)}`;
    const req = https.request(
      {
        hostname: "overpass-api.de",
        path: "/api/interpreter",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": Buffer.byteLength(data),
          "User-Agent": "pierseeker.com data refresh / contact: jljbbookings@gmail.com",
          Accept: "application/json",
        },
        timeout: 180000,
      },
      (res) => {
        let body = "";
        res.on("data", (c) => (body += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            reject(new Error(`Parse error: ${e.message}; head: ${body.slice(0, 300)}`));
          }
        });
      },
    );
    req.on("error", reject);
    req.on("timeout", () => req.destroy(new Error("Overpass timeout")));
    req.write(data);
    req.end();
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  console.log(`Fetching pier-shaped OSM data for ${cfg.pretty} (${bbox})`);
  const seen = new Map();

  for (const { label, q } of queries) {
    console.log(`  query: ${label}`);
    let json;
    try {
      json = await postOverpass(q);
    } catch (e) {
      console.error(`    failed: ${e.message}`);
      continue;
    }
    const elements = json.elements || [];
    console.log(`    got ${elements.length} elements`);
    for (const el of elements) {
      const lat = el.lat ?? el.center?.lat;
      const lng = el.lon ?? el.center?.lon;
      if (typeof lat !== "number" || typeof lng !== "number") continue;
      // Dedup by ~500m bucket
      const key = `${Math.round(lat * 200)}:${Math.round(lng * 200)}`;
      const tags = el.tags || {};
      const name = tags.name || tags["name:en"] || "Fishing Pier";
      const existing = seen.get(key);
      if (existing) {
        if (existing.name === "Fishing Pier" && name !== "Fishing Pier") {
          existing.name = name;
        }
        continue;
      }
      seen.set(key, {
        place_id: `osm_${el.type}_${el.id}`,
        name,
        formatted_address: "",
        latitude: lat,
        longitude: lng,
        city: "",
        county: "",
        rating: null,
        total_ratings: null,
        types: ["fishing_pier"],
        business_status: null,
        osm_type: el.type,
        osm_tags: tags,
        state: cfg.pretty,
        stateAbbr: cfg.abbr,
      });
    }
    await sleep(2500);
  }

  const piers = Array.from(seen.values());
  const outPath = path.join(__dirname, "..", "src", "data", `${STATE}-piers.json`);
  fs.writeFileSync(outPath, JSON.stringify(piers, null, 2));
  console.log(`Wrote ${piers.length} pier records to ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
