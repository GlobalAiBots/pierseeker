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
