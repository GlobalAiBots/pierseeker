import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Virginia — 1242+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Virginia. 1242+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Virginia Fishing Piers — PierSeeker", url: "https://pierseeker.com/virginia", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Virginia Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/virginia" },
};

export default function VirginiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
