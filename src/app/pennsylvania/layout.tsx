import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Pennsylvania — 188+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Pennsylvania. 188+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Pennsylvania Fishing Piers — PierSeeker", url: "https://pierseeker.com/pennsylvania", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Pennsylvania Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/pennsylvania" },
};

export default function PennsylvaniaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
