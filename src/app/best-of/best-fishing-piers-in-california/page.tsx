import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Fishing Piers in California — Top 10 | PierSeeker",
  description: "Find the 10 best fishing piers in California, from Imperial Beach Pier to San Francisco Bay docks. Free GPS coords and tips on PierSeeker.",
  openGraph: { title: "Best Fishing Piers in California — Top 10", url: "https://pierseeker.com/best-of/best-fishing-piers-in-california", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Best Fishing Piers in California — Top 10 | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/best-of/best-fishing-piers-in-california" },
};

export default function BestFishingPiersCalifornia() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pierseeker.com" },
          { "@type": "ListItem", position: 2, name: "Best Of", item: "https://pierseeker.com/best-of" },
          { "@type": "ListItem", position: 3, name: "Best Fishing Piers in California", item: "https://pierseeker.com/best-of/best-fishing-piers-in-california" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            name: "Do you need a fishing license to fish from a pier in California?",
            acceptedAnswer: { "@type": "Answer", text: "No. In California, you do not need a fishing license to fish from any public ocean pier. This includes municipal piers, state-owned piers, and other publicly accessible ocean-facing structures. Freshwater piers and private docks still require a valid California fishing license." },
          },
          {
            "@type": "Question",
            name: "What fish can you catch from California piers?",
            acceptedAnswer: { "@type": "Answer", text: "California piers produce a wide variety of species including halibut, surfperch, jacksmelt, mackerel, bonito, bat rays, leopard sharks, striped bass, and rockfish depending on the region and season." },
          },
          {
            "@type": "Question",
            name: "What is the best fishing pier in Southern California?",
            acceptedAnswer: { "@type": "Answer", text: "Imperial Beach Pier in San Diego County is one of the top fishing piers in Southern California. It offers Pacific Ocean views and consistent catches of surfperch, corbina, halibut, and sharks year-round." },
          },
        ],
      }) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <Link href="/blog" className="hover:text-ocean transition">Best Of</Link><span>/</span>
        <span className="text-charcoal font-medium">Best Fishing Piers in California</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-4 leading-tight">Best Fishing Piers in California &mdash; Top 10</h1>
      <p className="text-gray-400 text-sm mb-8">Updated April 2026 &middot; 5 min read</p>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          California&apos;s 840-mile coastline runs from the Mexican border to the Oregon state line, covering an astonishing range of marine environments along the way. Southern California piers put you over warm Pacific waters where halibut, corbina, and yellowfin croaker patrol sandy bottoms, while piers in the San Francisco Bay area sit above cold, nutrient-rich currents that support striped bass, bat rays, and jacksmelt. One of the biggest draws of pier fishing in the Golden State is that no fishing license is required on public ocean piers &mdash; making it one of the most accessible forms of angling anywhere in the country. Here are our top ten California piers, selected for fishing quality, scenery, and overall experience.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">1. Imperial Beach Pier</h2>
        <p>
          <Link href="/piers/osm_5993059" className="text-ocean hover:underline font-semibold">Imperial Beach Pier</Link> is the southernmost pier in California, located in San Diego County just a few miles from the Mexican border. The pier stretches into the Pacific Ocean and offers panoramic views of the Coronado Islands to the south and Point Loma to the north. Fishing here is excellent year-round, with surfperch, corbina, and spotfin croaker available in the shallow water near shore, and halibut, sharks, and bat rays patrolling the deeper water at the end of the pier. Summer months bring bonito and mackerel within casting range, and the warm-water species stay active well into November. The surrounding beachfront community adds a laid-back vibe that makes every visit feel like a vacation.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">2. Trinidad Pier</h2>
        <p>
          <Link href="/piers/osm_10255647" className="text-ocean hover:underline font-semibold">Trinidad Pier</Link> is a hidden gem on California&apos;s rugged North Coast, nestled in the tiny fishing village of Trinidad in Humboldt County. The pier sits inside Trinidad Bay, a small protected harbor surrounded by towering sea stacks and dense coastal forest. The fishing is distinctly different from Southern California piers &mdash; here you are targeting lingcod, rockfish, surfperch, and the occasional cabezon. Crab snares dropped from the end of the pier produce Dungeness crab during the winter season, adding another dimension to the experience. The scenery alone makes the drive north worthwhile, but the quality of the fishing seals the deal.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">3. San Francisco Pier 33</h2>
        <p>
          <Link href="/piers/osm_740486822" className="text-ocean hover:underline font-semibold">San Francisco Pier 33</Link> puts you right on the San Francisco Bay waterfront with views of Alcatraz Island and the Golden Gate Bridge. The bay waters around Pier 33 hold striped bass, jacksmelt, bat rays, and leopard sharks, and the strong tidal currents that sweep through the bay concentrate baitfish against the pier structure. Spring and fall are the best seasons for striped bass, when migrating fish move through the bay in large numbers. Fishing from a pier with Alcatraz as your backdrop is an experience unique to San Francisco and one that every traveling angler should add to their list.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">4. Pier 27</h2>
        <p>
          <Link href="/piers/osm_575233151" className="text-ocean hover:underline font-semibold">Pier 27</Link> sits along the Embarcadero in San Francisco and benefits from the same productive bay waters that make the entire waterfront a fishing destination. The pier is positioned near a deep channel that runs along the city waterfront, and this deeper water attracts larger fish including striped bass, halibut, and sturgeon during their respective seasons. White sturgeon in particular are a trophy target in San Francisco Bay, and pier anglers who fish the bottom with ghost shrimp or pile worms have a legitimate shot at these prehistoric fish. The urban setting adds an unexpected element of adventure to every session.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">5. Piers 30&ndash;32</h2>
        <p>
          <Link href="/piers/osm_192889639" className="text-ocean hover:underline font-semibold">Piers 30&ndash;32</Link> form a large waterfront complex on the San Francisco Embarcadero that provides extensive fishing access along the bay. The dual-pier structure creates a sheltered area between the two piers where baitfish congregate, and predators follow. Jacksmelt, perch, and small sharks are the most common catches, but patient anglers who fish live bait on the bottom can connect with striped bass and bat rays that cruise the pilings. The expansive footprint of the pier means there is always room to spread out, even on busy weekends.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">6. Hayward&apos;s Landing</h2>
        <p>
          <Link href="/piers/osm_299508644" className="text-ocean hover:underline font-semibold">Hayward&apos;s Landing</Link> offers East Bay anglers a convenient pier fishing option on the shores of San Francisco Bay in Hayward. The pier extends into the shallow southern portion of the bay, where leopard sharks, bat rays, and sturgeon feed over mudflats during high tide. The leopard shark fishery here is particularly strong from May through September, when warm water draws these beautiful spotted sharks into the shallows in large numbers. Frozen squid or anchovy fished on the bottom is the standard technique, and catches of multiple leopard sharks in a single session are common.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">7. Johnson&apos;s Landing</h2>
        <p>
          Just down the shoreline from Hayward&apos;s Landing, <Link href="/piers/osm_299508656" className="text-ocean hover:underline font-semibold">Johnson&apos;s Landing</Link> provides another East Bay access point to the same productive waters. The pier fishes best on incoming tides when water pushes baitfish and crustaceans over the mudflats and leopard sharks follow them in. Perch and jacksmelt round out the catch list and provide steady action between shark bites. The two Hayward landings can be fished as a pair &mdash; start at one, gauge the bite, and move to the other if the action slows. Together they cover a generous stretch of productive shoreline.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">8. Postpile</h2>
        <p>
          <Link href="/piers/osm_10904149900" className="text-ocean hover:underline font-semibold">Postpile</Link> near Santa Cruz provides a unique coastal fishing platform along one of the most scenic stretches of the Central California coast. The structure sits over rocky bottom habitat that supports populations of surfperch, cabezon, and greenling. Using mussels or sand crabs as bait and fishing close to the rocks produces the most consistent action. The Santa Cruz area is known for its natural beauty and relaxed coastal culture, and fishing from Postpile lets you soak in both while waiting for the next bite.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">9. Chablis Cruises</h2>
        <p>
          <Link href="/piers/osm_8076128002" className="text-ocean hover:underline font-semibold">Chablis Cruises</Link> in Morro Bay provides dock-based fishing access to one of California&apos;s most picturesque harbor towns. Morro Bay is a protected estuary that supports healthy populations of halibut, perch, jacksmelt, and sand bass. The harbor&apos;s calm waters make it an ideal spot for families and beginners who want to fish without dealing with heavy surf or strong currents. Morro Rock looms in the background as you fish, and sea otters and harbor seals are regular visitors to the dock area. It is pier fishing with a wildlife show included at no extra charge.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">10. J Dock</h2>
        <p>
          <Link href="/piers/osm_23605142" className="text-ocean hover:underline font-semibold">J Dock</Link> in San Francisco wraps up our California list with a compact fishing platform that delivers surprisingly good results for its modest size. The dock sits over deep water in the San Francisco marina area, and striped bass, perch, and jacksmelt are the primary targets. Live anchovies or pile worms fished near the bottom produce the most bites. The location is easy to reach by public transit, making it one of the most accessible fishing spots in the entire Bay Area for anglers who do not have a car.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">Discover More California Piers</h2>
        <p>
          The Golden State is home to hundreds of public fishing piers from San Diego to Crescent City, and every one of them is free to fish without a license. Browse all <Link href="/california" className="text-ocean hover:underline font-semibold">California fishing piers on PierSeeker</Link> for GPS coordinates, directions, and details. Use our <Link href="/map" className="text-ocean hover:underline font-semibold">interactive pier map</Link> to find piers near your location anywhere along the coast.
        </p>
      </div>
    </article>
  );
}
