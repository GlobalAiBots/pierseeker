import Link from "next/link";
import BlogCletusCallout from "@/components/BlogCletusCallout";
import GearRecommendation from "@/components/GearRecommendation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fishing Pier Safety Tips: Avoid the Trip That Ends in the Water | PierSeeker",
  description: "Fishing pier safety tips that actually matter. Lightning, slip hazards, casting etiquette, and what to do if you or someone else goes in the water.",
  openGraph: { title: "Fishing Pier Safety Tips: Avoid the Trip That Ends in the Water", url: "https://www.pierseeker.com/blog/fishing-pier-safety-tips", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Fishing Pier Safety Tips: Avoid the Trip That Ends in the Water | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/blog/fishing-pier-safety-tips" },
};

export default function PostPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org", "@type": "Article",
          headline: "Fishing Pier Safety Tips: Avoid the Trip That Ends in the Water",
          datePublished: "2026-04-20",
          author: { "@type": "Organization", name: "PierSeeker" },
          publisher: { "@type": "Organization", name: "PierSeeker", url: "https://www.pierseeker.com" },
        },
        {
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pierseeker.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pierseeker.com/blog" },
            { "@type": "ListItem", position: 3, name: "Fishing Pier Safety Tips", item: "https://www.pierseeker.com/blog/fishing-pier-safety-tips" },
          ],
        },
        {
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is pier fishing dangerous?", acceptedAnswer: { "@type": "Answer", text: "Pier fishing is generally safe, but the most common risks are lightning during thunderstorms, slips on wet or slimy planks, hook injuries during casting, and falls from the pier. Almost all serious injuries are preventable with basic precautions." } },
            { "@type": "Question", name: "What should I do if someone falls off a pier?", acceptedAnswer: { "@type": "Answer", text: "Call 911 immediately. Throw a ring buoy or flotation device — never jump in yourself unless you are trained in water rescue. Keep visual contact with the person, guide them toward a ladder or low access point, and direct other anglers to reel in their lines." } },
            { "@type": "Question", name: "Can I fish during a thunderstorm?", acceptedAnswer: { "@type": "Answer", text: "No. Fishing piers are among the most dangerous places to be during a thunderstorm — you are on an elevated metal and wood structure over water holding a long conductive rod. Leave the pier at the first sign of lightning and wait at least 30 minutes after the last strike before returning." } },
          ],
        },
      ]) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <Link href="/blog" className="hover:text-ocean transition">Blog</Link><span>/</span>
        <span className="text-charcoal font-medium">Fishing Pier Safety Tips</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-4 leading-tight">Fishing Pier Safety Tips: Avoid the Trip That Ends in the Water</h1>
      <p className="text-gray-400 text-sm mb-8">April 20, 2026 &middot; 7 min read</p>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          Pier fishing is among the safest ways to fish in salt water. You&apos;re not in a boat that can capsize, you&apos;re not wading a beach with a rip current pulling at you, and there&apos;s usually a parking lot within 200 yards. But every year people get hurt on piers — usually from a handful of predictable, preventable causes. Lightning strikes, slip-and-falls, hook injuries, and the occasional tragic fall from a railing. This guide covers the real risks, how to avoid them, and what to do if something goes wrong. None of it is complicated; most of it just requires paying attention.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Lightning — The Non-Negotiable Rule</h2>
        <p>
          Lightning kills more people per year on fishing piers than every other hazard combined. A pier is the worst place to be during a thunderstorm: you&apos;re on an elevated structure, surrounded by water, with a long graphite or metal rod in your hand. Graphite rods conduct electricity. Wet fiberglass rods conduct electricity. Metal railings conduct electricity.
        </p>
        <p>
          The rule most widely recommended is the 30-30 rule: if you see lightning and hear thunder within 30 seconds of each other, the strike was within 6 miles — leave the pier immediately. Wait 30 minutes after the last thunder before returning. Don&apos;t try to ride out a storm under the bait-shop roof; piers have been struck during storms where the anglers &quot;just waited it out.&quot; NOAA publishes lightning safety guidance that lines up with this — when thunder roars, go indoors.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Slip &amp; Trip Hazards</h2>
        <p>
          Pier decks are slippery in ways land surfaces aren&apos;t. Fish slime is like wet soap. Dropped bait leaks oil. Rain and splash-over make weathered planks treacherous. And at night, you can&apos;t always see what you&apos;re stepping on. Wear shoes with actual grip — not flip-flops. Boat shoes, deck shoes, or real athletic shoes with rubber soles are the right call.
        </p>
        <p>
          Keep your gear contained. Bait buckets, tackle boxes, and coolers become trip hazards in crowded pier traffic. Don&apos;t spread gear across the walkway. At night, a headlamp pointed at the deck in front of you prevents most trips. For more on fishing after dark, see our <Link href="/blog/pier-fishing-at-night" className="text-ocean hover:underline font-semibold">pier fishing at night</Link> guide and <Link href="/blog/night-pier-fishing" className="text-ocean hover:underline font-semibold">night pier fishing</Link> tips.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Casting Etiquette Safety</h2>
        <p>
          Most pier hook injuries happen during casting. Someone launches a 3-ounce pyramid sinker with a 2/0 hook into the back of the person next to them. Before every cast, look behind you — the &quot;3 o&apos;clock rule&quot; is to glance at roughly your 3 o&apos;clock position (or 9 o&apos;clock if you&apos;re left-handed) before starting your cast. If kids are running, if a stroller is passing, if someone is baiting a line behind you, wait.
        </p>
        <p>
          Overhead casts in tight pier traffic are risky. Sidearm pendulum casts are worse — they sweep a heavy lead at head height across everyone near you. If the pier is crowded, step to the rail and do a simple flip cast straight out. Save your 80-yard casts for uncrowded mornings.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Hook Injuries</h2>
        <p>
          Sooner or later, someone will bury a hook in themselves or someone else. For small hooks past the barb, the &quot;string yank&quot; method works: push down on the eye of the hook, loop a piece of heavy line around the bend of the hook, and yank hard parallel to the skin. It comes out clean 99 percent of the time. For hooks in faces, eyes, joints, or near major blood vessels — don&apos;t try it. Go to an ER.
        </p>
        <p>
          Crushing barbs on your hooks with pliers before fishing nearly eliminates this problem; the hook backs out with a gentle pull. Safety glasses or polarized sunglasses also protect your eyes from flying hooks, sinkers, and the occasional snapped line.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Man-Overboard Procedures</h2>
        <p>
          If someone goes into the water, the first rule is: don&apos;t jump in. Jumping off a pier into unknown water to rescue someone has killed more would-be rescuers than it&apos;s saved victims. Call 911 first. Throw a ring buoy, life jacket, empty cooler — anything that floats. Most fishing piers have ring buoys stationed along the rail; know where yours are before you need one.
        </p>
        <p>
          Keep eyes on the person. If there&apos;s a ladder or low-freeboard access, talk them to it. Have another angler direct nearby boaters toward the victim. A person in 65-degree water can be incapacitated in 30 minutes and unconscious in an hour, so speed matters.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Pier-Specific Weather</h2>
        <p>
          Gulf piers get rogue waves during tropical systems — water can come over the deck 15 feet up. During hurricane watches and warnings, most piers close; take that seriously. Atlantic piers get nor&apos;easters that bring 40-mph gusts capable of launching unsecured tackle. Pacific piers get sneaker waves that wash anglers off low sections. If the weather is building, leave.
        </p>
        <p>
          Fog is a subtle hazard most anglers underrate. Heavy pier fog reduces visibility to 20 feet, which makes casting dangerous and increases the chance of stepping off an unguarded end. Don&apos;t fish the end of the pier in fog unless you know the structure cold.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Kids on the Pier</h2>
        <p>
          Piers are great for kids, but the safety math changes. Younger kids should wear a coast-guard-approved life vest on any pier with low rails or gaps. Keep rods lanyarded or in rod holders — a kid losing grip on a rod they&apos;re fighting a fish with can go over the rail chasing it. Teach them the 3 o&apos;clock rule before they take their first cast, and keep them within arm&apos;s reach. For more on bringing kids along, see our <Link href="/blog/pier-fishing-with-kids" className="text-ocean hover:underline font-semibold">pier fishing with kids</Link> guide.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Night Fishing Specifics</h2>
        <p>
          Night pier fishing is some of the best fishing available, but the hazards change. Bring a headlamp, not a handheld flashlight — you need both hands free. Avoid white light when possible; red or amber preserves night vision and doesn&apos;t spook fish. Watch your footing on ladders and transitions between deck levels. Don&apos;t fish the very end of an unlit pier alone. And keep your phone charged; if something goes wrong at 2 a.m. on a deserted pier, you&apos;re on your own until help arrives. For complete beginner guidance, the <Link href="/blog/pier-fishing-complete-guide" className="text-ocean hover:underline font-semibold">complete pier fishing guide</Link> covers the basics.
        </p>

        {/* FAQs */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3 not-prose">
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              Is pier fishing dangerous?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">Pier fishing is generally safe, but the most common risks are lightning during thunderstorms, slips on wet or slimy planks, hook injuries during casting, and falls from the pier. Almost all serious injuries are preventable with basic precautions.</div>
          </details>
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              What should I do if someone falls off a pier?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">Call 911 immediately. Throw a ring buoy or flotation device — never jump in yourself unless you are trained in water rescue. Keep visual contact with the person, guide them toward a ladder or low access point, and direct other anglers to reel in their lines.</div>
          </details>
          <details className="group border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
              Can I fish during a thunderstorm?
              <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">No. Fishing piers are among the most dangerous places to be during a thunderstorm — you are on an elevated metal and wood structure over water holding a long conductive rod. Leave the pier at the first sign of lightning and wait at least 30 minutes after the last strike before returning.</div>
          </details>
        </div>
      </div>

      <GearRecommendation section="comfort" />

      <BlogCletusCallout />
    </article>
  );
}
