import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PierSeeker — US Fishing Pier Directory",
  description: "PierSeeker is the most complete fishing pier directory in America. Find public fishing piers, jetties, and waterfront access points across every state.",
  openGraph: {
    title: "About PierSeeker",
    description: "The most complete fishing pier directory in America. Find piers, jetties, and waterfront access in every state.",
    url: "https://www.pierseeker.com/about",
  },
  twitter: { card: "summary", title: "About PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-6">The Most Complete Fishing Pier Directory in America</h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          If you&apos;ve ever driven to a waterfront looking for a fishing pier — and found it closed, private, or just a pile of rotting boards — you know why we built PierSeeker.
        </p>
        <p>
          <strong className="text-charcoal">PierSeeker is the most complete fishing pier directory in America — covering 44 states with thousands of piers.</strong> From Michigan&apos;s Great Lakes piers to Maryland&apos;s Chesapeake Bay jetties, Washington&apos;s coastal docks, and beyond. Real GPS coordinates. Amenities listed. Local tips from people who actually fish them. No guessing, no outdated info, no dead ends.
        </p>
        <p>
          We built PierSeeker because every angler deserves to know where the public piers are, which ones have fish-cleaning stations, which ones are lit for night fishing, and which ones have the best structure for stripers and catfish.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
          <h2 className="font-[Cabin] text-xl font-bold text-water mb-3">What&apos;s Next</h2>
          <p className="text-gray-600">
            We now cover 44 states with thousands of fishing piers across the United States. We&apos;re adding detailed guides with local tips for every major waterfront, and expanding to all 50 states.
          </p>
        </div>

        <p>
          PierSeeker is a project of <a href="https://globalaibots.com" target="_blank" rel="noopener noreferrer" className="text-water hover:text-water-light transition font-semibold">Global AI Bots</a>, the company behind CLETUS — an AI chat and voice agent for businesses. Learn more at <a href="https://globalaibots.com" target="_blank" rel="noopener noreferrer" className="text-water hover:text-water-light transition font-semibold">globalaibots.com</a>, <a href="https://askcletus.com" target="_blank" rel="noopener noreferrer" className="text-water hover:text-water-light transition font-semibold">askcletus.com</a>, or <a href="https://grandlakeai.com" target="_blank" rel="noopener noreferrer" className="text-water hover:text-water-light transition font-semibold">grandlakeai.com</a>.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-8">
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-3">Powered by CLETUS AI</h2>
          <p className="text-gray-600">
            The chatbot on this site is <strong className="text-charcoal">CLETUS</strong> — an AI chat and voice agent built for businesses. The same technology that helps you find fishing piers can answer your business customers&apos; questions 24/7. If you run a marina, bait shop, tackle store, or any waterfront business, <a href="/for-businesses" className="text-water hover:underline font-semibold">learn how CLETUS can work for you</a>.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-8">
          <h2 className="font-[Cabin] text-xl font-bold text-charcoal mb-3">Our Sister Sites</h2>
          <p className="text-gray-600">
            PierSeeker is part of a family of outdoor directories. Looking for boat ramps? Check out <a href="https://rampseeker.com" target="_blank" rel="noopener noreferrer" className="text-water hover:underline font-semibold">RampSeeker</a>. Looking for dog parks and pet-friendly trails? Visit <a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="text-water hover:underline font-semibold">BarkSeeker</a>.
          </p>
        </div>

        <h2 className="font-[Cabin] text-xl font-bold text-charcoal mt-10 mb-3">Get in Touch</h2>
        <p>
          Know a pier we missed? Have a correction? Just want to talk fishing?
        </p>
        <p>
          <a href="mailto:hello@pierseeker.com" className="text-water hover:text-water-light transition font-semibold">hello@pierseeker.com</a>
        </p>
        <p className="text-gray-400 text-sm mt-6">
          Covering fishing piers, public docks, jetties, and waterfront access points across the United States.
        </p>
      </div>
    </div>
  );
}
