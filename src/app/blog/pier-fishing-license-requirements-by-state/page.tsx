import Link from "next/link";
import type { Metadata } from "next";

const TITLE = "Pier Fishing License Requirements by State (2026 Guide)";
const DESC = "Do you need a fishing license to fish off a pier? State-by-state rules, age exemptions, saltwater vs freshwater, and which piers offer license-free fishing.";
const URL = "https://www.pierseeker.com/blog/pier-fishing-license-requirements-by-state";

export const metadata: Metadata = {
  title: `${TITLE} | PierSeeker`,
  description: DESC,
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "PierSeeker" },
  twitter: { card: "summary", title: TITLE },
  alternates: { canonical: URL },
};

const faqs = [
  { q: "Do you need a fishing license to fish off a pier?", a: "In most states, yes — any person 16 or older who catches or attempts to catch fish in state waters needs a license, whether on a pier, shore, boat, or bank. About a dozen states offer exemptions for fishing from specific public piers they own or operate." },
  { q: "Which states don't require a pier fishing license?", a: "License-free pier fishing (with conditions) is available at state-owned piers in Alabama, Florida, Georgia, Louisiana, Mississippi, North Carolina, South Carolina, Texas, and Virginia. Most of these still require a fee paid directly to the pier operator. Outside those specific piers, a standard state license is required." },
  { q: "What age do you need a fishing license?", a: "Most states exempt children under 16 (California, Florida, Texas, and New York use this cutoff). A few — Louisiana, for example — exempt anyone under 18. Senior exemptions (65+) exist in about a dozen states but often come with a free-but-required permit." },
  { q: "Saltwater vs freshwater license — which do I need for a pier?", a: "Depends on where the pier is. A freshwater lake or river pier takes a freshwater license. Ocean piers, intracoastal waterways, bays, and jetties take a saltwater license. Several states (Florida, Texas, California) offer combo licenses. If the pier extends into tidal water, treat it as saltwater." },
  { q: "How much does a fishing license cost?", a: "Annual resident licenses run $15-$50 in most states. Non-resident annual licenses run $40-$150. One-day and three-day tourist licenses are typically $10-$25. Buy online through your state's fish & wildlife department — usually valid immediately via PDF on your phone." },
];

