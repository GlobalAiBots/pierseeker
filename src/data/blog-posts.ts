export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  description: string;
  gradient: string;
  icon: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "pier-fishing-license-requirements-by-state",
    title: "Pier Fishing License Requirements by State (2026 Guide)",
    date: "April 21, 2026", readTime: "10 min read", category: "Regulations",
    description: "Do you need a fishing license to fish off a pier? State-by-state rules, age exemptions, saltwater vs freshwater licenses, and which piers offer license-free fishing.",
    gradient: "linear-gradient(135deg, #0A3D62 0%, #2D6A4F 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><rect x="16" y="12" width="48" height="32" rx="3" stroke="rgba(255,255,255,0.3)" stroke-width="2"/><path d="M22 22h36M22 30h24M22 36h20" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/><circle cx="54" cy="36" r="5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/></svg>`,
  },
  {
    slug: "pier-fishing-with-kids",
    title: "Pier Fishing with Kids: A Family Guide for First-Timers",
    date: "April 17, 2026", readTime: "8 min read", category: "Family",
    description: "Everything you need to know about taking kids pier fishing — gear, bait, easy species to catch, safety tips, and how to make it a fun family tradition.",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #FF6B6B 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">&#x1F9D2;</text></svg>',
  },
  {
    slug: "mcdonalds-straw-spanish-mackerel",
    title: "The McDonald's Straw Trick: How to Catch Spanish Mackerel from Any Pier",
    date: "April 17, 2026", readTime: "7 min read", category: "Hacks",
    description: "The legendary DIY pier fishing hack — cut McDonald's straws on sabiki hooks to catch Spanish mackerel. Step-by-step guide with gear, technique, and best piers.",
    gradient: "linear-gradient(135deg, #DA291C 0%, #FFC72C 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><text x="20" y="42" font-size="36">🥤</text></svg>`,
  },
  {
    slug: "pier-fishing-complete-guide",
    title: "Pier Fishing for Beginners: Everything You Need to Know",
    date: "April 16, 2026", readTime: "9 min read", category: "Guide",
    description: "The complete beginner guide to pier fishing — gear, species, technique, etiquette, and safety tips for your first trip.",
    gradient: "linear-gradient(135deg, #0A3D62 0%, #1B6CA8 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">📖</text></svg>',
  },
  {
    slug: "best-bait-pier-fishing",
    title: "Best Bait for Pier Fishing by Species",
    date: "April 16, 2026", readTime: "8 min read", category: "Tackle",
    description: "Live bait, cut bait, and artificial options for every major pier fishing species — redfish, flounder, striped bass, and more.",
    gradient: "linear-gradient(135deg, #2D6A4F 0%, #40916C 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">🪱</text></svg>',
  },
  {
    slug: "top-fishing-piers-florida",
    title: "Top 10 Fishing Piers in Florida (2026)",
    date: "April 16, 2026", readTime: "9 min read", category: "Destinations",
    description: "The definitive top 10 fishing piers in Florida for 2026, from Juno Beach to Skyway Pier and beyond.",
    gradient: "linear-gradient(135deg, #1E3A5F 0%, #0D9488 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">🌴</text></svg>',
  },
  {
    slug: "pier-vs-surf-fishing",
    title: "Pier Fishing vs Surf Fishing: Which is Better?",
    date: "April 16, 2026", readTime: "8 min read", category: "Guide",
    description: "Compare pier fishing and surf fishing across access, cost, species, gear, and convenience to find your style.",
    gradient: "linear-gradient(135deg, #E85555 0%, #FF6B6B 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">⚖️</text></svg>',
  },
  {
    slug: "best-pier-fishing-by-season",
    title: "Best Pier Fishing by Season: What to Catch and When",
    date: "April 15, 2026", readTime: "7 min read", category: "Seasonal",
    description: "Spring flounder, summer snapper, fall redfish, winter whiting — what to target from the pier every season.",
    gradient: "linear-gradient(135deg, #0A3D62 0%, #2D6A4F 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">🗓️</text></svg>',
  },
  {
    slug: "night-pier-fishing-tips",
    title: "Night Pier Fishing: Tips for Catching More After Dark",
    date: "April 15, 2026", readTime: "5 min read", category: "Tips",
    description: "Why pier lights attract fish, best night species, essential gear, and safety tips for after-dark fishing.",
    gradient: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">🌙</text></svg>',
  },
  {
    slug: "pier-fishing-tips-for-beginners",
    title: "Pier Fishing Tips for Beginners: Everything You Need to Know",
    date: "April 11, 2026", readTime: "7 min read", category: "Beginner Guide",
    description: "Gear, bait, casting technique, species by region, best times, and licensing — everything a new pier angler needs.",
    gradient: "linear-gradient(135deg, #0A3D62 0%, #0D9488 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">🎯</text></svg>',
  },
  {
    slug: "pier-vs-boat-fishing",
    title: "Pier Fishing vs Boat Fishing: Pros, Cons & Which Is Right for You",
    date: "April 11, 2026", readTime: "5 min read", category: "Guide",
    description: "Cost, accessibility, species access, and experience level — how pier fishing and boat fishing compare.",
    gradient: "linear-gradient(135deg, #1E3A5F 0%, #E76F51 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">⚖️</text></svg>',
  },
  {
    slug: "best-fishing-piers-in-america",
    title: "Best Fishing Piers in America: Top 25",
    date: "April 11, 2026", readTime: "8 min read", category: "Destinations",
    description: "The 25 best fishing piers in the US — curated by region with what makes each one worth the trip.",
    gradient: "linear-gradient(135deg, #1E6091 0%, #2D6A4F 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">🏆</text></svg>',
  },
  {
    slug: "best-fishing-piers-florida",
    title: "Best Fishing Piers in Florida: Saltwater Spots You Need to Visit",
    date: "April 5, 2026", readTime: "6 min read", category: "Destinations",
    description: "Discover the top fishing piers in Florida for saltwater fishing, from the Gulf Coast to the Atlantic.",
    gradient: "linear-gradient(135deg, #0A3D62 0%, #1B6CA8 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">🎣</text></svg>',
  },
  {
    slug: "pier-fishing-beginners",
    title: "Pier Fishing for Beginners: Everything You Need to Know",
    date: "April 3, 2026", readTime: "7 min read", category: "Beginner Guide",
    description: "New to pier fishing? Learn the basics of gear, technique, etiquette, and what to expect on your first trip.",
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #E85555 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">🐟</text></svg>',
  },
  {
    slug: "what-to-bring-pier-fishing",
    title: "What to Bring Pier Fishing: The Complete Gear Checklist",
    date: "April 1, 2026", readTime: "5 min read", category: "Gear",
    description: "Never forget essential gear again. The complete pier fishing packing list for saltwater and freshwater.",
    gradient: "linear-gradient(135deg, #2D6A4F 0%, #40916C 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">🎒</text></svg>',
  },
  {
    slug: "free-fishing-piers",
    title: "Free Fishing Piers: How to Find Public Piers That Don't Charge",
    date: "March 28, 2026", readTime: "5 min read", category: "Tips",
    description: "Most fishing piers are free to use. Here is how to find them and what to expect.",
    gradient: "linear-gradient(135deg, #F4D03F 0%, #D4B82F 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">🆓</text></svg>',
  },
  {
    slug: "night-pier-fishing",
    title: "Night Pier Fishing: Tips for Catching More After Dark",
    date: "March 25, 2026", readTime: "5 min read", category: "Tips",
    description: "Night fishing from piers can be incredibly productive. Here is how to maximize your catch after dark.",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    icon: '<svg viewBox="0 0 80 64" fill="none"><text x="20" y="45" font-size="40">🌙</text></svg>',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
