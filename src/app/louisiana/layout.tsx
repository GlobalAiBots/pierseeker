import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Louisiana — 627+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Louisiana. 627+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Louisiana Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/louisiana", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Louisiana Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/louisiana" },
};

export default function LouisianaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
