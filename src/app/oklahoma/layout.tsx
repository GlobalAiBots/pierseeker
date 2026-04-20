import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Oklahoma — 203+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Oklahoma. 203+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Oklahoma Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/oklahoma", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Oklahoma Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/oklahoma" },
};

export default function OklahomaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
