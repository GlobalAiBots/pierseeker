const fs = require("fs");
const path = require("path");

function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

const STATE_SLUGS = {AL:"alabama",AK:"alaska",AZ:"arizona",AR:"arkansas",CA:"california",CO:"colorado",CT:"connecticut",DE:"delaware",FL:"florida",GA:"georgia",HI:"hawaii",ID:"idaho",IL:"illinois",IN:"indiana",IA:"iowa",KS:"kansas",KY:"kentucky",LA:"louisiana",ME:"maine",MD:"maryland",MA:"massachusetts",MI:"michigan",MN:"minnesota",MS:"mississippi",MO:"missouri",MT:"montana",NE:"nebraska",NV:"nevada",NH:"new-hampshire",NJ:"new-jersey",NM:"new-mexico",NY:"new-york",NC:"north-carolina",ND:"north-dakota",OH:"ohio",OK:"oklahoma",OR:"oregon",PA:"pennsylvania",RI:"rhode-island",SC:"south-carolina",SD:"south-dakota",TN:"tennessee",TX:"texas",UT:"utah",VT:"vermont",VA:"virginia",WA:"washington",WV:"west-virginia",WI:"wisconsin",WY:"wyoming"};
const STATE_NAMES = {};
Object.entries(STATE_SLUGS).forEach(([c, s]) => { STATE_NAMES[c] = s.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" "); });

// Coastal states (saltwater)
const COASTAL = new Set(["AL","AK","CA","CT","DE","FL","GA","HI","LA","ME","MD","MA","MS","NH","NJ","NY","NC","OR","PA","RI","SC","TX","VA","WA"]);
// Inland states (freshwater)
const INLAND = new Set(["AZ","AR","CO","ID","IL","IN","IA","KS","KY","MI","MN","MO","MT","NE","NV","NM","ND","OH","OK","SD","TN","UT","VT","WV","WI","WY"]);

const dataDir = path.join(__dirname, "..", "src", "data");
const files = fs.readdirSync(dataDir).filter(f => f.endsWith("-piers.json"));

const allPiers = [];
files.forEach(f => {
  const stateName = f.replace("-piers.json", "");
  const stateCode = Object.entries(STATE_SLUGS).find(([, s]) => s === stateName)?.[0] || "";
  JSON.parse(fs.readFileSync(path.join(dataDir, f), "utf8")).forEach(p => {
    allPiers.push({ ...p, stateCode, stateSlug: stateName });
  });
});

function groupByState(list) {
  const byState = {};
  list.forEach(r => {
    const st = r.stateCode || "Unknown";
    if (!byState[st]) byState[st] = { code: st, name: STATE_NAMES[st] || st, slug: STATE_SLUGS[st] || slugify(st), count: 0 };
    byState[st].count++;
  });
  return Object.values(byState).sort((a, b) => b.count - a.count);
}

const catDefs = [
  { slug: "saltwater", title: "Saltwater Fishing Piers", desc: "Ocean, bay, and gulf fishing piers along America\u2019s coastlines \u2014 perfect for redfish, flounder, snook, and more.",
    match: r => COASTAL.has(r.stateCode) },
  { slug: "freshwater", title: "Freshwater Fishing Piers", desc: "Lake, river, and reservoir fishing piers across inland America \u2014 great for bass, catfish, crappie, and trout.",
    match: r => INLAND.has(r.stateCode) },
  { slug: "public-piers", title: "Public Fishing Piers", desc: "Free public fishing piers maintained by state parks, cities, and counties \u2014 no membership required.",
    match: r => { const n = (r.name||"").toLowerCase(); return n.includes("public") || n.includes("state") || n.includes("city") || n.includes("county") || n.includes("park"); } },
  { slug: "docks", title: "Fishing Docks & Jetties", desc: "Fishing docks, jetties, and smaller launch-adjacent spots perfect for shore fishing and crabbing.",
    match: r => { const n = (r.name||"").toLowerCase(); return n.includes("dock") || n.includes("jetty") || n.includes("wharf") || (r.types||[]).includes("waterway_dock"); } },
  { slug: "boat-launches", title: "Piers with Boat Launches", desc: "Fishing piers co-located with boat ramps and slipways \u2014 fish from the pier or launch your boat.",
    match: r => { const n = (r.name||"").toLowerCase(); return n.includes("boat") || n.includes("launch") || n.includes("ramp") || (r.types||[]).includes("leisure_slipway"); } },
];

const categories = catDefs.map(def => {
  const matching = allPiers.filter(def.match);
  return { slug: def.slug, title: def.title, description: def.desc, totalCount: matching.length, states: groupByState(matching) };
}).filter(c => c.totalCount >= 10);

console.log("Categories:");
categories.forEach(c => console.log(`  ${c.slug}: ${c.totalCount} piers`));

fs.writeFileSync(path.join(dataDir, "categories.json"), JSON.stringify(categories, null, 2));

const sitemapLines = categories.map(c => `  <url><loc>https://www.pierseeker.com/category/${c.slug}</loc><lastmod>2026-04-10</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
fs.writeFileSync(path.join(__dirname, "..", "public", "sitemap-categories.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapLines.join("\n")}\n</urlset>`);

console.log(`\nTotal: ${categories.length} categories`);
