import Link from "next/link";
import type { Metadata } from "next";
import GearRecommendation from "@/components/GearRecommendation";

export const metadata: Metadata = {
  title: "5 Essential Pier Fishing Rigs Every Angler Should Know | PierSeeker",
  description: "Learn the 5 most effective pier fishing rigs — bottom rig, Carolina rig, float rig, sabiki rig, and fish finder rig. Setup instructions, target species, and gear links.",
  openGraph: { title: "5 Essential Pier Fishing Rigs Every Angler Should Know", url: "https://pierseeker.com/rigs", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "5 Essential Pier Fishing Rigs Every Angler Should Know | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/rigs" },
};

export default function RigsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://pierseeker.com" },
            { "@type": "ListItem", position: 2, name: "Pier Fishing Rigs", item: "https://pierseeker.com/rigs" },
          ],
        },
        {
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What is the best all-around pier fishing rig?", acceptedAnswer: { "@type": "Answer", text: "The double-drop bottom rig is the most versatile pier fishing rig. It works for nearly every bottom-dwelling species, is easy to tie, and lets you fish two baits at different depths simultaneously. It is the first rig every pier angler should learn." } },
            { "@type": "Question", name: "Should I buy pre-made rigs or tie my own?", acceptedAnswer: { "@type": "Answer", text: "Pre-made rigs are great for beginners and save time on the pier. However, tying your own rigs lets you customize hook size, leader length, and line strength for specific species. Most experienced anglers tie their rigs at home the night before a trip." } },
            { "@type": "Question", name: "What size hook should I use for pier fishing?", acceptedAnswer: { "@type": "Answer", text: "For general pier fishing, a 1/0 to 3/0 circle hook covers most situations. Use smaller hooks (size 2 to 1) for sheepshead and whiting, and larger hooks (4/0 to 7/0) for big game like sharks and tarpon. Circle hooks are preferred because they reduce gut-hooking and make catch-and-release easier." } },
          ],
        },
      ]) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <span className="text-charcoal font-medium">Pier Fishing Rigs</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-4 leading-tight">5 Essential Pier Fishing Rigs Every Angler Should Know</h1>
      <p className="text-gray-400 text-sm mb-8">Updated April 2026 &middot; 9 min read</p>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          You can have the best bait in the world, but if your rig does not present it properly, you will not catch fish. The good news is that pier fishing rigs are simple. Five basic setups will cover every species and situation you encounter on a fishing pier, from tiny whiting on the bottom to bull redfish cruising past the end. This guide walks through each rig with setup instructions, target species, and when to use it. Master these five and you are ready for any pier in the country.
        </p>
        <p>
          Pair these rigs with the right bait from our <Link href="/bait-guide" className="text-ocean font-semibold hover:underline">regional bait guide</Link> for the best results. If you are new to pier fishing, our <Link href="/blog/pier-fishing-complete-guide" className="text-ocean font-semibold hover:underline">beginner guide</Link> covers the fundamentals.
        </p>

        {/* ── 1. Bottom Rig ── */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">1. Bottom Rig (Double Drop)</h2>
        <p>
          The bottom rig is the workhorse of pier fishing. It is the first rig most anglers learn and the one they use most often. The setup is straightforward: a pyramid or bank sinker at the bottom of the line with two hooks tied above it on dropper loops, spaced about 12 inches apart. The sinker holds the rig on the bottom while the hooks present bait at two different heights in the water column.
        </p>
        <pre className="bg-gray-100 rounded-lg p-4 text-sm text-charcoal overflow-x-auto font-mono not-prose">{`Main Line
  |
  |--- Dropper Loop --- Hook #1
  |
  |--- Dropper Loop --- Hook #2
  |
 [Sinker]`}</pre>
        <p>
          This rig excels for <Link href="/species/flounder" className="text-ocean font-semibold hover:underline">flounder</Link>, whiting, croaker, spot, and catfish — basically anything that feeds on or near the bottom. Use size 1 to 2/0 hooks depending on your target species. Bait with cut shrimp, squid strips, bloodworms, or cut mullet. The double-hook design doubles your chances and lets you experiment with two different baits at once.
        </p>
        <p>
          Shop <a href="https://www.amazon.com/s?k=double+drop+bottom+rig+fishing&tag=babymydog03-20" target="_blank" rel="noopener noreferrer" className="text-ocean font-semibold hover:underline">pre-made bottom rigs on Amazon</a>.
        </p>

        {/* ── 2. Carolina Rig ── */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">2. Carolina Rig</h2>
        <p>
          The Carolina rig is a step up from the basic bottom rig when you need your bait to move naturally along the bottom. Slide an egg sinker (1/2 to 1 oz) onto your main line, then add a small bead to protect your knot, and tie on a barrel swivel. From the other end of the swivel, tie an 18 to 24-inch fluorocarbon leader to a circle hook. The egg sinker slides freely on the main line, so when a fish picks up the bait it feels no resistance — just the weight of the leader.
        </p>
        <pre className="bg-gray-100 rounded-lg p-4 text-sm text-charcoal overflow-x-auto font-mono not-prose">{`Main Line --- [Egg Sinker] --- (Bead) --- {Swivel}
                                              |
                                        18-24" Leader
                                              |
                                         [Circle Hook]`}</pre>
        <p>
          The Carolina rig is deadly for <Link href="/species/flounder" className="text-ocean font-semibold hover:underline">flounder</Link>, <Link href="/species/redfish" className="text-ocean font-semibold hover:underline">redfish</Link>, and <Link href="/species/sheepshead" className="text-ocean font-semibold hover:underline">sheepshead</Link>. The free-sliding sinker keeps the bait on the bottom but allows it to drift naturally with the current, which triggers more strikes than a fixed-sinker rig. Use a 1/0 to 3/0 circle hook and bait with live shrimp, fiddler crabs, or cut mullet.
        </p>
        <p>
          Shop <a href="https://www.amazon.com/s?k=carolina+rig+fishing+saltwater&tag=babymydog03-20" target="_blank" rel="noopener noreferrer" className="text-ocean font-semibold hover:underline">Carolina rig components on Amazon</a>.
        </p>

        {/* ── 3. Float Rig ── */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">3. Float Rig (Bobber Rig)</h2>
        <p>
          The float rig lets you suspend live bait at any depth in the water column, from just below the surface to within inches of the bottom. The sliding float version is the most versatile. Thread a bobber stop onto your main line first, then a small bead, then the sliding float. Below the float, add a split shot or small egg sinker for weight, and tie on a hook. Adjust the bobber stop to set your desired depth — the float slides freely during casting but stops at the right depth once the rig hits the water.
        </p>
        <pre className="bg-gray-100 rounded-lg p-4 text-sm text-charcoal overflow-x-auto font-mono not-prose">{`Main Line
  |
[Bobber Stop]
  |
 (Bead)
  |
{Sliding Float}
  |
[Split Shot]
  |
[Hook + Live Bait]`}</pre>
        <p>
          This rig is perfect for presenting live bait like shrimp, minnows, and pilchards at a specific depth. It excels for snook around pier pilings, speckled trout in the mid-water column, sheepshead near barnacle-covered pilings, and steelhead on Great Lakes piers. The visual indicator — watching the float go under — makes this rig especially fun for <Link href="/blog/pier-fishing-with-kids" className="text-ocean font-semibold hover:underline">kids and beginners</Link>.
        </p>
        <p>
          Shop <a href="https://www.amazon.com/s?k=sliding+float+rig+fishing+saltwater&tag=babymydog03-20" target="_blank" rel="noopener noreferrer" className="text-ocean font-semibold hover:underline">sliding float rigs on Amazon</a>.
        </p>

        {/* ── 4. Sabiki Rig ── */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">4. Sabiki Rig</h2>
        <p>
          The sabiki rig is technically a bait-catching rig, but it deserves a place on this list because catching your own bait is one of the most important skills in pier fishing. A sabiki is a pre-tied rig with six small hooks dressed with tiny iridescent skins or feathers. Drop it over the side of the pier with a small weight at the bottom, jig it up and down, and you will catch small baitfish like pilchards, threadfin herring, and pinfish within minutes.
        </p>
        <p>
          Beyond catching bait, sabiki rigs have a legendary alternative use. Thread small pieces of <Link href="/blog/mcdonalds-straw-spanish-mackerel" className="text-ocean font-semibold hover:underline">McDonald&apos;s straws onto the sabiki hooks</Link> and you have a deadly <Link href="/species/spanish-mackerel" className="text-ocean font-semibold hover:underline">Spanish mackerel</Link> rig. The bright colored straw pieces mimic small baitfish and trigger aggressive strikes from passing mackerel schools. This trick has been a closely guarded pier secret for decades and remains one of the most effective mackerel techniques anywhere.
        </p>
        <p>
          Shop <a href="https://www.amazon.com/s?k=sabiki+rig+bait+pier+fishing&tag=babymydog03-20" target="_blank" rel="noopener noreferrer" className="text-ocean font-semibold hover:underline">sabiki rigs on Amazon</a>.
        </p>

        {/* ── 5. Fish Finder Rig ── */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">5. Fish Finder Rig</h2>
        <p>
          When you want to target the biggest fish that swim past the pier — sharks, rays, tarpon, cobia, and bull redfish — the fish finder rig is your weapon. The setup is similar to a Carolina rig but scaled up. Slide a heavy sinker (2 to 4 oz) onto your main line using a fish finder clip or slider, add a bead, and tie to a heavy-duty barrel swivel. From the swivel, run a 3-foot fluorocarbon leader (40 to 80 lb test) to a large circle hook in the 5/0 to 8/0 range.
        </p>
        <pre className="bg-gray-100 rounded-lg p-4 text-sm text-charcoal overflow-x-auto font-mono not-prose">{`Main Line --- [Sinker Slide + Heavy Sinker] --- (Bead) --- {Heavy Swivel}
                                                                  |
                                                           3ft Heavy Leader
                                                          (40-80lb Fluoro)
                                                                  |
                                                         [Large Circle Hook]
                                                          (5/0 to 8/0)`}</pre>
        <p>
          Bait the fish finder rig with large cut bait — half a mullet, a whole ladyfish fillet, or a chunk of bonito. Cast it as far out from the pier as possible and set it in a sturdy rod holder. The sliding sinker allows big fish to pick up the bait and move without feeling resistance, which is critical for species like tarpon that will drop a bait the instant they sense something wrong. Always use a circle hook with this rig to ensure a clean jaw hookset on the strike.
        </p>
        <p>
          Shop <a href="https://www.amazon.com/s?k=fish+finder+rig+shark+pier+fishing&tag=babymydog03-20" target="_blank" rel="noopener noreferrer" className="text-ocean font-semibold hover:underline">fish finder rigs on Amazon</a>.
        </p>

        <div className="not-prose">
          <GearRecommendation section="tackle" />
        </div>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Choosing the Right Rig</h2>
        <p>
          Start with the bottom rig. It catches the most species in the most situations and teaches you the fundamentals of bait presentation. As you gain experience, add the Carolina rig and float rig to your arsenal for more targeted approaches. Keep a sabiki rig in your tackle box at all times — the ability to catch your own bait is a game-changer. Save the fish finder rig for days when you know big fish are around and you are ready for a fight. For region-specific bait recommendations to pair with these rigs, visit our <Link href="/bait-guide" className="text-ocean font-semibold hover:underline">bait guide</Link>. Explore piers near you on our <Link href="/map" className="text-ocean font-semibold hover:underline">pier map</Link> or browse our <Link href="/species" className="text-ocean font-semibold hover:underline">species guides</Link>.
        </p>

        {/* FAQs */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3 not-prose">
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              What is the best all-around pier fishing rig?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">The double-drop bottom rig is the most versatile pier fishing rig. It works for nearly every bottom-dwelling species, is easy to tie, and lets you fish two baits at different depths simultaneously. It is the first rig every pier angler should learn.</div>
          </details>
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              Should I buy pre-made rigs or tie my own?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">Pre-made rigs are great for beginners and save time on the pier. However, tying your own rigs lets you customize hook size, leader length, and line strength for specific species. Most experienced anglers tie their rigs at home the night before a trip.</div>
          </details>
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              What size hook should I use for pier fishing?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">For general pier fishing, a 1/0 to 3/0 circle hook covers most situations. Use smaller hooks (size 2 to 1) for sheepshead and whiting, and larger hooks (4/0 to 7/0) for big game like sharks and tarpon. Circle hooks are preferred because they reduce gut-hooking and make catch-and-release easier.</div>
          </details>
        </div>
      </div>
    </article>
  );
}
