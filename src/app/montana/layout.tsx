import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Montana — 27+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Montana. 27+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Montana Fishing Piers — PierSeeker", url: "https://pierseeker.com/montana", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Montana Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/montana" },
};

export default function MontanaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
