import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Michigan — 2863+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Michigan. 2863+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Michigan Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/michigan", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Michigan Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/michigan" },
};

export default function MichiganLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
