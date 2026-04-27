/**
 * One-shot: rewrite /piers/osm_XXX broken links in src/app/best-of/*\/page.tsx
 * to use the runtime slug format derived from src/data/all-piers.ts.
 *
 * Builds a {place_id → runtime_slug} map by replicating all-piers.ts slug
 * logic, then scans each best-of page and replaces matched references.
 *
 * Usage: node scripts/fix-bestof-pier-links.js
 */
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");
const BESTOF_DIR = path.join(__dirname, "..", "src", "app", "best-of");

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

// Build place_id → runtime slug map
const seenSlugs = new Set();
const placeIdToSlug = new Map();
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
    const cleanName = String(raw.name || "Fishing Pier").replace(/[^\w\s'-]/g, "").trim();
    let slug = `${prefix}-${slugify(cleanName) || "pier"}`;
    if (seenSlugs.has(slug)) {
      slug = `${slug}-${String(raw.place_id || "").substring(0, 8).toLowerCase()}`;
    }
    if (seenSlugs.has(slug)) {
      slug = `${slug}-${String(raw.place_id || "").substring(8, 16).toLowerCase()}`;
    }
    if (seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);
    if (raw.place_id) placeIdToSlug.set(raw.place_id, slug);
  }
}

console.log(`Built place_id → slug map with ${placeIdToSlug.size} entries.\n`);

// Walk best-of pages and rewrite
const bestofDirs = fs.readdirSync(BESTOF_DIR).filter((d) => {
  return fs.statSync(path.join(BESTOF_DIR, d)).isDirectory();
});

let totalRewrites = 0;
let totalUnmatched = 0;
const unmatchedList = [];

for (const dir of bestofDirs) {
  const pagePath = path.join(BESTOF_DIR, dir, "page.tsx");
  if (!fs.existsSync(pagePath)) continue;
  let content = fs.readFileSync(pagePath, "utf-8");
  const before = content;
  let pageRewrites = 0;
  let pageUnmatched = 0;

  content = content.replace(/href="\/piers\/(osm_\d+)"/g, (match, placeId) => {
    const slug = placeIdToSlug.get(placeId);
    if (slug) {
      pageRewrites++;
      return `href="/piers/${slug}"`;
    }
    pageUnmatched++;
    unmatchedList.push(`${dir}: ${placeId}`);
    return match;
  });

  if (content !== before) {
    fs.writeFileSync(pagePath, content);
    console.log(`✓ ${dir}: ${pageRewrites} rewritten, ${pageUnmatched} unmatched`);
  } else {
    console.log(`  ${dir}: no changes (${pageUnmatched} unmatched)`);
  }
  totalRewrites += pageRewrites;
  totalUnmatched += pageUnmatched;
}

console.log(`\nTotal rewrites: ${totalRewrites}`);
console.log(`Total unmatched: ${totalUnmatched}`);
if (unmatchedList.length) {
  console.log(`\nUnmatched references (place_id removed from current data):`);
  unmatchedList.forEach((u) => console.log(`  - ${u}`));
}
