import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Idaho — 407+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Idaho. 407+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Idaho Fishing Piers — PierSeeker", url: "https://pierseeker.com/idaho", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Idaho Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/idaho" },
};

export default function IdahoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
