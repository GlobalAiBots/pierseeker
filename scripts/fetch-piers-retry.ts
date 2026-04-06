/**
 * fetch-piers-retry.ts
 * Retries OSM Overpass queries for Southeast and Midwest regions
 * that failed due to rate limiting in the initial run.
 * Merges with existing data and deduplicates.
 */
import axios from "axios";
import * as fs from "fs";
import * as path from "path";

const OVERPASS_URL = "https://overpass-api.de/api/interpreter";

function sleep(ms: number) { return new Promise((r) => setTimeout(r, ms)); }

interface RawElement {
  id: number;
  lat?: number;
  lon?: number;
  tags?: Record<string, string>;
  center?: { lat: number; lon: number };
  type: string;
}

interface Pier {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  state: string;
  stateAbbr: string;
  tags: Record<string, string>;
}

const stateData: Record<string, { abbr: string; lat: [number, number]; lng: [number, number] }> = {
  "Alabama": { abbr: "AL", lat: [30.2, 35.0], lng: [-88.5, -84.9] },
  "Alaska": { abbr: "AK", lat: [51.2, 71.4], lng: [-180.0, -129.0] },
  "Arizona": { abbr: "AZ", lat: [31.3, 37.0], lng: [-114.8, -109.0] },
  "Arkansas": { abbr: "AR", lat: [33.0, 36.5], lng: [-94.6, -89.6] },
  "California": { abbr: "CA", lat: [32.5, 42.0], lng: [-124.4, -114.1] },
  "Colorado": { abbr: "CO", lat: [37.0, 41.0], lng: [-109.1, -102.0] },
  "Connecticut": { abbr: "CT", lat: [41.0, 42.1], lng: [-73.7, -71.8] },
  "Delaware": { abbr: "DE", lat: [38.5, 39.8], lng: [-75.8, -75.0] },
  "Florida": { abbr: "FL", lat: [24.5, 31.0], lng: [-87.6, -80.0] },
  "Georgia": { abbr: "GA", lat: [30.4, 35.0], lng: [-85.6, -80.8] },
  "Hawaii": { abbr: "HI", lat: [18.9, 22.2], lng: [-160.2, -154.8] },
  "Idaho": { abbr: "ID", lat: [42.0, 49.0], lng: [-117.2, -111.0] },
  "Illinois": { abbr: "IL", lat: [37.0, 42.5], lng: [-91.5, -87.5] },
  "Indiana": { abbr: "IN", lat: [37.8, 41.8], lng: [-88.1, -84.8] },
  "Iowa": { abbr: "IA", lat: [40.4, 43.5], lng: [-96.6, -90.1] },
  "Kansas": { abbr: "KS", lat: [37.0, 40.0], lng: [-102.1, -94.6] },
  "Kentucky": { abbr: "KY", lat: [36.5, 39.1], lng: [-89.6, -82.0] },
  "Louisiana": { abbr: "LA", lat: [29.0, 33.0], lng: [-94.0, -89.0] },
  "Maine": { abbr: "ME", lat: [43.1, 47.5], lng: [-71.1, -66.9] },
  "Maryland": { abbr: "MD", lat: [38.0, 39.7], lng: [-79.5, -75.0] },
  "Massachusetts": { abbr: "MA", lat: [41.2, 42.9], lng: [-73.5, -69.9] },
  "Michigan": { abbr: "MI", lat: [41.7, 48.3], lng: [-90.4, -82.4] },
  "Minnesota": { abbr: "MN", lat: [43.5, 49.4], lng: [-97.2, -89.5] },
  "Mississippi": { abbr: "MS", lat: [30.2, 35.0], lng: [-91.7, -88.1] },
  "Missouri": { abbr: "MO", lat: [36.0, 40.6], lng: [-95.8, -89.1] },
  "Montana": { abbr: "MT", lat: [44.4, 49.0], lng: [-116.0, -104.0] },
  "Nebraska": { abbr: "NE", lat: [40.0, 43.0], lng: [-104.1, -95.3] },
  "Nevada": { abbr: "NV", lat: [35.0, 42.0], lng: [-120.0, -114.0] },
  "New Hampshire": { abbr: "NH", lat: [42.7, 45.3], lng: [-72.6, -70.7] },
  "New Jersey": { abbr: "NJ", lat: [38.9, 41.4], lng: [-75.6, -73.9] },
  "New Mexico": { abbr: "NM", lat: [31.3, 37.0], lng: [-109.1, -103.0] },
  "New York": { abbr: "NY", lat: [40.5, 45.0], lng: [-79.8, -71.9] },
  "North Carolina": { abbr: "NC", lat: [33.8, 36.6], lng: [-84.3, -75.5] },
  "North Dakota": { abbr: "ND", lat: [45.9, 49.0], lng: [-104.0, -96.6] },
  "Ohio": { abbr: "OH", lat: [38.4, 42.0], lng: [-84.8, -80.5] },
  "Oklahoma": { abbr: "OK", lat: [33.6, 37.0], lng: [-103.0, -94.4] },
  "Oregon": { abbr: "OR", lat: [42.0, 46.3], lng: [-124.6, -116.5] },
  "Pennsylvania": { abbr: "PA", lat: [39.7, 42.3], lng: [-80.5, -74.7] },
  "Rhode Island": { abbr: "RI", lat: [41.1, 42.0], lng: [-71.9, -71.1] },
  "South Carolina": { abbr: "SC", lat: [32.0, 35.2], lng: [-83.4, -78.5] },
  "South Dakota": { abbr: "SD", lat: [42.5, 45.9], lng: [-104.1, -96.4] },
  "Tennessee": { abbr: "TN", lat: [35.0, 36.7], lng: [-90.3, -81.6] },
  "Texas": { abbr: "TX", lat: [25.8, 36.5], lng: [-106.6, -93.5] },
  "Utah": { abbr: "UT", lat: [37.0, 42.0], lng: [-114.1, -109.0] },
  "Vermont": { abbr: "VT", lat: [42.7, 45.0], lng: [-73.4, -71.5] },
  "Virginia": { abbr: "VA", lat: [36.5, 39.5], lng: [-83.7, -75.2] },
  "Washington": { abbr: "WA", lat: [45.5, 49.0], lng: [-124.8, -116.9] },
  "West Virginia": { abbr: "WV", lat: [37.2, 40.6], lng: [-82.6, -77.7] },
  "Wisconsin": { abbr: "WI", lat: [42.5, 47.1], lng: [-92.9, -86.8] },
  "Wyoming": { abbr: "WY", lat: [41.0, 45.0], lng: [-111.1, -104.1] },
};

