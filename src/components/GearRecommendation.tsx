const items = [
  {
    name: "Pier Fishing Rod Holder",
    desc: "Clamps to pier railings. Holds your rod hands-free so you can manage multiple lines.",
    link: "#",
  },
  {
    name: "Pier Cart / Fishing Wagon",
    desc: "Haul your tackle, cooler, and rods down the pier. Wide wheels for boardwalk surfaces.",
    link: "#",
  },
  {
    name: "Drop Net",
    desc: "Essential for pier fishing. Lower it down to net fish you've reeled to the surface.",
    link: "#",
  },
  {
    name: "Waterproof Phone Case",
    desc: "Keep your phone dry while checking GPS coordinates on the pier. Touchscreen-compatible.",
    link: "#",
  },
];

export default function GearRecommendation() {
  return (
    <div className="my-10">
      <h3 className="font-[Cabin] text-lg font-bold text-charcoal mb-4">Recommended Gear</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.name} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <p className="font-bold text-charcoal text-sm">{item.name}</p>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs font-semibold text-coral hover:text-coral-dark transition"
            >
              View on Amazon &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
