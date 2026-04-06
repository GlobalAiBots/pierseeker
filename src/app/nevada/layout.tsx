import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Nevada — 1+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Nevada. 1+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Nevada Fishing Piers — PierSeeker", url: "https://pierseeker.com/nevada", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Nevada Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/nevada" },
};

export default function NevadaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
