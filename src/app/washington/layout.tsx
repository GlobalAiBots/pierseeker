import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Washington — 2607+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Washington. 2607+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Washington Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/washington", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Washington Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/washington" },
};

export default function WashingtonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