function findState(lat: number, lng: number): { state: string; abbr: string } | null {
  for (const [state, data] of Object.entries(stateData)) {
    if (lat >= data.lat[0] && lat <= data.lat[1] && lng >= data.lng[0] && lng <= data.lng[1]) {
      return { state, abbr: data.abbr };
    }
  }
  return null;
}

async function queryOverpass(bbox: string, label: string): Promise<RawElement[]> {
  const allResults: RawElement[] = [];

  // Query piers
  try {
    console.log(`  [${label}] Querying piers...`);
    const pierQuery = `[out:json][timeout:60];(node["man_made"="pier"](${bbox});way["man_made"="pier"](${bbox}););out center;`;
    const res = await axios.post(OVERPASS_URL, `data=${encodeURIComponent(pierQuery)}`, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      timeout: 90000,
    });
    const count = res.data.elements?.length || 0;
    console.log(`    Got ${count} pier elements`);
    allResults.push(...(res.data.elements || []));
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`    Pier query failed: ${msg}`);
  }

  await sleep(30000);

  // Query fishing spots
  try {
    console.log(`  [${label}] Querying fishing spots...`);
    const fishQuery = `[out:json][timeout:60];node["leisure"="fishing"](${bbox});out;`;
    const res = await axios.post(OVERPASS_URL, `data=${encodeURIComponent(fishQuery)}`, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      timeout: 90000,
    });
    const count = res.data.elements?.length || 0;
    console.log(`    Got ${count} fishing elements`);
    allResults.push(...(res.data.elements || []));
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`    Fishing query failed: ${msg}`);
  }

  return allResults;
}

const regions: { name: string; bbox: string }[] = [
  // Southeast
  { name: "Florida", bbox: "24.5,-87.6,31.0,-80.0" },
  { name: "Georgia/South Carolina", bbox: "30.5,-85.6,35.2,-78.5" },
  { name: "NC/Virginia", bbox: "33.8,-84.3,39.5,-75.4" },
  { name: "AL/MS/LA", bbox: "28.9,-94.0,35.0,-86.0" },
  { name: "TN/KY", bbox: "35.0,-90.0,39.1,-81.8" },
  // Midwest
  { name: "Michigan", bbox: "41.7,-90.4,48.3,-82.4" },
  { name: "MN/WI", bbox: "42.5,-97.2,49.4,-86.8" },
  { name: "OH/IN", bbox: "38.4,-88.1,42.3,-80.5" },
  { name: "IL/IA", bbox: "36.9,-96.6,43.5,-87.5" },
  { name: "MO/AR", bbox: "33.0,-94.6,40.6,-89.1" },
  { name: "Texas", bbox: "25.8,-106.6,36.5,-93.5" },
];

