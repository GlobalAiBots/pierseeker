import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Indiana — 419+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Indiana. 419+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Indiana Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/indiana", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Indiana Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/indiana" },
};

export default function IndianaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
