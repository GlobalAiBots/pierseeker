#!/usr/bin/env node
/* eslint-disable */
/**
 * Build-time precompute for PierSeeker.
 *
 * Polygon-validates every pier record against US Census state polygons.
 * Records whose lat/lng falls outside any US polygon, or inside a polygon
 * different from their declared state (the source filename), are dropped.
 *
 * Outputs:
 *   src/data/state-cities-prefiltered.json — { stateSlug: [{ city, citySlug, slug, count, lat, lng }] }
 *   src/data/state-pier-totals.json        — { _network: N, stateSlug: count }
 */
const fs = require("fs");
const path = require("path");
const { point } = require("@turf/helpers");
const booleanPointInPolygon = require("@turf/boolean-point-in-polygon").default;

const STATES_GEOJSON_PATH = path.join(__dirname, "data", "us-states.geojson");
const DATA_DIR = path.join(__dirname, "..", "src", "data");
const OUTPUT_PATH = path.join(DATA_DIR, "state-cities-prefiltered.json");
const TOTALS_PATH = path.join(DATA_DIR, "state-pier-totals.json");

const NAME_TO_SLUG = {
  "Alabama": "alabama", "Alaska": "alaska", "Arizona": "arizona", "Arkansas": "arkansas",
  "California": "california", "Colorado": "colorado", "Connecticut": "connecticut",
  "Delaware": "delaware", "District of Columbia": "district-of-columbia",
  "Florida": "florida", "Georgia": "georgia", "Hawaii": "hawaii", "Idaho": "idaho",
  "Illinois": "illinois", "Indiana": "indiana", "Iowa": "iowa", "Kansas": "kansas",
  "Kentucky": "kentucky", "Louisiana": "louisiana", "Maine": "maine", "Maryland": "maryland",
  "Massachusetts": "massachusetts", "Michigan": "michigan", "Minnesota": "minnesota",
  "Mississippi": "mississippi", "Missouri": "missouri", "Montana": "montana",
  "Nebraska": "nebraska", "Nevada": "nevada", "New Hampshire": "new-hampshire",
  "New Jersey": "new-jersey", "New Mexico": "new-mexico", "New York": "new-york",
  "North Carolina": "north-carolina", "North Dakota": "north-dakota", "Ohio": "ohio",
  "Oklahoma": "oklahoma", "Oregon": "oregon", "Pennsylvania": "pennsylvania",
  "Rhode Island": "rhode-island", "South Carolina": "south-carolina",
  "South Dakota": "south-dakota", "Tennessee": "tennessee", "Texas": "texas",
  "Utah": "utah", "Vermont": "vermont", "Virginia": "virginia", "Washington": "washington",
  "West Virginia": "west-virginia", "Wisconsin": "wisconsin", "Wyoming": "wyoming",
};

const geo = JSON.parse(fs.readFileSync(STATES_GEOJSON_PATH, "utf8"));
const STATE_POLYGONS = {};
for (const f of geo.features) {
  const name = f.properties.NAME || f.properties.name;
  const slug = NAME_TO_SLUG[name];
  if (slug) STATE_POLYGONS[slug] = f;
}
console.log(`Loaded ${Object.keys(STATE_POLYGONS).length} state polygons`);

function findActualState(lat, lng) {
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  const pt = point([lng, lat]);
  for (const slug of Object.keys(STATE_POLYGONS)) {
    try {
      if (booleanPointInPolygon(pt, STATE_POLYGONS[slug])) return slug;
    } catch {}
  }
  return null;
}

function citySlug(city) {
  if (!city) return null;
  return String(city)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const stateBuckets = {};
const stateTotals = {};
let kept = 0;
let droppedOutside = 0;
let droppedMistagged = 0;
let missingCoords = 0;

const files = fs.readdirSync(DATA_DIR).filter((f) => /^[a-z-]+-piers\.json$/.test(f));
console.log(`Processing ${files.length} state pier files`);

for (const file of files) {
  const declaredSlug = file.replace("-piers.json", "");
  const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), "utf8"));
  for (const r of data) {
    const lat = parseFloat(r.latitude ?? r.lat);
    const lng = parseFloat(r.longitude ?? r.lng ?? r.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      missingCoords++;
      continue;
    }
    const actualState = findActualState(lat, lng);
    if (!actualState) {
      droppedOutside++;
      continue;
    }
    if (actualState !== declaredSlug) {
      droppedMistagged++;
      continue;
    }

    kept++;
    stateTotals[actualState] = (stateTotals[actualState] || 0) + 1;

    const cityName = r.city || r.City;
    if (!cityName) continue;
    const cSlug = citySlug(cityName);
    if (!cSlug) continue;

    if (!stateBuckets[actualState]) stateBuckets[actualState] = {};
    if (!stateBuckets[actualState][cSlug]) {
      stateBuckets[actualState][cSlug] = {
        city: cityName,
        citySlug: cSlug,
        slug: `${actualState}-${cSlug}`,
        count: 0,
        lat,
        lng,
      };
    }
    stateBuckets[actualState][cSlug].count++;
  }
}

const prefiltered = {};
for (const [slug, cities] of Object.entries(stateBuckets)) {
  prefiltered[slug] = Object.values(cities).sort((a, b) => b.count - a.count);
}

const networkTotal = Object.values(stateTotals).reduce((a, b) => a + b, 0);
const totalsOut = { _network: networkTotal, ...stateTotals };

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(prefiltered, null, 2));
fs.writeFileSync(TOTALS_PATH, JSON.stringify(totalsOut, null, 2));

console.log("=== SUMMARY ===");
console.log(`Records kept (polygon-validated):        ${kept.toLocaleString()}`);
console.log(`Records dropped (mistagged state):       ${droppedMistagged.toLocaleString()}`);
console.log(`Records dropped (outside US polygons):   ${droppedOutside.toLocaleString()}`);
console.log(`Records missing coords:                  ${missingCoords.toLocaleString()}`);
console.log(`Network total: ${networkTotal.toLocaleString()}`);
console.log(`States with cities: ${Object.keys(prefiltered).length}`);
