// Contextual "Related Guide" widget for /piers/[id] pages.

type BlogTease = { slug: string; title: string; excerpt: string };

const BLOGS: Record<string, BlogTease> = {
  "best-bait-pier-fishing": {
    slug: "best-bait-pier-fishing",
    title: "Best Bait for Pier Fishing",
    excerpt: "Species-by-species bait picks: shrimp for sheepshead, sabiki rigs for mackerel, cut bait for sharks, fiddler crabs for redfish. What to buy at the tackle shop and what's cheaper to catch yourself.",
  },
  "pier-fishing-rigs-setup": {
    slug: "pier-fishing-rigs-setup",
    title: "Essential Pier Fishing Rigs",
    excerpt: "High-low rig for bottom fish, Carolina rig for drag-free presentations, float rigs for mackerel. Diagrams and knot tutorials for the five rigs that cover 95% of pier situations.",
  },
  "night-pier-fishing": {
    slug: "night-pier-fishing",
    title: "Night Pier Fishing Guide",
    excerpt: "Why fish bite harder after dark, species to target at night (snook, striper, shark), lighting choices (green LED vs white), and safety. Night fishing is often the most productive window of the day.",
  },
  "best-time-of-day-for-pier-fishing": {
    slug: "best-time-of-day-for-pier-fishing",
    title: "Best Time of Day for Pier Fishing",
    excerpt: "Dawn and dusk golden hours, incoming-tide advantage, seasonal shifts (summer morning vs winter midday), moon phase impact, and when not to bother fishing.",
  },
  "pier-fishing-license-requirements-by-state": {
    slug: "pier-fishing-license-requirements-by-state",
    title: "Pier Fishing License Requirements by State",
    excerpt: "Most states require a license for pier fishing. License-free piers, age exemptions, saltwater vs freshwater, short-term tourist licenses, and penalties.",
  },
  "pier-fishing-tips-for-beginners": {
    slug: "pier-fishing-tips-for-beginners",
    title: "Pier Fishing Tips for Beginners",
    excerpt: "Rod and reel setup under $100, what bait to buy, how to read the pier for feeding zones, etiquette, and the five mistakes every new pier angler makes.",
  },
  "pier-fishing-rod-recommendations": {
    slug: "pier-fishing-rod-recommendations",
    title: "Pier Fishing Rod Recommendations",
    excerpt: "7-9 ft medium-heavy for inshore, 10-12 ft surf rods for long casts, ultralight for bait. The rod/reel combos that match pier conditions without overspending.",
  },
  "pier-fishing-tide-charts": {
    slug: "pier-fishing-tide-charts",
    title: "Reading Pier Fishing Tide Charts",
    excerpt: "How tidal flow drives bait movement, when high tide vs low tide fishes best, which apps to use (Tides Near Me, NOAA), and the 2-hour pre-high-tide window that out-fishes everything else.",
  },
  "fishing-pier-safety-tips": {
    slug: "fishing-pier-safety-tips",
    title: "Pier Fishing Safety",
    excerpt: "Lightning protocol (piers are lightning rods), slip hazards on wet decks, kid safety, hook injuries, and the first-aid items every pier angler should carry.",
  },
  "pier-fishing-with-kids": {
    slug: "pier-fishing-with-kids",
    title: "Pier Fishing with Kids",
    excerpt: "Under-6 setup, first-catch tactics, keeping them engaged, safety essentials, and the species that reliably bite for a 4-year-old's attention span.",
  },
};

type PierShape = { name?: string; city?: string; state?: string };

export function getRelatedPierBlog(pier: PierShape): BlogTease {
  const name = (pier.name || "").toLowerCase();
  if (name.includes("lighted") || name.includes("night")) return BLOGS["night-pier-fishing"];
  if (name.includes("family") || name.includes("beach")) return BLOGS["pier-fishing-with-kids"];

  const fallback = [
    "best-bait-pier-fishing",
    "pier-fishing-rigs-setup",
    "best-time-of-day-for-pier-fishing",
    "pier-fishing-license-requirements-by-state",
    "pier-fishing-tips-for-beginners",
    "pier-fishing-rod-recommendations",
    "pier-fishing-tide-charts",
    "fishing-pier-safety-tips",
  ];
  const hash = (pier.city || "").split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return BLOGS[fallback[hash % fallback.length]];
}
