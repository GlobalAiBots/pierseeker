import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in South Carolina — 9+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for South Carolina. 9+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "South Carolina Fishing Piers — PierSeeker", url: "https://pierseeker.com/south-carolina", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "South Carolina Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/south-carolina" },
};

export default function SouthCarolinaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
