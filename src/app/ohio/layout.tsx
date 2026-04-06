import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Ohio — 760+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Ohio. 760+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Ohio Fishing Piers — PierSeeker", url: "https://pierseeker.com/ohio", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Ohio Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/ohio" },
};

export default function OhioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
