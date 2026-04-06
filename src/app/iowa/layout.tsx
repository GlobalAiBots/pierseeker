import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Iowa — 331+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Iowa. 331+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Iowa Fishing Piers — PierSeeker", url: "https://pierseeker.com/iowa", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Iowa Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/iowa" },
};

export default function IowaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
