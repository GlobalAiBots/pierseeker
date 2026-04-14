const fs = require("fs");
const path = require("path");

const stateData = {
  alabama: { name: "Alabama", waters: "Mobile Bay and the Gulf Coast", fish: "redfish, flounder, and speckled trout" },
  arizona: { name: "Arizona", waters: "Lake Powell, Lake Havasu, and Roosevelt Lake", fish: "bass, catfish, and trout" },
  arkansas: { name: "Arkansas", waters: "Beaver Lake, Bull Shoals, and the White River", fish: "bass, crappie, and catfish" },
  california: { name: "California", waters: "the Pacific coastline, San Francisco Bay, and the Sacramento Delta", fish: "halibut, rockfish, and striped bass" },
  colorado: { name: "Colorado", waters: "Lake Granby, Blue Mesa Reservoir, and the Colorado River", fish: "trout, kokanee, and walleye" },
  connecticut: { name: "Connecticut", waters: "Long Island Sound and the Connecticut River", fish: "striped bass, bluefish, and flounder" },
  delaware: { name: "Delaware", waters: "Delaware Bay and the Atlantic coast", fish: "striped bass, flounder, and bluefish" },
  florida: { name: "Florida", waters: "the Gulf Coast, Atlantic coast, and the Keys", fish: "snook, redfish, tarpon, and snapper" },
  georgia: { name: "Georgia", waters: "the Georgia coast, Lake Lanier, and the Altamaha River", fish: "redfish, bass, and catfish" },
  idaho: { name: "Idaho", waters: "Lake Coeur d&apos;Alene, Payette Lake, and the Snake River", fish: "trout, kokanee, and bass" },
  illinois: { name: "Illinois", waters: "Lake Michigan and the Illinois River", fish: "salmon, perch, and catfish" },
  indiana: { name: "Indiana", waters: "Monroe Lake, Patoka Lake, and the Ohio River", fish: "bass, catfish, and bluegill" },
  iowa: { name: "Iowa", waters: "the Mississippi River and Okoboji", fish: "walleye, catfish, and bass" },
  kansas: { name: "Kansas", waters: "Milford Lake, Cheney Reservoir, and the Kansas River", fish: "walleye, wiper, and catfish" },
  kentucky: { name: "Kentucky", waters: "Kentucky Lake, Lake Cumberland, and Dale Hollow", fish: "bass, crappie, and catfish" },
  louisiana: { name: "Louisiana", waters: "Lake Pontchartrain, the Gulf Coast, and the Mississippi River", fish: "redfish, speckled trout, and catfish" },
  maine: { name: "Maine", waters: "the Atlantic coast, Moosehead Lake, and Sebago Lake", fish: "striped bass, landlocked salmon, and trout" },
  maryland: { name: "Maryland", waters: "the Chesapeake Bay, Deep Creek Lake, and the Potomac River", fish: "striped bass, blue crabs, and perch" },
  massachusetts: { name: "Massachusetts", waters: "Cape Cod, Boston Harbor, and the Connecticut River", fish: "striped bass, bluefish, and flounder" },
  michigan: { name: "Michigan", waters: "the Great Lakes, Houghton Lake, and the Au Sable River", fish: "walleye, salmon, and perch" },
  minnesota: { name: "Minnesota", waters: "Mille Lacs, Lake of the Woods, and the St. Croix River", fish: "walleye, northern pike, and crappie" },
  mississippi: { name: "Mississippi", waters: "the Gulf Coast, Ross Barnett Reservoir, and the Mississippi River", fish: "redfish, bass, and catfish" },
  missouri: { name: "Missouri", waters: "Table Rock Lake, Lake of the Ozarks, and the Missouri River", fish: "bass, crappie, and catfish" },
  montana: { name: "Montana", waters: "Flathead Lake, Fort Peck, and the Missouri River", fish: "trout, walleye, and pike" },
  nevada: { name: "Nevada", waters: "Lake Mead, Pyramid Lake, and Lake Tahoe", fish: "bass, trout, and stripers" },
  "new-hampshire": { name: "New Hampshire", waters: "Lake Winnipesaukee, Squam Lake, and the Atlantic coast", fish: "bass, trout, and striped bass" },
  "new-jersey": { name: "New Jersey", waters: "the Jersey Shore, Barnegat Bay, and the Delaware River", fish: "striped bass, bluefish, and flounder" },
  "new-mexico": { name: "New Mexico", waters: "Elephant Butte, Navajo Lake, and Conchas Lake", fish: "bass, walleye, and catfish" },
  "new-york": { name: "New York", waters: "Long Island Sound, the Finger Lakes, and Lake Ontario", fish: "striped bass, walleye, and trout" },
  "north-carolina": { name: "North Carolina", waters: "the Outer Banks, Pamlico Sound, and the Blue Ridge lakes", fish: "flounder, red drum, and trout" },
  ohio: { name: "Ohio", waters: "Lake Erie, Alum Creek, and the Ohio River", fish: "walleye, perch, and bass" },
  oklahoma: { name: "Oklahoma", waters: "Grand Lake, Lake Texoma, and Broken Bow", fish: "bass, catfish, and crappie" },
  oregon: { name: "Oregon", waters: "the Pacific coast, the Columbia River, and Crater Lake", fish: "salmon, steelhead, and halibut" },
  pennsylvania: { name: "Pennsylvania", waters: "Lake Erie, Raystown Lake, and the Delaware River", fish: "walleye, bass, and trout" },
  "rhode-island": { name: "Rhode Island", waters: "Narragansett Bay and the Atlantic coast", fish: "striped bass, bluefish, and tautog" },
  "south-carolina": { name: "South Carolina", waters: "the Lowcountry coast, Lake Murray, and Santee Cooper", fish: "redfish, flounder, and bass" },
  "south-dakota": { name: "South Dakota", waters: "Lake Oahe, Lake Sharpe, and the Missouri River", fish: "walleye, bass, and catfish" },
  tennessee: { name: "Tennessee", waters: "Norris Lake, Cherokee Lake, and the Tennessee River", fish: "bass, crappie, and catfish" },
  texas: { name: "Texas", waters: "the Gulf Coast, Lake Travis, and Sam Rayburn", fish: "redfish, flounder, and bass" },
  utah: { name: "Utah", waters: "Lake Powell, Strawberry Reservoir, and Flaming Gorge", fish: "bass, trout, and kokanee" },
  virginia: { name: "Virginia", waters: "the Chesapeake Bay, Smith Mountain Lake, and the James River", fish: "striped bass, catfish, and crappie" },
  washington: { name: "Washington", waters: "Puget Sound, the Columbia River, and Lake Chelan", fish: "salmon, steelhead, and halibut" },
  "west-virginia": { name: "West Virginia", waters: "Summersville Lake, the New River, and Stonewall Jackson Lake", fish: "bass, walleye, and trout" },
  wyoming: { name: "Wyoming", waters: "Yellowstone Lake, Flaming Gorge, and Boysen Reservoir", fish: "trout, walleye, and kokanee" },
};

