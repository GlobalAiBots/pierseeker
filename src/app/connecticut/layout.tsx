import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Connecticut — 649+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Connecticut. 649+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Connecticut Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/connecticut", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Connecticut Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/connecticut" },
};

export default function ConnecticutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
