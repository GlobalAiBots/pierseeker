/**
 * Regenerate public/sitemap-piers.xml from current runtime pier data.
 *
 * The slug logic here MIRRORS src/data/all-piers.ts so the URLs in the
 * sitemap exactly match what the /piers/[id] route resolves at request time.
 * If you change the slug logic in all-piers.ts, re-run this script.
 *
 * Usage: node scripts/generate-sitemap-piers.js
 */
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");
const OUT_PATH = path.join(__dirname, "..", "public", "sitemap-piers.xml");
const BASE_URL = "https://www.pierseeker.com";

const stateMap = {
  alabama: "al", alaska: "ak", arizona: "az", arkansas: "ar", california: "ca",
  colorado: "co", connecticut: "ct", delaware: "de", florida: "fl", georgia: "ga",
  hawaii: "hi", idaho: "id", illinois: "il", indiana: "in", iowa: "ia",
  kansas: "ks", kentucky: "ky", louisiana: "la", maine: "me", maryland: "md",
  massachusetts: "ma", michigan: "mi", minnesota: "mn", mississippi: "ms", missouri: "mo",
  montana: "mt", nebraska: "ne", nevada: "nv", "new-hampshire": "nh", "new-jersey": "nj",
  "new-mexico": "nm", "new-york": "ny", "north-carolina": "nc", "north-dakota": "nd", ohio: "oh",
  oklahoma: "ok", oregon: "or", pennsylvania: "pa", "rhode-island": "ri", "south-carolina": "sc",
  "south-dakota": "sd", tennessee: "tn", texas: "tx", utah: "ut", vermont: "vt",
  virginia: "va", washington: "wa", "west-virginia": "wv", wisconsin: "wi", wyoming: "wy",
};

function slugify(name) {
  return String(name || "").toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 60);
}

const seenSlugs = new Set();
const ids = [];
let totalRaw = 0;
let dropped = 0;

for (const [stateSlug, prefix] of Object.entries(stateMap)) {
  const file = path.join(DATA_DIR, `${stateSlug}-piers.json`);
  if (!fs.existsSync(file)) continue;
  let rows;
  try {
    rows = JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch (e) {
    console.warn(`skip ${stateSlug}: ${e.message}`);
    continue;
  }
  if (!Array.isArray(rows) || rows.length === 0) continue;

  for (const raw of rows) {
    totalRaw++;
    const cleanName = String(raw.name || "Fishing Pier").replace(/[^\w\s'-]/g, "").trim();
    let slug = `${prefix}-${slugify(cleanName) || "pier"}`;
    if (seenSlugs.has(slug)) {
      slug = `${slug}-${String(raw.place_id || "").substring(0, 8).toLowerCase()}`;
    }
    if (seenSlugs.has(slug)) {
      slug = `${slug}-${String(raw.place_id || "").substring(8, 16).toLowerCase()}`;
    }
    if (seenSlugs.has(slug)) {
      dropped++;
      continue;
    }
    seenSlugs.add(slug);
    ids.push(slug);
  }
}

const today = new Date().toISOString().slice(0, 10);
const urls = ids
  .map(
    (id) =>
      `  <url><loc>${BASE_URL}/piers/${id}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(OUT_PATH, xml);
console.log(`Wrote ${OUT_PATH}`);
console.log(`Total raw piers across all state JSONs: ${totalRaw}`);
console.log(`URLs written: ${ids.length}`);
console.log(`Dropped (slug collisions exhausted): ${dropped}`);
