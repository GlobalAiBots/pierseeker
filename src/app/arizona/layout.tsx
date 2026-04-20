import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Arizona — 168+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Arizona. 168+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Arizona Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/arizona", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Arizona Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/arizona" },
};

export default function ArizonaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
