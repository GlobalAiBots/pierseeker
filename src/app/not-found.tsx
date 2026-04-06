import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <p className="text-6xl mb-4">🎣</p>
      <h1 className="font-[Cabin] text-3xl font-bold text-charcoal mb-3">Pier Not Found</h1>
      <p className="text-gray-500 mb-8">We couldn&apos;t find that page — but we&apos;ve got 31,000+ fishing piers waiting for you.</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3 rounded-lg transition shadow-sm">Search All Piers</Link>
        <Link href="/map" className="border-2 border-ocean text-ocean hover:bg-ocean hover:text-white font-bold px-6 py-3 rounded-lg transition">View Map</Link>
      </div>
    </div>
  );
}
