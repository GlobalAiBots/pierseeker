import Link from "next/link";
import { type UnifiedPier, amenityLabels, isGenericName, sortPiers } from "@/data/all-piers";

export default function WaterPierList({ piers, stateName }: { piers: UnifiedPier[]; stateName: string }) {
  const sorted = sortPiers(piers);
  const enriched = sorted.filter((r) => r.rating > 0 || r.totalRatings > 0 || !!(r.amenities?.length) || r.featured);
  const named = sorted.filter((r) => !isGenericName(r.name) && !(r.rating > 0 || r.totalRatings > 0 || !!(r.amenities?.length) || r.featured));
  const generic = sorted.filter((r) => isGenericName(r.name) && !(r.rating > 0 || r.totalRatings > 0 || !!(r.amenities?.length)));

  return (
    <>
      {enriched.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {enriched.map((r) => (
            <Link key={r.id} href={`/piers/${r.id}`} className="group block bg-white border border-gray-200 rounded-xl p-5 border-l-4 border-l-coral shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <h3 className="font-[Cabin] font-bold text-charcoal group-hover:text-ocean transition">{r.name}</h3>
              <p className="text-gray-500 text-sm">{r.city || stateName}{r.rating > 0 && <span> &middot; {r.rating}/5</span>}</p>
              {r.amenities && r.amenities.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">{r.amenities.slice(0, 3).map((a) => (<span key={a} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{amenityLabels[a]?.icon} {amenityLabels[a]?.label}</span>))}</div>
              )}
              <span className="text-sm font-semibold text-coral mt-2 inline-block">View Details &rarr;</span>
            </Link>
          ))}
        </div>
      )}
      {named.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {named.map((r) => (
            <Link key={r.id} href={`/piers/${r.id}`} className="group block bg-white border border-gray-200 rounded-xl p-5 border-l-4 border-l-ocean shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <h3 className="font-[Cabin] font-bold text-charcoal group-hover:text-ocean transition">{r.name}</h3>
              <p className="text-gray-500 text-sm">{r.city || stateName}</p>
              <span className="text-sm font-semibold text-coral mt-2 inline-block">View Details &rarr;</span>
            </Link>
          ))}
        </div>
      )}
      {generic.length > 0 && (
        <>
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 mt-4">Additional Fishing Spots</p>
          <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-100 mb-4">
            {generic.map((r) => (
              <Link key={r.id} href={`/piers/${r.id}`} className="flex items-center justify-between px-4 py-2.5 hover:bg-ocean/5 transition group">
                <div>
                  <span className="text-sm text-charcoal group-hover:text-ocean transition">{r.name}</span>
                  <span className="text-xs text-gray-400 ml-2">{r.latitude.toFixed(4)}, {r.longitude.toFixed(4)}</span>
                </div>
                <span className="text-xs font-semibold text-coral">Details &rarr;</span>
              </Link>
            ))}
          </div>
        </>
      )}
      {piers.length === 0 && <p className="text-gray-400">No piers found yet.</p>}
    </>
  );
}
