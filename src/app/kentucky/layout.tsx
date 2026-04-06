import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Kentucky — 324+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Kentucky. 324+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Kentucky Fishing Piers — PierSeeker", url: "https://pierseeker.com/kentucky", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Kentucky Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/kentucky" },
};

export default function KentuckyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
