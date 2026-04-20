import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Arkansas — 330+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Arkansas. 330+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Arkansas Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/arkansas", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Arkansas Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/arkansas" },
};

export default function ArkansasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
