import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Massachusetts — 1207+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Massachusetts. 1207+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Massachusetts Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/massachusetts", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Massachusetts Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/massachusetts" },
};

export default function MassachusettsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
