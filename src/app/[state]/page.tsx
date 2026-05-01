"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { unified, isGenericName } from "@/data/all-piers";
import { getStateInfo } from "@/data/state-info";
import { getStateEditorial } from "@/data/state-editorial";
import precomputedCities from "@/data/state-cities-prefiltered.json";
import pierTotals from "@/data/state-pier-totals.json";
import CletusAd from "@/components/CletusAd";
import FeaturedArticle from "@/components/FeaturedArticle";
import PierList from "@/components/PierList";

const PierMap = dynamic(() => import("@/components/PierMap"), {
  ssr: false,
  loading: () => (
    <div
      className="rounded-xl bg-gray-100 flex items-center justify-center"
      style={{ height: 350 }}
    >
      <p className="text-gray-400 text-sm">Loading map...</p>
    </div>
  ),
});

interface PrecomputedCity {
  city: string;
  citySlug: string;
  slug: string;
  count: number;
  lat: number;
  lng: number;
}

export default function StatePage() {
  const params = useParams();
  const stateSlug = String(params?.state || "");
  const info = getStateInfo(stateSlug);

  const stPiers = useMemo(
    () => (info?.code ? unified.filter((r) => r.state === info.code) : []),
    [info?.code],
  );
  const namedCount = useMemo(
    () => stPiers.filter((p) => !isGenericName(p.name)).length,
    [stPiers],
  );

  if (!info) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="font-[Cabin] text-3xl font-bold text-charcoal mb-4">State Not Found</h1>
        <Link href="/" className="text-ocean hover:underline">Back to Home</Link>
      </div>
    );
  }

  const editorial = getStateEditorial(stateSlug);
  const cities = ((precomputedCities as unknown) as Record<string, PrecomputedCity[]>)[stateSlug] || [];
  const stateTotal = ((pierTotals as unknown) as Record<string, number>)[stateSlug] || 0;

  // Render the intro paragraph: editorial override > extracted state intro > generic
  const renderIntro = () => {
    if (editorial?.introOverride) return editorial.introOverride;
    if (info.introParagraph) {
      return info.introParagraph
        .replace(/\$\{stateTotal\.toLocaleString\(\)\}/g, stateTotal.toLocaleString())
        .replace(/\$\{stateTotal\}/g, String(stateTotal));
    }
    return `${info.name} has ${stateTotal.toLocaleString()} piers verified in the PierSeeker directory. Browse below for locations, ratings, and access details.`;
  };

  // FAQ: state-info extracted items, with stateTotal interpolated, plus optional editorial extras
  const baseFaqs = info.faqItems.map((f) => ({
    q: f.q
      .replace(/\$\{stateTotal\.toLocaleString\(\)\}/g, stateTotal.toLocaleString())
      .replace(/\$\{stateTotal\}/g, String(stateTotal)),
    a: f.a
      .replace(/\$\{stateTotal\.toLocaleString\(\)\}/g, stateTotal.toLocaleString())
      .replace(/\$\{stateTotal\}/g, String(stateTotal)),
  }));
  const faqs = [...baseFaqs, ...(editorial?.faqExtra || [])];

  const mapPins = stPiers.map((p) => ({
    id: p.id,
    name: p.name,
    latitude: p.latitude,
    longitude: p.longitude,
    city: p.city,
  }));
  const mapCenter: [number, number] = stPiers.length > 0
    ? [
        stPiers.reduce((s, p) => s + p.latitude, 0) / stPiers.length,
        stPiers.reduce((s, p) => s + p.longitude, 0) / stPiers.length,
      ]
    : [39.8, -98.5];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
      {editorial && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `Piers in ${info.name}: The Complete Guide`,
          description: editorial.introOverride,
          datePublished: "2026-04-30",
          dateModified: "2026-04-30",
          author: { "@type": "Organization", name: "PierSeeker Editorial" },
          publisher: { "@type": "Organization", name: "PierSeeker" },
          articleSection: "Piers",
          keywords: ["pier", "fishing pier", info.name, "fishing access"],
        }) }} />
      )}

      <section
        className="py-16 md:py-24 text-center px-4 bg-cream"
        style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(10,61,98,0.06) 0%, transparent 50%)" }}
      >
        <p className="text-ocean text-sm font-bold tracking-wider uppercase mb-3 font-[Cabin]">{info.name} Fishing Pier Directory</p>
        <h1 className="font-[Cabin] text-4xl md:text-5xl font-bold text-charcoal leading-tight max-w-3xl mx-auto">Every Fishing Pier in {info.name}</h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">{stateTotal.toLocaleString()}+ fishing piers across {info.name}. Saltwater, freshwater, and river access. {namedCount} named piers with details.</p>
      </section>

      {/* Brief intro */}
      <section className="max-w-4xl mx-auto px-4 pt-8">
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{renderIntro()}</p>
      </section>

      {/* Map */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <PierMap piers={mapPins} center={mapCenter} zoom={7} height="350px" className="mb-4" />
      </div>

      {/* Cities sub-grid */}
      {cities.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pt-8 pb-4">
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4">Browse by City</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {cities.slice(0, 16).map((c) => (
              <Link
                key={c.slug}
                href={`/cities/${c.slug}`}
                className="text-left bg-white border border-gray-200 rounded-lg p-3 hover:border-ocean hover:shadow-sm transition"
              >
                <p className="font-bold text-charcoal text-sm">{c.city}</p>
                <p className="text-gray-400 text-xs">{c.count} pier{c.count !== 1 ? "s" : ""}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Editorial (top-10 only) */}
      {editorial && (
        <section className="max-w-3xl mx-auto my-12 px-4">
          <div className="text-xs uppercase tracking-wide text-gray-500 mb-6 text-center font-[Cabin]">
            The Complete Guide
          </div>
          {editorial.h2Blocks.map((block, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="font-[Cabin] text-2xl md:text-3xl font-bold text-charcoal mb-4">{block.heading}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{block.body}</p>
            </div>
          ))}
        </section>
      )}

      {/* Pier directory */}
      <PierList piers={stPiers} stateName={info.name} />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-4">{info.name} Pier Fishing FAQ</h2>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
              <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
                {f.q}
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <FeaturedArticle listingSlug={`state-${stateSlug}`} />
        <CletusAd />
      </div>
    </div>
  );
}
