import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in South Dakota — 4+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for South Dakota. 4+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "South Dakota Fishing Piers — PierSeeker", url: "https://pierseeker.com/south-dakota", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "South Dakota Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/south-dakota" },
};

export default function SouthDakotaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
