import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Oregon — 851+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Oregon. 851+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Oregon Fishing Piers — PierSeeker", url: "https://pierseeker.com/oregon", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Oregon Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/oregon" },
};

export default function OregonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