export default function Post() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-04-21", dateModified: "2026-04-21", author: { "@type": "Organization", name: "PierSeeker" }, publisher: { "@type": "Organization", name: "PierSeeker", url: "https://www.pierseeker.com" }, mainEntityOfPage: URL }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.pierseeker.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pierseeker.com/blog" }, { "@type": "ListItem", position: 3, name: "Pier Fishing License Requirements", item: URL }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <nav className="text-sm text-gray-400 mb-6 flex gap-2"><Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span><Link href="/blog" className="hover:text-ocean transition">Blog</Link><span>/</span><span className="text-charcoal">Pier Fishing Licenses</span></nav>

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-ocean mb-3">Regulations</span>
        <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-3">{TITLE}</h1>
        <p className="text-gray-500 text-sm">Updated April 21, 2026 &middot; 10 min read &middot; PierSeeker Team</p>
      </header>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>Short answer: <strong className="text-charcoal">in almost every state, yes — you need a fishing license to fish off a pier.</strong> The long answer is more nuanced. About a dozen coastal states operate specific &quot;license-free&quot; public piers where the standard state license is waived. Age exemptions change state by state. And if the pier sits at the boundary between saltwater and freshwater, you may need a different license than you think.</p>
        <p>This guide walks through the rules for every state with significant pier-fishing activity, who&apos;s exempt, and how to buy a license in under 5 minutes online.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10">The General Rule</h2>
        <p>In all 50 states, any person aged 16 or older who attempts to catch fish in public waters needs a recreational fishing license. That applies whether you&apos;re on a boat, wading, surf-casting, or fishing from a pier. The &quot;public waters&quot; phrase matters: private fishing ponds at a resort or campground are exempt; state-owned waters — including every public pier — are not.</p>
        <p>The license is tied to the waters, not the method. Fishing from a pier isn&apos;t a lesser form of fishing that escapes licensing.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10">License-Free Pier States</h2>
        <p>A handful of states operate specific public piers that waive the state fishing license for anyone fishing from that pier. You still pay a pier-entry fee to the pier operator (usually $5-$12 per day), but you don&apos;t need the state license. These states and the typical rule:</p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2 pr-4 font-bold text-charcoal">State</th>
                <th className="text-left py-2 pr-4 font-bold text-charcoal">License-free piers?</th>
                <th className="text-left py-2 font-bold text-charcoal">Conditions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">Alabama</td><td className="py-2 pr-4">Yes, on Gulf State Park Pier</td><td className="py-2">Pier entry fee only</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">Florida</td><td className="py-2 pr-4">Yes, at many county/municipal piers</td><td className="py-2">Check pier signage; some require FL resident status</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">Georgia</td><td className="py-2 pr-4">Yes, on Jekyll Island and St. Simons piers</td><td className="py-2">Pier entry fee; state license for all other piers</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">Louisiana</td><td className="py-2 pr-4">Yes, on state wildlife piers with posted signage</td><td className="py-2">All anglers under 18 also exempt</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">Mississippi</td><td className="py-2 pr-4">Yes, on specific MS Coastal piers</td><td className="py-2">Saltwater combination stamp covers most ocean piers</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">North Carolina</td><td className="py-2 pr-4">Yes, on Jennette&apos;s Pier and other state-owned piers</td><td className="py-2">Pier entry fee only ($10/day)</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">South Carolina</td><td className="py-2 pr-4">Yes, on specific state-operated piers</td><td className="py-2">Pier entry fee $10-$15</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">Texas</td><td className="py-2 pr-4">Yes, at Texas State Park piers</td><td className="py-2">Park entry fee only; requires no fishing license</td></tr>
              <tr><td className="py-2 pr-4 font-semibold">Virginia</td><td className="py-2 pr-4">Yes, on specific state-owned piers</td><td className="py-2">Check VDGIF signage</td></tr>
            </tbody>
          </table>
        </div>

        <p>Critical: &quot;license-free&quot; applies only to specific named piers in each of these states. If you&apos;re on any other pier — a private fishing pier, a county pier not on the exempt list, a jetty, or a pier that doesn&apos;t post license-free signage — you need the standard state license.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10">Saltwater vs Freshwater — Which Applies to a Pier?</h2>
        <p>The distinction trips up tourists constantly. The rule is based on water type, not pier type:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-charcoal">Ocean piers, beach piers, intracoastal piers, bay piers, jetties</strong> &rarr; saltwater license</li>
          <li><strong className="text-charcoal">Lake piers, river piers, reservoir piers</strong> &rarr; freshwater license</li>
          <li><strong className="text-charcoal">Piers in brackish water near river mouths or tidal creeks</strong> &rarr; usually saltwater, but check local regs</li>
        </ul>
        <p>Eight states offer combo licenses that cover both (Florida, Texas, California, Louisiana, Mississippi, North Carolina, South Carolina, Virginia). If you fish both saltwater and freshwater in a state that offers combo, the combo usually costs about 20% more than a single license — worth it if you&apos;ll use both.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10">Age Exemptions</h2>
        <p>Children are universally exempt from fishing license requirements, but the cutoff varies:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-charcoal">Under 16:</strong> California, Florida, Texas, New York, most states</li>
          <li><strong className="text-charcoal">Under 17:</strong> Wisconsin, Pennsylvania, a few others</li>
          <li><strong className="text-charcoal">Under 18:</strong> Louisiana, and free junior licenses at nominal cost in several states</li>
        </ul>
        <p>Senior exemptions are patchier. Many states offer free or reduced-fee licenses for residents 65+ (Texas: 65+, Florida: 65+, North Carolina: 70+), but non-residents pay full price regardless of age. A few states — Tennessee, for instance — require 65+ residents to get a free license that still must be carried while fishing.</p>
        <p>Disability exemptions exist in most states with documented proof (100% disabled veterans, certain medical conditions). Check your state&apos;s fish &amp; wildlife website for specifics.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10">How to Buy a License (Under 5 Minutes)</h2>
        <p>Every state now offers online licenses through its fish &amp; wildlife department. The process is the same:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Search &quot;[your state] fishing license online&quot; — you&apos;ll land on the official state portal (looks like .gov)</li>
          <li>Choose license type (resident/non-resident, freshwater/saltwater/combo)</li>
          <li>Enter address and date of birth</li>
          <li>Pay by credit card ($15-$150 depending on state and type)</li>
          <li>Download the PDF or save to phone &mdash; valid immediately</li>
        </ol>
        <p>Most states allow you to show the PDF on your phone if checked by a warden. A few still require paper; photograph the PDF in case your phone dies.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10">Tourist &amp; Short-Term Licenses</h2>
        <p>If you&apos;re on vacation and plan to fish once or twice, skip the annual and get a short-term:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-charcoal">1-day license:</strong> $10-$17 in most coastal states</li>
          <li><strong className="text-charcoal">3-day license:</strong> $17-$30</li>
          <li><strong className="text-charcoal">7-day license:</strong> $25-$50</li>
          <li><strong className="text-charcoal">Non-resident annual:</strong> $40-$150 &mdash; only makes sense if you&apos;ll fish 5+ days</li>
        </ul>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10">Penalties for Fishing Without</h2>
        <p>Fines typically start at $50-$100 for a first offense plus court costs, pushing the real total to $200-$500. Second offense usually doubles. Worse: some states seize your gear (rods, tackle, cooler) and some add a poaching surcharge that puts the total over $1,000 for repeat offenses.</p>
        <p>The licensing system is funded almost entirely by license fees — it directly pays for pier maintenance, stocking programs, habitat protection, and the wardens who keep fisheries healthy. The $15-$50 you&apos;ll spend is the best fisheries money you&apos;ll ever send.</p>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i}>
              <h3 className="font-[Cabin] font-bold text-charcoal text-lg">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10">Related Reading</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/blog/pier-fishing-tips-for-beginners" className="text-ocean hover:underline">Pier Fishing Tips for Beginners</Link></li>
          <li><Link href="/blog/best-bait-pier-fishing" className="text-ocean hover:underline">Best Bait for Pier Fishing</Link></li>
          <li><Link href="/blog/pier-fishing-rigs-setup" className="text-ocean hover:underline">Essential Pier Fishing Rigs</Link></li>
          <li><Link href="/" className="text-ocean hover:underline">Browse fishing piers across all 50 states</Link></li>
        </ul>
      </div>
    </article>
  );
}
