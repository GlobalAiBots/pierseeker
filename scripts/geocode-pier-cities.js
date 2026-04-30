#!/usr/bin/env node
/**
 * Reverse geocode PierSeeker pier records that have latitude/longitude
 * but missing city field. Uses LocationIQ. Resumable.
 *
 * Run: LOCATIONIQ_API_KEY=... node scripts/geocode-pier-cities.js
 *
 * Daily limit safety-capped at 4,900 (LocationIQ free tier is 5,000/day).
 * Progress tracked in scripts/.geocode-progress.json — resume by re-running.
 */
const fs = require("fs");
const path = require("path");
const https = require("https");

const API_KEY = process.env.LOCATIONIQ_API_KEY;
if (!API_KEY) {
  console.error("Set LOCATIONIQ_API_KEY env var");
  process.exit(1);
}

const DATA_DIR = path.join(__dirname, "..", "src", "data");
const PROGRESS_FILE = path.join(__dirname, ".geocode-progress.json");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function reverseGeocode(lat, lng) {
  return new Promise((resolve, reject) => {
    const url = `https://us1.locationiq.com/v1/reverse?key=${API_KEY}&lat=${lat}&lon=${lng}&format=json&zoom=10`;
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            if (json.error) reject(new Error(json.error));
            else resolve(json);
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

function extractCity(geocodeResponse) {
  const a = geocodeResponse.address || {};
  return a.city || a.town || a.village || a.hamlet || a.suburb || a.county || null;
}

async function main() {
  const stateFiles = fs
    .readdirSync(DATA_DIR)
    .filter((f) => /^[a-z-]+-piers\.json$/.test(f))
    .sort();

  let progress = {};
  if (fs.existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  }
  progress.done = progress.done || {};

  const dailyLimit = 4900;
  let sessionCount = 0;
  let geocoded = 0;

  for (const file of stateFiles) {
    const fullPath = path.join(DATA_DIR, file);
    const data = JSON.parse(fs.readFileSync(fullPath, "utf8"));
    let stateChanged = false;

    for (let i = 0; i < data.length; i++) {
      const p = data[i];
      const id = p.place_id || `${file}-${i}`;
      if (progress.done[id]) continue;

      const hasCity = p.city && String(p.city).trim().length > 0;
      const lat = p.latitude;
      const lng = p.longitude;
      const hasCoords = typeof lat === "number" && typeof lng === "number";
      if (hasCity || !hasCoords) continue;

      if (sessionCount >= dailyLimit) {
        console.log(`Daily limit reached (${dailyLimit}). Saving progress.`);
        if (stateChanged) fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
        fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
        console.log(`Geocoded this session: ${geocoded}. Resume tomorrow.`);
        return;
      }

      let attempts = 0;
      let success = false;
      while (attempts < 3 && !success) {
        attempts++;
        try {
          const result = await reverseGeocode(lat, lng);
          const city = extractCity(result);
          if (city) {
            data[i].city = city;
            stateChanged = true;
            geocoded++;
          }
          progress.done[id] = true;
          sessionCount++;
          if (sessionCount % 100 === 0) {
            console.log(`  ${sessionCount} attempts (${geocoded} populated) — at ${file}[${i}]`);
            // Periodic save so a hard kill doesn't lose progress
            if (stateChanged) fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
            fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
          }
          success = true;
          await sleep(1100);
        } catch (e) {
          const isRateLimit = /rate limit|429|minute/i.test(e.message);
          const isNetwork = /ENOTFOUND|ETIMEDOUT|ECONNRESET|ECONNREFUSED|EAI_AGAIN|socket hang up|getaddrinfo/i.test(e.message);
          if ((isRateLimit || isNetwork) && attempts < 3) {
            const wait = isRateLimit ? 65000 : 5000;
            console.log(`  ${isRateLimit ? "rate-limit" : "network"} (attempt ${attempts}/3) at ${file}[${i}] — sleeping ${wait}ms`);
            if (stateChanged) fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
            fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
            await sleep(wait);
            continue;
          }
          console.error(`  ERR ${file}[${i}] ${lat},${lng}: ${e.message}`);
          // Do NOT mark network failures as done — they should retry on next session.
          // Only persistent non-retryable errors should advance.
          if (!isNetwork && !isRateLimit) {
            progress.done[id] = true;
          }
          sessionCount++;
          break;
        }
      }
    }

    if (stateChanged) {
      fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
      console.log(`Saved ${file}`);
    }
  }

  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
  console.log(`Done. Geocoded this session: ${geocoded} (attempts: ${sessionCount})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
