import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Texas — 1227+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Texas. 1227+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Texas Fishing Piers — PierSeeker", url: "https://pierseeker.com/texas", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Texas Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/texas" },
};

export default function TexasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
