import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Mississippi — 108+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Mississippi. 108+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Mississippi Fishing Piers — PierSeeker", url: "https://pierseeker.com/mississippi", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Mississippi Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/mississippi" },
};

export default function MississippiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
