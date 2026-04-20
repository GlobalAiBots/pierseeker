import Link from "next/link";
import BlogCletusCallout from "@/components/BlogCletusCallout";
import GearRecommendation from "@/components/GearRecommendation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catch and Release from a Pier: How to Do It Right | PierSeeker",
  description: "How to catch-and-release pier fish without killing them. Proper handling, hook removal, and when a fish is too stressed to survive release.",
  openGraph: { title: "Catch and Release from a Pier: How to Do It Right", url: "https://www.pierseeker.com/blog/catch-and-release-from-pier", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Catch and Release from a Pier: How to Do It Right | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/blog/catch-and-release-from-pier" },
};

export default function PostPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org", "@type": "Article",
          headline: "Catch and Release from a Pier: How to Do It Right",
          datePublished: "2026-04-20",
          author: { "@type": "Organization", name: "PierSeeker" },
          publisher: { "@type": "Organization", name: "PierSeeker", url: "https://www.pierseeker.com" },
        },
        {
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pierseeker.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pierseeker.com/blog" },
            { "@type": "ListItem", position: 3, name: "Catch and Release from a Pier", item: "https://www.pierseeker.com/blog/catch-and-release-from-pier" },
          ],
        },
        {
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How do you release a fish from a high pier?", acceptedAnswer: { "@type": "Answer", text: "Use a long-handled drop net to lower the fish back into the water rather than dropping it from height. Cut the leader close to the hook if the fish is deeply hooked. Never throw a fish off a high pier — the impact on the water can kill fish as surely as a sharp hook." } },
            { "@type": "Question", name: "Do fish survive catch and release?", acceptedAnswer: { "@type": "Answer", text: "Most properly handled fish survive catch and release. Survival rates are highest when using circle hooks, keeping fish in the water during hook removal, minimizing air exposure, and avoiding deeply hooked fish. Barotrauma in deep-water species and high summer water temperatures are the biggest killers." } },
            { "@type": "Question", name: "What tools do I need for catch and release from a pier?", acceptedAnswer: { "@type": "Answer", text: "A dehooker, long-nose pliers, line cutters, a drop net, and a wet rag are the essentials. Circle hooks and a heavier rod that lets you land fish quickly also dramatically improve survival rates for released fish." } },
          ],
        },
      ]) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <Link href="/blog" className="hover:text-ocean transition">Blog</Link><span>/</span>
        <span className="text-charcoal font-medium">Catch and Release from a Pier</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-4 leading-tight">Catch and Release from a Pier: How to Do It Right</h1>
      <p className="text-gray-400 text-sm mb-8">April 20, 2026 &middot; 7 min read</p>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          Catch-and-release pier fishing sounds simple — land the fish, remove the hook, drop it back in. The reality is that pier fishing puts fish through more stress than almost any other form of angling. A fish fought from a 25-foot pier, swung up over a rail, dropped onto hot concrete, and tossed back in has a survival rate that would surprise most anglers. Done right, though, catch and release works. The fish you release today is the fish someone else catches next month. This guide walks through how to do it well from a pier specifically, because pier C&R has its own set of problems that boat anglers never deal with.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Why Pier C&amp;R Is Harder Than Boat C&amp;R</h2>
        <p>
          On a boat, a landed fish is inches from the water. You lip it, unhook it, and lean over the gunwale to release it in 10 seconds. On a pier, everything is harder. The fish has fought harder because you couldn&apos;t follow it in the boat; it&apos;s been lifted 10 to 25 feet straight up, sometimes through waves that slam it against pilings on the way; it&apos;s on hot concrete or weathered decking; and the release requires you to either throw the fish back down or lower it in a net. Every step adds stress.
        </p>
        <p>
          Some species handle this better than others. Redfish and striped bass are tough. Tarpon are surprisingly fragile despite their size. Deep-water species like big grouper and some snapper can suffer barotrauma — swim bladder expansion that leaves them unable to descend on release. Knowing which species you&apos;re targeting dictates how careful you need to be, and whether a release is even the right call.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Tackle That Helps</h2>
        <p>
          The single biggest improvement you can make to release survival is using circle hooks. Circles pivot and set in the corner of the mouth instead of in the throat or gut, which means quicker releases and far less tissue damage. They&apos;re required for many reef species in federal waters and are becoming the standard for shore anglers too.
        </p>
        <p>
          Barbless hooks — or crushed-barb hooks, which are the same thing with pliers — come out in a second and leave almost no wound. You&apos;ll lose a few more fish, but the trade-off is enormous for released fish. Beyond hooks, use a heavier rod than strictly necessary. A fish landed in 3 minutes releases better than the same fish landed in 15 minutes on underpowered gear. The longer the fight, the more lactic acid builds up in the muscle tissue, and the lower the survival rate.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Landing Without a Net</h2>
        <p>
          A long-handled pier drop net is the best landing tool for any fish you plan to release. You lower it on a rope, guide the fish over the hoop, and winch it up without lifting the fish by the line. If you don&apos;t have a net, a pier gaff will kill or badly injure the fish — don&apos;t use one for C&amp;R. On shorter piers, lip-gripping a well-worn fish at the surface and walking it along the rail to a ladder or dock can work, but it requires caution and a calm fish. Never &quot;beach&quot; a fish by dragging it up a concrete piling scraping scales off as it goes.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Hook Removal Techniques</h2>
        <p>
          Once the fish is on deck, work fast. Keep it in the net with a wet rag over its eyes if possible — fish calm down when they can&apos;t see. For hooks in the lip or corner of the mouth, a pair of long-nose pliers or a dehooker tool pops the hook out in a second or two. For deeper hooks, don&apos;t dig. Cut the leader as close to the hook as you can and release the fish with the hook still in place. Modern circle hooks in non-stainless steel will rust out within a couple of weeks and most fish survive fine.
        </p>
        <p>
          If the fish is bleeding from the gills, it&apos;s almost certainly going to die. NOAA and state fisheries widely acknowledge that gill-hooked or gut-hooked bleeding fish have poor survival rates. If local regulations allow, keep that fish and count it toward your limit rather than releasing a dead fish that won&apos;t benefit the population.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Rehydrating &amp; Reviving</h2>
        <p>
          Time out of the water is the single biggest factor in post-release mortality after hook placement. Widely reported fisheries research suggests that most fish can handle 10 to 30 seconds of air exposure fine; a minute or two is stressful; and anything longer significantly reduces survival. Wet your hands before touching the fish — dry hands strip protective slime, which opens fish up to infection even if they swim off strong.
        </p>
        <p>
          To revive a tired fish, lower it back into the water in the drop net and hold it there with the mouth facing into any current for 20 to 60 seconds. You&apos;ll feel it kick when it&apos;s ready to go. On a pier, this is easier if you keep the net in the water and only bring the fish up long enough for a quick photo and unhooking. Never throw a fish from a high pier back into the water — the impact can stun or kill it.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Species You Should Probably Keep</h2>
        <p>
          Some fish are going to die no matter what you do. Deeply hooked fish, heavily bleeding fish, and fish that come up with obvious barotrauma are often lost causes. If a fish is a legal size and species and regulations allow retention, keeping it is the ethical choice — a dead released fish benefits nothing. If the fish is protected or out-of-season, a descender tool can help deep-water species return to depth alive. Know your regulations; state rules for <Link href="/species/redfish" className="text-ocean hover:underline font-semibold">redfish</Link>, <Link href="/species/snook" className="text-ocean hover:underline font-semibold">snook</Link>, and <Link href="/species/tarpon" className="text-ocean hover:underline font-semibold">tarpon</Link> change frequently and vary by state.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Bull Red Run Ethics</h2>
        <p>
          The fall bull red run on Gulf and South Atlantic piers draws crowds, and big breeding-class redfish are in the water. Most states require release of oversize redfish because these large females are the population&apos;s breeders. Taking a good photo of a 40-inch red takes patience, but there&apos;s a right way and a wrong way. Keep the fish horizontal with both hands supporting the belly — never hold a big red vertically by the jaw, which can dislocate the jaw and damage internal organs. Get the measurement quickly, snap one or two photos, and release in under 60 seconds. For more on targeting these fish without hurting them, see our <Link href="/blog/pier-fishing-complete-guide" className="text-ocean hover:underline font-semibold">complete pier fishing guide</Link>.
        </p>

        {/* FAQs */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3 not-prose">
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              How do you release a fish from a high pier?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">Use a long-handled drop net to lower the fish back into the water rather than dropping it from height. Cut the leader close to the hook if the fish is deeply hooked. Never throw a fish off a high pier — the impact on the water can kill fish as surely as a sharp hook.</div>
          </details>
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              Do fish survive catch and release?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">Most properly handled fish survive catch and release. Survival rates are highest when using circle hooks, keeping fish in the water during hook removal, minimizing air exposure, and avoiding deeply hooked fish. Barotrauma in deep-water species and high summer water temperatures are the biggest killers.</div>
          </details>
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              What tools do I need for catch and release from a pier?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">A dehooker, long-nose pliers, line cutters, a drop net, and a wet rag are the essentials. Circle hooks and a heavier rod that lets you land fish quickly also dramatically improve survival rates for released fish.</div>
          </details>
        </div>
      </div>

      <GearRecommendation section="tackle" />

      <BlogCletusCallout />
    </article>
  );
}
