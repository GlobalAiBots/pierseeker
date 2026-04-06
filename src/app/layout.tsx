import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import CletusWidget from "@/components/CletusWidget";
import CookieConsent from "@/components/CookieConsent";
import StatesDropdown from "@/components/StatesDropdown";
import "./globals.css";

export const metadata: Metadata = {
  title: "PierSeeker | Every Fishing Pier in America — 31,000+ Fishing Spots",
  description:
    "Find fishing piers across the United States. 31,000+ piers, docks, and jetties with GPS coordinates, amenities, and local tips. Saltwater and freshwater. Free.",
  keywords:
    "fishing pier near me, public fishing pier, fishing dock, saltwater pier fishing, pier fishing spots, fishing pier directory",
  openGraph: {
    title: "PierSeeker | Every Fishing Pier in America",
    description: "31,000+ fishing piers across the US. GPS coordinates, amenities, local tips.",
    url: "https://pierseeker.com",
    siteName: "PierSeeker",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PierSeeker | Every Fishing Pier in America",
    description: "31,000+ fishing piers across 44 states. GPS coordinates, amenities, local tips.",
  },
  alternates: { canonical: "https://pierseeker.com" },
  other: {
    "google-adsense-account": "ca-pub-4822220549367368",
  },
};

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg font-[Cabin]">
          <span className="text-2xl">🎣</span>
          <span className="text-charcoal">Pier<span className="text-ocean">Seeker</span></span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
          <StatesDropdown />
          <Link href="/map" className="text-gray-500 hover:text-ocean transition">Map</Link>
          <Link href="/blog" className="text-gray-500 hover:text-ocean transition hidden sm:block">Blog</Link>
          <Link href="/about" className="text-gray-500 hover:text-ocean transition hidden sm:block">About</Link>
          <Link href="/for-businesses" className="text-coral font-bold hover:text-coral-dark transition hidden sm:block">For Businesses</Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-500">
          <div>
            <p className="font-bold text-charcoal mb-2 font-[Cabin]">🎣 PierSeeker</p>
            <p>The most complete fishing pier directory in America. 31,000+ piers across 44 states.</p>
          </div>
          <div>
            <p className="font-bold text-charcoal mb-2">Links</p>
            <div className="flex flex-col gap-1">
              <Link href="/" className="hover:text-ocean transition">All Piers</Link>
              <Link href="/map" className="hover:text-ocean transition">Map</Link>
              <Link href="/about" className="hover:text-ocean transition">About</Link>
              <Link href="/blog" className="hover:text-ocean transition">Blog</Link>
              <Link href="/for-businesses" className="hover:text-ocean transition">For Businesses</Link>
              <Link href="/privacy" className="hover:text-ocean transition">Privacy</Link>
              <Link href="/terms" className="hover:text-ocean transition">Terms</Link>
            </div>
          </div>
          <div>
            <p className="font-bold text-charcoal mb-2">Know a pier we missed?</p>
            <a href="mailto:hello@pierseeker.com" className="text-ocean hover:text-ocean-light transition">hello@pierseeker.com</a>
          </div>
          <div>
            <p className="font-bold text-charcoal mb-2">From Global AI Bots</p>
            <div className="flex flex-col gap-1">
              <a href="https://globalaibots.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition">Global AI Bots</a>
              <a href="https://askcletus.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition">CLETUS AI Chat</a>
              <a href="https://getcletus.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition">CLETUS AI Voice</a>
              <a href="https://grandlakeai.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition">Grand Lake AI</a>
              <a href="https://rampseeker.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition">RampSeeker</a>
              <a href="https://barkseeker.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition">BarkSeeker</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap justify-between items-center text-xs text-gray-400 gap-4">
          <span>&copy; {new Date().getFullYear()} PierSeeker. All rights reserved.</span>
          <div className="flex gap-3">
            <a href="mailto:hello@pierseeker.com?subject=Advertising%20Inquiry" className="hover:text-ocean transition">Advertise With Us</a>
            <span>&middot;</span>
            <span>A <a href="https://globalaibots.com" target="_blank" className="text-ocean/70 hover:text-ocean transition">Global AI Bots</a> project.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Source_Sans_3'] antialiased min-h-screen flex flex-col">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4822220549367368"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N85PYDH398"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N85PYDH398');
          `}
        </Script>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CletusWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
