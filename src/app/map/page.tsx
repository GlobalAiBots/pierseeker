"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const PierMap = dynamic(() => import("@/components/PierMap"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl bg-gray-100 flex items-center justify-center" style={{ height: 480 }}>
      <p className="text-gray-400 text-sm">Loading map...</p>
    </div>
  ),
});

// Hardcoded state data — no pier imports needed, keeps page under 50KB
const states: { name: string; code: string; slug: string; lat: number; lng: number; piers: number }[] = [
  { name: "Alabama", code: "AL", slug: "alabama", lat: 32.8, lng: -86.8, piers: 703 },
  { name: "Arizona", code: "AZ", slug: "arizona", lat: 34.0, lng: -111.1, piers: 168 },
  { name: "Arkansas", code: "AR", slug: "arkansas", lat: 35.2, lng: -92.2, piers: 330 },
  { name: "California", code: "CA", slug: "california", lat: 36.8, lng: -119.4, piers: 1832 },
  { name: "Colorado", code: "CO", slug: "colorado", lat: 39.1, lng: -105.4, piers: 275 },
  { name: "Connecticut", code: "CT", slug: "connecticut", lat: 41.6, lng: -72.7, piers: 649 },
  { name: "Delaware", code: "DE", slug: "delaware", lat: 39.0, lng: -75.5, piers: 197 },
  { name: "Florida", code: "FL", slug: "florida", lat: 27.8, lng: -81.8, piers: 64 },
  { name: "Georgia", code: "GA", slug: "georgia", lat: 32.9, lng: -83.6, piers: 314 },
  { name: "Idaho", code: "ID", slug: "idaho", lat: 44.1, lng: -114.7, piers: 407 },
  { name: "Illinois", code: "IL", slug: "illinois", lat: 40.3, lng: -89.0, piers: 1435 },
  { name: "Indiana", code: "IN", slug: "indiana", lat: 40.3, lng: -86.1, piers: 419 },
  { name: "Iowa", code: "IA", slug: "iowa", lat: 42.0, lng: -93.2, piers: 331 },
  { name: "Kansas", code: "KS", slug: "kansas", lat: 38.5, lng: -98.8, piers: 170 },
  { name: "Kentucky", code: "KY", slug: "kentucky", lat: 37.8, lng: -84.3, piers: 324 },
  { name: "Louisiana", code: "LA", slug: "louisiana", lat: 31.2, lng: -92.1, piers: 627 },
  { name: "Maine", code: "ME", slug: "maine", lat: 45.3, lng: -69.4, piers: 1211 },
  { name: "Maryland", code: "MD", slug: "maryland", lat: 39.0, lng: -76.6, piers: 2274 },
  { name: "Massachusetts", code: "MA", slug: "massachusetts", lat: 42.4, lng: -71.4, piers: 1207 },
  { name: "Michigan", code: "MI", slug: "michigan", lat: 44.3, lng: -85.6, piers: 2863 },
  { name: "Minnesota", code: "MN", slug: "minnesota", lat: 46.7, lng: -94.7, piers: 2053 },
  { name: "Mississippi", code: "MS", slug: "mississippi", lat: 32.7, lng: -89.7, piers: 108 },
  { name: "Missouri", code: "MO", slug: "missouri", lat: 38.5, lng: -92.3, piers: 323 },
  { name: "Montana", code: "MT", slug: "montana", lat: 46.8, lng: -110.4, piers: 27 },
  { name: "Nevada", code: "NV", slug: "nevada", lat: 38.8, lng: -116.4, piers: 1 },
  { name: "New Hampshire", code: "NH", slug: "new-hampshire", lat: 43.5, lng: -71.5, piers: 453 },
  { name: "New Jersey", code: "NJ", slug: "new-jersey", lat: 40.1, lng: -74.4, piers: 1233 },
  { name: "New Mexico", code: "NM", slug: "new-mexico", lat: 34.8, lng: -106.2, piers: 48 },
  { name: "New York", code: "NY", slug: "new-york", lat: 43.0, lng: -75.5, piers: 2442 },
  { name: "North Carolina", code: "NC", slug: "north-carolina", lat: 35.6, lng: -79.8, piers: 1737 },
  { name: "Ohio", code: "OH", slug: "ohio", lat: 40.4, lng: -82.7, piers: 760 },
  { name: "Oklahoma", code: "OK", slug: "oklahoma", lat: 35.5, lng: -97.5, piers: 203 },
  { name: "Oregon", code: "OR", slug: "oregon", lat: 43.8, lng: -120.6, piers: 851 },
  { name: "Pennsylvania", code: "PA", slug: "pennsylvania", lat: 41.2, lng: -77.2, piers: 188 },
  { name: "Rhode Island", code: "RI", slug: "rhode-island", lat: 41.6, lng: -71.5, piers: 9 },
  { name: "South Carolina", code: "SC", slug: "south-carolina", lat: 33.8, lng: -81.2, piers: 9 },
  { name: "South Dakota", code: "SD", slug: "south-dakota", lat: 43.9, lng: -99.9, piers: 4 },
  { name: "Tennessee", code: "TN", slug: "tennessee", lat: 35.5, lng: -86.6, piers: 290 },
  { name: "Texas", code: "TX", slug: "texas", lat: 31.0, lng: -100.0, piers: 1227 },
  { name: "Utah", code: "UT", slug: "utah", lat: 39.3, lng: -111.1, piers: 147 },
  { name: "Virginia", code: "VA", slug: "virginia", lat: 37.4, lng: -78.7, piers: 1242 },
  { name: "Washington", code: "WA", slug: "washington", lat: 47.4, lng: -120.7, piers: 2607 },
  { name: "West Virginia", code: "WV", slug: "west-virginia", lat: 38.6, lng: -80.6, piers: 7 },
  { name: "Wyoming", code: "WY", slug: "wyoming", lat: 43.1, lng: -107.6, piers: 55 },
];

