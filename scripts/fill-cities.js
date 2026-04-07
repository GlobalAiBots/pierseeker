const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");
const NOMINATIM_URL = "https://nominatim.openstreetmap.org/reverse";
const USER_AGENT = "PierSeeker/1.0 (admin@globalaibots.com)";
const RATE_LIMIT_MS = 1100;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function reverseGeocode(lat, lon) {
  const url = `${NOMINATIM_URL}?lat=${lat}&lon=${lon}&format=json&zoom=10`;
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
  });
  if (!res.ok) {
    if (res.status === 429) {
      console.log("    Rate limited, waiting 5s...");
      await sleep(5000);
      return reverseGeocode(lat, lon);
    }
    throw new Error(`HTTP ${res.status}`);
  }
  const data = await res.json();
  if (!data.address) return null;
  const a = data.address;
  return a.city || a.town || a.village || a.hamlet || a.county || null;
}

async function main() {
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith("-piers.json"))
    .sort();

  let totalUpdated = 0;
  let totalSkipped = 0;
  let totalAlready = 0;
  let totalFailed = 0;

  for (const file of files) {
    const filePath = path.join(DATA_DIR, file);
    const piers = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const stateName = file.replace("-piers.json", "");

    let updated = 0;
    let skipped = 0;
    let failed = 0;

    const empty = piers.filter((r) => !r.city || !r.city.trim());
    const already = piers.length - empty.length;

    console.log(
      `\n${stateName}: ${piers.length} piers, ${already} have city, ${empty.length} need city`
    );

    for (let i = 0; i < empty.length; i++) {
      const r = empty[i];

      if (!r.latitude || !r.longitude) {
        skipped++;
        continue;
      }

      try {
        const city = await reverseGeocode(r.latitude, r.longitude);
        if (city) {
          r.city = city;
          updated++;
        } else {
          failed++;
        }
      } catch (e) {
        console.log(`    Error for ${r.name}: ${e.message}`);
        failed++;
      }

      if ((i + 1) % 50 === 0) {
        console.log(
          `    ${stateName}: ${i + 1}/${empty.length} processed (${updated} updated)`
        );
      }

      await sleep(RATE_LIMIT_MS);
    }

    fs.writeFileSync(filePath, JSON.stringify(piers, null, 2), "utf8");

    console.log(
      `  ${stateName} done: +${updated} cities, ${failed} failed, ${skipped} skipped`
    );

    totalUpdated += updated;
    totalSkipped += skipped;
    totalAlready += already;
    totalFailed += failed;
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`Already had city: ${totalAlready}`);
  console.log(`Newly filled: ${totalUpdated}`);
  console.log(`Failed: ${totalFailed}`);
  console.log(`Skipped (no coords): ${totalSkipped}`);
  console.log(
    `Total coverage: ${totalAlready + totalUpdated} / ${totalAlready + totalUpdated + totalFailed + totalSkipped}`
  );
}

main().catch(console.error);
