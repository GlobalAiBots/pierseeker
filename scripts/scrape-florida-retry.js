const fs = require("fs");
const path = require("path");

const FL_FILE = path.join(__dirname, "..", "src", "data", "florida-piers.json");

function haversineMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function getCoords(el) {
  if (el.lat !== undefined && el.lon !== undefined) return { lat: el.lat, lon: el.lon };
  if (el.center) return { lat: el.center.lat, lon: el.center.lon };
  return null;
}

function elementToType(el) {
  const tags = el.tags || {};
  if (tags.man_made === "pier") return "man_made_pier";
  if (tags.man_made === "jetty") return "man_made_jetty";
  if (tags.leisure === "fishing") return "leisure_fishing";
  if (tags.leisure === "slipway") return "leisure_slipway";
  if (tags.waterway === "dock") return "waterway_dock";
  return "man_made_pier";
}

// Regions that got rate-limited in first run
const regions = [
  { name: "Tampa/St Pete", bbox: "(27.5,-82.9,28.2,-82.2)" },
  { name: "Orlando", bbox: "(28.3,-81.7,28.7,-81.1)" },
  { name: "Panama City/Panhandle", bbox: "(29.8,-86.5,30.5,-85.0)" },
  { name: "Pensacola", bbox: "(30.2,-87.5,30.6,-87.0)" },
  { name: "Sarasota", bbox: "(27.0,-82.7,27.5,-82.3)" },
  { name: "Gainesville/North Central", bbox: "(29.5,-82.8,30.0,-82.0)" },
  { name: "Treasure Coast", bbox: "(26.8,-80.5,27.5,-80.0)" },
  { name: "Palm Beach", bbox: "(26.4,-80.3,26.8,-80.0)" },
  { name: "Tallahassee/Big Bend", bbox: "(29.5,-85.0,30.5,-83.5)" },
];

async function queryOverpass(bbox, retries = 3) {
  const query = `[out:json][timeout:90];
(
  nwr["leisure"="fishing"]${bbox};
  nwr["man_made"="pier"]${bbox};
  nwr["leisure"="slipway"]${bbox};
  nwr["waterway"="dock"]${bbox};
  nwr["man_made"="jetty"]${bbox};
  nwr["name"~"[Ff]ishing [Pp]ier"]${bbox};
  nwr["name"~"[Pp]ier"]${bbox};
  nwr["name"~"[Dd]ock"]${bbox};
  nwr["name"~"[Jj]etty"]${bbox};
);
out center;`;

  for (let attempt = 0; attempt < retries; attempt++) {
    const res = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "data=" + encodeURIComponent(query),
    });
    if (res.ok) {
      const data = await res.json();
      return data.elements || [];
    }
    if (res.status === 429) {
      const wait = (attempt + 1) * 15000;
      console.log(`    Rate limited, waiting ${wait / 1000}s (attempt ${attempt + 1})...`);
      await sleep(wait);
      continue;
    }
    throw new Error(`HTTP ${res.status}`);
  }
  throw new Error("Max retries exceeded");
}

async function main() {
  const existing = JSON.parse(fs.readFileSync(FL_FILE, "utf8"));
  console.log(`Current FL piers: ${existing.length}`);
  const seenOsmIds = new Set(existing.map((e) => e.place_id));

  let totalAdded = 0;

  for (const region of regions) {
    console.log(`\nQuerying ${region.name}...`);
    try {
      const elements = await queryOverpass(region.bbox);
      console.log(`  Got ${elements.length} elements`);

      let added = 0;
      for (const el of elements) {
        const coords = getCoords(el);
        if (!coords) continue;
        if (coords.lat < 24.0 || coords.lat > 31.0 || coords.lon < -87.7 || coords.lon > -79.8) continue;

        const osmId = `osm_${el.id}`;
        if (seenOsmIds.has(osmId)) continue;
        seenOsmIds.add(osmId);

        const name = el.tags?.name || "Fishing Pier";
        const tooClose = existing.some(
          (e) => haversineMeters(coords.lat, coords.lon, e.latitude, e.longitude) < 500
        );
        if (tooClose) continue;

        existing.push({
          place_id: osmId,
          name,
          formatted_address: ", Florida, USA",
          latitude: coords.lat,
          longitude: coords.lon,
          city: "",
          county: "",
          rating: null,
          total_ratings: 0,
          types: [elementToType(el)],
          business_status: "OPERATIONAL",
        });
        added++;
      }
      console.log(`  Added ${added} new piers`);
      totalAdded += added;
    } catch (e) {
      console.log(`  ERROR: ${e.message}`);
    }

    // Wait longer between queries
    console.log("  Waiting 10s before next query...");
    await sleep(10000);
  }

  fs.writeFileSync(FL_FILE, JSON.stringify(existing, null, 2), "utf8");
  console.log(`\nTotal added in retry: ${totalAdded}`);
  console.log(`Final FL count: ${existing.length}`);
}

main().catch(console.error);
