import Link from "next/link";
import { species, getSpeciesBySlug } from "@/data/species";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GearRecommendation from "@/components/GearRecommendation";

const stateNames: Record<string, { name: string; slug: string }> = {
  FL: { name: "Florida", slug: "florida" },
  TX: { name: "Texas", slug: "texas" },
  LA: { name: "Louisiana", slug: "louisiana" },
  SC: { name: "South Carolina", slug: "south-carolina" },
  NC: { name: "North Carolina", slug: "north-carolina" },
  VA: { name: "Virginia", slug: "virginia" },
  NJ: { name: "New Jersey", slug: "new-jersey" },
  NY: { name: "New York", slug: "new-york" },
  MA: { name: "Massachusetts", slug: "massachusetts" },
  CT: { name: "Connecticut", slug: "connecticut" },
  GA: { name: "Georgia", slug: "georgia" },
  TN: { name: "Tennessee", slug: "tennessee" },
  MS: { name: "Mississippi", slug: "mississippi" },
  AL: { name: "Alabama", slug: "alabama" },
};

const speciesEmoji: Record<string, string> = {
  redfish: "🔴",
  flounder: "🐟",
  "striped-bass": "🐠",
  sheepshead: "🐑",
  bluefish: "🔵",
  "spanish-mackerel": "⚡",
  snook: "🌊",
  catfish: "🐱",
};

export function generateStaticParams() {
  return species.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const fish = getSpeciesBySlug(slug);
  if (!fish) return {};
  return {
    title: `Where to Catch ${fish.name} from a Pier | PierSeeker`,
    description: `Complete pier fishing guide for ${fish.name} (${fish.scientificName}). Best bait, tackle, seasons, and top pier locations for catching ${fish.name.toLowerCase()}.`,
    openGraph: { title: `Where to Catch ${fish.name} from a Pier`, url: `https://www.pierseeker.com/species/${slug}`, siteName: "PierSeeker" },
    twitter: { card: "summary", title: `Where to Catch ${fish.name} from a Pier | PierSeeker` },
    alternates: { canonical: `https://www.pierseeker.com/species/${slug}` },
  };
}

export default async function SpeciesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fish = getSpeciesBySlug(slug);
  if (!fish) notFound();

  const otherSpecies = species.filter((s) => s.slug !== slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Pier Fishing for ${fish.name}: Complete Guide`,
    datePublished: "2026-04-16",
    author: { "@type": "Organization", name: "PierSeeker" },
    publisher: { "@type": "Organization", name: "PierSeeker", url: "https://www.pierseeker.com" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pierseeker.com" },
      { "@type": "ListItem", position: 2, name: "Species", item: "https://www.pierseeker.com/species" },
      { "@type": "ListItem", position: 3, name: fish.name, item: `https://www.pierseeker.com/species/${slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fish.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <Link href="/species" className="hover:text-ocean transition">Species</Link><span>/</span>
        <span className="text-charcoal font-medium">{fish.name}</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-2 leading-tight">
        Pier Fishing for {fish.name}: Complete Guide
      </h1>
      <p className="text-gray-400 text-sm italic mb-8">{fish.scientificName}</p>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>{fish.description}</p>

        {/* Quick Facts */}
        <div className="bg-cream border border-gray-200 rounded-xl p-6 not-prose">
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4">Quick Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-ocean">Best Season:</span>
              <span className="ml-2 text-gray-700">{fish.bestSeason}</span>
            </div>
            <div>
              <span className="font-semibold text-ocean">Peak Months:</span>
              <span className="ml-2 text-gray-700">{fish.peakMonths}</span>
            </div>
            <div>
              <span className="font-semibold text-ocean">Average Size:</span>
              <span className="ml-2 text-gray-700">{fish.averageSize}</span>
            </div>
            <div>
              <span className="font-semibold text-ocean">Record Size:</span>
              <span className="ml-2 text-gray-700">{fish.recordSize}</span>
            </div>
          </div>
        </div>

        {/* Best States */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Best States for {fish.name}</h2>
        <p>
          {fish.name} are most commonly caught from piers in the following states. Click a state to browse all public fishing piers with free GPS coordinates and directions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 not-prose">
          {fish.bestStates.map((code) => {
            const state = stateNames[code];
            if (!state) return null;
            return (
              <Link
                key={code}
                href={`/${state.slug}`}
                className="block bg-ocean/5 hover:bg-ocean/10 border border-ocean/20 rounded-lg p-4 text-center transition"
              >
                <span className="text-ocean font-semibold text-sm">{state.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Best Bait & Tackle */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Best Bait &amp; Tackle</h2>
        <p>{fish.bestTackle}</p>
        <h3 className="font-[Cabin] text-lg font-bold text-charcoal mt-6 mb-3">Top Baits</h3>
        <ul className="space-y-2">
          {fish.bestBait.map((bait, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-coral mt-1">&#x2714;</span>
              <span>{bait}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 mt-4">
          Shop pier fishing tackle on{" "}
          <a
            href={`https://www.amazon.com/s?k=${encodeURIComponent(fish.name + " pier fishing tackle")}&tag=babymydog03-20`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean font-semibold hover:underline"
          >
            Amazon
          </a>{" "}
          &mdash;{" "}
          <a
            href={`https://www.amazon.com/s?k=${encodeURIComponent(fish.bestBait[0])}&tag=babymydog03-20`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean font-semibold hover:underline"
          >
            {fish.bestBait[0]}
          </a>{" "}
          |{" "}
          <a
            href={`https://www.amazon.com/s?k=${encodeURIComponent("pier fishing rod reel combo")}&tag=babymydog03-20`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean font-semibold hover:underline"
          >
            Rod &amp; Reel Combos
          </a>
        </p>

        {/* Recommended Tackle */}
        <div className="not-prose">
          <GearRecommendation section="tackle" heading={`Terminal Tackle for ${fish.name}`} />
        </div>

        {/* Pro Tips */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Pro Tips for Catching {fish.name} from a Pier</h2>
        <div className="space-y-4 not-prose">
          {fish.tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-3 bg-ocean/5 rounded-lg p-4">
              <span className="text-ocean font-bold text-lg mt-0.5">{i + 1}</span>
              <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3 not-prose">
          {fish.faq.map((f, i) => (
            <details key={i} className="group border border-gray-200 rounded-lg">
              <summary className="cursor-pointer p-4 font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">
                {f.q}
                <span className="text-ocean ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
              </summary>
              <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>

        {/* Related Species */}
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-4">Explore More Species</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 not-prose">
          {otherSpecies.map((s) => (
            <Link
              key={s.slug}
              href={`/species/${s.slug}`}
              className="block bg-white border border-gray-200 hover:border-ocean/40 rounded-lg p-4 text-center transition hover:shadow-sm"
            >
              <span className="text-2xl block mb-1">{speciesEmoji[s.slug] || "🐟"}</span>
              <span className="text-charcoal font-semibold text-sm">{s.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
