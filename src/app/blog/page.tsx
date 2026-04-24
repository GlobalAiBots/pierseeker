import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PierSeeker Blog — Pier Fishing Tips, Guides & Destinations",
  description: "Pier fishing tips, gear guides, destination reviews, and fishing pier advice for anglers across America.",
  openGraph: { title: "PierSeeker Blog", url: "https://www.pierseeker.com/blog", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "PierSeeker Blog" },
  alternates: { canonical: "https://www.pierseeker.com/blog" },
};

// Category → gradient + inline SVG icon. Matches rampseeker/marinaseeker/
// barkseeker visual pattern. Icons rendered at 50% white for extra
// contrast (fishing / gear iconography reads best slightly brighter).
const CATEGORY_CONFIG: Record<string, { gradient: string; icon: string }> = {
  Tips: {
    gradient: "linear-gradient(135deg, #D97706 0%, #EA580C 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><path d="M40 12 C32 12 28 18 28 24 C28 30 34 32 34 38 L46 38 Q46 32 52 24 C52 18 48 12 40 12 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/><line x1="34" y1="42" x2="46" y2="42" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/><line x1="36" y1="46" x2="44" y2="46" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/></svg>`,
  },
  Hacks: {
    gradient: "linear-gradient(135deg, #DC2626 0%, #F97316 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><path d="M40 12 L43 25 L56 28 L43 31 L40 44 L37 31 L24 28 L37 25 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linejoin="round" fill="none"/><circle cx="58" cy="16" r="2" fill="rgba(255,255,255,0.5)"/><circle cx="22" cy="44" r="2" fill="rgba(255,255,255,0.5)"/></svg>`,
  },
  Regulations: {
    gradient: "linear-gradient(135deg, #059669 0%, #0D9488 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><path d="M24 14 L54 14 Q56 14 56 16 L56 46 Q56 48 54 48 L24 48 Q22 48 22 46 L22 16 Q22 14 24 14 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/><line x1="28" y1="22" x2="50" y2="22" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/><line x1="28" y1="28" x2="50" y2="28" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/><line x1="28" y1="34" x2="44" y2="34" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/></svg>`,
  },
  Safety: {
    gradient: "linear-gradient(135deg, #DC2626 0%, #EA580C 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><path d="M40 10 L56 16 L56 30 Q56 44 40 50 Q24 44 24 30 L24 16 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M32 28 L38 34 L48 22" stroke="rgba(255,255,255,0.55)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  },
  Family: {
    gradient: "linear-gradient(135deg, #F97316 0%, #DC2626 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><circle cx="28" cy="20" r="6" stroke="rgba(255,255,255,0.5)" stroke-width="2"/><path d="M18 46 Q18 34 28 34 Q38 34 38 46" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/><circle cx="52" cy="22" r="5" stroke="rgba(255,255,255,0.5)" stroke-width="2"/><path d="M44 46 Q44 36 52 36 Q60 36 60 46" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/><circle cx="42" cy="30" r="3" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/></svg>`,
  },
  Seasonal: {
    gradient: "linear-gradient(135deg, #0891B2 0%, #0EA5E9 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><rect x="20" y="16" width="40" height="32" rx="2" stroke="rgba(255,255,255,0.5)" stroke-width="2"/><line x1="20" y1="24" x2="60" y2="24" stroke="rgba(255,255,255,0.5)" stroke-width="2"/><line x1="28" y1="10" x2="28" y2="20" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/><line x1="52" y1="10" x2="52" y2="20" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="34" r="1.5" fill="rgba(255,255,255,0.5)"/><circle cx="40" cy="34" r="1.5" fill="rgba(255,255,255,0.5)"/><circle cx="48" cy="34" r="1.5" fill="rgba(255,255,255,0.5)"/></svg>`,
  },
  Gear: {
    gradient: "linear-gradient(135deg, #475569 0%, #334155 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><path d="M34 14 L46 14 L46 22 L54 22 L54 34 L46 34 L46 46 L34 46 L34 34 L26 34 L26 22 L34 22 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none" stroke-linejoin="round"/><circle cx="40" cy="28" r="3" fill="rgba(255,255,255,0.45)"/></svg>`,
  },
  Guide: {
    gradient: "linear-gradient(135deg, #0D9488 0%, #059669 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><path d="M22 14 L22 46 Q22 48 24 48 L40 48 L40 16 Q40 14 38 14 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/><path d="M40 16 Q40 14 42 14 L56 14 Q58 14 58 16 L58 48 L42 48 Q40 48 40 46 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/><line x1="27" y1="22" x2="35" y2="22" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/><line x1="27" y1="28" x2="35" y2="28" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/></svg>`,
  },
  Guides: {
    gradient: "linear-gradient(135deg, #0D9488 0%, #059669 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><path d="M22 14 L22 46 Q22 48 24 48 L40 48 L40 16 Q40 14 38 14 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/><path d="M40 16 Q40 14 42 14 L56 14 Q58 14 58 16 L58 48 L42 48 Q40 48 40 46 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/><line x1="27" y1="22" x2="35" y2="22" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/><line x1="27" y1="28" x2="35" y2="28" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/></svg>`,
  },
  "Beginner Guide": {
    gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><path d="M22 14 L22 46 Q22 48 24 48 L56 48 Q58 48 58 46 L58 16 Q58 14 56 14 L24 14 Q22 14 22 16 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/><line x1="40" y1="22" x2="40" y2="38" stroke="rgba(255,255,255,0.55)" stroke-width="2.5" stroke-linecap="round"/><line x1="32" y1="30" x2="48" y2="30" stroke="rgba(255,255,255,0.55)" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  },
  Destinations: {
    gradient: "linear-gradient(135deg, #D97706 0%, #EA580C 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><path d="M40 10 C48 10 54 16 54 24 C54 34 40 48 40 48 C40 48 26 34 26 24 C26 16 32 10 40 10 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/><circle cx="40" cy="24" r="5" stroke="rgba(255,255,255,0.55)" stroke-width="2"/></svg>`,
  },
  Species: {
    gradient: "linear-gradient(135deg, #0891B2 0%, #0EA5E9 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><path d="M16 30 Q30 18 48 30 Q30 42 16 30 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/><path d="M48 30 L62 20 L62 40 Z" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none" stroke-linejoin="round"/><circle cx="24" cy="28" r="1.5" fill="rgba(255,255,255,0.55)"/></svg>`,
  },
  Tackle: {
    gradient: "linear-gradient(135deg, #475569 0%, #64748B 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><line x1="40" y1="10" x2="40" y2="28" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/><path d="M40 28 Q40 42 32 42 Q28 42 28 38 Q28 34 32 34" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none" stroke-linecap="round"/><line x1="36" y1="14" x2="44" y2="14" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/></svg>`,
  },
  Technique: {
    gradient: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
    icon: `<svg viewBox="0 0 80 60" fill="none"><circle cx="40" cy="30" r="18" stroke="rgba(255,255,255,0.5)" stroke-width="2"/><circle cx="40" cy="30" r="10" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><circle cx="40" cy="30" r="3" fill="rgba(255,255,255,0.55)"/><line x1="40" y1="8" x2="40" y2="14" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/><line x1="40" y1="46" x2="40" y2="52" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/></svg>`,
  },
};

const DEFAULT_CONFIG = {
  gradient: "linear-gradient(135deg, #475569 0%, #1E293B 100%)",
  icon: `<svg viewBox="0 0 80 60" fill="none"><rect x="20" y="14" width="40" height="32" rx="3" stroke="rgba(255,255,255,0.4)" stroke-width="2"/></svg>`,
};

const networkPosts = [
  {
    url: "https://www.rampseeker.com/blog",
    title: "RampSeeker Blog",
    excerpt: "Boat ramp guides, towing advice, launching tips. 27,000+ ramps across America.",
    tag: "RampSeeker",
  },
  {
    url: "https://www.marinaseeker.com/blog",
    title: "MarinaSeeker Blog",
    excerpt: "Slip costs, liveaboard guides, marina reviews, dockage 101 — for the next step after the ramp.",
    tag: "MarinaSeeker",
  },
  {
    url: "https://www.barkseeker.com/blog",
    title: "BarkSeeker Blog",
    excerpt: "Traveling with your dog? Vet tips, grooming advice, off-leash park guides across the US.",
    tag: "BarkSeeker",
  },
];

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-2">Blog</h1>
      <p className="text-gray-500 mb-10">Pier fishing tips, gear guides, destination reviews, and practical advice for anglers.</p>
      <div className="space-y-6">
        {blogPosts.map((p) => {
          const config = CATEGORY_CONFIG[p.category] ?? DEFAULT_CONFIG;
          return (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col sm:flex-row bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              {/* Thumbnail */}
              <div className="sm:w-48 h-36 sm:h-auto flex-shrink-0 flex items-center justify-center relative" style={{ background: config.gradient }}>
                <div className="w-20 h-16" dangerouslySetInnerHTML={{ __html: config.icon }} />
              </div>
              {/* Content */}
              <div className="p-5 flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-[10px] font-bold text-water bg-water/10 px-2 py-0.5 rounded-full">{p.category}</span>
                  <span className="text-gray-400 text-xs">{p.date} &middot; {p.readTime}</span>
                </div>
                <h2 className="font-[Cabin] text-lg font-bold text-charcoal group-hover:text-water transition mb-2 line-clamp-2">{p.title}</h2>
                <p className="text-gray-500 text-sm line-clamp-2 mb-3">{p.description}</p>
                <span className="text-sunset font-semibold text-sm">Read more &rarr;</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* From our network */}
      <section className="mt-16 pt-10 border-t border-gray-200">
        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-2">From our network</h2>
        <p className="text-sm text-gray-500 mb-6">PierSeeker is part of a family of outdoor directory sites. Fresh reading from our sisters:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {networkPosts.map((p) => (
            <a key={p.url} href={p.url} className="group block bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 inline-block">{p.tag} <span aria-hidden="true">↗</span></span>
              <p className="font-[Cabin] font-bold text-charcoal group-hover:text-water transition text-sm leading-snug">{p.title}</p>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">{p.excerpt}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
