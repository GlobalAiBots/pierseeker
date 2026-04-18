import Link from "next/link";
import BlogCletusCallout from "@/components/BlogCletusCallout";
import GearRecommendation from "@/components/GearRecommendation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Bring Pier Fishing: The Complete Gear Checklist | PierSeeker",
  description: "The ultimate pier fishing gear checklist. Everything you need to pack for saltwater and freshwater pier fishing — rods, tackle, bait, and essential accessories.",
  openGraph: { title: "What to Bring Pier Fishing: The Complete Gear Checklist", url: "https://pierseeker.com/blog/what-to-bring-pier-fishing", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "What to Bring Pier Fishing: The Complete Gear Checklist | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/blog/what-to-bring-pier-fishing" },
};

export default function PostPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: "What to Bring Pier Fishing: The Complete Gear Checklist",
        datePublished: "2026-04-01",
        author: { "@type": "Organization", name: "PierSeeker" },
        publisher: { "@type": "Organization", name: "PierSeeker", url: "https://pierseeker.com" },
      }) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <Link href="/blog" className="hover:text-ocean transition">Blog</Link><span>/</span>
        <span className="text-charcoal font-medium">What to Bring Pier Fishing</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-4 leading-tight">What to Bring Pier Fishing: The Complete Gear Checklist</h1>
      <p className="text-gray-400 text-sm mb-8">April 1, 2026 &middot; 5 min read</p>

      <img src="/images/blog/fishing-gear.jpg" alt="Essential pier fishing gear and tackle — complete packing checklist for saltwater pier fishing" className="w-full rounded-xl mb-8 max-h-[400px] object-cover" />

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          Nothing ruins a fishing trip faster than realizing you forgot something important after you have already made the drive to the pier. Whether you are heading to a saltwater pier on the coast or a freshwater pier on your local lake, having a solid checklist ensures you spend your time fishing instead of wishing you had packed that one thing sitting on your garage shelf. Here is everything you need to bring pier fishing, broken down by category.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Rod and Reel</h2>
        <p>
          Your rod and reel combo is the foundation of your pier fishing setup, and the right choice depends on whether you are fishing salt or fresh water. For saltwater pier fishing, go with a medium-heavy 7-foot spinning rod paired with a 3000 to 4000-size spinning reel. The extra backbone handles larger saltwater species and the length helps you cast over the railing and reach productive water. For freshwater piers on lakes and rivers, a medium-action 6.5-foot spinning rod with a 2500-size reel is more appropriate. The lighter setup gives you better sensitivity for detecting bites from panfish and bass.
        </p>
        <p>
          If you plan to target larger species like king mackerel, tarpon, or cobia from a saltwater pier, consider bringing a second heavier rod in the 7 to 8-foot range with a 5000-size reel. Having a dedicated heavy rod lets you keep a lighter rig in the water for general fishing while staying ready if a big fish shows up.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Fishing Line</h2>
        <p>
          For saltwater piers, spool your reel with 15 to 20-pound monofilament line. Monofilament has built-in stretch that absorbs the shock of hard-fighting saltwater fish and is forgiving enough for beginners. If you prefer braided line for its thinner diameter and zero stretch, use 20 to 30-pound braid with a 30 to 40-pound fluorocarbon leader to prevent line-shy fish from seeing the connection. For freshwater pier fishing, 8 to 12-pound monofilament covers the vast majority of species you will encounter.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Tackle Box Essentials</h2>
        <p>
          A well-stocked tackle box keeps you prepared for whatever the pier throws at you. Pack these essentials and you will be ready for almost any situation:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-charcoal">Hooks:</strong> Circle hooks in sizes 1/0 through 3/0 cover most pier species. Circle hooks are ideal for pier fishing because they almost always hook fish in the corner of the mouth, which makes catch-and-release easy and reduces gut-hooking.</li>
          <li><strong className="text-charcoal">Sinkers:</strong> Egg sinkers and bank sinkers in 1 to 3-ounce sizes. Heavier sinkers hold your bait on the bottom in current, while lighter ones work in calm water. Bring a variety so you can adjust based on conditions.</li>
          <li><strong className="text-charcoal">Swivels and leaders:</strong> Barrel swivels in size 4 to 7 prevent line twist. Pre-made fluorocarbon leaders save time when you need to re-rig quickly.</li>
          <li><strong className="text-charcoal">Bobbers:</strong> Weighted popping corks for saltwater or clip-on bobbers for freshwater. Bobber rigs let you suspend bait at a specific depth and give you a clear visual strike indicator.</li>
          <li><strong className="text-charcoal">Jigheads and soft plastics:</strong> Quarter-ounce jigheads paired with paddle-tail soft plastics or Gulp shrimp are deadly on piers when fish are feeding on baitfish around the pilings.</li>
          <li><strong className="text-charcoal">Spoons:</strong> A couple of silver and gold casting spoons in the half-ounce to 1-ounce range let you cover water quickly when fish are actively feeding on the surface.</li>
        </ul>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Bait</h2>
        <p>
          Live and natural baits consistently outperform artificial lures on piers, especially for beginners. For saltwater piers, fresh or frozen shrimp is the single best all-around bait. Almost every saltwater species eats shrimp. Cut fish, particularly mullet, ladyfish, or bonito, works well for larger predators like snook, redfish, and sharks. Bloodworms are effective for pompano, whiting, and croaker.
        </p>
        <p>
          For freshwater piers, nightcrawlers are the universal bait. Bass, catfish, panfish, and even trout will eat a nightcrawler. Live minnows on a hook under a bobber produce crappie, bass, and walleye. If you prefer artificial bait, Berkley Gulp shrimp in the new penny or natural color imitates live shrimp well enough to fool most species.
        </p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Accessories You Should Not Forget</h2>
        <p>
          Beyond rod, reel, and tackle, these items make the difference between a comfortable day on the pier and a frustrating one:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-charcoal">Bucket:</strong> A 5-gallon bucket serves triple duty as a bait holder, a seat, and a way to carry your catch. Add an aerator lid if you are using live bait to keep it frisky.</li>
          <li><strong className="text-charcoal">Cooler with ice:</strong> Keep your catch fresh and your drinks cold. A small soft-sided cooler is easier to carry on a pier than a full-size hard cooler.</li>
          <li><strong className="text-charcoal">Pliers and line cutters:</strong> Needle-nose pliers for removing hooks and a sharp pair of line cutters or braid scissors are non-negotiable. Do not use your teeth to cut line.</li>
          <li><strong className="text-charcoal">Fillet knife:</strong> If you plan to clean your catch at the pier cleaning station, bring a sharp fillet knife. A dull knife is more dangerous than a sharp one.</li>
          <li><strong className="text-charcoal">Towel or rag:</strong> You will handle bait, fish slime, and saltwater all day. A dedicated fishing towel keeps your hands dry and your gear clean.</li>
          <li><strong className="text-charcoal">Sunscreen, hat, and sunglasses:</strong> Piers offer zero shade. Polarized sunglasses cut glare on the water and help you spot fish below the surface.</li>
          <li><strong className="text-charcoal">Pier cart or wagon:</strong> If you are bringing multiple rods, a cooler, and a tackle box, a folding pier cart saves you from making multiple trips back and forth from the parking lot.</li>
          <li><strong className="text-charcoal">Fishing license:</strong> Most states require a fishing license even when fishing from public piers. Check your state&apos;s regulations before you go. Some piers have a blanket license that covers all anglers on the pier, but do not assume.</li>
          <li><strong className="text-charcoal">PierSeeker on your phone:</strong> Pull up PierSeeker for free GPS coordinates and details on any public pier. It works on any device with a browser, no app download required.</li>
        </ul>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Find a Pier Near You</h2>
        <p>
          Now that your gear is ready, it is time to pick a pier. Browse piers by state on PierSeeker to find the closest public pier to you. Check out popular destinations like <Link href="/florida" className="text-water font-semibold hover:underline">Florida</Link>, <Link href="/michigan" className="text-water font-semibold hover:underline">Michigan</Link>, and <Link href="/california" className="text-water font-semibold hover:underline">California</Link>, or use the <Link href="/map" className="text-water font-semibold hover:underline">pier map</Link> to explore all states. Every listing includes free GPS coordinates so you can navigate straight to the water.
        </p>
      </div>

      <GearRecommendation section="comfort" />

      <BlogCletusCallout />
    </article>
  );
}
