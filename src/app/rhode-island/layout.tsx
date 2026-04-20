import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Rhode Island — 9+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Rhode Island. 9+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Rhode Island Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/rhode-island", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Rhode Island Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/rhode-island" },
};

export default function RhodeIslandLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
