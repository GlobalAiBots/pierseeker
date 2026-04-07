import Link from "next/link";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { unified, getUnifiedPierById } from "@/data/all-piers";
import CletusAd from "@/components/CletusAd";
import type { Metadata } from "next";

const PierMap = dynamic(() => import("@/components/PierMap"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl bg-gray-100 flex items-center justify-center" style={{ height: 400 }}>
      <p className="text-gray-400 text-sm">Loading map...</p>
    </div>
  ),
});

export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const pier = getUnifiedPierById(id);
  if (!pier) return { title: "Pier Not Found" };
  return {
    title: `${pier.name} — Fishing Pier Details | PierSeeker`,
    description: `${pier.name} fishing pier in ${pier.city || pier.state}. GPS coordinates, amenities, directions.`,
    openGraph: { title: `${pier.name} — PierSeeker`, url: `https://pierseeker.com/piers/${pier.id}` },
    twitter: { card: "summary", title: `${pier.name} | PierSeeker` },
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

  // Find nearby piers (same state, within ~0.1 degrees)
  const nearby = unified
    .filter((p) => p.id !== pier.id && p.state === pier.state && Math.abs(p.latitude - pier.latitude) < 0.1 && Math.abs(p.longitude - pier.longitude) < 0.1)
    .slice(0, 6);

  const faqs = [
    { q: `Where is ${pier.name}?`, a: `${pier.name} is located at GPS coordinates ${pier.latitude.toFixed(4)}, ${pier.longitude.toFixed(4)} in ${pier.city || stName}.` },
    { q: `Is ${pier.name} free to fish from?`, a: "Most public fishing piers are free to use. Some state or municipal piers may have a small access fee during peak season." },
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
              <Link key={p.id} href={`/piers/${p.id}`} className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-ocean">
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
