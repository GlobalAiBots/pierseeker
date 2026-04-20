import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Minnesota — 2053+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Minnesota. 2053+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Minnesota Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/minnesota", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Minnesota Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/minnesota" },
};

export default function MinnesotaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
