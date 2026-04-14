"use client";

import { useState, useMemo } from "react";

import { unified, isGenericName } from "@/data/all-piers";
import CletusAd from "@/components/CletusAd";
import FeaturedArticle from "@/components/FeaturedArticle";
import PierList from "@/components/PierList";

export default function WyomingPage() {
  const stPiers = useMemo(() => unified.filter((r) => r.state === "WY"), []);

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
          { "@type": "Question", name: "How many fishing piers are in Wyoming?", acceptedAnswer: { "@type": "Answer", text: `There are ${stPiers.length} fishing piers in Wyoming. PierSeeker has mapped every public pier, dock, and jetty across the state.` } },
          { "@type": "Question", name: "Do I need a fishing license to fish from a pier in Wyoming?", acceptedAnswer: { "@type": "Answer", text: "Most states require a fishing license even when fishing from a public pier. Check Wyoming's fish and wildlife department for current license requirements and fees." } },
          { "@type": "Question", name: "Are there free fishing piers in Wyoming?", acceptedAnswer: { "@type": "Answer", text: "Many fishing piers in Wyoming are free to access, especially those at public parks and state recreation areas. Some popular piers may charge a small access fee." } },
          { "@type": "Question", name: "What fish can I catch from piers in Wyoming?", acceptedAnswer: { "@type": "Answer", text: "Species vary by location and season. Coastal piers in Wyoming often yield redfish, flounder, and trout. Freshwater piers are great for bass, catfish, and crappie." } },
          { "@type": "Question", name: "How do I find fishing piers near me in Wyoming?", acceptedAnswer: { "@type": "Answer", text: `Use PierSeeker to browse all ${stPiers.length} fishing piers in Wyoming by city. Each listing includes a map, GPS coordinates, and directions.` } },
        ],
      }) }} />
      <section className="py-16 md:py-24 text-center px-4 bg-cream" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(10,61,98,0.06) 0%, transparent 50%)" }}>
        <p className="text-ocean text-sm font-bold tracking-wider uppercase mb-3 font-[Cabin]">Wyoming Fishing Pier Directory</p>
        <h1 className="font-[Cabin] text-4xl md:text-5xl font-bold text-charcoal leading-tight max-w-3xl mx-auto">Every Fishing Pier in Wyoming</h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">{stPiers.length}+ fishing piers across Wyoming. Saltwater, freshwater, and river access. {namedCount} named piers with details.</p>
      </section>

      {cityMap.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pt-8 pb-8">
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4">Browse by City</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {cityMap.slice(0, 16).map(([city, count]) => (
              <button key={city} onClick={() => { setSelectedCity(city === selectedCity ? null : city); document.getElementById("pier-list")?.scrollIntoView({ behavior: "smooth" }); }} className={"text-left bg-white border rounded-lg p-3 hover:border-ocean hover:bg-[#E8F4F8] transition cursor-pointer " + (selectedCity === city ? "border-ocean bg-[#E8F4F8] ring-2 ring-ocean" : "border-gray-200")}>
                <p className="font-bold text-charcoal text-sm">{city}</p>
                <p className="text-gray-400 text-xs">{count} pier{count !== 1 ? "s" : ""}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      <div id="pier-list">{selectedCity && <div className="max-w-6xl mx-auto px-4 pb-4"><button onClick={() => setSelectedCity(null)} className="text-sm text-ocean hover:underline">&larr; Show all {stPiers.length} piers</button></div>}</div><PierList piers={filteredPiers} stateName="Wyoming" />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-4">Wyoming Pier Fishing FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "How many fishing piers are in Wyoming?", a: `PierSeeker lists ${stPiers.length}+ fishing piers across Wyoming.` },
            { q: "Is PierSeeker free?", a: "Yes, completely free. No login, no account, no fees." },
          ].map((f, i) => (
            <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
              <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">{f.q}<svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4"><FeaturedArticle listingSlug={"state-wyoming"} />
      <CletusAd /></div>
    </div>
  );
}
