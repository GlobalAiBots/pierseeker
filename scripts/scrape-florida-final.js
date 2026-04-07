const fs = require("fs");
const path = require("path");

const FL_FILE = path.join(__dirname, "..", "src", "data", "florida-piers.json");

function haversineMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function getCoords(el) {
  if (el.lat !== undefined && el.lon !== undefined) return { lat: el.lat, lon: el.lon };
  if (el.center) return { lat: el.center.lat, lon: el.center.lon };
  return null;
}
function elementToType(el) {
  const t = el.tags || {};
  if (t.man_made === "pier") return "man_made_pier";
  if (t.man_made === "jetty") return "man_made_jetty";
  if (t.leisure === "fishing") return "leisure_fishing";
  if (t.leisure === "slipway") return "leisure_slipway";
  if (t.waterway === "dock") return "waterway_dock";
  return "man_made_pier";
}

const regions = [
  { name: "Pensacola", bbox: "(30.2,-87.5,30.6,-87.0)" },
  { name: "Treasure Coast", bbox: "(26.8,-80.5,27.5,-80.0)" },
];

async function queryOverpass(bbox) {
  const query = `[out:json][timeout:120];(nwr["leisure"="fishing"]${bbox};nwr["man_made"="pier"]${bbox};nwr["leisure"="slipway"]${bbox};nwr["waterway"="dock"]${bbox};nwr["man_made"="jetty"]${bbox};nwr["name"~"[Pp]ier"]${bbox};nwr["name"~"[Dd]ock"]${bbox};nwr["name"~"[Jj]etty"]${bbox};);out center;`;
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "data=" + encodeURIComponent(query),
    });
    if (res.ok) return (await res.json()).elements || [];
    console.log(`    Attempt ${attempt + 1} failed (${res.status}), waiting ${(attempt + 1) * 20}s...`);
    await sleep((attempt + 1) * 20000);
  }
  throw new Error("Max retries");
}

async function main() {
  const existing = JSON.parse(fs.readFileSync(FL_FILE, "utf8"));
  console.log(`Current FL piers: ${existing.length}`);
  const seenOsmIds = new Set(existing.map(e => e.place_id));
  let totalAdded = 0;

  for (const region of regions) {
    console.log(`\nQuerying ${region.name}...`);
    try {
      const elements = await queryOverpass(region.bbox);
      console.log(`  Got ${elements.length} elements`);
      let added = 0;
      for (const el of elements) {
        const coords = getCoords(el);
        if (!coords || coords.lat < 24 || coords.lat > 31 || coords.lon < -87.7 || coords.lon > -79.8) continue;
        const osmId = `osm_${el.id}`;
        if (seenOsmIds.has(osmId)) continue;
        seenOsmIds.add(osmId);
        if (existing.some(e => haversineMeters(coords.lat, coords.lon, e.latitude, e.longitude) < 500)) continue;
        existing.push({
          place_id: osmId, name: el.tags?.name || "Fishing Pier", formatted_address: ", Florida, USA",
          latitude: coords.lat, longitude: coords.lon, city: "", county: "", rating: null, total_ratings: 0,
          types: [elementToType(el)], business_status: "OPERATIONAL",
        });
        added++;
      }
      console.log(`  Added ${added} new piers`);
      totalAdded += added;
    } catch (e) { console.log(`  ERROR: ${e.message}`); }
    await sleep(15000);
  }

  fs.writeFileSync(FL_FILE, JSON.stringify(existing, null, 2), "utf8");
  console.log(`\nTotal added: ${totalAdded}`);
  console.log(`Final FL count: ${existing.length}`);

  // Grand total
  const dataDir = path.join(__dirname, "..", "src", "data");
  let grand = 0;
  for (const f of fs.readdirSync(dataDir).filter(f => f.endsWith("-piers.json"))) {
    grand += JSON.parse(fs.readFileSync(path.join(dataDir, f), "utf8")).length;
  }
  console.log(`Grand total across all states: ${grand}`);
}
main().catch(console.error);
