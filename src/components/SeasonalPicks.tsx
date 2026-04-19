type Product = { name: string; desc: string; q: string };
type Season = { label: string; emoji: string; headline: string; items: Product[] };

const AFFILIATE_TAG = "babymydog03-20";
const amazonSearch = (q: string) => `https://www.amazon.com/s?k=${encodeURIComponent(q)}&tag=${AFFILIATE_TAG}`;

const SEASONS: Record<"spring" | "summer" | "fall" | "winter", Season> = {
  spring: {
    label: "Spring",
    emoji: "\u{1F33F}",
    headline: "Spring run gear for the first pier trips of the year",
    items: [
      { name: "Sabiki Rig 6-Pack", desc: "Baitfish arrive before the gamefish. Load up a bucket in 15 minutes with a sabiki.", q: "sabiki rig saltwater size 6" },
      { name: "Light-Action Rod & Reel Combo", desc: "Spring whiting, pompano, and small blues need a sensitive rod, not a heaver.", q: "medium action pier fishing rod reel combo" },
      { name: "Bait Bucket w/ Aerator", desc: "Live shrimp outfish frozen 10-to-1 in cold water. Keep them kicking with a 12V aerator.", q: "aerated bait bucket 5 gallon" },
    ],
  },
  summer: {
    label: "Summer",
    emoji: "\u{2600}",
    headline: "Hot-weather pier essentials and family-friendly gear",
    items: [
      { name: "UPF 50 Fishing Shirt", desc: "All-day sun protection without reapplying sunscreen every hour. Quick-dry, vented.", q: "upf 50 fishing shirt men" },
      { name: "Polarized Fishing Sunglasses", desc: "See the fish under the pier. Amber lenses cut glare and pick out structure.", q: "polarized fishing sunglasses amber" },
      { name: "Kids Fishing Rod Combo", desc: "Pre-spooled, light enough for small hands. Summer is prime family pier season.", q: "kids fishing rod combo" },
    ],
  },
  fall: {
    label: "Fall",
    emoji: "\u{1F342}",
    headline: "Fall run tackle &mdash; the best pier fishing of the year",
    items: [
      { name: "Medium-Heavy Surf Rod", desc: "Stripers and big blues run the coast in fall. You need backbone to land them off a pier.", q: "medium heavy surf rod 10 foot" },
      { name: "Bucktail Jigs Assortment", desc: "The fall run lure. White, chartreuse, and red-white cover every condition.", q: "bucktail jigs saltwater assortment" },
      { name: "Circle Hooks (Variety Pack)", desc: "Required for many fall species. Self-setting, better hookups, safer releases.", q: "circle hooks saltwater variety pack" },
    ],
  },
  winter: {
    label: "Winter",
    emoji: "\u{2744}",
    headline: "Winter pier fishing &mdash; sheepshead, tog, and whiting",
    items: [
      { name: "Insulated Fishing Gloves", desc: "Touchscreen-compatible, waterproof, and grippy enough to handle fish in 30-degree wind.", q: "insulated fishing gloves waterproof" },
      { name: "Fiddler Crab Hooks", desc: "Winter sheepshead gear. #2 to 1/0 in sheepshead-specific bend.", q: "sheepshead fishing hooks" },
      { name: "LED Headlamp w/ Red Mode", desc: "Shorter winter days mean more pre-dawn and dusk fishing. Red-light mode saves night vision.", q: "led fishing headlamp red light" },
    ],
  },
};

function getSeason(): keyof typeof SEASONS {
  const m = new Date().getMonth();
  if (m >= 2 && m <= 4) return "spring";
  if (m >= 5 && m <= 7) return "summer";
  if (m >= 8 && m <= 10) return "fall";
  return "winter";
}

export default function SeasonalPicks() {
  const season = SEASONS[getSeason()];

  return (
    <div className="my-10">
      <div className="flex items-baseline gap-3 mb-1">
        <h3 className="font-[Cabin] text-lg font-bold text-charcoal">This {season.label}&apos;s Picks</h3>
        <span className="text-[11px] font-bold tracking-widest uppercase text-coral">{season.emoji} Limited-Time Featured</span>
      </div>
      <p className="text-gray-500 text-sm mb-4" dangerouslySetInnerHTML={{ __html: season.headline }} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {season.items.map((item) => (
          <div key={item.name} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col">
            <p className="font-bold text-charcoal text-sm">{item.name}</p>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed flex-1">{item.desc}</p>
            <a
              href={amazonSearch(item.q)}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="inline-block mt-3 text-xs font-semibold text-coral hover:text-coral-dark transition"
            >
              &#9733; Our Pick &mdash; View on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