async function main() {
  console.log("=== PierSeeker: Retry Fetch for Southeast & Midwest ===\n");

  // Load existing data
  const dataDir = path.join(__dirname, "data");
  const existingPath = path.join(dataDir, "all-us-piers.json");
  let existingPiers: Pier[] = [];
  try {
    existingPiers = JSON.parse(fs.readFileSync(existingPath, "utf-8"));
    console.log(`Loaded ${existingPiers.length} existing piers`);
  } catch {
    console.log("No existing data found, starting fresh");
  }

  // Count existing per state
  const beforeCounts: Record<string, number> = {};
  for (const p of existingPiers) {
    const slug = p.state.toLowerCase().replace(/\s+/g, '-');
    beforeCounts[slug] = (beforeCounts[slug] || 0) + 1;
  }

  console.log("\nWaiting 60 seconds before starting queries...");
  await sleep(60000);

  const newRaw: RawElement[] = [];

  for (let i = 0; i < regions.length; i++) {
    const region = regions[i];
    console.log(`\n--- Region ${i + 1}/${regions.length}: ${region.name} ---`);
    const results = await queryOverpass(region.bbox, region.name);
    newRaw.push(...results);

    if (i < regions.length - 1) {
      console.log("  Waiting 30 seconds...");
      await sleep(30000);
    }
  }

  console.log(`\nNew raw results: ${newRaw.length}`);

  // Build dedup map from existing piers
  const seen = new Map<string, Pier>();
  for (const p of existingPiers) {
    const key = `${Math.round(p.latitude * 200)}:${Math.round(p.longitude * 200)}`;
    seen.set(key, p);
  }

  let added = 0;
  let updated = 0;

  for (const raw of newRaw) {
    const lat = raw.center?.lat || raw.lat;
    const lon = raw.center?.lon || raw.lon;
    if (!lat || !lon) continue;

    const stateInfo = findState(lat, lon);
    if (!stateInfo) continue;

    const name = raw.tags?.name || raw.tags?.["name:en"] || "Fishing Pier";
    const key = `${Math.round(lat * 200)}:${Math.round(lon * 200)}`;

    if (seen.has(key)) {
      const existing = seen.get(key)!;
      if (name !== "Fishing Pier" && existing.name === "Fishing Pier") {
        seen.set(key, {
          id: raw.id, name, latitude: lat, longitude: lon,
          state: stateInfo.state, stateAbbr: stateInfo.abbr,
          tags: raw.tags || {},
        });
        updated++;
      }
      continue;
    }

    seen.set(key, {
      id: raw.id, name, latitude: lat, longitude: lon,
      state: stateInfo.state, stateAbbr: stateInfo.abbr,
      tags: raw.tags || {},
    });
    added++;
  }

  const allPiers = Array.from(seen.values());
  console.log(`\nAdded ${added} new piers, updated ${updated} names`);
  console.log(`Total piers: ${allPiers.length}`);

  // Group by state
  const byState: Record<string, Pier[]> = {};
  for (const p of allPiers) {
    const stateSlug = p.state.toLowerCase().replace(/\s+/g, '-');
    if (!byState[stateSlug]) byState[stateSlug] = [];
    byState[stateSlug].push(p);
  }

  // Save all
  fs.writeFileSync(existingPath, JSON.stringify(allPiers, null, 2));
  fs.mkdirSync(path.join(dataDir, "states"), { recursive: true });

  console.log("\n=== Updated Per-State Breakdown ===");
  const stateCounts: [string, number, number][] = [];
  for (const [stateSlug, statePiers] of Object.entries(byState)) {
    fs.writeFileSync(path.join(dataDir, "states", `${stateSlug}.json`), JSON.stringify(statePiers, null, 2));
    const before = beforeCounts[stateSlug] || 0;
    stateCounts.push([stateSlug, before, statePiers.length]);
  }

  stateCounts.sort((a, b) => b[2] - a[2]);
  for (const [state, before, after] of stateCounts) {
    const diff = after - before;
    const marker = diff > 0 ? ` (+${diff})` : "";
    console.log(`  ${state}: ${after}${marker}`);
  }

  const increased = stateCounts.filter(([, b, a]) => a > b);
  console.log(`\n========================================`);
  console.log(`  Total piers: ${allPiers.length}`);
  console.log(`  States with data: ${Object.keys(byState).length}`);
  console.log(`  States increased: ${increased.length}`);
  console.log(`========================================`);
}

main().catch((err) => { console.error("Fatal:", err); process.exit(1); });
