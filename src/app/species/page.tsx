import Link from "next/link";
import { species } from "@/data/species";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pier Fishing Species Guide | PierSeeker",
  description: "Learn how to catch the most popular pier fishing species in America. Guides for redfish, flounder, striped bass, sheepshead, bluefish, Spanish mackerel, snook, and catfish.",
  openGraph: { title: "Pier Fishing Species Guide", url: "https://pierseeker.com/species", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Pier Fishing Species Guide | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/species" },
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

export default function SpeciesIndexPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pierseeker.com" },
          { "@type": "ListItem", position: 2, name: "Species", item: "https://pierseeker.com/species" },
        ],
      }) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <span className="text-charcoal font-medium">Species</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-4 leading-tight">
        Pier Fishing Species Guide
      </h1>
      <p className="text-gray-600 mb-10 max-w-2xl leading-relaxed">
        From redfish in the Gulf to striped bass in the Northeast, these are the most popular species caught from fishing piers across America. Each guide covers the best bait, tackle, seasons, and tips for catching them from a pier.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {species.map((s) => (
          <Link
            key={s.slug}
            href={`/species/${s.slug}`}
            className="group block bg-white border border-gray-200 hover:border-ocean/40 rounded-xl p-6 text-center transition hover:shadow-md"
          >
            <span className="text-4xl block mb-3">{speciesEmoji[s.slug] || "🐟"}</span>
            <h2 className="font-[Cabin] text-lg font-bold text-charcoal group-hover:text-ocean transition mb-1">{s.name}</h2>
            <p className="text-xs text-gray-400 italic mb-3">{s.scientificName}</p>
            <p className="text-sm text-gray-500 mb-2">{s.bestSeason}</p>
            <span className="inline-block text-xs text-ocean font-semibold bg-ocean/5 rounded-full px-3 py-1">
              View Guide &rarr;
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
