/**
 * generate-all.js
 * Generates all PierSeeker state pages, pier detail pages, and sitemaps.
 */
const fs = require('fs');
const path = require('path');

const piersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/all-us-piers.json'), 'utf-8'));

// Group by state
const byState = {};
for (const p of piersData) {
  const slug = p.state.toLowerCase().replace(/\s+/g, '-');
  if (!byState[slug]) byState[slug] = { name: p.state, abbr: p.stateAbbr, piers: [] };
  byState[slug].piers.push(p);
}

function camel(slug) { return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()); }
function pascal(slug) { const c = camel(slug); return c.charAt(0).toUpperCase() + c.slice(1); }

const stateEntries = Object.entries(byState).sort((a, b) => b[1].piers.length - a[1].piers.length);

console.log(`Generating pages for ${stateEntries.length} states...`);

let totalWaters = 0;
let totalPierSlugs = 0;
const sitemapMainUrls = [];
const sitemapPierUrls = [];

// Add core pages to sitemap
['', 'map', 'blog', 'about', 'for-businesses', 'privacy', 'terms'].forEach(p => {
  sitemapMainUrls.push(`https://www.pierseeker.com/${p}`);
});

for (const [stateSlug, stateData] of stateEntries) {
  const { name: stateName, abbr: stateCode, piers } = stateData;
  const appDir = path.join(__dirname, '..', 'src', 'app', stateSlug);

  // Create directories
  fs.mkdirSync(path.join(appDir, 'waters', '[id]'), { recursive: true });

  // --- Generate water body groupings ---
  // Simple approach: group piers by proximity clusters
  // For now, create a single "All Piers" water body per state
  const watersData = [
    {
      id: `${stateSlug}-all`,
      name: `${stateName} Fishing Piers`,
      description: `All fishing piers, docks, and jetties in ${stateName}.`,
      lat: piers[0]?.latitude || 0,
      lng: piers[0]?.longitude || 0,
      radius: 5,
      pierCount: piers.length,
      type: 'mixed',
    }
  ];
  totalWaters += watersData.length;

  // Save waters data
  fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'data', `${stateSlug}-waters.json`),
    JSON.stringify(watersData, null, 2)
  );

  // --- Layout ---
  fs.writeFileSync(path.join(appDir, 'layout.tsx'),
`import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in ${stateName} — ${piers.length}+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for ${stateName}. ${piers.length}+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "${stateName} Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/${stateSlug}", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "${stateName} Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/${stateSlug}" },
};

export default function ${pascal(stateSlug)}Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`);

  // --- State page ---
  fs.writeFileSync(path.join(appDir, 'page.tsx'),
`"use client";

import { useMemo } from "react";
import Link from "next/link";
import { unified, isGenericName } from "@/data/all-piers";
import CletusAd from "@/components/CletusAd";
import PierList from "@/components/PierList";

export default function ${pascal(stateSlug)}Page() {
  const stPiers = useMemo(() => unified.filter((r) => r.state === "${stateCode}"), []);

  const cityMap = useMemo(() => {
    const m: Record<string, number> = {};
    for (const r of stPiers) { const c = r.city?.trim(); if (c && c.length > 1) m[c] = (m[c] || 0) + 1; }
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
  }, [stPiers]);

  const namedCount = useMemo(() => stPiers.filter(p => !isGenericName(p.name)).length, [stPiers]);

  return (
    <div>
      <section className="py-16 md:py-24 text-center px-4 bg-cream" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(10,61,98,0.06) 0%, transparent 50%)" }}>
        <p className="text-ocean text-sm font-bold tracking-wider uppercase mb-3 font-[Cabin]">${stateName} Fishing Pier Directory</p>
        <h1 className="font-[Cabin] text-4xl md:text-5xl font-bold text-charcoal leading-tight max-w-3xl mx-auto">Every Fishing Pier in ${stateName}</h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">{stPiers.length}+ fishing piers across ${stateName}. Saltwater, freshwater, and river access. {namedCount} named piers with details.</p>
      </section>

      {cityMap.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pt-8 pb-8">
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4">Browse by City</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {cityMap.slice(0, 16).map(([city, count]) => (
              <div key={city} className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="font-bold text-charcoal text-sm">{city}</p>
                <p className="text-gray-400 text-xs">{count} pier{count !== 1 ? "s" : ""}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <PierList piers={stPiers} stateName="${stateName}" />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-4">${stateName} Pier Fishing FAQ</h2>
        <div className="space-y-2">
          {[
            { q: "How many fishing piers are in ${stateName}?", a: \`PierSeeker lists \${stPiers.length}+ fishing piers across ${stateName}.\` },
            { q: "Is PierSeeker free?", a: "Yes, completely free. No login, no account, no fees." },
          ].map((f, i) => (
            <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
              <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">{f.q}<svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4"><CletusAd /></div>
    </div>
  );
}
`);

  // --- Waters [id] page (placeholder) ---
  fs.writeFileSync(path.join(appDir, 'waters', '[id]', 'page.tsx'),
`import { notFound } from "next/navigation";

export default async function WaterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Water body pages will be built in a future update
  notFound();
  return <div>{id}</div>;
}
`);

  // Add to sitemap
  sitemapMainUrls.push(`https://www.pierseeker.com/${stateSlug}`);

  // Generate pier slugs for sitemap
  const seenSlugs = new Set();
  function slugify(n) { return n.toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'').substring(0,60); }

  for (const p of piers) {
    const cleanName = (p.name || 'Fishing Pier').replace(/[^\w\s'-]/g, '').trim();
    let slug = `${stateCode.toLowerCase()}-${slugify(cleanName) || 'pier'}`;
    if (seenSlugs.has(slug)) slug = `${slug}-${String(p.id).substring(0, 8)}`;
    if (seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);
    sitemapPierUrls.push(`https://www.pierseeker.com/piers/${slug}`);
    totalPierSlugs++;
  }

  console.log(`  ${stateSlug}: ${piers.length} piers`);
}

// --- Pier detail page ---
const piersDir = path.join(__dirname, '..', 'src', 'app', 'piers', '[id]');
fs.mkdirSync(piersDir, { recursive: true });

fs.writeFileSync(path.join(piersDir, 'page.tsx'),
`import Link from "next/link";
import { notFound } from "next/navigation";
import { unified, getUnifiedPierById } from "@/data/all-piers";
import CletusAd from "@/components/CletusAd";
import type { Metadata } from "next";

export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const pier = getUnifiedPierById(id);
  if (!pier) return { title: "Pier Not Found" };
  return {
    title: \`\${pier.name} — Fishing Pier Details | PierSeeker\`,
    description: \`\${pier.name} fishing pier in \${pier.city || pier.state}. GPS coordinates, amenities, directions.\`,
    openGraph: { title: \`\${pier.name} — PierSeeker\`, url: \`https://www.pierseeker.com/piers/\${pier.id}\` },
    twitter: { card: "summary", title: \`\${pier.name} | PierSeeker\` },
    alternates: { canonical: \`https://www.pierseeker.com/piers/\${pier.id}\` },
  };
}

const stateNames: Record<string, string> = {
  AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",
  DE:"Delaware",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",
  KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",
  MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",
  NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",
  OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",
  TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",
  WI:"Wisconsin",WY:"Wyoming"
};

const stateSlugs: Record<string, string> = {
  AL:"alabama",AK:"alaska",AZ:"arizona",AR:"arkansas",CA:"california",CO:"colorado",CT:"connecticut",
  DE:"delaware",FL:"florida",GA:"georgia",HI:"hawaii",ID:"idaho",IL:"illinois",IN:"indiana",IA:"iowa",
  KS:"kansas",KY:"kentucky",LA:"louisiana",ME:"maine",MD:"maryland",MA:"massachusetts",MI:"michigan",
  MN:"minnesota",MS:"mississippi",MO:"missouri",MT:"montana",NE:"nebraska",NV:"nevada",NH:"new-hampshire",
  NJ:"new-jersey",NM:"new-mexico",NY:"new-york",NC:"north-carolina",ND:"north-dakota",OH:"ohio",
  OK:"oklahoma",OR:"oregon",PA:"pennsylvania",RI:"rhode-island",SC:"south-carolina",SD:"south-dakota",
  TN:"tennessee",TX:"texas",UT:"utah",VT:"vermont",VA:"virginia",WA:"washington",WV:"west-virginia",
  WI:"wisconsin",WY:"wyoming"
};

export default async function PierPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pier = getUnifiedPierById(id);
  if (!pier) notFound();

  const stSlug = stateSlugs[pier.state] || pier.state.toLowerCase();
  const stName = stateNames[pier.state] || pier.state;

  // Find nearby piers (same state, within ~0.1 degrees)
  const nearby = unified
    .filter((p) => p.id !== pier.id && p.state === pier.state && Math.abs(p.latitude - pier.latitude) < 0.1 && Math.abs(p.longitude - pier.longitude) < 0.1)
    .slice(0, 6);

  const faqs = [
    { q: \`Where is \${pier.name}?\`, a: \`\${pier.name} is located at GPS coordinates \${pier.latitude.toFixed(4)}, \${pier.longitude.toFixed(4)} in \${pier.city || stName}.\` },
    { q: \`Is \${pier.name} free to fish from?\`, a: "Most public fishing piers are free to use. Some state or municipal piers may have a small access fee during peak season." },
  ];

  const embedUrl = \`https://www.google.com/maps?q=\${pier.latitude},\${pier.longitude}&z=15&output=embed\`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Place", name: pier.name,
        geo: { "@type": "GeoCoordinates", latitude: pier.latitude, longitude: pier.longitude },
        address: { "@type": "PostalAddress", addressRegion: stName },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pierseeker.com" },
          { "@type": "ListItem", position: 2, name: stName, item: \`https://www.pierseeker.com/\${stSlug}\` },
          { "@type": "ListItem", position: 3, name: pier.name, item: \`https://www.pierseeker.com/piers/\${pier.id}\` },
        ],
      }) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <Link href={\`/\${stSlug}\`} className="hover:text-ocean transition">{stName}</Link><span>/</span>
        <span className="text-charcoal font-medium">{pier.name}</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-2">{pier.name}</h1>
      <p className="text-gray-500 mb-6">{pier.city ? \`\${pier.city}, \` : ""}{stName} &middot; GPS: {pier.latitude.toFixed(4)}, {pier.longitude.toFixed(4)}</p>

      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8" style={{ height: 350 }}>
        <iframe src={embedUrl} width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={\`\${pier.name} map\`} allowFullScreen />
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <a href={\`https://www.google.com/maps/dir/?api=1&destination=\${pier.latitude},\${pier.longitude}\`} target="_blank" rel="noopener noreferrer" className="bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3 rounded-lg transition shadow-sm text-sm">
          Get Directions
        </a>
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm">
          <span className="text-gray-400">GPS:</span>
          <span className="font-mono text-charcoal ml-2">{pier.latitude.toFixed(6)}, {pier.longitude.toFixed(6)}</span>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-3">About This Pier</h2>
        <p className="text-gray-600 leading-relaxed">{pier.description}</p>
      </div>

      <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4">FAQ</h2>
      <div className="space-y-2 mb-10">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
            <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">{f.q}<svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></summary>
            <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
          </details>
        ))}
      </div>

      <CletusAd />

      {nearby.length > 0 && (
        <>
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4 mt-8">Nearby Piers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {nearby.map((p) => (
              <Link key={p.id} href={\`/piers/\${p.id}\`} className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-ocean">
                <p className="font-bold text-charcoal group-hover:text-ocean transition text-sm">{p.name}</p>
                <p className="text-gray-500 text-xs">{p.city || stName}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
`);

console.log('\nPier detail page template created');

// --- Generate sitemaps ---
const d = '2026-04-05';
let mainXml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const url of sitemapMainUrls) {
  const prio = url === 'https://www.pierseeker.com/' ? '1.0' : '0.9';
  mainXml += `  <url><loc>${url}</loc><lastmod>${d}</lastmod><changefreq>weekly</changefreq><priority>${prio}</priority></url>\n`;
}
mainXml += '</urlset>\n';
fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap-main.xml'), mainXml);

let piersXml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const url of sitemapPierUrls) {
  piersXml += `  <url><loc>${url}</loc><lastmod>${d}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>\n`;
}
piersXml += '</urlset>\n';
fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap-piers.xml'), piersXml);

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.pierseeker.com/sitemap-main.xml</loc>
    <lastmod>${d}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.pierseeker.com/sitemap-piers.xml</loc>
    <lastmod>${d}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), indexXml);

console.log('\n========================================');
console.log(`  State pages: ${stateEntries.length}`);
console.log(`  Water body pages: ${totalWaters} (placeholder)`);
console.log(`  Pier detail URLs: ${totalPierSlugs}`);
console.log(`  Sitemap main URLs: ${sitemapMainUrls.length}`);
console.log(`  Sitemap pier URLs: ${sitemapPierUrls.length}`);
console.log(`  Total sitemap URLs: ${sitemapMainUrls.length + sitemapPierUrls.length}`);
console.log('========================================');
