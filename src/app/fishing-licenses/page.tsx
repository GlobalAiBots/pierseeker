import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do You Need a Fishing License for Pier Fishing? State-by-State Guide | PierSeeker",
  description: "Find out if you need a fishing license to fish from a pier in your state. Complete guide with costs, pier exemptions, and links to buy licenses online for all 50 states.",
  keywords: "fishing license pier fishing, do I need a fishing license for pier fishing, pier fishing license, free pier fishing, pier fishing exemption",
  openGraph: { title: "Fishing License Requirements for Pier Fishing — Every State", url: "https://www.pierseeker.com/fishing-licenses", siteName: "PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/fishing-licenses" },
};

const states: { name: string; slug: string; pierExempt: boolean; exemptNote: string; residentCost: string; nonResidentCost: string; buyUrl: string }[] = [
  { name: "Alabama", slug: "alabama", pierExempt: false, exemptNote: "", residentCost: "$13", nonResidentCost: "$53", buyUrl: "https://www.outdooralabama.com/licenses" },
  { name: "Alaska", slug: "alaska", pierExempt: false, exemptNote: "", residentCost: "$29", nonResidentCost: "$145", buyUrl: "https://www.adfg.alaska.gov/index.cfm?adfg=license.main" },
  { name: "Arizona", slug: "arizona", pierExempt: false, exemptNote: "No saltwater piers", residentCost: "$37", nonResidentCost: "$55", buyUrl: "https://www.azgfd.com/license/" },
  { name: "Arkansas", slug: "arkansas", pierExempt: false, exemptNote: "", residentCost: "$11", nonResidentCost: "$50", buyUrl: "https://www.agfc.com/licenses/" },
  { name: "California", slug: "california", pierExempt: true, exemptNote: "Public ocean piers are license-free", residentCost: "$54", nonResidentCost: "$54", buyUrl: "https://wildlife.ca.gov/Licensing" },
  { name: "Colorado", slug: "colorado", pierExempt: false, exemptNote: "", residentCost: "$36", nonResidentCost: "$97", buyUrl: "https://cpw.state.co.us/buyapply" },
  { name: "Connecticut", slug: "connecticut", pierExempt: false, exemptNote: "Saltwater registration required (free)", residentCost: "$22", nonResidentCost: "$22", buyUrl: "https://portal.ct.gov/deep/fishing" },
  { name: "Delaware", slug: "delaware", pierExempt: false, exemptNote: "", residentCost: "$8.50", nonResidentCost: "$20", buyUrl: "https://dnrec.alpha.delaware.gov/fish-wildlife/licenses/" },
  { name: "Florida", slug: "florida", pierExempt: true, exemptNote: "Licensed piers cover all anglers — no individual license needed", residentCost: "$17", nonResidentCost: "$47", buyUrl: "https://myfwc.com/license/" },
  { name: "Georgia", slug: "georgia", pierExempt: false, exemptNote: "Saltwater license required", residentCost: "$15", nonResidentCost: "$50", buyUrl: "https://georgiawildlife.com/licenses-permits-passes" },
  { name: "Hawaii", slug: "hawaii", pierExempt: true, exemptNote: "No saltwater fishing license required", residentCost: "Free", nonResidentCost: "Free", buyUrl: "https://dlnr.hawaii.gov/dar/" },
  { name: "Idaho", slug: "idaho", pierExempt: false, exemptNote: "", residentCost: "$30", nonResidentCost: "$98", buyUrl: "https://idfg.idaho.gov/licenses" },
  { name: "Illinois", slug: "illinois", pierExempt: false, exemptNote: "", residentCost: "$15", nonResidentCost: "$31.50", buyUrl: "https://www.ifishillinois.org/" },
  { name: "Indiana", slug: "indiana", pierExempt: false, exemptNote: "", residentCost: "$17", nonResidentCost: "$35", buyUrl: "https://www.in.gov/dnr/fish-and-wildlife/fishing/" },
  { name: "Iowa", slug: "iowa", pierExempt: false, exemptNote: "", residentCost: "$22", nonResidentCost: "$48", buyUrl: "https://www.iowadnr.gov/fishing/fishing-licenses" },
  { name: "Kansas", slug: "kansas", pierExempt: false, exemptNote: "", residentCost: "$28", nonResidentCost: "$53", buyUrl: "https://ksoutdoors.com/Fishing" },
  { name: "Kentucky", slug: "kentucky", pierExempt: false, exemptNote: "", residentCost: "$23", nonResidentCost: "$55", buyUrl: "https://fw.ky.gov/Fish/Pages/Fishing-Licenses-and-Permits.aspx" },
  { name: "Louisiana", slug: "louisiana", pierExempt: false, exemptNote: "", residentCost: "$10", nonResidentCost: "$60", buyUrl: "https://www.wlf.louisiana.gov/page/fishing" },
  { name: "Maine", slug: "maine", pierExempt: true, exemptNote: "No saltwater license required", residentCost: "$26", nonResidentCost: "$64", buyUrl: "https://www.maine.gov/ifw/fishing-hunting/" },
  { name: "Maryland", slug: "maryland", pierExempt: false, exemptNote: "Chesapeake Bay sport fishing license required", residentCost: "$15", nonResidentCost: "$22.50", buyUrl: "https://dnr.maryland.gov/fisheries/Pages/license.aspx" },
  { name: "Massachusetts", slug: "massachusetts", pierExempt: false, exemptNote: "Free saltwater permit required", residentCost: "Free", nonResidentCost: "Free", buyUrl: "https://www.mass.gov/how-to/get-a-recreational-saltwater-fishing-permit" },
  { name: "Michigan", slug: "michigan", pierExempt: false, exemptNote: "", residentCost: "$26", nonResidentCost: "$76", buyUrl: "https://www.michigan.gov/dnr/buy-and-apply/hunting-and-fishing-licenses" },
  { name: "Minnesota", slug: "minnesota", pierExempt: false, exemptNote: "", residentCost: "$25", nonResidentCost: "$51", buyUrl: "https://www.dnr.state.mn.us/licenses/fishing/" },
  { name: "Mississippi", slug: "mississippi", pierExempt: true, exemptNote: "No saltwater license required for rod & reel", residentCost: "$8", nonResidentCost: "$30", buyUrl: "https://www.mdwfp.com/fishing-boating/fishing-licenses/" },
  { name: "Missouri", slug: "missouri", pierExempt: false, exemptNote: "", residentCost: "$12", nonResidentCost: "$42", buyUrl: "https://mdc.mo.gov/hunting-trapping/permits" },
  { name: "Montana", slug: "montana", pierExempt: false, exemptNote: "", residentCost: "$19", nonResidentCost: "$86", buyUrl: "https://fwp.mt.gov/buyandapply/licenses" },
  { name: "Nebraska", slug: "nebraska", pierExempt: false, exemptNote: "", residentCost: "$30", nonResidentCost: "$63", buyUrl: "https://outdoornebraska.gov/fishing/" },
  { name: "Nevada", slug: "nevada", pierExempt: false, exemptNote: "No ocean access", residentCost: "$40", nonResidentCost: "$69", buyUrl: "https://www.ndow.org/licensing/" },
  { name: "New Hampshire", slug: "new-hampshire", pierExempt: true, exemptNote: "No saltwater license required", residentCost: "$25", nonResidentCost: "$53", buyUrl: "https://www.wildlife.nh.gov/fishing" },
  { name: "New Jersey", slug: "new-jersey", pierExempt: false, exemptNote: "Free saltwater registry required", residentCost: "Free", nonResidentCost: "Free", buyUrl: "https://www.nj.gov/dep/fgw/saltwaterregistry.htm" },
  { name: "New Mexico", slug: "new-mexico", pierExempt: false, exemptNote: "", residentCost: "$25", nonResidentCost: "$56", buyUrl: "https://www.wildlife.state.nm.us/fishing/licenses/" },
  { name: "New York", slug: "new-york", pierExempt: false, exemptNote: "Marine registry required (free)", residentCost: "$25", nonResidentCost: "$50", buyUrl: "https://www.dec.ny.gov/permits/6091.html" },
  { name: "North Carolina", slug: "north-carolina", pierExempt: true, exemptNote: "Licensed ocean piers cover anglers — Coastal Recreation Fishing License (CRFL) required from shore", residentCost: "$16", nonResidentCost: "$32", buyUrl: "https://www.ncwildlife.org/licensing" },
  { name: "North Dakota", slug: "north-dakota", pierExempt: false, exemptNote: "No ocean access", residentCost: "$17", nonResidentCost: "$47", buyUrl: "https://gf.nd.gov/licensing" },
  { name: "Ohio", slug: "ohio", pierExempt: false, exemptNote: "", residentCost: "$25", nonResidentCost: "$50", buyUrl: "https://ohiodnr.gov/buy-and-apply/fishing-license" },
  { name: "Oklahoma", slug: "oklahoma", pierExempt: false, exemptNote: "", residentCost: "$25", nonResidentCost: "$55", buyUrl: "https://www.wildlifedepartment.com/fishing/licenses" },
  { name: "Oregon", slug: "oregon", pierExempt: false, exemptNote: "", residentCost: "$44", nonResidentCost: "$98", buyUrl: "https://myodfw.com/fishing" },
  { name: "Pennsylvania", slug: "pennsylvania", pierExempt: false, exemptNote: "", residentCost: "$23", nonResidentCost: "$53", buyUrl: "https://www.fishandboat.com/Fish/FishingLicenses/" },
  { name: "Rhode Island", slug: "rhode-island", pierExempt: false, exemptNote: "Free saltwater license", residentCost: "Free", nonResidentCost: "Free", buyUrl: "https://dem.ri.gov/natural-resources-bureau/fish-wildlife/saltwater-fishing" },
  { name: "South Carolina", slug: "south-carolina", pierExempt: true, exemptNote: "Licensed piers cover anglers", residentCost: "$10", nonResidentCost: "$35", buyUrl: "https://www.dnr.sc.gov/purchase.html" },
  { name: "South Dakota", slug: "south-dakota", pierExempt: false, exemptNote: "", residentCost: "$28", nonResidentCost: "$79", buyUrl: "https://gfp.sd.gov/licenses/" },
  { name: "Tennessee", slug: "tennessee", pierExempt: false, exemptNote: "", residentCost: "$28", nonResidentCost: "$81", buyUrl: "https://www.tn.gov/twra/license-sales.html" },
  { name: "Texas", slug: "texas", pierExempt: false, exemptNote: "Saltwater endorsement required", residentCost: "$30", nonResidentCost: "$58", buyUrl: "https://tpwd.texas.gov/business/licenses/" },
  { name: "Utah", slug: "utah", pierExempt: false, exemptNote: "", residentCost: "$34", nonResidentCost: "$75", buyUrl: "https://wildlife.utah.gov/fishing-in-utah.html" },
  { name: "Vermont", slug: "vermont", pierExempt: false, exemptNote: "", residentCost: "$28", nonResidentCost: "$54", buyUrl: "https://vtfishandwildlife.com/fish/fishing-licenses" },
  { name: "Virginia", slug: "virginia", pierExempt: false, exemptNote: "Saltwater license required", residentCost: "$23", nonResidentCost: "$47", buyUrl: "https://www.dgif.virginia.gov/fishing/" },
  { name: "Washington", slug: "washington", pierExempt: false, exemptNote: "", residentCost: "$30", nonResidentCost: "$85", buyUrl: "https://wdfw.wa.gov/licenses" },
  { name: "West Virginia", slug: "west-virginia", pierExempt: false, exemptNote: "", residentCost: "$19", nonResidentCost: "$37", buyUrl: "https://wvdnr.gov/fishing/fishing-licenses/" },
  { name: "Wisconsin", slug: "wisconsin", pierExempt: false, exemptNote: "", residentCost: "$20", nonResidentCost: "$50", buyUrl: "https://dnr.wisconsin.gov/permits/fishing" },
  { name: "Wyoming", slug: "wyoming", pierExempt: false, exemptNote: "", residentCost: "$27", nonResidentCost: "$102", buyUrl: "https://wgfd.wyo.gov/apply-or-buy" },
];

