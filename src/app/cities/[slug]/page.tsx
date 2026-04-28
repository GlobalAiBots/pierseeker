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
          { "@type": "Question", name: `How many fishing piers are in ${cityInfo.city}, ${cityInfo.stateName}?`, acceptedAnswer: { "@type": "Answer", text: `There are ${piers.length} fishing piers in ${cityInfo.city}, ${cityInfo.stateName} listed on PierSeeker with maps, amenities, and directions for each location.` } },
          { "@type": "Question", name: `Do I need a fishing license to fish from piers in ${cityInfo.city}?`, acceptedAnswer: { "@type": "Answer", text: `Most public piers in ${cityInfo.stateName} require a current state fishing license for anglers 16 and older. A handful of municipal piers offer license-free fishing — check each pier's detail page for specifics.` } },
          { "@type": "Question", name: `What fish species are common at ${cityInfo.city} piers?`, acceptedAnswer: { "@type": "Answer", text: `Anglers fishing piers near ${cityInfo.city} typically catch species like flounder, redfish, croaker, sheepshead, and bluefish in saltwater areas, or bass, crappie, and catfish at freshwater piers. Local bait shops post current catch reports.` } },
          { "@type": "Question", name: `Are any of the ${cityInfo.city} fishing piers free?`, acceptedAnswer: { "@type": "Answer", text: `Many public piers near ${cityInfo.city} are free to access. Some city- or county-managed piers charge a small daily fee, and a license fee may still apply — see each pier's detail page for cost specifics.` } },
          { "@type": "Question", name: `Is PierSeeker free to use?`, acceptedAnswer: { "@type": "Answer", text: `Yes. PierSeeker is 100% free for anglers. Browse all ${piers.length} piers in ${cityInfo.city}, save GPS coordinates, and get directions — no account required.` } },
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
        <p className="text-gray-600 leading-relaxed text-sm">
          {cityInfo.city}, {cityInfo.stateName} offers {piers.length} fishing pier{piers.length !== 1 ? "s" : ""} for local anglers and visiting fishermen. {cityInfo.city} provides shoreline access for both saltwater and freshwater anglers, depending on the pier — from sunrise sessions chasing flounder and croaker to evening trips for bass and catfish. Whether you&apos;re bringing kids out for their first cast, targeting trophy species, or just looking for a quiet morning over the water, the {piers.length} pier{piers.length !== 1 ? "s" : ""} below serve {cityInfo.city} and the surrounding area with verified GPS coordinates, amenity details, and turn-by-turn directions. Most public piers are open year-round, though seasonal closures and license rules can affect access &mdash; always check current regulations before heading out.
        </p>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 className="font-[Cabin] font-bold text-ocean mb-3">Tips for Pier Fishing in {cityInfo.city}</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Make sure your {cityInfo.stateName} fishing license is current &mdash; <Link href={`/${cityInfo.stateSlug}`} className="text-ocean hover:underline">see {cityInfo.stateName} pier guide</Link>.</li>
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Early morning and late afternoon tend to produce the best bites at most {cityInfo.city} piers.</li>
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Bring a variety of bait &mdash; live shrimp, cut bait, and artificial lures each target different species.</li>
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Check tide charts before heading to coastal piers &mdash; many pier species feed actively on a moving tide.</li>
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Stop at a local bait shop near the pier for current catch reports and the most effective rigs of the season.</li>
        </ul>
      </div>

      {/* Visible FAQ */}
      <div className="mb-8">
        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: `How many fishing piers are in ${cityInfo.city}, ${cityInfo.stateName}?`, a: `There are ${piers.length} fishing piers in ${cityInfo.city}, ${cityInfo.stateName} listed on PierSeeker with maps, amenities, and directions for each location.` },
            { q: `Do I need a fishing license to fish from piers in ${cityInfo.city}?`, a: `Most public piers in ${cityInfo.stateName} require a current state fishing license for anglers 16 and older. A handful of municipal piers offer license-free fishing — check each pier's detail page for specifics.` },
            { q: `What fish species are common at ${cityInfo.city} piers?`, a: `Anglers fishing piers near ${cityInfo.city} typically catch species like flounder, redfish, croaker, sheepshead, and bluefish in saltwater areas, or bass, crappie, and catfish at freshwater piers. Local bait shops post current catch reports.` },
            { q: `Are any of the ${cityInfo.city} fishing piers free?`, a: `Many public piers near ${cityInfo.city} are free to access. Some city- or county-managed piers charge a small daily fee, and a license fee may still apply — see each pier's detail page for cost specifics.` },
            { q: `Is PierSeeker free to use?`, a: `Yes. PierSeeker is 100% free for anglers. Browse all ${piers.length} piers in ${cityInfo.city}, save GPS coordinates, and get directions — no account required.` },
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
