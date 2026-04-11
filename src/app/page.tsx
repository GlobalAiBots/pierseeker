"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { unified } from "@/data/all-piers";
import AdSlot from "@/components/AdSlot";
import CletusAd from "@/components/CletusAd";
import EmailCapture from "@/components/EmailCapture";
import NearMeButton from "@/components/NearMeButton";

const stateList: { name: string; slug: string; code: string }[] = [
  { name: "Alabama", slug: "alabama", code: "AL" },{ name: "Arizona", slug: "arizona", code: "AZ" },
  { name: "Arkansas", slug: "arkansas", code: "AR" },{ name: "California", slug: "california", code: "CA" },
  { name: "Colorado", slug: "colorado", code: "CO" },{ name: "Connecticut", slug: "connecticut", code: "CT" },
  { name: "Delaware", slug: "delaware", code: "DE" },{ name: "Florida", slug: "florida", code: "FL" },
  { name: "Georgia", slug: "georgia", code: "GA" },{ name: "Idaho", slug: "idaho", code: "ID" },
  { name: "Illinois", slug: "illinois", code: "IL" },{ name: "Indiana", slug: "indiana", code: "IN" },
  { name: "Iowa", slug: "iowa", code: "IA" },{ name: "Kansas", slug: "kansas", code: "KS" },
  { name: "Kentucky", slug: "kentucky", code: "KY" },{ name: "Louisiana", slug: "louisiana", code: "LA" },
  { name: "Maine", slug: "maine", code: "ME" },{ name: "Maryland", slug: "maryland", code: "MD" },
  { name: "Massachusetts", slug: "massachusetts", code: "MA" },{ name: "Michigan", slug: "michigan", code: "MI" },
  { name: "Minnesota", slug: "minnesota", code: "MN" },{ name: "Mississippi", slug: "mississippi", code: "MS" },
  { name: "Missouri", slug: "missouri", code: "MO" },{ name: "Montana", slug: "montana", code: "MT" },
  { name: "Nevada", slug: "nevada", code: "NV" },{ name: "New Hampshire", slug: "new-hampshire", code: "NH" },
  { name: "New Jersey", slug: "new-jersey", code: "NJ" },{ name: "New Mexico", slug: "new-mexico", code: "NM" },
  { name: "New York", slug: "new-york", code: "NY" },{ name: "North Carolina", slug: "north-carolina", code: "NC" },
  { name: "Ohio", slug: "ohio", code: "OH" },{ name: "Oklahoma", slug: "oklahoma", code: "OK" },
  { name: "Oregon", slug: "oregon", code: "OR" },{ name: "Pennsylvania", slug: "pennsylvania", code: "PA" },
  { name: "Rhode Island", slug: "rhode-island", code: "RI" },{ name: "South Carolina", slug: "south-carolina", code: "SC" },
  { name: "South Dakota", slug: "south-dakota", code: "SD" },{ name: "Tennessee", slug: "tennessee", code: "TN" },
  { name: "Texas", slug: "texas", code: "TX" },{ name: "Utah", slug: "utah", code: "UT" },
  { name: "Virginia", slug: "virginia", code: "VA" },{ name: "Washington", slug: "washington", code: "WA" },
  { name: "West Virginia", slug: "west-virginia", code: "WV" },{ name: "Wyoming", slug: "wyoming", code: "WY" },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const stateCounts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const r of unified) map[r.state] = (map[r.state] || 0) + 1;
    return map;
  }, []);

  const statesWithCounts = useMemo(() =>
    stateList.map((s) => ({ ...s, count: stateCounts[s.code] || 0 })).sort((a, b) => b.count - a.count),
  [stateCounts]);

  const suggestions = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    const results: { type: string; label: string; href: string }[] = [];
    stateList.filter((s) => s.name.toLowerCase().includes(q)).slice(0, 4).forEach((s) => {
      results.push({ type: "State", label: s.name, href: `/${s.slug}` });
    });
    unified.filter((r) => r.name.toLowerCase().includes(q)).slice(0, 5).forEach((r) => {
      results.push({ type: "Pier", label: `${r.name} (${r.state})`, href: `/piers/${r.id}` });
    });
    return results.slice(0, 8);
  }, [query]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "WebSite", name: "PierSeeker", url: "https://pierseeker.com",
        description: `Find fishing piers across the United States. ${unified.length.toLocaleString()}+ piers with GPS coordinates, amenities, and tips.`,
        potentialAction: { "@type": "SearchAction", target: "https://pierseeker.com/?q={search_term_string}", "query-input": "required name=search_term_string" },
      }) }} />

      {/* HERO */}
      <section className="relative py-20 md:py-32 text-center px-4 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-pier.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3D62]/80 via-[#0A3D62]/60 to-[#0A3D62]/80" />

        <div className="relative z-10">
          <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">Fishing Pier Directory</p>
          <h1 className="font-[Cabin] text-5xl md:text-7xl font-bold text-white leading-tight max-w-3xl mx-auto">Every Fishing Pier in America</h1>
          <p className="text-white/70 mt-4 max-w-lg mx-auto">{unified.length.toLocaleString()}+ fishing piers across {stateList.length} states. Find your spot.</p>

          <div className="max-w-xl mx-auto mt-8 relative">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by state, city, water body, or pier name..." className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-charcoal outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition shadow-2xl text-sm" />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden">
                {suggestions.map((s, i) => (
                  <Link key={i} href={s.href} className="flex items-center gap-3 px-4 py-3 hover:bg-ocean/5 transition border-b border-gray-100 last:border-0">
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{s.type}</span>
                    <span className="text-sm text-charcoal">{s.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center mt-4">
            <NearMeButton label="Find Piers Near Me" color="#0A3D62" />
          </div>

          <div className="flex gap-2 justify-center mt-4 flex-wrap max-w-2xl mx-auto">
            {statesWithCounts.slice(0, 6).map((s) => (
              <Link key={s.code} href={`/${s.slug}`} className="bg-white/15 hover:bg-white/25 text-white font-bold px-4 py-2 rounded-lg transition text-xs backdrop-blur-sm border border-white/10">{s.name} ({s.count.toLocaleString()})</Link>
            ))}
            <a href="#browse-states" className="text-white/70 hover:text-white font-semibold px-4 py-2 text-xs transition">Browse all {stateList.length} states &darr;</a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center mt-12">
            {[{ value: unified.length.toLocaleString(), label: "Fishing Piers" },{ value: String(stateList.length), label: "States" },{ value: "Free", label: "& Updated" },{ value: "GPS", label: "Verified" }].map((s) => (
              <div key={s.label}><p className="font-[Cabin] text-2xl font-bold text-white">{s.value}</p><p className="text-white/60 text-xs mt-0.5">{s.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="browse-states" className="max-w-5xl mx-auto px-4 pt-14 pb-8">
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-6">Browse by State</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {statesWithCounts.map((s) => (
            <Link key={s.code} href={`/${s.slug}`} className="group bg-white border border-gray-200 rounded-lg p-3 hover:border-ocean hover:shadow-sm transition">
              <p className="font-bold text-charcoal text-sm group-hover:text-ocean transition">{s.name}</p>
              <p className="text-gray-400 text-xs">{s.count.toLocaleString()} piers</p>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot position="homepage-mid" />

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal text-center mb-8">Why PierSeeker</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "&#128205;", title: "GPS Coordinates", desc: "Exact location for every pier. Never end up at a private dock again." },
            { icon: "&#127907;", title: "Amenity Info", desc: "Find piers with fish cleaning stations, bait shops, lighting, restrooms." },
            { icon: "&#128172;", title: "Local Tips", desc: "Real advice from anglers who fish these piers every week." },
            { icon: "&#128274;", title: "Free Forever", desc: "No login. No account. No fees. Just find your pier and go fish." },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center">
              <p className="text-2xl mb-2" dangerouslySetInnerHTML={{ __html: f.icon }} />
              <h3 className="font-[Cabin] font-bold text-charcoal text-sm mb-1">{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot position="homepage-pre-faq" />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many fishing piers does PierSeeker cover?", a: `We have data on ${unified.length.toLocaleString()}+ fishing piers, docks, and jetties across ${stateList.length} states.` },
            { q: "Is PierSeeker free?", a: "Yes, completely free. No login, no account needed. Just find your pier and go fish." },
            { q: "What types of piers are included?", a: "Saltwater piers, freshwater docks, public jetties, fishing platforms, and any public fishing access point." },
            { q: "Can I submit a pier you're missing?", a: "Yes! Email hello@pierseeker.com with the pier name and location." },
          ].map((f, i) => (
            <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
              <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">{f.q}<svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <EmailCapture />
      <div className="max-w-5xl mx-auto px-4"><CletusAd /></div>

      <section id="submit" className="max-w-2xl mx-auto px-4 pb-20">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-2">Know a pier we&apos;re missing?</h2>
          <p className="text-gray-500 text-sm mb-6">Help us build the most complete pier directory in America.</p>
          <a href="mailto:hello@pierseeker.com?subject=New%20Pier%20Submission" className="bg-coral hover:bg-coral-dark text-white font-bold py-3 px-8 rounded-lg transition shadow-sm inline-block">Submit a Pier</a>
        </div>
      </section>
    </div>
  );
}