const totalPiers = states.reduce((sum, s) => sum + s.piers, 0);
const sortedByPiers = [...states].sort((a, b) => b.piers - a.piers);
const sortedByName = [...states].sort((a, b) => a.name.localeCompare(b.name));

export default function MapPage() {
  const [sortBy, setSortBy] = useState<"piers" | "name">("piers");
  const [filter, setFilter] = useState("");

  const stateMapPins = states.map(s => ({
    id: s.slug,
    name: s.name + ' (' + s.piers.toLocaleString() + ' piers)',
    latitude: s.lat,
    longitude: s.lng,
    city: s.piers.toLocaleString() + ' fishing piers',
  }));

  const base = sortBy === "piers" ? sortedByPiers : sortedByName;
  const displayed = filter
    ? base.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()) || s.code.toLowerCase().includes(filter.toLowerCase()))
    : base;

  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-1">US Fishing Pier Map</h1>
        <p className="text-gray-500 mb-6">{totalPiers.toLocaleString()}+ fishing piers across {states.length} states. Click a state to explore.</p>

        {/* Filter */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Filter states..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-72 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ocean focus:border-ocean transition"
          />
        </div>

        {/* Map */}
        <PierMap piers={stateMapPins} height="480px" className="mb-8" />

        {/* Sort toggle */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal">All {states.length} States</h2>
          <div className="flex gap-1 bg-gray-100 rounded-lg p-0.5">
            <button onClick={() => setSortBy("piers")} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${sortBy === "piers" ? "bg-white text-charcoal shadow-sm" : "text-gray-500"}`}>Most Piers</button>
            <button onClick={() => setSortBy("name")} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${sortBy === "name" ? "bg-white text-charcoal shadow-sm" : "text-gray-500"}`}>A-Z</button>
          </div>
        </div>

        {/* State grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {displayed.map((s) => (
            <Link key={s.code} href={`/${s.slug}`} className="group bg-white border border-gray-200 rounded-lg p-3 border-l-4 border-l-ocean hover:border-ocean hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-start justify-between">
                <p className="font-bold text-charcoal text-sm group-hover:text-ocean transition">{s.name}</p>
                <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{s.code}</span>
              </div>
              <p className="text-ocean text-xs font-semibold mt-1">{s.piers.toLocaleString()} piers</p>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 bg-cream rounded-xl p-6 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div>
              <p className="font-[Cabin] text-2xl font-bold text-charcoal">{totalPiers.toLocaleString()}</p>
              <p className="text-gray-400 text-xs">Total Fishing Piers</p>
            </div>
            <div>
              <p className="font-[Cabin] text-2xl font-bold text-charcoal">{states.length}</p>
              <p className="text-gray-400 text-xs">States Covered</p>
            </div>
            <div>
              <p className="font-[Cabin] text-2xl font-bold text-charcoal">Free</p>
              <p className="text-gray-400 text-xs">GPS Verified</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
