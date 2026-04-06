import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Wyoming — 55+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Wyoming. 55+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Wyoming Fishing Piers — PierSeeker", url: "https://pierseeker.com/wyoming", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Wyoming Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/wyoming" },
};

export default function WyomingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
