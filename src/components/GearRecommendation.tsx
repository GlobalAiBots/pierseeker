type Product = { name: string; desc: string; asin: string };

const AFFILIATE_TAG = "babymydog03-20";
const amazonUrl = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${AFFILIATE_TAG}`;

const SECTIONS: Record<string, { title: string; items: Product[] }> = {
  essentials: {
    title: "Pier Fishing Essentials",
    items: [
      { name: "Sabiki Bait Rig (6-Pack)", desc: "The fastest way to catch live bait from a pier. Drop, jig, and you're loaded with pinfish or mullet in minutes.", asin: "B07QH9GCJL" },
      { name: "Pier Rod & Reel Combo", desc: "Medium-heavy action with a saltwater-ready reel. Built for the 8-12 foot casts pier fishing demands.", asin: "B09GL1S3RZ" },
      { name: "Long-Handle Pier Drop Net", desc: "Your fish is 20 feet below you. A drop net is the only way to land a keeper without breaking the line.", asin: "B001NZB9LW" },
      { name: "5-Gallon Bait Bucket w/ Aerator", desc: "Keep shrimp, pinfish, or mullet alive all day. Bait that's still kicking catches twice as many fish.", asin: "B000E3FKTO" },
      { name: "Cast Net (for Bait)", desc: "Cheaper than buying bait every trip. One good throw fills the bucket with greenbacks or mullet.", asin: "B00AU5NP2C" },
      { name: "Pre-Loaded Saltwater Tackle Box", desc: "Hooks, sinkers, swivels, leader — everything you need to start rigging on day one.", asin: "B0852N9FD6" },
    ],
  },
  comfort: {
    title: "Pier Comfort & Safety",
    items: [
      { name: "Fishing Cart / Pier Cart", desc: "Haul rods, tackle, bait, cooler, and chair in one trip. Wide wheels for boardwalk planks.", asin: "B0087ZPCSO" },
      { name: "UV Fishing Shirt (UPF 50+)", desc: "All-day sun protection without sunscreen on your hands. Quick-dry and vented for heat.", asin: "B07N2BKGRL" },
      { name: "Polarized Fishing Sunglasses", desc: "See fish in the water, not just glare on the surface. Essential for sight-casting from piers.", asin: "B07PZVHRGF" },
      { name: "Folding Pier Chair", desc: "Built for pier railings. Low back so you can fight a fish without getting tangled.", asin: "B002PB5GTA" },
      { name: "LED Headlamp", desc: "Night pier fishing is when the big ones bite. Hands-free light to re-bait and land fish after dark.", asin: "B075FGCP27" },
      { name: "Insulated Fish Cooler Bag", desc: "Keeps your catch fresh from the pier to the cleaning table. Leak-proof and easy to clean.", asin: "B076PPGZZ7" },
    ],
  },
  tackle: {
    title: "Terminal Tackle",
    items: [
      { name: "Circle Hooks (Variety Pack)", desc: "Required for many saltwater species. Self-setting and safer for catch-and-release.", asin: "B07XQXZR1V" },
      { name: "Pyramid Sinkers (Assorted)", desc: "Hold bottom in current and surf. Assorted weights from 1 oz to 6 oz for any pier condition.", asin: "B07MFT5GVN" },
      { name: "Fluorocarbon Leader", desc: "Nearly invisible underwater. Use it when line-shy fish like sheepshead and pompano are finicky.", asin: "B003CUND48" },
      { name: "Fish Stringer", desc: "Keep your catch alive in the water. Longer runs than a bucket and won't overcrowd the fish.", asin: "B000LFLHIY" },
      { name: "Fillet Knife", desc: "Flexible blade, non-slip grip. The difference between a clean fillet and a mangled one.", asin: "B001TH0PX0" },
    ],
  },
};

export default function GearRecommendation({ section = "essentials", heading }: { section?: keyof typeof SECTIONS; heading?: string }) {
  const data = SECTIONS[section] || SECTIONS.essentials;
  const title = heading ?? data.title;

  return (
    <div className="my-10">
      <h3 className="font-[Cabin] text-lg font-bold text-charcoal mb-1">{title}</h3>
      <p className="text-gray-400 text-xs mb-4">As an Amazon Associate we earn from qualifying purchases.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.items.map((item) => (
          <div key={item.asin} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col">
            <p className="font-bold text-charcoal text-sm">{item.name}</p>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed flex-1">{item.desc}</p>
            <a
              href={amazonUrl(item.asin)}
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
