const fs = require("fs");
const path = require("path");

const stateNames = ['alabama','arizona','arkansas','california','colorado','connecticut','delaware','florida','georgia','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new-hampshire','new-jersey','new-mexico','new-york','north-carolina','north-dakota','ohio','oklahoma','oregon','pennsylvania','rhode-island','south-carolina','south-dakota','tennessee','texas','utah','vermont','virginia','washington','west-virginia','wisconsin','wyoming'];

let updated = 0;
for (const slug of stateNames) {
  const f = path.join("src/app", slug, "page.tsx");
  if (!fs.existsSync(f)) continue;
  let c = fs.readFileSync(f, "utf8");
  if (c.includes("PierMap")) continue;

  if (!c.includes("import dynamic")) {
    c = c.replace('"use client";', '"use client";\n\nimport dynamic from "next/dynamic";');
  }

  c = c.replace(
    'import dynamic from "next/dynamic";',
    'import dynamic from "next/dynamic";\nconst PierMap = dynamic(() => import("@/components/PierMap"), { ssr: false, loading: () => <div className="rounded-xl bg-gray-100 flex items-center justify-center" style={{ height: 350 }}><p className="text-gray-400 text-sm">Loading map...</p></div> });'
  );

  const varMatch = c.match(/const (\w+Piers) = useMemo/);
  const pierVar = varMatch ? varMatch[1] : "stPiers";

  const heroEnd = c.indexOf("</section>", c.indexOf("md:text-5xl"));
  if (heroEnd === -1) continue;
  const insertAt = heroEnd + "</section>".length;

  const mapBlock = `

      {/* State Map */}
      {(() => {
        const mapPins = ${pierVar}.map(p => ({ id: p.id, name: p.name, latitude: p.latitude, longitude: p.longitude, city: p.city }));
        const center: [number, number] = ${pierVar}.length > 0 ? [${pierVar}.reduce((s, p) => s + p.latitude, 0) / ${pierVar}.length, ${pierVar}.reduce((s, p) => s + p.longitude, 0) / ${pierVar}.length] : [39.8, -98.5];
        return <div className="max-w-6xl mx-auto px-4 pt-8"><PierMap piers={mapPins} center={center} zoom={7} height="350px" className="mb-4" /></div>;
      })()}`;

  c = c.slice(0, insertAt) + mapBlock + c.slice(insertAt);
  fs.writeFileSync(f, c);
  updated++;
}
console.log("Updated:", updated, "state pages");
