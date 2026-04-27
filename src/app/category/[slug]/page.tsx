"use client";

import { useMemo } from "react";
import Link from "next/link";
import categoriesData from "@/data/categories.json";
import { CATEGORY_EDITORIALS, ARTICLE_HEADER_H1_CLASS, ARTICLE_HEADER_PROSE_CLASS, ARTICLE_BODY_PROSE_CLASS, TRANSITION_DIVIDER_LABEL } from "@/data/category-editorials";

interface CatState { code: string; name: string; slug: string; count: number; }
interface Category { slug: string; title: string; description: string; totalCount: number; states: CatState[]; }
const categories = categoriesData as Category[];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const category = useMemo(() => categories.find((c) => c.slug === slug), [slug]);
  const editorial = CATEGORY_EDITORIALS[slug];

  if (!category) return <div className="max-w-2xl mx-auto px-4 py-20 text-center"><h1 className="font-[Cabin] text-3xl font-bold text-charcoal mb-4">Category Not Found</h1><Link href="/" className="text-ocean hover:underline">Back to Home</Link></div>;

  const articleJsonLd = editorial ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: editorial.h1,
    description: editorial.metaDescription,
    author: { "@type": "Organization", name: "PierSeeker", url: "https://www.pierseeker.com" },
    publisher: { "@type": "Organization", name: "PierSeeker", url: "https://www.pierseeker.com" },
    datePublished: "2026-04-27",
    dateModified: "2026-04-27",
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.pierseeker.com/category/${slug}` },
    articleSection: "Fishing Guides",
  } : null;

  return (
    <div>
      {articleJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.pierseeker.com" }, { "@type": "ListItem", position: 2, name: category.title, item: `https://www.pierseeker.com/category/${slug}` }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: (editorial?.faqItems || [
        { q: `How many ${category.title.toLowerCase()} are in America?`, a: `PierSeeker lists ${category.totalCount.toLocaleString()} ${category.title.toLowerCase()} across ${category.states.length} states.` },
        { q: `Do I need a fishing license to fish from ${category.title.toLowerCase()}?`, a: `Most states require a fishing license even when fishing from a pier. Some states offer free fishing days or pier-specific exemptions. Check your state's regulations.` },
        { q: `How do I find ${category.title.toLowerCase()} near me?`, a: `Browse PierSeeker by state to find ${category.title.toLowerCase()} in your area with GPS coordinates, maps, and amenity details.` },
      ]).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
          <span className="text-charcoal font-medium">{category.title}</span>
        </nav>
      </div>

      {/* Article HEADER — H1 + intro paragraphs above directory */}
      {editorial && (
        <article id="category-guide" className="max-w-3xl mx-auto px-4 pb-8">
          <h1 className={ARTICLE_HEADER_H1_CLASS}>{editorial.h1}</h1>
          <div className={ARTICLE_HEADER_PROSE_CLASS}>{editorial.intro}</div>
        </article>
      )}

      {/* Directory section */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {!editorial && (
          <>
            <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-2">{category.title} in America</h1>
            <p className="text-gray-500 mb-2">{category.totalCount.toLocaleString()} piers across {category.states.length} states</p>
            <p className="text-gray-400 text-sm mb-8">{category.description}</p>
          </>
        )}
        {editorial && (
          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-2">{category.title} by State</h2>
        )}
        {editorial && (
          <p className="text-gray-500 text-sm mb-6">{category.totalCount.toLocaleString()} piers across {category.states.length} states</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {category.states.map((st) => (
            <Link key={st.code} href={`/${st.slug}`} className="group bg-white border border-gray-200 rounded-lg p-3 hover:border-ocean hover:shadow-sm transition">
              <p className="font-bold text-charcoal text-sm group-hover:text-ocean transition">{st.name}</p>
              <p className="text-gray-400 text-xs">{st.count.toLocaleString()} piers</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Article CONTINUATION — H2 sections below directory */}
      {editorial && (
        <article className="max-w-3xl mx-auto px-4 py-12">
          <div className="border-t border-coral/30 pt-6 mb-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold font-[Cabin]">{TRANSITION_DIVIDER_LABEL}</p>
          </div>
          <div className={ARTICLE_BODY_PROSE_CLASS}>{editorial.body}</div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {editorial.faqItems.map((f, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
                  <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">{f.q}<svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></summary>
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>

          {/* Continue Reading */}
          {editorial.continueReading.length > 0 && (
            <div className="mt-12">
              <h3 className="font-[Cabin] text-xl font-bold text-charcoal mb-3">Continue Reading</h3>
              <p className="text-gray-600 text-sm mb-4">For deeper coverage of pier fishing topics:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {editorial.continueReading.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                    <p className="font-bold text-charcoal group-hover:text-ocean transition text-sm mb-1">{p.title}</p>
                    <p className="text-gray-400 text-xs">{p.blurb}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      )}
    </div>
  );
}
