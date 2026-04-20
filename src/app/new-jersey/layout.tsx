import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in New Jersey — 1233+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for New Jersey. 1233+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "New Jersey Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/new-jersey", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "New Jersey Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/new-jersey" },
};

export default function NewJerseyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
