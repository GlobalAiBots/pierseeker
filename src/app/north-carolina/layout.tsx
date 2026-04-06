import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in North Carolina — 1737+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for North Carolina. 1737+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "North Carolina Fishing Piers — PierSeeker", url: "https://pierseeker.com/north-carolina", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "North Carolina Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/north-carolina" },
};

export default function NorthCarolinaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
