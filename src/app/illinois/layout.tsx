import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Illinois — 1435+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Illinois. 1435+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Illinois Fishing Piers — PierSeeker", url: "https://pierseeker.com/illinois", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Illinois Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/illinois" },
};

export default function IllinoisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
