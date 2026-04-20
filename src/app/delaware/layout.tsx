import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Delaware — 197+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Delaware. 197+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Delaware Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/delaware", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Delaware Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/delaware" },
};

export default function DelawareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