const exemptStates = states.filter(s => s.pierExempt);

export default function FishingLicensesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pierseeker.com" },
          { "@type": "ListItem", position: 2, name: "Fishing Licenses", item: "https://www.pierseeker.com/fishing-licenses" },
        ]},
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "Do I need a fishing license to fish from a pier?", acceptedAnswer: { "@type": "Answer", text: `It depends on the state. ${exemptStates.length} states exempt pier fishing from license requirements, including Florida, California, Hawaii, and North Carolina. In most other states, you need a standard fishing license even when fishing from a pier.` } },
          { "@type": "Question", name: "Which states allow pier fishing without a license?", acceptedAnswer: { "@type": "Answer", text: `States with pier fishing exemptions include: ${exemptStates.map(s => s.name).join(", ")}. Rules vary — some exempt all public piers, while others only exempt licensed (fee-charging) piers.` } },
          { "@type": "Question", name: "How much does a fishing license cost?", acceptedAnswer: { "@type": "Answer", text: "Resident fishing licenses range from free (Massachusetts, Rhode Island, New Jersey) to $54 (California, Oregon). Non-resident licenses cost more, typically $30-$145. Many states offer discounted 1-day, 3-day, and 7-day licenses for visitors." } },
        ]},
      ]) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <span className="text-charcoal font-medium">Fishing Licenses</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-3 leading-tight">Do You Need a Fishing License for Pier Fishing?</h1>
      <p className="text-gray-500 mb-8 max-w-2xl">The short answer: it depends on the state. {exemptStates.length} states exempt pier anglers from license requirements. Here&apos;s every state&apos;s rules, costs, and where to buy.</p>

      {/* Pier-Exempt States Highlight */}
      <div className="bg-ocean/5 border border-ocean/15 rounded-2xl p-6 mb-10">
        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-3">&#127881; States Where You Can Pier Fish Without a License</h2>
        <p className="text-gray-500 text-sm mb-4">These states exempt pier fishing from license requirements (rules vary — see notes):</p>
        <div className="flex flex-wrap gap-2">
          {exemptStates.map(s => (
            <Link key={s.slug} href={`/${s.slug}`} className="bg-white border border-ocean/20 rounded-lg px-3 py-2 text-sm hover:border-ocean hover:shadow-sm transition">
              <span className="font-bold text-charcoal">{s.name}</span>
              {s.exemptNote && <span className="text-gray-400 text-xs block">{s.exemptNote}</span>}
            </Link>
          ))}
        </div>
      </div>

      {/* Full State Table */}
      <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-4">All 50 States: License Requirements &amp; Costs</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-3 text-gray-400 font-medium">State</th>
              <th className="text-left py-3 px-3 text-gray-400 font-medium">Pier Exempt?</th>
              <th className="text-left py-3 px-3 text-gray-400 font-medium">Resident</th>
              <th className="text-left py-3 px-3 text-gray-400 font-medium">Non-Resident</th>
              <th className="text-left py-3 px-3 text-gray-400 font-medium">Notes</th>
              <th className="text-left py-3 px-3 text-gray-400 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {states.map((s, i) => (
              <tr key={s.slug} className={`border-b border-gray-100 ${s.pierExempt ? "bg-green-50/50" : ""} ${i % 2 === 0 ? "" : "bg-gray-50/30"}`}>
                <td className="py-3 px-3"><Link href={`/${s.slug}`} className="font-semibold text-charcoal hover:text-ocean transition">{s.name}</Link></td>
                <td className="py-3 px-3">{s.pierExempt ? <span className="text-green-600 font-bold text-xs bg-green-100 px-2 py-0.5 rounded-full">YES</span> : <span className="text-gray-400 text-xs">No</span>}</td>
                <td className="py-3 px-3 font-medium text-charcoal">{s.residentCost}</td>
                <td className="py-3 px-3 text-gray-500">{s.nonResidentCost}</td>
                <td className="py-3 px-3 text-gray-400 text-xs max-w-[200px]">{s.exemptNote}</td>
                <td className="py-3 px-3"><a href={s.buyUrl} target="_blank" rel="noopener noreferrer" className="text-ocean text-xs font-semibold hover:underline whitespace-nowrap">Buy Online &rarr;</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tips */}
      <div className="bg-coral/5 border border-coral/15 rounded-xl p-5 mb-10">
        <h3 className="font-[Cabin] font-bold text-charcoal mb-3">Tips for Buying a Fishing License</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2"><span className="text-coral font-bold">&#10003;</span> Most states sell licenses online with instant digital delivery &mdash; you can fish the same day.</li>
          <li className="flex items-start gap-2"><span className="text-coral font-bold">&#10003;</span> Look for short-term licenses (1-day, 3-day, 7-day) if you&apos;re visiting &mdash; much cheaper than annual.</li>
          <li className="flex items-start gap-2"><span className="text-coral font-bold">&#10003;</span> Seniors (65+) get discounted or free licenses in most states. Check your state&apos;s site.</li>
          <li className="flex items-start gap-2"><span className="text-coral font-bold">&#10003;</span> Most states offer free fishing days (usually in June) where no license is needed.</li>
          <li className="flex items-start gap-2"><span className="text-coral font-bold">&#10003;</span> Keep your license on your phone &mdash; most states accept digital proof.</li>
        </ul>
      </div>

      {/* FAQ */}
      <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
      <div className="space-y-2 mb-10">
        {[
          { q: "Do I need a fishing license to fish from a pier?", a: `It depends on the state. ${exemptStates.length} states exempt pier fishing, including Florida (licensed piers), California (public ocean piers), and Hawaii (no saltwater license). In other states, you need a license even on a pier.` },
          { q: "Which states allow free pier fishing?", a: `States with pier exemptions: ${exemptStates.map(s => s.name).join(", ")}. Some states like Massachusetts, New Jersey, and Rhode Island have free saltwater licenses/registrations for everyone.` },
          { q: "What happens if I fish without a license?", a: "Fines vary by state but typically range from $50-$500 for a first offense. Some states issue warnings. Game wardens do check piers — it's not worth the risk when most licenses cost less than a day's bait." },
        ].map((f, i) => (
          <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
            <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">{f.q}<svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></summary>
            <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
          </details>
        ))}
      </div>

      {/* Related */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link href="/blog/pier-fishing-complete-guide" className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-ocean transition">
          <p className="font-bold text-charcoal group-hover:text-ocean transition text-sm">Pier Fishing for Beginners</p>
          <p className="text-gray-400 text-xs mt-1">Everything you need to get started</p>
        </Link>
        <Link href="/species" className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-ocean transition">
          <p className="font-bold text-charcoal group-hover:text-ocean transition text-sm">Species Guide</p>
          <p className="text-gray-400 text-xs mt-1">What to catch from piers by species</p>
        </Link>
      </div>
    </div>
  );
}
