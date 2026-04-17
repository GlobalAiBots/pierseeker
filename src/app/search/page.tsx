"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { unified } from "@/data/all-piers";

const stateNames: Record<string, string> = {
  AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",
  CT:"Connecticut",DE:"Delaware",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",
  IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",
  ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",
  MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",
  NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",
  OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",
  TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",
  WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"
};

const stateSlugs: Record<string, string> = Object.fromEntries(
  Object.entries(stateNames).map(([code, name]) => [code, name.toLowerCase().replace(/\s+/g, "-")])
);

const stateList = Object.entries(stateNames).map(([code, name]) => ({
  code, name, slug: stateSlugs[code],
}));

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, "");
}

export default function SearchPage() {
  const params = useSearchParams();
  const initialQ = params.get("q") || "";
  const [query, setQuery] = useState(initialQ);

  const results = useMemo(() => {
    const q = normalize(query);
    if (q.length < 2) return { piers: [], states: [] };

    const piers = unified
      .filter(p => normalize(p.name).includes(q) || normalize(p.city).includes(q))
      .slice(0, 30);
    const states = stateList.filter(s => normalize(s.name).includes(q));

    return { piers, states };
  }, [query]);

  const total = results.piers.length + results.states.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-[Cabin] text-3xl font-bold mb-6" style={{ color: "#2B2B2B" }}>
        Search PierSeeker
      </h1>

      <div className="relative mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search fishing piers, cities, or states..."
          className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0A3D62] outline-none transition text-sm"
          style={{ color: "#2B2B2B" }}
          autoFocus
        />
        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>

      {query.length >= 2 && (
        <p className="text-gray-500 text-sm mb-6">
          {total} result{total !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}

      {results.states.length > 0 && (
        <section className="mb-8">
          <h2 className="font-[Cabin] font-bold text-lg mb-3" style={{ color: "#2B2B2B" }}>States</h2>
          <div className="flex flex-wrap gap-2">
            {results.states.map(s => (
              <Link
                key={s.code}
                href={`/${s.slug}`}
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm hover:border-[#0A3D62] hover:shadow-sm transition"
              >
                <span className="font-bold" style={{ color: "#2B2B2B" }}>Fishing Piers in {s.name}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {results.piers.length > 0 && (
        <section className="mb-8">
          <h2 className="font-[Cabin] font-bold text-lg mb-3" style={{ color: "#2B2B2B" }}>
            Fishing Piers ({results.piers.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {results.piers.map(p => (
              <Link
                key={p.id}
                href={`/piers/${p.id}`}
                className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0A3D62] hover:shadow-sm transition"
              >
                <p className="font-bold text-sm truncate group-hover:text-[#FF6B6B] transition" style={{ color: "#2B2B2B" }}>
                  {p.name}
                </p>
                <p className="text-gray-400 text-xs">
                  {p.city}{p.city ? ", " : ""}{p.state}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {query.length >= 2 && total === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg mb-4">No results found for &ldquo;{query}&rdquo;</p>
          <p className="text-gray-500 text-sm">Try searching by city name, state, or pier name.</p>
        </div>
      )}
    </div>
  );
}