const appDir = path.join(__dirname, "..", "src", "app");
let updated = 0, skipped = 0;

for (const [slug, info] of Object.entries(stateData)) {
  const filePath = path.join(appDir, slug, "page.tsx");
  if (!fs.existsSync(filePath)) { skipped++; continue; }
  let content = fs.readFileSync(filePath, "utf8");
  if (content.includes("Tips for Pier Fishing")) { skipped++; continue; }

  // Add Link import if missing
  if (content.includes("<Link") === false && content.includes("import Link") === false) {
    // Will need Link for city links
  }
  if (!content.includes("import Link")) {
    content = content.replace('"use client";', '"use client";\n\nimport Link from "next/link";');
  }

  // Find hero section end
  const heroEnd = content.indexOf("</section>", content.indexOf("md:text-5xl"));
  if (heroEnd === -1) { skipped++; continue; }
  const insertPoint = heroEnd + "</section>".length;

  const introBlock = `

      {/* State intro + tips */}
      <section className="max-w-4xl mx-auto px-4 pt-10 pb-2">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-3">Pier Fishing in ${info.name}</h2>
          <p className="text-gray-600 leading-relaxed text-sm">${info.name} offers {stPiers.length.toLocaleString()}+ fishing piers, docks, and jetties across the state. From ${info.waters}, there&apos;s no shortage of places to cast a line. Popular catches include ${info.fish}.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
          <h3 className="font-[Cabin] font-bold text-ocean mb-3">Tips for Pier Fishing in ${info.name}</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Check ${info.name}&apos;s fishing license requirements &mdash; most states require one even for pier fishing.</li>
            <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Best times to fish from piers are early morning, late afternoon, and around tidal changes.</li>
            <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Bring a variety of bait &mdash; shrimp, cut bait, and artificial lures all work from piers.</li>
            <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Always check weather and water conditions before heading to any pier.</li>
            <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Read our <Link href="/blog/pier-fishing-tips-for-beginners" className="text-ocean hover:underline">pier fishing tips guide</Link> for more advice.</li>
          </ul>
        </div>
      </section>`;

  content = content.slice(0, insertPoint) + introBlock + content.slice(insertPoint);

  // Expand visible FAQ from 2 to 5 questions
  const oldFaq = `{ q: "How many fishing piers are in ${info.name}?", a: \`PierSeeker lists \${stPiers.length}+ fishing piers across ${info.name}.\` },
            { q: "Is PierSeeker free?", a: "Yes, completely free. No login, no account, no fees." },`;
  const newFaq = `{ q: "How many fishing piers are in ${info.name}?", a: \`PierSeeker lists \${stPiers.length}+ fishing piers, docks, and jetties across ${info.name}.\` },
            { q: "Do I need a fishing license in ${info.name}?", a: "Most states require a fishing license even when fishing from a public pier. Check ${info.name}'s fish and wildlife department for current requirements." },
            { q: "What fish can I catch from piers in ${info.name}?", a: "Popular catches from ${info.name} piers include ${info.fish}. Species vary by location and season." },
            { q: "Are fishing piers in ${info.name} free?", a: "Many fishing piers in ${info.name} are free to access. Some popular piers may charge a small fee during peak season." },
            { q: "Is PierSeeker free?", a: "Yes, completely free. No login, no account, no fees. Just find your pier and go fish." },`;
  content = content.replace(oldFaq, newFaq);

  // Convert city buttons to Links - do full line replacement
  const cityButtonLine = content.match(/<button key=\{city\}[^]*?<\/button>/);
  if (cityButtonLine) {
    content = content.replace(
      cityButtonLine[0],
      '<Link key={city} href={`/cities/${city.toLowerCase().replace(/\\s+/g, "-")}`} className="text-left bg-white border border-gray-200 rounded-lg p-3 hover:border-ocean hover:shadow-sm transition"><p className="font-bold text-charcoal text-sm">{city}</p><p className="text-gray-400 text-xs">{count} pier{count !== 1 ? "s" : ""}</p></Link>'
    );
  }

  fs.writeFileSync(filePath, content);
  updated++;
}

console.log(`Updated: ${updated}, Skipped: ${skipped}`);
