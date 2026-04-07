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

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const regions = [
  { name: "Jacksonville", bbox: "(30.1,-82.0,30.6,-81.3)" },
  { name: "Miami/Fort Lauderdale", bbox: "(25.5,-80.5,26.4,-79.9)" },
  { name: "Tampa/St Pete", bbox: "(27.5,-82.9,28.2,-82.2)" },
  { name: "Orlando", bbox: "(28.3,-81.7,28.7,-81.1)" },
  { name: "Panama City/Panhandle", bbox: "(29.8,-86.5,30.5,-85.0)" },
  { name: "Pensacola", bbox: "(30.2,-87.5,30.6,-87.0)" },
  { name: "Daytona/Space Coast", bbox: "(28.0,-81.2,29.3,-80.5)" },
  { name: "Keys", bbox: "(24.5,-82.0,25.2,-80.0)" },
  { name: "Fort Myers/Naples", bbox: "(26.0,-82.2,26.8,-81.5)" },
  { name: "Sarasota", bbox: "(27.0,-82.7,27.5,-82.3)" },
  { name: "Gainesville/North Central", bbox: "(29.5,-82.8,30.0,-82.0)" },
  // Additional coverage for gaps
  { name: "Treasure Coast", bbox: "(26.8,-80.5,27.5,-80.0)" },
  { name: "Palm Beach", bbox: "(26.4,-80.3,26.8,-80.0)" },
  { name: "SW Florida Coast", bbox: "(25.2,-81.9,26.0,-81.3)" },
  { name: "Tallahassee/Big Bend", bbox: "(29.5,-85.0,30.5,-83.5)" },
  { name: "Central FL Lakes", bbox: "(27.5,-82.2,28.3,-81.0)" },
];

async function queryOverpass(bbox) {
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

  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "data=" + encodeURIComponent(query),
  });

  if (!res.ok) {
    throw new Error(`Overpass HTTP ${res.status}: ${await res.text().catch(() => "")}`);
  }
  const data = await res.json();
  return data.elements || [];
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

async function main() {
  const existing = JSON.parse(fs.readFileSync(FL_FILE, "utf8"));
  console.log(`Existing FL piers: ${existing.length}`);

  const allNew = [];
  const seenOsmIds = new Set(existing.map((e) => e.place_id));

  for (const region of regions) {
    console.log(`\nQuerying ${region.name}...`);
    try {
      const elements = await queryOverpass(region.bbox);
      console.log(`  Got ${elements.length} elements`);

      for (const el of elements) {
        const coords = getCoords(el);
        if (!coords) continue;

        // Florida bounds check
        if (coords.lat < 24.0 || coords.lat > 31.0 || coords.lon < -87.7 || coords.lon > -79.8) continue;

        const osmId = `osm_${el.id}`;
        if (seenOsmIds.has(osmId)) continue;
        seenOsmIds.add(osmId);

        const name = el.tags?.name || "Fishing Pier";

        allNew.push({
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
      }
    } catch (e) {
      console.log(`  ERROR: ${e.message}`);
    }

    // Rate limit between Overpass queries
    await sleep(3000);
  }

  console.log(`\nTotal new unique elements: ${allNew.length}`);

  // Deduplicate against existing by proximity (500m)
  let added = 0;
  let skippedProximity = 0;

  for (const p of allNew) {
    const tooClose = existing.some(
      (e) => haversineMeters(p.latitude, p.longitude, e.latitude, e.longitude) < 500
    );
    if (tooClose) {
      skippedProximity++;
      continue;
    }
    // Also check against already-added ones
    const tooCloseNew = existing.some(
      (e) => haversineMeters(p.latitude, p.longitude, e.latitude, e.longitude) < 200
    );
    existing.push(p);
    added++;
  }

  // Self-dedup the full list (200m)
  const toRemove = new Set();
  for (let i = 0; i < existing.length; i++) {
    if (toRemove.has(i)) continue;
    for (let j = i + 1; j < existing.length; j++) {
      if (toRemove.has(j)) continue;
      const dist = haversineMeters(
        existing[i].latitude, existing[i].longitude,
        existing[j].latitude, existing[j].longitude
      );
      if (dist < 200) {
        const removeIdx = existing[i].name.length >= existing[j].name.length ? j : i;
        toRemove.add(removeIdx);
      }
    }
  }

  const deduped = existing.filter((_, i) => !toRemove.has(i));
  console.log(`Added: ${added}, Skipped (proximity): ${skippedProximity}, Dedup removed: ${toRemove.size}`);
  console.log(`Final FL count: ${deduped.length}`);

  fs.writeFileSync(FL_FILE, JSON.stringify(deduped, null, 2), "utf8");
}

main().catch(console.error);
