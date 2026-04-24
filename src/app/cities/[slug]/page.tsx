"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { unified } from "@/data/all-piers";
import cityPages from "@/data/city-pages.json";
import FeaturedArticle from "@/components/FeaturedArticle";

const PierMap = dynamic(() => import("@/components/PierMap"), { ssr: false, loading: () => <div className="rounded-xl bg-gray-100 flex items-center justify-center" style={{ height: 350 }}><p className="text-gray-400 text-sm">Loading map...</p></div> });

interface CityPage { state: string; stateName: string; stateSlug: string; city: string; citySlug: string; count: number; lat: number; lng: number; }
const allCityPages = cityPages as CityPage[];

export default function CityPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const cityInfo = allCityPages.find((c) => `${c.stateSlug}-${c.citySlug}` === slug);

  const piers = useMemo(() => {
    if (!cityInfo) return [];
    return unified.filter((p) => p.state === cityInfo.state && p.city?.trim() === cityInfo.city);
  }, [cityInfo]);

  const mapPiers = useMemo(() => piers.map(p => ({ id: p.id, name: p.name, latitude: p.latitude, longitude: p.longitude, city: p.city })), [piers]);
  const center = useMemo<[number, number]>(() => piers.length ? [piers.reduce((s, p) => s + p.latitude, 0) / piers.length, piers.reduce((s, p) => s + p.longitude, 0) / piers.length] : [39.8, -98.5], [piers]);

  const [search, setSearch] = useState("");
  const filtered = search.length >= 2
    ? piers.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : piers;

  const nearbyCities = useMemo(() => {
    if (!cityInfo) return [];
    return allCityPages
      .filter((c) => c !== cityInfo && c.count >= 2)
      .map((c) => ({ ...c, dist: Math.sqrt(Math.pow(c.lat - cityInfo.lat, 2) + Math.pow(c.lng - cityInfo.lng, 2)) }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 5);
  }, [cityInfo]);

  if (!cityInfo) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="font-[Cabin] text-3xl font-bold text-charcoal mb-4">City Not Found</h1>
        <Link href="/" className="text-ocean hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: `How many fishing piers are in ${cityInfo.city}, ${cityInfo.stateName}?`, acceptedAnswer: { "@type": "Answer", text: `There are ${piers.length} fishing piers in ${cityInfo.city}, ${cityInfo.stateName}. Browse them all on PierSeeker with maps and directions.` } },
          { "@type": "Question", name: `Where is the closest fishing pier in ${cityInfo.city}?`, acceptedAnswer: { "@type": "Answer", text: `PierSeeker lists all ${piers.length} fishing piers in ${cityInfo.city}, ${cityInfo.stateName} with exact GPS locations. Click any listing for directions.` } },
          { "@type": "Question", name: `Can I fish at night from piers in ${cityInfo.city}, ${cityInfo.stateName}?`, acceptedAnswer: { "@type": "Answer", text: `Night fishing rules vary by pier and jurisdiction in ${cityInfo.city}. Many public piers allow night fishing but check local regulations. PierSeeker lists amenities like lighting for each pier.` } },
        ],
      }) }} />
      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <Link href={`/${cityInfo.stateSlug}`} className="hover:text-ocean transition">{cityInfo.stateName}</Link><span>/</span>
        <span className="text-charcoal font-medium">{cityInfo.city}</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-2">Fishing Piers in {cityInfo.city}, {cityInfo.stateName}</h1>
      <p className="text-gray-500 mb-6">{piers.length} fishing pier{piers.length !== 1 ? "s" : ""} in {cityInfo.city}, {cityInfo.stateName}. Directions, amenities, and maps.</p>

      {piers.length > 5 && (
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search piers in this city..." className="w-full max-w-md px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-ocean transition mb-6" />
      )}

      {piers.length > 0 && <PierMap piers={mapPiers} center={center} zoom={12} height="350px" className="mb-8" />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
        {filtered.map((p) => (
          <Link key={p.id} href={`/piers/${p.id}`} className="group bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <h3 className="font-[Cabin] font-bold text-charcoal group-hover:text-ocean transition">{p.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{p.city}, {p.state}</p>
            <span className="text-sm font-semibold text-coral mt-2 inline-block">View Details &rarr;</span>
          </Link>
        ))}
      </div>

      {/* Intro */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-3">Fishing Piers in {cityInfo.city}, {cityInfo.stateName}</h2>
        <p className="text-gray-600 leading-relaxed text-sm">{cityInfo.city}, {cityInfo.stateName} has {piers.length} fishing pier{piers.length !== 1 ? "s" : ""} listed on PierSeeker. Browse all piers above with maps, amenities, and directions to plan your next fishing trip.</p>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 className="font-[Cabin] font-bold text-ocean mb-3">Tips for Pier Fishing in {cityInfo.city}</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Check that your fishing license is current before heading out.</li>
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Early morning and late afternoon are usually the best times to fish from piers.</li>
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Bring a variety of bait &mdash; live shrimp, cut bait, and artificial lures each work for different species.</li>
        </ul>
      </div>

      {/* Visible FAQ */}
      <div className="mb-8">
        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: `How many fishing piers are in ${cityInfo.city}, ${cityInfo.stateName}?`, a: `There are ${piers.length} fishing piers in ${cityInfo.city}, ${cityInfo.stateName} listed on PierSeeker with maps and directions.` },
            { q: `Are fishing piers in ${cityInfo.city} free?`, a: `Most public fishing piers in ${cityInfo.city} are free to access. Some may charge a small fee or require a fishing license.` },
            { q: `What fish can I catch from piers in ${cityInfo.city}?`, a: `Species vary by season and location. Check individual pier listings on PierSeeker for local catch reports and tips.` },
          ].map((f, i) => (
            <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
              <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">{f.q}<svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>

      <FeaturedArticle listingSlug={`city-${slug}`} />

      {/* Back to state */}
      <div className="text-center py-4">
        <Link href={`/${cityInfo.stateSlug}`} className="text-ocean hover:underline font-semibold text-sm">Browse all {cityInfo.stateName} fishing piers &rarr;</Link>
      </div>

      {nearbyCities.length > 0 && (
        <section>
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4">Nearby Cities with Fishing Piers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {nearbyCities.map((c) => (
              <Link key={`${c.stateSlug}-${c.citySlug}`} href={`/cities/${c.stateSlug}-${c.citySlug}`} className="bg-white border border-gray-200 rounded-lg p-3 hover:border-ocean transition">
                <p className="font-bold text-charcoal text-sm">{c.city}</p>
                <p className="text-gray-400 text-xs">{c.count} piers &middot; {c.stateName}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
