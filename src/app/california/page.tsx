"use client";

import dynamic from "next/dynamic";
const PierMap = dynamic(() => import("@/components/PierMap"), { ssr: false, loading: () => <div className="rounded-xl bg-gray-100 flex items-center justify-center" style={{ height: 350 }}><p className="text-gray-400 text-sm">Loading map...</p></div> });

import Link from "next/link";

import { useState, useMemo } from "react";

import { unified, isGenericName } from "@/data/all-piers";
import CletusAd from "@/components/CletusAd";
import FeaturedArticle from "@/components/FeaturedArticle";
import PierList from "@/components/PierList";

export default function CaliforniaPage() {
  const stPiers = useMemo(() => unified.filter((r) => r.state === "CA"), []);

  const cityMap = useMemo(() => {
    const m: Record<string, number> = {};
    for (const r of stPiers) { const c = r.city?.trim(); if (c && c.length > 1) m[c] = (m[c] || 0) + 1; }
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
  }, [stPiers]);

  const namedCount = useMemo(() => stPiers.filter(p => !isGenericName(p.name)).length, [stPiers]);

  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const filteredPiers = selectedCity ? stPiers.filter(p => p.city?.trim() === selectedCity) : stPiers;

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How many fishing piers are in California?", acceptedAnswer: { "@type": "Answer", text: `There are ${stPiers.length} fishing piers in California. PierSeeker has mapped every public pier, dock, and jetty across the state.` } },
          { "@type": "Question", name: "Do I need a fishing license to fish from a pier in California?", acceptedAnswer: { "@type": "Answer", text: "Most states require a fishing license even when fishing from a public pier. Check California's fish and wildlife department for current license requirements and fees." } },
          { "@type": "Question", name: "Are there free fishing piers in California?", acceptedAnswer: { "@type": "Answer", text: "Many fishing piers in California are free to access, especially those at public parks and state recreation areas. Some popular piers may charge a small access fee." } },
          { "@type": "Question", name: "What fish can I catch from piers in California?", acceptedAnswer: { "@type": "Answer", text: "Species vary by location and season. Coastal piers in California often yield redfish, flounder, and trout. Freshwater piers are great for bass, catfish, and crappie." } },
          { "@type": "Question", name: "How do I find fishing piers near me in California?", acceptedAnswer: { "@type": "Answer", text: `Use PierSeeker to browse all ${stPiers.length} fishing piers in California by city. Each listing includes a map, GPS coordinates, and directions.` } },
          { "@type": "Question", name: "Do you need a fishing license to fish from a pier?", acceptedAnswer: { "@type": "Answer", text: "It depends on the state. Some states like Florida and California exempt licensed public piers from individual license requirements. Check our fishing license guide for your state." } },
          { "@type": "Question", name: "Are fishing piers free?", acceptedAnswer: { "@type": "Answer", text: "Most public fishing piers are free. Some popular piers charge $3-10 per person. State park piers may require park entry fees. Municipal piers are usually free." } },
          { "@type": "Question", name: "What is the best time to fish from a pier?", acceptedAnswer: { "@type": "Answer", text: "Early morning (dawn to 9am) and late afternoon (4pm to sunset) are best. Tidal changes create feeding activity. Night fishing under pier lights is excellent for many species." } },
          { "@type": "Question", name: "Can you catch big fish from a pier?", acceptedAnswer: { "@type": "Answer", text: "Yes. Pier anglers regularly catch tarpon, king mackerel, cobia, bull redfish, and sharks. Deep-water piers and those near inlets produce the largest fish." } },
        ],
      }) }} />
      <section className="py-16 md:py-24 text-center px-4 bg-cream" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(10,61,98,0.06) 0%, transparent 50%)" }}>
        <p className="text-ocean text-sm font-bold tracking-wider uppercase mb-3 font-[Cabin]">California Fishing Pier Directory</p>
        <h1 className="font-[Cabin] text-4xl md:text-5xl font-bold text-charcoal leading-tight max-w-3xl mx-auto">Every Fishing Pier in California</h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">{stPiers.length}+ fishing piers across California. Saltwater, freshwater, and river access. {namedCount} named piers with details.</p>
      </section>

      

      {/* State intro + tips */}
      <section className="max-w-4xl mx-auto px-4 pt-10 pb-2">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-3">Pier Fishing in California</h2>
          <p className="text-gray-600 leading-relaxed text-sm">California offers {stPiers.length.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Pacific coastline, San Francisco Bay, and the Sacramento Delta, there&apos;s no shortage of places to cast a line. Popular catches include halibut, rockfish, and striped bass.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
          <h3 className="font-[Cabin] font-bold text-ocean mb-3">Tips for Pier Fishing in California</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Check California&apos;s fishing license requirements &mdash; most states require one even for pier fishing.</li>
            <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Best times to fish from piers are early morning, late afternoon, and around tidal changes.</li>
            <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Bring a variety of bait &mdash; shrimp, cut bait, and artificial lures all work from piers.</li>
            <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Always check weather and water conditions before heading to any pier.</li>
            <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Read our <Link href="/blog/pier-fishing-tips-for-beginners" className="text-ocean hover:underline">pier fishing tips guide</Link> for more advice.</li>
          </ul>
        </div>
      </section>

      {/* State Map */}
      {(() => {
        const mapPins = stPiers.map(p => ({ id: p.id, name: p.name, latitude: p.latitude, longitude: p.longitude, city: p.city }));
        const center: [number, number] = stPiers.length > 0 ? [stPiers.reduce((s, p) => s + p.latitude, 0) / stPiers.length, stPiers.reduce((s, p) => s + p.longitude, 0) / stPiers.length] : [39.8, -98.5];
        return <div className="max-w-6xl mx-auto px-4 pt-8"><PierMap piers={mapPins} center={center} zoom={7} height="350px" className="mb-4" /></div>;
      })()}

      {cityMap.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pt-8 pb-8">
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4">Browse by City</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {cityMap.slice(0, 16).map(([city, count]) => (
              <Link key={city} href={`/cities/california-${city.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`} className="text-left bg-white border border-gray-200 rounded-lg p-3 hover:border-ocean hover:shadow-sm transition"><p className="font-bold text-charcoal text-sm">{city}</p><p className="text-gray-400 text-xs">{count} pier{count !== 1 ? "s" : ""}</p></Link>
            ))}
          </div>
        </section>
      )}

      <div id="pier-list">{selectedCity && <div className="max-w-6xl mx-auto px-4 pb-4"><button onClick={() => setSelectedCity(null)} className="text-sm text-ocean hover:underline">&larr; Show all {stPiers.length} piers</button></div>}</div><PierList piers={filteredPiers} stateName="California" />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-4">California Pier Fishing FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "How many fishing piers are in California?", a: `PierSeeker lists ${stPiers.length}+ fishing piers, docks, and jetties across California.` },
            { q: "Do I need a fishing license in California?", a: "Most states require a fishing license even when fishing from a public pier. Check California's fish and wildlife department for current requirements." },
            { q: "What fish can I catch from piers in California?", a: "Popular catches from California piers include halibut, rockfish, and striped bass. Species vary by location and season." },
            { q: "Are fishing piers in California free?", a: "Many fishing piers in California are free to access. Some popular piers may charge a small fee during peak season." },
            { q: "Is PierSeeker free?", a: "Yes, completely free. No login, no account, no fees. Just find your pier and go fish." },
          ].map((f, i) => (
            <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
              <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">{f.q}<svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4"><FeaturedArticle listingSlug={"state-california"} />
      <CletusAd /></div>
    </div>
  );
}
