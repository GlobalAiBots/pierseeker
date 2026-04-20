import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Maryland — 2274+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Maryland. 2274+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Maryland Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/maryland", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Maryland Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/maryland" },
};

export default function MarylandLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
