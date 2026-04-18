import Link from "next/link";
import BlogCletusCallout from "@/components/BlogCletusCallout";
import GearRecommendation from "@/components/GearRecommendation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pier Fishing for Beginners: Everything You Need to Know | PierSeeker",
  description: "The complete beginner guide to pier fishing. Learn what gear to bring, which species to target, casting techniques, pier etiquette, and safety tips for your first trip.",
  openGraph: { title: "Pier Fishing for Beginners: Everything You Need to Know", url: "https://pierseeker.com/blog/pier-fishing-complete-guide", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Pier Fishing for Beginners: Everything You Need to Know | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/blog/pier-fishing-complete-guide" },
};

export default function PostPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org", "@type": "Article",
          headline: "Pier Fishing for Beginners: Everything You Need to Know",
          datePublished: "2026-04-16",
          author: { "@type": "Organization", name: "PierSeeker" },
          publisher: { "@type": "Organization", name: "PierSeeker", url: "https://pierseeker.com" },
        },
        {
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://pierseeker.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://pierseeker.com/blog" },
            { "@type": "ListItem", position: 3, name: "Pier Fishing Complete Guide", item: "https://pierseeker.com/blog/pier-fishing-complete-guide" },
          ],
        },
        {
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Do I need a fishing license to fish from a pier?", acceptedAnswer: { "@type": "Answer", text: "In most states, yes. However, some states like Florida waive the license requirement on certain public fishing piers. Always check your state's regulations before fishing." } },
            { "@type": "Question", name: "What is the best time of day for pier fishing?", acceptedAnswer: { "@type": "Answer", text: "Early morning (dawn to 9 AM) and late afternoon into evening are generally the most productive times. Many species also feed actively at night under pier lights." } },
            { "@type": "Question", name: "How much does it cost to fish from a pier?", acceptedAnswer: { "@type": "Answer", text: "Many public fishing piers are completely free. Those that charge typically cost between $5 and $15 for a day pass. Rod rentals are usually available for $15-25 if you do not have your own gear." } },
          ],
        },
      ]) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <Link href="/blog" className="hover:text-ocean transition">Blog</Link><span>/</span>
        <span className="text-charcoal font-medium">Pier Fishing Complete Guide</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-4 leading-tight">Pier Fishing for Beginners: Everything You Need to Know</h1>
      <p className="text-gray-400 text-sm mb-8">April 16, 2026 &middot; 9 min read</p>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          Pier fishing is one of the most accessible and rewarding ways to fish in saltwater or freshwater. You do not need a boat, you do not need years of experience, and in many cases you do not even need your own gear. Public fishing piers exist in every coastal state in America, and most of them are either free or charge a modest day fee that is a fraction of what a charter boat costs. Whether you are a complete beginner or an experienced angler looking for a new challenge, pier fishing offers something for everyone.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">What You Need to Get Started</h2>
        <p>
          The beauty of pier fishing is that you can start with minimal gear. A medium spinning rod and reel combo in the 7-foot range is the most versatile setup for pier fishing. Spool it with 15-20 pound braided line and you will be able to handle most species you encounter. Beyond the rod, you need a small tackle box with hooks, sinkers, a few lures, and a pair of pliers. Bring a 5-gallon bucket to carry your gear and sit on, a cooler with ice for your catch, sunscreen, and a hat. Many piers have bait shops on site where you can buy live shrimp, cut bait, or frozen squid, so you do not necessarily need to bring your own bait.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Species You Can Catch</h2>
        <p>
          The species you will encounter depend on your location and the time of year. On Gulf Coast piers, expect <Link href="/species/redfish" className="text-ocean font-semibold hover:underline">redfish</Link>, <Link href="/species/sheepshead" className="text-ocean font-semibold hover:underline">sheepshead</Link>, <Link href="/species/spanish-mackerel" className="text-ocean font-semibold hover:underline">Spanish mackerel</Link>, and pompano. Atlantic coast piers produce <Link href="/species/flounder" className="text-ocean font-semibold hover:underline">flounder</Link>, <Link href="/species/bluefish" className="text-ocean font-semibold hover:underline">bluefish</Link>, and <Link href="/species/striped-bass" className="text-ocean font-semibold hover:underline">striped bass</Link>. Florida piers are home to <Link href="/species/snook" className="text-ocean font-semibold hover:underline">snook</Link>, tarpon, and a dizzying variety of tropical species. Freshwater piers on lakes and reservoirs offer <Link href="/species/catfish" className="text-ocean font-semibold hover:underline">catfish</Link>, bass, and panfish. The key is to ask at the local bait shop what is biting, because they will have the most current information.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Basic Technique</h2>
        <p>
          The most common pier fishing technique is bottom fishing with a simple rig. Tie a two-ounce pyramid sinker to the end of your line, then attach a hook on a dropper loop about 12 inches above the weight. Bait the hook with shrimp, squid, or cut bait, cast it out, and let it settle on the bottom. Place your rod in a rod holder or prop it against the rail and wait for a bite. When the rod tip starts bouncing or the line moves, reel in the slack and set the hook with a firm upward sweep.
        </p>
        <p>
          If you prefer a more active approach, casting lures from a pier is highly effective for predator species. Spoons, jigs, and swimbaits can be cast from the pier and retrieved at various speeds to imitate fleeing baitfish. This technique works especially well for mackerel, bluefish, and redfish that are feeding near the surface.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Pier Etiquette</h2>
        <p>
          Fishing piers are shared spaces, and following basic etiquette makes the experience better for everyone. Do not cast over or under another angler&apos;s line. If the pier is crowded, ask before setting up next to someone. Keep your gear contained and do not spread out across multiple rod holders. When you hook a large fish that runs, communicate with nearby anglers so they can reel in and give you room. Clean up your bait scraps, cut line, and trash before you leave. If you are catching and releasing fish, handle them carefully with wet hands and get them back in the water quickly.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Safety on the Pier</h2>
        <p>
          Fishing piers are generally safe environments, but there are a few things to keep in mind. Wear shoes with good grip because pier surfaces can be slippery when wet from rain, waves, or fish slime. Apply sunscreen liberally because you are fully exposed on a pier with no shade on most structures. Bring plenty of water to stay hydrated, especially during summer. Be cautious when handling fish with sharp teeth or spines — use pliers to remove hooks and a towel to grip spiny fish. If you are fishing at night, bring a headlamp and pay attention to your footing. During thunderstorms, leave the pier immediately because the metal railings and open water create a lightning risk.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Find a Pier Near You</h2>
        <p>
          Ready to try pier fishing? Browse our <Link href="/map" className="text-ocean font-semibold hover:underline">interactive pier map</Link> to find public fishing piers near you, or explore piers by state starting with top destinations like <Link href="/florida" className="text-ocean font-semibold hover:underline">Florida</Link>, <Link href="/texas" className="text-ocean font-semibold hover:underline">Texas</Link>, and <Link href="/north-carolina" className="text-ocean font-semibold hover:underline">North Carolina</Link>. Check out our <Link href="/species" className="text-ocean font-semibold hover:underline">species guides</Link> to learn what you can catch in your area.
        </p>

        {/* FAQs */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3 not-prose">
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              Do I need a fishing license to fish from a pier?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">In most states, yes. However, some states like Florida waive the license requirement on certain public fishing piers. Always check your state&apos;s regulations before fishing.</div>
          </details>
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              What is the best time of day for pier fishing?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">Early morning (dawn to 9 AM) and late afternoon into evening are generally the most productive times. Many species also feed actively at night under pier lights.</div>
          </details>
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              How much does it cost to fish from a pier?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">Many public fishing piers are completely free. Those that charge typically cost between $5 and $15 for a day pass. Rod rentals are usually available for $15-25 if you do not have your own gear.</div>
          </details>
        </div>
      </div>

      <GearRecommendation section="essentials" />

      <BlogCletusCallout />
    </article>
  );
}
