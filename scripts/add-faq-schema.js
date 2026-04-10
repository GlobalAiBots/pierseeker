const fs = require("fs");
const path = require("path");

const stateMap = {
  alabama:"Alabama",alaska:"Alaska",arizona:"Arizona",arkansas:"Arkansas",california:"California",colorado:"Colorado",connecticut:"Connecticut",delaware:"Delaware",florida:"Florida",georgia:"Georgia",hawaii:"Hawaii",idaho:"Idaho",illinois:"Illinois",indiana:"Indiana",iowa:"Iowa",kansas:"Kansas",kentucky:"Kentucky",louisiana:"Louisiana",maine:"Maine",maryland:"Maryland",massachusetts:"Massachusetts",michigan:"Michigan",minnesota:"Minnesota",mississippi:"Mississippi",missouri:"Missouri",montana:"Montana",nebraska:"Nebraska",nevada:"Nevada","new-hampshire":"New Hampshire","new-jersey":"New Jersey","new-mexico":"New Mexico","new-york":"New York","north-carolina":"North Carolina","north-dakota":"North Dakota",ohio:"Ohio",oklahoma:"Oklahoma",oregon:"Oregon",pennsylvania:"Pennsylvania","rhode-island":"Rhode Island","south-carolina":"South Carolina","south-dakota":"South Dakota",tennessee:"Tennessee",texas:"Texas",utah:"Utah",vermont:"Vermont",virginia:"Virginia",washington:"Washington","west-virginia":"West Virginia",wisconsin:"Wisconsin",wyoming:"Wyoming"
};

let updated = 0;

for (const [slug, name] of Object.entries(stateMap)) {
  const file = path.join("src/app", slug, "page.tsx");
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, "utf8");
  if (content.includes("FAQPage")) continue;

  const faqBlock = `
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How many fishing piers are in ${name}?", acceptedAnswer: { "@type": "Answer", text: \`There are \${stPiers.length} fishing piers in ${name}. PierSeeker has mapped every public pier, dock, and jetty across the state.\` } },
          { "@type": "Question", name: "Do I need a fishing license to fish from a pier in ${name}?", acceptedAnswer: { "@type": "Answer", text: "Most states require a fishing license even when fishing from a public pier. Check ${name}'s fish and wildlife department for current license requirements and fees." } },
          { "@type": "Question", name: "Are there free fishing piers in ${name}?", acceptedAnswer: { "@type": "Answer", text: "Many fishing piers in ${name} are free to access, especially those at public parks and state recreation areas. Some popular piers may charge a small access fee." } },
          { "@type": "Question", name: "What fish can I catch from piers in ${name}?", acceptedAnswer: { "@type": "Answer", text: "Species vary by location and season. Coastal piers in ${name} often yield redfish, flounder, and trout. Freshwater piers are great for bass, catfish, and crappie." } },
          { "@type": "Question", name: "How do I find fishing piers near me in ${name}?", acceptedAnswer: { "@type": "Answer", text: \`Use PierSeeker to browse all \${stPiers.length} fishing piers in ${name} by city. Each listing includes a map, GPS coordinates, and directions.\` } },
        ],
      }) }} />`;

  const returnMatch = content.match(/return\s*\(\s*\n\s*<div>/);
  if (!returnMatch) continue;
  const insertPos = content.indexOf(returnMatch[0]) + returnMatch[0].length;
  content = content.slice(0, insertPos) + faqBlock + content.slice(insertPos);
  fs.writeFileSync(file, content, "utf8");
  updated++;
}

console.log(`Updated ${updated} state pages with FAQPage schema`);
