import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Kansas — 170+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Kansas. 170+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Kansas Fishing Piers — PierSeeker", url: "https://pierseeker.com/kansas", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Kansas Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/kansas" },
};

export default function KansasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
