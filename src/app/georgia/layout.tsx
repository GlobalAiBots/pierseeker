import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Georgia — 314+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Georgia. 314+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Georgia Fishing Piers — PierSeeker", url: "https://pierseeker.com/georgia", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Georgia Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/georgia" },
};

export default function GeorgiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
