import Link from "next/link";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { unified, getUnifiedPierById } from "@/data/all-piers";
import CletusAd from "@/components/CletusAd";
import FeaturedArticle from "@/components/FeaturedArticle";
import cityPagesData from "@/data/city-pages.json";
import type { Metadata } from "next";

const allCities = (cityPagesData as { state: string; stateSlug: string; city: string; citySlug: string; count: number }[]);

const PierMap = dynamic(() => import("@/components/PierMap"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl bg-gray-100 flex items-center justify-center" style={{ height: 400 }}>
      <p className="text-gray-400 text-sm">Loading map...</p>
    </div>
  ),
});

export const dynamicParams = true;
export const revalidate = 86400; // ISR: regenerate daily

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const pier = getUnifiedPierById(id);
  if (!pier) return { title: "Pier Not Found" };
  const isGeneric = /^(fishing\s*pier|pier|dock|jetty|wharf|boat\s*ramp|boat\s*launch)$/i.test(pier.name.trim());
  const stN = stateNames[pier.state] || pier.state;
  const loc = pier.city ? `${pier.city}, ${stN}` : stN;
  const displayTitle = isGeneric ? `Fishing Pier in ${loc}` : pier.name;
  return {
    title: `${displayTitle} — Fishing Pier | PierSeeker`,
    description: `${displayTitle} fishing pier${pier.city ? ` in ${pier.city}` : ""}, ${stN}. GPS coordinates, amenities, and directions.`,
    openGraph: { title: `${displayTitle} — PierSeeker`, url: `https://pierseeker.com/piers/${pier.id}` },
    twitter: { card: "summary", title: `${displayTitle} | PierSeeker` },
    alternates: { canonical: `https://pierseeker.com/piers/${pier.id}` },
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

  // Nearby piers — same state, first 5
  const nearby = unified.filter((p) => p.id !== pier.id && p.state === pier.state).slice(0, 5);

  const faqs = [
    { q: `Where is ${pier.name}?`, a: `${pier.name} is located at GPS coordinates ${pier.latitude.toFixed(4)}, ${pier.longitude.toFixed(4)} in ${pier.city || stName}.` },
    { q: `Is ${pier.name} free to fish from?`, a: "Most public fishing piers are free to use. Some state or municipal piers may have a small access fee during peak season." },
    { q: `How do I get directions to ${pier.name}?`, a: `Click the "Get Directions" button on this page to open Google Maps with turn-by-turn directions to ${pier.name}.` },
  ];

  const mapPiers = [{ id: pier.id, name: pier.name, latitude: pier.latitude, longitude: pier.longitude, city: pier.city }];

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
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pierseeker.com" },
          { "@type": "ListItem", position: 2, name: stName, item: `https://pierseeker.com/${stSlug}` },
          { "@type": "ListItem", position: 3, name: pier.name, item: `https://pierseeker.com/piers/${pier.id}` },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
        <Link href={`/${stSlug}`} className="hover:text-ocean transition">{stName}</Link><span>/</span>
        <span className="text-charcoal font-medium">{pier.name}</span>
      </nav>

      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-2">{pier.name}</h1>
      <p className="text-gray-500 mb-6">{pier.city ? `${pier.city}, ` : ""}{stName} &middot; GPS: {pier.latitude.toFixed(4)}, {pier.longitude.toFixed(4)}</p>

      <PierMap piers={mapPiers} center={[pier.latitude, pier.longitude]} zoom={15} height="400px" className="mb-8" />

      <div className="flex flex-wrap gap-3 mb-8">
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${pier.latitude},${pier.longitude}`} target="_blank" rel="noopener noreferrer" className="bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3 rounded-lg transition shadow-sm text-sm">
          Get Directions
        </a>
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm">
          <span className="text-gray-400">GPS:</span>
          <span className="font-mono text-charcoal ml-2">{pier.latitude.toFixed(6)}, {pier.longitude.toFixed(6)}</span>
        </div>
      </div>

      {pier.description && (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
          <p className="text-gray-600 leading-relaxed">{pier.description}</p>
        </div>
      )}

      {/* About This Pier — unique content */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-3">About {pier.name}</h2>
        <p className="text-gray-600 leading-relaxed text-sm">
          {pier.name} is a fishing pier located in {pier.city ? `${pier.city}, ` : ""}{stName}. {pier.amenities && pier.amenities.length > 0 ? `This pier offers amenities including ${pier.amenities.slice(0, 3).join(", ").toLowerCase()}.` : "This pier provides public fishing access."} GPS coordinates for navigation: {pier.latitude.toFixed(4)}, {pier.longitude.toFixed(4)}.
        </p>
        {pier.rating > 0 && (
          <p className="text-gray-600 leading-relaxed text-sm mt-3">
            Based on {pier.totalRatings} review{pier.totalRatings !== 1 ? "s" : ""}, {pier.name} has a {pier.rating}/5 rating. {pier.rating >= 4 ? "Anglers rate this as a top fishing spot." : "Check recent reviews before planning your trip."}
          </p>
        )}
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 className="font-[Cabin] font-bold text-ocean mb-3">Tips for Fishing at {pier.name}</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Check {stName} fishing license requirements before heading out &mdash; most states require one for pier fishing.</li>
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Best times to fish from piers are early morning, late afternoon, and around tidal changes.</li>
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Bring a variety of bait &mdash; shrimp, cut bait, and artificial lures all work from piers.</li>
          <li className="flex items-start gap-2"><span className="text-ocean mt-0.5">&#10003;</span> Read our <Link href="/blog/pier-fishing-tips-for-beginners" className="text-ocean hover:underline">pier fishing tips guide</Link> for more advice.</li>
        </ul>
      </div>

      {/* Fishing in State */}
      {(() => {
        const stateCount = unified.filter(p => p.state === pier.state).length;
        return (
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
            <h3 className="font-[Cabin] font-bold text-charcoal mb-3">Fishing Piers in {stName}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {stName} has {stateCount.toLocaleString()} fishing piers, docks, and jetties listed on PierSeeker. From saltwater piers to freshwater docks, {stName} offers something for every angler. <Link href={`/${stSlug}`} className="text-ocean hover:underline">Browse all {stateCount.toLocaleString()} fishing piers in {stName}</Link>.
            </p>
          </div>
        );
      })()}

      {/* Related Guides */}
      <div className="mb-6">
        <h3 className="font-[Cabin] font-bold text-charcoal mb-3">Related Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: "/blog/pier-fishing-tips-for-beginners", title: "Pier Fishing Tips", desc: "Everything beginners need to know" },
            { href: "/blog/pier-vs-boat-fishing", title: "Pier vs Boat Fishing", desc: "Pros, cons, and which is right for you" },
            { href: "/blog/what-to-bring-pier-fishing", title: "What to Bring", desc: "Complete pier fishing gear checklist" },
          ].map((g) => (
            <Link key={g.href} href={g.href} className="group bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <p className="font-bold text-charcoal group-hover:text-ocean transition text-sm">{g.title}</p>
              <p className="text-gray-400 text-xs mt-1">{g.desc}</p>
            </Link>
          ))}
        </div>
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

      <FeaturedArticle listingSlug={pier.id} />

      <CletusAd />

      {nearby.length > 0 && (
        <>
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4 mt-8">Nearby Piers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {nearby.map((p: { id: string; name: string; city: string; state: string; distanceMiles?: number }) => (
              <Link key={p.id} href={`/piers/${p.id}`} className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-ocean">
                <p className="font-bold text-charcoal group-hover:text-ocean transition text-sm">{p.name}</p>
                <p className="text-gray-500 text-xs">{p.city || stName}{p.distanceMiles ? ` \u00b7 ${p.distanceMiles} mi` : ""}</p>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Nearby Cities */}
      {pier.city && (() => {
        const nearbyCities = allCities.filter(c => c.state === pier.state && c.city !== pier.city).slice(0, 6);
        if (nearbyCities.length === 0) return null;
        return (
          <div className="mt-8">
            <h3 className="font-[Cabin] font-bold text-charcoal mb-3">Nearby Cities with Fishing Piers</h3>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map(c => (
                <Link key={c.citySlug} href={`/cities/${c.stateSlug}-${c.citySlug}`} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5 text-gray-500 hover:text-ocean hover:border-ocean transition">
                  {c.city}, {pier.state}
                </Link>
              ))}
            </div>
          </div>
        );
      })()}

      {/* People Also Search For */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-5">
        <h3 className="font-[Cabin] font-bold text-charcoal mb-3 text-sm">People Also Search For</h3>
        <div className="flex flex-wrap gap-2">
          {(() => {
            const cityPage = allCities.find(c => c.state === pier.state && c.city === pier.city);
            if (!cityPage) return null;
            return <>
              <Link href={`/cities/${cityPage.stateSlug}-${cityPage.citySlug}`} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5 text-gray-500 hover:text-ocean hover:border-ocean transition">Fishing piers near {pier.city}</Link>
              <Link href={`/cities/${cityPage.stateSlug}-${cityPage.citySlug}`} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5 text-gray-500 hover:text-ocean hover:border-ocean transition">Free fishing piers near {pier.city}</Link>
            </>;
          })()}
          <Link href={`/${stSlug}`} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5 text-gray-500 hover:text-ocean hover:border-ocean transition">Fishing piers in {stName}</Link>
          <Link href="/blog/pier-fishing-tips-for-beginners" className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5 text-gray-500 hover:text-ocean hover:border-ocean transition">Pier fishing tips</Link>
        </div>
      </div>
    </div>
  );
}
