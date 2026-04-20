import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Pier Fishing in the Outer Banks — Top 5 Piers | PierSeeker",
  description: "The best fishing piers on the Outer Banks — Jennette's, Nags Head, Avon, Outer Banks Fishing Pier, and Kitty Hawk. Species, seasons, and what to bring.",
  openGraph: { title: "Best Pier Fishing in the Outer Banks — Top 5 Piers", url: "https://www.pierseeker.com/best-of/best-pier-fishing-outer-banks", siteName: "PierSeeker", type: "article" },
  twitter: { card: "summary", title: "Best Pier Fishing in the Outer Banks — Top 5 | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/best-of/best-pier-fishing-outer-banks" },
};

export default function BestPierFishingOuterBanks() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pierseeker.com" },
          { "@type": "ListItem", position: 2, name: "Best Of", item: "https://www.pierseeker.com/best-of" },
          { "@type": "ListItem", position: 3, name: "Best Pier Fishing in the Outer Banks", item: "https://www.pierseeker.com/best-of/best-pier-fishing-outer-banks" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is the best pier to fish on the Outer Banks?", acceptedAnswer: { "@type": "Answer", text: "Jennette's Pier in Nags Head is the best all-around OBX pier — long reach into productive water, modern facilities, and a strong fall red drum run. Avon Pier on Hatteras is the serious angler's choice for big cobia and king mackerel in season." } },
          { "@type": "Question", name: "What fish can you catch from OBX piers?", acceptedAnswer: { "@type": "Answer", text: "Red drum (fall run is legendary), Spanish and king mackerel, bluefish, flounder, speckled trout, cobia, sheepshead, pompano, spot, and croaker. Shark and tarpon runs bring trophy-class fish in summer. Each pier has a slightly different species mix based on where it sits along the banks." } },
          { "@type": "Question", name: "When is the best time for OBX pier fishing?", acceptedAnswer: { "@type": "Answer", text: "Fall (September to mid-November) is the best window — red drum blitz along the banks, cooler air, lighter crowds. Spring (April-June) is second for trout, bluefish, and Spanish mackerel. Summer fishes well at dawn and dusk; mid-day heat is brutal." } },
        ],
      }) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <span className="text-gray-400">Best Of</span><span>/</span>
        <span className="text-charcoal font-medium">Best Pier Fishing in the Outer Banks</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-4 leading-tight">Best Pier Fishing in the Outer Banks &mdash; Top 5 Piers</h1>
      <p className="text-gray-400 text-sm mb-8">Updated April 2026 &middot; 7 min read</p>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          The Outer Banks is the East Coast pier-fishing capital, full stop. The banks push far enough into the Atlantic that migratory species &mdash; red drum, cobia, king mackerel, bluefish, Spanish mackerel &mdash; pass within casting range of the pier-ends every year. We&apos;ve picked five OBX piers that consistently produce, plus notes on species mix and timing. For a full directory of every pier on the banks, see our <Link href="/north-carolina" className="text-ocean hover:underline font-semibold">North Carolina piers page</Link>.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">1. Jennette&apos;s Pier &mdash; Nags Head</h2>
        <p>
          <Link href="/piers/osm_616934949" className="text-ocean hover:underline font-semibold">Jennette&apos;s Pier</Link> is the modern flagship of OBX pier fishing. Rebuilt in concrete after Hurricane Isabel and operated by the NC Aquarium, it stretches over 1,000 feet into the Atlantic and serves as an educational facility alongside a working fishing pier. The fall red drum run at Jennette&apos;s is legendary &mdash; big drum, serious anglers, long waits for the right tide. Standard pier fishing runs year-round with species shifting by season: flounder and trout in spring, Spanish mackerel through summer, citation-class drum in fall.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">2. Nags Head Fishing Pier &mdash; Nags Head</h2>
        <p>
          <Link href="/piers/osm_164841037" className="text-ocean hover:underline font-semibold">Nags Head Fishing Pier</Link> is the classic wooden pier that anchors the Nags Head oceanfront. Privately operated and open to the public for day fees, it has a more laid-back vibe than Jennette&apos;s &mdash; you&apos;re more likely to chat with the regulars than fight elbow-to-elbow at the rail. Good spot for families learning pier fishing alongside serious anglers working the end. Species are similar to Jennette&apos;s, which isn&apos;t surprising given they&apos;re only a couple miles apart.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">3. Outer Banks Fishing Pier &mdash; Nags Head</h2>
        <p>
          <Link href="/piers/osm_164841175" className="text-ocean hover:underline font-semibold">Outer Banks Fishing Pier</Link> sits on South Nags Head and is a favorite of locals who&apos;ve fished the banks for decades. The pier is known for honest, no-frills fishing &mdash; check-in at the tackle shop, grab a rig, walk out. Puppy drum (slot-size red drum), bluefish, and spot runs keep a steady stream of anglers around. Fewer tourists, more people who know how to fish.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">4. Kitty Hawk Pier &mdash; Kitty Hawk</h2>
        <p>
          <Link href="/piers/osm_515561505" className="text-ocean hover:underline font-semibold">Kitty Hawk Pier</Link> has a long history on the north end of the banks. The pier has been rebuilt and repaired multiple times over the years; always confirm current access and hours before driving up (hurricanes and nor&apos;easters do serious damage this far north). Best fishing is spring through fall with bluefish, Spanish mackerel, sea mullet, and croaker.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">5. Avon Pier &mdash; Hatteras Island</h2>
        <p>
          Avon Pier on Hatteras Island is the serious angler&apos;s OBX pier. Well south of Nags Head, closer to the Gulf Stream influence, it produces bigger fish &mdash; cobia in spring and early summer, king mackerel through summer, and trophy red drum in fall. The drive from the beach-resort section is longer, but the fishing reflects it. Pack heavy tackle: cobia and kings don&apos;t forgive light gear. Always check current hours directly with the pier, as hurricane seasons have affected operations on Hatteras piers repeatedly.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">When to Fish the Outer Banks</h2>
        <p>
          Fall (September through mid-November) is the headline season. The red drum run is the single best reason to plan an OBX trip around pier fishing. Air temperatures drop, tourist crowds thin, and the drum push close to the beach. Spring (April-June) is the second window, strong for puppy drum, trout, and early Spanish mackerel. Summer fishes well for kings and cobia at the southern piers but the midday heat is punishing &mdash; go early or late.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-4 font-[Cabin]">What to Bring</h2>
        <p>
          A medium-heavy 9-12&apos; pier rod and a reel spooled with 20-30 lb braid will cover most OBX pier scenarios; bring a heavier setup for drum and cobia. A pier cart is almost mandatory (long walk to the end with gear), as is a quality cooler and rain layer &mdash; weather turns fast on the banks. A gaff or drop net is needed for landing bigger fish from most piers. Species-specific rigs matter: a Carolina-style fishfinder rig for bottom fish, a 3-hook pompano rig for spot and croaker, and heavy circle-hook terminal tackle for drum.
        </p>

        <p>
          For a searchable directory of every pier on the Outer Banks and across North Carolina, see our <Link href="/north-carolina" className="text-ocean hover:underline font-semibold">North Carolina piers page</Link>. For deep dives on species and techniques, our <Link href="/blog/pier-fishing-complete-guide" className="text-ocean hover:underline font-semibold">complete pier fishing guide</Link> and <Link href="/blog/best-bait-pier-fishing" className="text-ocean hover:underline font-semibold">bait guide</Link> cover what works.
        </p>
      </div>
    </article>
  );
}
