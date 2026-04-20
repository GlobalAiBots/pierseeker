import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in West Virginia — 7+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for West Virginia. 7+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "West Virginia Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/west-virginia", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "West Virginia Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/west-virginia" },
};

export default function WestVirginiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
