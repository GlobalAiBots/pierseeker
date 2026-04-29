"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { unified } from "@/data/all-piers";
import cityPages from "@/data/city-pages.json";
import AdSlot from "@/components/AdSlot";
import CletusAd from "@/components/CletusAd";
import EmailCapture from "@/components/EmailCapture";
import NearMeButton from "@/components/NearMeButton";
import GearRecommendation from "@/components/GearRecommendation";
import SeasonalPicks from "@/components/SeasonalPicks";

const featuredPosts = [
  { slug: "best-fishing-piers-florida", title: "Best Fishing Piers in Florida: Saltwater Spots You Need to Visit", date: "Apr 5, 2026", readTime: "6 min read", category: "Destinations", img: "/images/blog/florida-pier.jpg" },
  { slug: "night-pier-fishing-tips", title: "Night Pier Fishing: Tips for Catching More After Dark", date: "Apr 12, 2026", readTime: "7 min read", category: "Tips", img: "/images/blog/night-fishing.jpg" },
  { slug: "pier-fishing-tips-for-beginners", title: "Pier Fishing Tips for Beginners: Everything You Need to Know", date: "Apr 8, 2026", readTime: "8 min read", category: "Beginner", img: "/images/blog/beginner-fishing.jpg" },
];

const stateList: { name: string; slug: string; code: string }[] = [
  { name: "Alabama", slug: "alabama", code: "AL" },{ name: "Arizona", slug: "arizona", code: "AZ" },
  { name: "Arkansas", slug: "arkansas", code: "AR" },{ name: "California", slug: "california", code: "CA" },
  { name: "Colorado", slug: "colorado", code: "CO" },{ name: "Connecticut", slug: "connecticut", code: "CT" },
  { name: "Delaware", slug: "delaware", code: "DE" },{ name: "Florida", slug: "florida", code: "FL" },
  { name: "Georgia", slug: "georgia", code: "GA" },{ name: "Idaho", slug: "idaho", code: "ID" },
  { name: "Illinois", slug: "illinois", code: "IL" },{ name: "Indiana", slug: "indiana", code: "IN" },
  { name: "Iowa", slug: "iowa", code: "IA" },{ name: "Kansas", slug: "kansas", code: "KS" },
  { name: "Kentucky", slug: "kentucky", code: "KY" },{ name: "Louisiana", slug: "louisiana", code: "LA" },
  { name: "Maine", slug: "maine", code: "ME" },{ name: "Maryland", slug: "maryland", code: "MD" },
  { name: "Massachusetts", slug: "massachusetts", code: "MA" },{ name: "Michigan", slug: "michigan", code: "MI" },
  { name: "Minnesota", slug: "minnesota", code: "MN" },{ name: "Mississippi", slug: "mississippi", code: "MS" },
  { name: "Missouri", slug: "missouri", code: "MO" },{ name: "Montana", slug: "montana", code: "MT" },
  { name: "Nevada", slug: "nevada", code: "NV" },{ name: "New Hampshire", slug: "new-hampshire", code: "NH" },
  { name: "New Jersey", slug: "new-jersey", code: "NJ" },{ name: "New Mexico", slug: "new-mexico", code: "NM" },
  { name: "New York", slug: "new-york", code: "NY" },{ name: "North Carolina", slug: "north-carolina", code: "NC" },
  { name: "Ohio", slug: "ohio", code: "OH" },{ name: "Oklahoma", slug: "oklahoma", code: "OK" },
  { name: "Oregon", slug: "oregon", code: "OR" },{ name: "Pennsylvania", slug: "pennsylvania", code: "PA" },
  { name: "Rhode Island", slug: "rhode-island", code: "RI" },{ name: "South Carolina", slug: "south-carolina", code: "SC" },
  { name: "South Dakota", slug: "south-dakota", code: "SD" },{ name: "Tennessee", slug: "tennessee", code: "TN" },
  { name: "Texas", slug: "texas", code: "TX" },{ name: "Utah", slug: "utah", code: "UT" },
  { name: "Virginia", slug: "virginia", code: "VA" },{ name: "Washington", slug: "washington", code: "WA" },
  { name: "West Virginia", slug: "west-virginia", code: "WV" },{ name: "Wyoming", slug: "wyoming", code: "WY" },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const stateCounts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const r of unified) map[r.state] = (map[r.state] || 0) + 1;
    return map;
  }, []);

  const statesWithCounts = useMemo(() =>
    stateList.map((s) => ({ ...s, count: stateCounts[s.code] || 0 })).sort((a, b) => b.count - a.count),
  [stateCounts]);

  const [expanded, setExpanded] = useState(false);
  const visibleStates = useMemo(() => statesWithCounts.filter(s => s.count > 0), [statesWithCounts]);
  const showToggle = visibleStates.length > 15;

  const topCities = useMemo(() => {
    return [...(cityPages as Array<{ city: string; citySlug: string; count: number; stateSlug: string; stateName: string; state: string }>)]
      .filter(c => c.count >= 3)
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }, []);

  const suggestions = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    const results: { type: string; label: string; href: string }[] = [];
    stateList.filter((s) => s.name.toLowerCase().includes(q)).slice(0, 4).forEach((s) => {
      results.push({ type: "State", label: s.name, href: `/${s.slug}` });
    });
    unified.filter((r) => r.name.toLowerCase().includes(q)).slice(0, 5).forEach((r) => {
      results.push({ type: "Pier", label: `${r.name} (${r.state})`, href: `/piers/${r.id}` });
    });
    return results.slice(0, 8);
  }, [query]);

  const faqItems = [
    { q: "Do I need a fishing license to fish from a public pier?", a: "Most states exempt saltwater pier anglers from licensing, but freshwater pier fishing typically requires a state fishing license. Rules vary — check your state's fish and wildlife agency. Some municipal piers have additional permit requirements." },
    { q: "What's the best time of day to fish from a pier?", a: "Early morning (dawn to mid-morning) and late afternoon (two hours before sunset) are typically the most productive windows. Tide changes matter more than time of day on saltwater piers — incoming tide tends to outproduce slack water." },
    { q: "What's the difference between a fishing pier and a dock?", a: "A fishing pier is built for public angling — usually with rod holders, cleaning stations, and sometimes lights. A dock is primarily for boat access. PierSeeker lists both, but our directory tags pier-specific amenities clearly on each listing." },
    { q: "Are most fishing piers free?", a: "Most public ocean and lake piers are free. Some commercial piers charge $5-10 daily access fees. Annual passes are common at popular saltwater piers in the Carolinas, Florida, and California. Fee information is included on PierSeeker listings where verified." },
    { q: "Is PierSeeker free to use?", a: "Yes, completely free. No login, no account, no paid tier. We're funded by display advertising and listing partnerships. Find your pier and go." },
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "WebSite", name: "PierSeeker", url: "https://www.pierseeker.com",
        description: `Find fishing piers across the United States. ${unified.length.toLocaleString()}+ piers with GPS coordinates, amenities, and tips.`,
        potentialAction: { "@type": "SearchAction", target: "https://www.pierseeker.com/?q={search_term_string}", "query-input": "required name=search_term_string" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: "How to Find a Fishing Pier Near You: The Complete Guide",
        description: "Practical guide to choosing public fishing piers — saltwater vs. freshwater, tide windows, licensing rules, bait and rigs, and pier etiquette every angler should know.",
        author: { "@type": "Organization", name: "PierSeeker Editorial", url: "https://www.pierseeker.com" },
        publisher: { "@type": "Organization", name: "PierSeeker", url: "https://www.pierseeker.com" },
        datePublished: "2026-04-29",
        dateModified: "2026-04-29",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.pierseeker.com" },
        articleSection: "Fishing",
        keywords: ["how to find a fishing pier", "pier fishing license", "saltwater pier fishing", "freshwater pier fishing", "tide windows pier", "pier fishing tackle", "pier fishing etiquette"],
      }) }} />

      {/* HERO — Full-bleed dramatic */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-pier.jpg" alt={`Anglers fishing from a wooden pier at sunset — find ${unified.length.toLocaleString()}+ fishing piers across America on PierSeeker`} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,61,98,0.85) 0%, rgba(10,61,98,0.4) 50%, transparent 100%)' }} />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-8">
          <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">Fishing Pier Directory</p>
          <h1 className="font-[Cabin] text-5xl md:text-7xl font-bold text-white leading-tight">Every Fishing Pier in America</h1>
          <p className="text-white/80 mt-4 max-w-lg mx-auto text-lg">{unified.length.toLocaleString()}+ fishing piers across {stateList.length} states. Find your spot.</p>

          <div className="max-w-xl mx-auto mt-8 relative">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by state, city, water body, or pier name..." className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-charcoal outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition shadow-2xl text-sm" />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden">
                {suggestions.map((s, i) => (
                  <Link key={i} href={s.href} className="flex items-center gap-3 px-4 py-3 hover:bg-ocean/5 transition border-b border-gray-100 last:border-0">
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{s.type}</span>
                    <span className="text-sm text-charcoal">{s.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center mt-4">
            <NearMeButton label="Find Piers Near Me" color="#0A3D62" />
          </div>

          <div className="flex gap-2 justify-center mt-4 flex-wrap max-w-2xl mx-auto">
            {statesWithCounts.slice(0, 6).map((s) => (
              <Link key={s.code} href={`/${s.slug}`} className="bg-white/15 hover:bg-white/25 text-white font-bold px-4 py-2 rounded-lg transition text-xs backdrop-blur-sm border border-white/10">{s.name} ({s.count.toLocaleString()})</Link>
            ))}
            <a href="#browse-states" className="text-white/70 hover:text-white font-semibold px-4 py-2 text-xs transition">Browse all {stateList.length} states &darr;</a>
          </div>
        </div>

        {/* Hero footer: seasonal accent strip + integrated stats bar */}
        <div className="relative z-10 w-full mt-auto">
          <div className="bg-coral/90 backdrop-blur-sm py-2.5 text-center">
            <Link href={(() => { const m = new Date().getMonth(); if (m >= 2 && m <= 4) return "/blog/best-pier-fishing-by-season"; if (m >= 5 && m <= 7) return "/blog/best-fishing-piers-in-america"; if (m >= 8 && m <= 10) return "/blog/best-pier-fishing-states"; return "/blog/how-to-catch-sheepshead"; })()} className="text-white font-bold text-sm hover:underline transition">
              {(() => { const m = new Date().getMonth(); if (m >= 2 && m <= 4) return "🎣 Spring Pier Season: Crappie + Bass Run →"; if (m >= 5 && m <= 7) return "☀️ Peak Pier Fishing: Find Spots →"; if (m >= 8 && m <= 10) return "🐟 Fall Run: Striper + Walleye Season →"; return "❄️ Winter Pier Fishing: Cold-Water Spots →"; })()}
            </Link>
          </div>
          <div className="bg-ocean/85 backdrop-blur-sm border-t border-white/10 py-6">
            <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              {[{ value: unified.length.toLocaleString(), label: "Fishing Piers" },{ value: "27,700+", label: "Boat Ramps" },{ value: "9,000+", label: "Marinas" },{ value: "48", label: "States" }].map((s) => (
                <div key={s.label}><p className="font-[Cabin] text-3xl md:text-4xl font-bold text-white">{s.value}</p><p className="text-white/50 text-xs uppercase tracking-wider mt-1">{s.label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YOUR COMPLETE FISHING HUB */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="font-[Cabin] text-[28px] md:text-[36px] font-extrabold text-charcoal text-center mb-3">Your Complete Fishing Hub</h2>
        <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">Find the perfect spot &mdash; piers, boat ramps, and marinas across America.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Link href="#browse-states" className="group rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #EFF6FF, #BFDBFE)', border: '2px solid rgba(10,61,98,0.2)' }}>
            <span className="text-5xl block mb-3">&#127907;</span>
            <h3 className="font-[Cabin] font-extrabold text-charcoal text-xl mb-1">Fishing Piers</h3>
            <p className="font-extrabold text-[28px] text-ocean leading-none mb-2">{unified.length.toLocaleString()}</p>
            <p className="text-gray-500 text-xs mb-4">Public piers, jetties, and shore fishing spots.</p>
            <span className="inline-block text-white font-bold text-sm px-5 py-2 rounded-xl" style={{ background: 'linear-gradient(135deg, #1B6CA8, #0A3D62)', boxShadow: '0 4px 12px rgba(10,61,98,0.25)' }}>Find a Pier &rarr;</span>
          </Link>
          <a href="https://rampseeker.com" target="_blank" rel="noopener noreferrer" className="group rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #F0FFF4, #C6F6D5)', border: '2px solid rgba(45,106,79,0.2)' }}>
            <span className="text-5xl block mb-3">&#9981;</span>
            <h3 className="font-[Cabin] font-extrabold text-charcoal text-xl mb-1">Boat Ramps</h3>
            <p className="font-extrabold text-[28px] text-forest leading-none mb-2">27,700+</p>
            <p className="text-gray-500 text-xs mb-4">Public launch sites with GPS and directions.</p>
            <span className="inline-block text-white font-bold text-sm px-5 py-2 rounded-xl" style={{ background: 'linear-gradient(135deg, #40916C, #2D6A4F)', boxShadow: '0 4px 12px rgba(45,106,79,0.25)' }}>Find a Ramp &rarr;</span>
          </a>
          <a href="https://marinaseeker.com" target="_blank" rel="noopener noreferrer" className="group rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #FFF7ED, #FDE68A)', border: '2px solid rgba(231,111,81,0.2)' }}>
            <span className="text-5xl block mb-3">&#9875;</span>
            <h3 className="font-[Cabin] font-extrabold text-charcoal text-xl mb-1">Marinas</h3>
            <p className="font-extrabold text-[28px] text-coral leading-none mb-2">9,000+</p>
            <p className="text-gray-500 text-xs mb-4">Slips, fuel, repair, and docking.</p>
            <span className="inline-block text-white font-bold text-sm px-5 py-2 rounded-xl" style={{ background: 'linear-gradient(135deg, #FF8585, #FF6B6B)', boxShadow: '0 4px 12px rgba(255,107,107,0.25)' }}>Find a Marina &rarr;</span>
          </a>
        </div>
      </section>

      {/* ARTICLE HEADER */}
      <article id="pier-guide" className="max-w-3xl mx-auto px-4 pt-12 pb-8">
        <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">How to Find a Fishing Pier Near You: The Complete Guide</h1>
        <div className="text-gray-700 leading-relaxed space-y-5">
          <p>Pier fishing is the most accessible form of saltwater and freshwater fishing in America. No boat, no license restrictions on most public piers, no expensive gear required &mdash; just a rod, some bait, and a few hours. But the pier you choose makes more difference than the tackle you bring. Tide-flushed ocean piers near deepwater channels can produce king mackerel and tarpon. Lake piers in the right spot at the right hour deliver crappie, bass, and catfish. Pick the wrong pier and you&apos;ll spend the day watching someone else catch fish from a better one a mile away.</p>
          <p>PierSeeker indexes more than 31,000 fishing piers, jetties, and public docks across 44 states, sourced from coastal management agencies, state fish and wildlife departments, municipal park systems, and OpenStreetMap contributors. We list pier length, amenity availability, and what species local anglers actually catch from each location &mdash; not just generic pier info copy-pasted across listings.</p>
          <p>Below is PierSeeker&apos;s directory of fishing piers organized by state. Continue reading below the directory for the complete guide to choosing the right pier for your target species, understanding tide and weather windows, reading licensing rules state by state, and selecting bait and rigs that match the water you&apos;re fishing.</p>
        </div>
      </article>

      <section id="browse-states" className="max-w-5xl mx-auto px-4 pt-14 pb-8">
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-6">Browse by State</h2>
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 ${showToggle ? "mb-6" : "mb-0"}`}>
          {visibleStates.map((s, index) => {
            const hideThis = !expanded && index >= 15;
            return (
              <Link key={s.code} href={`/${s.slug}`} className={`group bg-white border border-gray-200 rounded-lg p-3 hover:border-ocean hover:shadow-sm transition${hideThis ? " hidden" : ""}`}>
                <p className="font-bold text-charcoal text-sm group-hover:text-ocean transition">{s.name}</p>
                <p className="text-gray-400 text-xs">{s.count.toLocaleString()} piers</p>
              </Link>
            );
          })}
        </div>
        {showToggle && (
          <div className="text-center">
            <button onClick={() => setExpanded(!expanded)} className="text-ocean hover:text-coral font-semibold text-sm transition">
              {expanded ? "Show fewer ↑" : `Show all ${visibleStates.length} states ↓`}
            </button>
          </div>
        )}
      </section>

      {/* ARTICLE CONTINUATION */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="border-t border-ocean/30 pt-6 mb-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold font-[Cabin]">Complete Guide Continues</p>
        </div>
        <div className="text-gray-700 leading-relaxed space-y-5">

          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-2 mb-3">Why Choosing the Right Pier Matters</h2>
          <p>Pier fishing rewards research more than almost any other shore-based fishing. The same stretch of coast can have one pier producing king mackerel during the morning incoming tide and another half a mile away producing nothing but sand sharks. Lake piers are the same &mdash; a public pier on a creek arm with submerged structure outproduces a flat shoreline pier by an order of magnitude on the right day. Picking the wrong pier costs you the fishable window. By the time you realize the bite is happening at the next pier over, the tide has shifted or the school has moved on.</p>
          <p>The right pier matters most for visiting anglers who don&apos;t know the water. Locals know which pier holds bait in summer, which one warms up first in spring, and which one to avoid in afternoon onshore wind. A directory listing with amenity tags, species notes, and pier length gets you most of the way to local knowledge without the trial and error.</p>

          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-3">Saltwater vs. Freshwater Piers: What Changes</h2>
          <p>Saltwater piers run on tides. Incoming tide pushes baitfish into the pier zone and predator species follow. Slack tide is dead time at most ocean piers, and outgoing tide can be productive but rarely matches an incoming. Saltwater also corrodes everything &mdash; line, hooks, swivels, reel components &mdash; so dedicated saltwater gear isn&apos;t optional if you&apos;re fishing more than a few times a year. Rod choice trends heavier: 7-to-9-foot medium-heavy or heavy spinning rods handle the larger species and longer casts pier fishing demands.</p>
          <p>Freshwater piers have stable water levels and stable structure. Bass, crappie, catfish, and panfish are the typical targets, and lighter tackle works fine. Freshwater piers are usually less crowded and more relaxed than saltwater destinations, especially on weekday mornings. The trade-off is species variety &mdash; saltwater piers can hold a dozen catchable species in season; freshwater piers usually have three or four primary targets. Match your gear and expectations to the water type before you load the truck.</p>

          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-3">Reading Tides, Currents, and Weather Windows</h2>
          <p>The best pier anglers think in tide windows, not clock hours. On saltwater piers, the most productive time is usually two hours either side of an incoming high tide &mdash; baitfish concentrate, predators feed actively, and currents carry scent toward the pier. NOAA tide tables and apps like Tide Charts make this simple to plan. Slack water (no tidal movement) is typically dead. Outgoing tides can produce, but the bite usually winds down quickly.</p>
          <p>Weather amplifies or kills a tide window. Falling barometric pressure ahead of a front is famously productive &mdash; fish feed actively before the storm. Stable high pressure after a front is usually slow until conditions normalize. Onshore wind (blowing from water toward shore) pushes baitfish into the pier zone and is generally good. Strong offshore wind pushes bait away and makes casting miserable.</p>
          <p>Time of day matters less than the tide and weather. That said, dawn and dusk are usually productive across pier types &mdash; light levels favor predators and bait moves into the shallows. Plan around the tide first, time of day second.</p>

          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-3">Licensing Rules: When You Need One, When You Don&apos;t</h2>
          <p>Saltwater pier fishing is where the rules get generous. Florida, Texas, North Carolina, South Carolina, and several other states exempt anglers fishing from public ocean piers from saltwater fishing license requirements &mdash; the pier itself often holds a blanket license that covers everyone fishing from it. California has specific pier-fishing exemptions on most public piers. New Jersey and New York have similar provisions. Always confirm with the state&apos;s fish and wildlife agency, especially when crossing state lines.</p>
          <p>Freshwater pier fishing almost always requires a state freshwater fishing license, and the rules are stricter. Senior, disabled, and youth exemptions exist in most states but vary in age cutoffs and proof requirements. A few states (Pennsylvania, for example) have specific lake-by-lake rules that override state-wide policy.</p>
          <p>Some piers &mdash; especially commercial saltwater piers in Florida, North Carolina, and California &mdash; charge a daily access fee that includes the license coverage. Check the pier&apos;s posted rules before you fish, and keep a printed or digital copy of any required license on your phone. Wardens will check, and the fines exceed the license cost by ten times or more.</p>

          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-3">Bait, Rigs, and Tackle for Pier Fishing</h2>
          <p>Saltwater pier rigs are simpler than most beginners assume. A standard fish-finder rig (sliding egg sinker above a swivel, two-foot leader, bait hook) handles most species. Pyramid sinkers in the 2-to-4-ounce range hold bottom in moderate current. Live or fresh-cut shrimp is the most universally productive bait &mdash; it catches everything from whiting and sheepshead to flounder and small mackerel. Cut squid, fresh mullet, and live finger mullet expand the range. For species like Spanish mackerel and bluefish, casting Gotcha plugs and metal spoons during a feeding blitz outperforms bait.</p>
          <p>Freshwater pier setups are even simpler. A 6-to-7-foot medium spinning rod with 8-to-12-pound mono or braid handles most species. A slip bobber rig with live minnows or worms catches crappie, panfish, and small bass. For catfish, a basic Carolina rig with cut bait or chicken liver works. Don&apos;t overcomplicate the tackle box &mdash; three or four rigs and four or five bait options handle nearly every situation. Fancy gear catches anglers more than it catches fish.</p>

          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-3">Pier Fishing Etiquette and Safety</h2>
          <p>A crowded pier is a shared workspace, and the regulars notice when someone doesn&apos;t follow the rules. Don&apos;t cast over other anglers&apos; lines &mdash; give at least one rod-length of clearance before you cast, and shorten your cast if the pier is shoulder-to-shoulder. If your line crosses someone else&apos;s, reel in fast and apologize. Repeat offenders get talked to; chronic offenders get reported.</p>
          <p>Use the cleaning station. Most public piers have designated areas for cleaning fish, and the rules around discarding carcasses (back into water vs. trash) vary by location. Cleaning fish where people are walking is universally bad form.</p>
          <p>Watch your footing. Pier boards get slick from spray, fish slime, and bait juice. Wear shoes with grippy soles &mdash; boat shoes, deck shoes, or trail runners. Flip-flops on a wet pier are how anglers end up in the water with a broken ankle. If a kid or beginner has a fish on, help them land it before you worry about your own line. Pier culture rewards this. So does watching a kid land their first decent fish.</p>
        </div>
      </article>

      {/* POPULAR CITIES */}
      {topCities.length > 0 && (
        <section className="py-10" style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFB 100%)' }}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-[Cabin] text-xl font-bold text-charcoal">Popular Cities for Pier Fishing</h2>
                <p className="text-gray-400 text-sm">Cities with the most public fishing piers on PierSeeker.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {topCities.map((c) => (
                <Link key={`${c.stateSlug}-${c.citySlug}`} href={`/cities/${c.stateSlug}-${c.citySlug}`} className="group bg-white rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-coral" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <h3 className="font-[Cabin] font-bold text-charcoal group-hover:text-ocean transition text-sm">{c.city}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-semibold bg-ocean/10 text-ocean px-2 py-0.5 rounded">{c.count} piers</span>
                    <span className="text-gray-400 text-xs">&middot; {c.stateName}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <AdSlot position="homepage-mid" />

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal text-center mb-8">Why PierSeeker</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "&#128205;", title: "GPS Coordinates", desc: "Exact location for every pier. Never end up at a private dock again." },
            { icon: "&#127907;", title: "Amenity Info", desc: "Find piers with fish cleaning stations, bait shops, lighting, restrooms." },
            { icon: "&#128172;", title: "Local Tips", desc: "Real advice from anglers who fish these piers every week." },
            { icon: "&#128274;", title: "Free Forever", desc: "No login. No account. No fees. Just find your pier and go fish." },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center">
              <p className="text-2xl mb-2" dangerouslySetInnerHTML={{ __html: f.icon }} />
              <h3 className="font-[Cabin] font-bold text-charcoal text-sm mb-1">{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEASONAL PICKS (rotates by month) */}
      <section className="max-w-5xl mx-auto px-4 py-2">
        <SeasonalPicks />
      </section>

      {/* ESSENTIAL GEAR SECTIONS */}
      <section className="max-w-5xl mx-auto px-4 py-2">
        <GearRecommendation section="essentials" />
        <GearRecommendation section="comfort" />
        <GearRecommendation section="tackle" />
      </section>

      {/* GEAR UP FOR PIER FISHING */}
      <section className="max-w-5xl mx-auto px-4 py-6">
        <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #0A3D62 0%, #1B6CA8 60%, #2D6A4F 100%)" }}>
          <div className="px-6 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="font-[Cabin] text-xl md:text-2xl font-bold text-white mb-2">Gear Up for Pier Fishing &#127907;</h3>
              <p className="text-white/80 text-sm max-w-md">Top-rated pier fishing gear — rods, tackle, nets, and more.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "https://www.amazon.com/dp/B08C2G9KZP?tag=babymydog03-20", label: "Rod & Reel" },
                { href: "https://www.amazon.com/dp/B01A5LCBE4?tag=babymydog03-20", label: "Tackle Box" },
                { href: "https://www.amazon.com/dp/B0019KBZGC?tag=babymydog03-20", label: "Drop Net" },
                { href: "https://www.amazon.com/dp/B005KSQFLE?tag=babymydog03-20", label: "Bait Bucket" },
              ].map((p) => (
                <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer nofollow sponsored" className="bg-white/15 hover:bg-white/25 text-white font-bold text-xs px-4 py-2 rounded-lg transition">{p.label}</a>
              ))}
              <a href="https://www.amazon.com/dp/B001GXFFPU?tag=babymydog03-20" target="_blank" rel="noopener noreferrer nofollow sponsored" className="bg-white text-[#0A3D62] font-bold text-xs px-4 py-2 rounded-lg hover:shadow-lg transition">Fishing Cooler &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S BITING THIS MONTH */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-4">What&apos;s Biting This Month</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(() => {
            const m = new Date().getMonth();
            const species: { name: string; season: string; bait: string; states: string; link: string }[] =
              m >= 2 && m <= 4 ? [
                { name: "Flounder", season: "Spring run", bait: "Live minnows, mud minnows", states: "NC, SC, VA", link: "/north-carolina" },
                { name: "Redfish", season: "Active in shallows", bait: "Cut mullet, shrimp", states: "TX, LA, FL", link: "/florida" },
                { name: "Striped Bass", season: "Spring migration", bait: "Bloodworms, bunker", states: "NJ, NY, MA", link: "/new-jersey" },
              ] : m >= 5 && m <= 7 ? [
                { name: "Spanish Mackerel", season: "Peak summer", bait: "Gotcha plugs, spoons", states: "FL, NC, SC", link: "/florida" },
                { name: "Bluefish", season: "Summer blitz", bait: "Cut bait, metal lures", states: "NJ, NY, NC", link: "/new-york" },
                { name: "Snook", season: "Summer spawn", bait: "Live pilchard, shrimp", states: "FL", link: "/florida" },
              ] : m >= 8 && m <= 10 ? [
                { name: "Redfish", season: "Bull reds running", bait: "Cut mullet, crab", states: "FL, LA, TX", link: "/texas" },
                { name: "Sheepshead", season: "Fall bite", bait: "Fiddler crabs, barnacles", states: "FL, GA, SC", link: "/georgia" },
                { name: "Flounder", season: "Fall migration", bait: "Live finger mullet", states: "NC, VA, NJ", link: "/virginia" },
              ] : [
                { name: "Sheepshead", season: "Winter staple", bait: "Fiddler crabs, oysters", states: "FL, TX, LA", link: "/florida" },
                { name: "Black Drum", season: "Cold water bite", bait: "Shrimp, clam", states: "TX, LA, FL", link: "/texas" },
                { name: "Whiting", season: "Year-round", bait: "Shrimp, sand fleas", states: "FL, GA, SC", link: "/south-carolina" },
              ];
            return species.map((sp) => (
              <Link key={sp.name} href={sp.link} className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-ocean hover:shadow-md hover:-translate-y-0.5 transition-all">
                <h3 className="font-[Cabin] font-bold text-charcoal group-hover:text-ocean transition">{sp.name}</h3>
                <p className="text-coral text-xs font-bold mt-1">{sp.season}</p>
                <p className="text-gray-500 text-xs mt-2"><strong className="text-charcoal">Best bait:</strong> {sp.bait}</p>
                <p className="text-gray-400 text-xs mt-1">{sp.states}</p>
              </Link>
            ));
          })()}
        </div>
      </section>

      {/* BLOG */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal">Fishing Tips &amp; Guides</h2>
          <Link href="/blog" className="text-sm font-semibold text-coral hover:text-coral-dark transition">All posts &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredPosts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} loading="lazy" decoding="async" className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-xs mb-1">{p.date} &middot; {p.readTime}</p>
                <h3 className="font-[Cabin] font-bold text-charcoal group-hover:text-ocean transition text-sm">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot position="homepage-pre-faq" />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }) }} />
        <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqItems.map((f, i) => (
            <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group">
              <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal text-sm hover:text-ocean transition list-none flex items-center justify-between">{f.q}<svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <EmailCapture />
      <div className="max-w-5xl mx-auto px-4"><CletusAd /></div>

      <section id="submit" className="max-w-2xl mx-auto px-4 pb-20">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-2">Know a pier we&apos;re missing?</h2>
          <p className="text-gray-500 text-sm mb-6">Help us build the most complete pier directory in America.</p>
          <a href="mailto:hello@pierseeker.com?subject=New%20Pier%20Submission" className="bg-coral hover:bg-coral-dark text-white font-bold py-3 px-8 rounded-lg transition shadow-sm inline-block">Submit a Pier</a>
        </div>
      </section>
    </div>
  );
}
