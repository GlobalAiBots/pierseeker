import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise With PierSeeker — Reach Pier Anglers Across America",
  description: "Advertise on PierSeeker. Reach a focused audience of pier anglers actively researching tackle, gear, travel, and fishing destinations. Featured listings, sponsored posts, and banner ads.",
  alternates: { canonical: "https://pierseeker.com/advertise" },
  openGraph: {
    title: "Advertise With PierSeeker",
    description: "Reach pier anglers actively researching tackle, gear, and destinations.",
    url: "https://pierseeker.com/advertise",
    siteName: "PierSeeker",
  },
};

export default function AdvertisePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pierseeker.com" },
      { "@type": "ListItem", position: 2, name: "Advertise", item: "https://pierseeker.com/advertise" },
    ],
  };

  const mailto = "mailto:hello@pierseeker.com?subject=" + encodeURIComponent("Advertising Inquiry — PierSeeker") + "&body=" + encodeURIComponent("Hi PierSeeker team,\n\nI'd like to learn more about advertising options. Here's a quick intro:\n\n- Company: \n- Product / Service: \n- Target audience: \n- Budget range: \n- Format of interest (featured listing / sponsored post / banner): \n\nThanks!");

  return (
    <div className="min-h-screen pb-24 bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-ocean transition">Home</Link><span>/</span>
          <span className="text-charcoal font-medium">Advertise</span>
        </nav>

        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12 mb-10">
          <p className="text-coral text-xs font-bold tracking-widest uppercase mb-3">Partnerships</p>
          <h1 className="font-[Cabin] text-3xl md:text-5xl font-bold text-charcoal mb-4 leading-tight">Advertise With PierSeeker</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-6">
            Reach a focused audience of pier anglers actively researching tackle, gear, travel destinations, and fishing tips. PierSeeker is the largest dedicated fishing-pier directory in America.
          </p>
          <a href={mailto} className="inline-block bg-ocean hover:bg-ocean-light text-white font-bold px-6 py-3 rounded-lg transition shadow-sm">Start a Conversation</a>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "34,900+", label: "Fishing Piers" },
            { stat: "44", label: "States Covered" },
            { stat: "8", label: "Target Species Pages" },
            { stat: "20+", label: "Long-Form Guides" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 text-center">
              <p className="font-[Cabin] text-3xl font-bold text-ocean">{s.stat}</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-10">
          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-4">Who You&apos;ll Reach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            <div>
              <p className="font-bold text-charcoal mb-2">Audience profile</p>
              <ul className="space-y-1.5 text-gray-600">
                <li>&bull; Active and aspiring pier anglers, ages 25-70</li>
                <li>&bull; Coastal (Atlantic, Gulf, Pacific) and Great Lakes regions</li>
                <li>&bull; Mix of saltwater enthusiasts and inland freshwater pier fishermen</li>
                <li>&bull; Travelers researching destination piers and trip planning</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-charcoal mb-2">Commercial intent</p>
              <ul className="space-y-1.5 text-gray-600">
                <li>&bull; Researching rods, reels, line, and terminal tackle</li>
                <li>&bull; Shopping for bait, lures, and pier-specific rigs</li>
                <li>&bull; Planning fishing trips and lodging near piers</li>
                <li>&bull; Reading comparison content before major tackle purchases</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-5">Sponsorship Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Featured Listing",
                price: "$49-199/mo",
                desc: "Pin your business or pier to the top of relevant state, city, or category pages. Best for tackle shops, fishing charters, and pier-adjacent accommodations.",
              },
              {
                title: "Sponsored Post",
                price: "$299-999",
                desc: "A dedicated long-form article with your brand integrated naturally. Strong for tackle brands, gear launches, and destination marketing.",
              },
              {
                title: "Banner Ad",
                price: "$299-799/mo",
                desc: "Display placement across high-traffic pages. 300x250 and responsive units. Monthly or quarterly commitments.",
              },
            ].map((opt) => (
              <div key={opt.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col">
                <p className="font-[Cabin] font-bold text-charcoal text-xl mb-1">{opt.title}</p>
                <p className="text-ocean font-bold text-lg mb-3">{opt.price}</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{opt.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 italic mt-3">Pricing is a starting range. Custom packages and multi-site bundles (RampSeeker, MarinaSeeker, BarkSeeker) available.</p>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-10">
          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-3">Media Kit</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-2xl">
            Current traffic numbers, top-performing content, category breakdowns, and example ad placements are available in our media kit. We send it on request so we can tailor it to your vertical.
          </p>
          <a href={mailto} className="inline-block bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3 rounded-lg transition shadow-sm">Request Media Kit</a>
        </section>

        <section className="bg-ocean/5 border-2 border-ocean/30 rounded-2xl p-6 md:p-8">
          <h2 className="font-[Cabin] text-2xl font-bold text-charcoal mb-3">Let&apos;s Talk</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-2xl">
            Email <a href={mailto} className="text-ocean font-semibold hover:underline">hello@pierseeker.com</a> with a quick note about your product and target audience. We&apos;ll reply within two business days with recommended placements and current availability.
          </p>
          <a href={mailto} className="inline-block bg-ocean hover:bg-ocean-light text-white font-bold px-6 py-3 rounded-lg transition shadow-sm">Email Us</a>
        </section>
      </div>
    </div>
  );
}
