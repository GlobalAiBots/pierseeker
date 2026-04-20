import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in New York — 2442+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for New York. 2442+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "New York Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/new-york", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "New York Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/new-york" },
};

export default function NewYorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
