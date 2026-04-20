import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Florida — 64+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Florida. 64+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Florida Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/florida", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Florida Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/florida" },
};

export default function FloridaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
