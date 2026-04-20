import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Missouri — 323+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Missouri. 323+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Missouri Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/missouri", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Missouri Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/missouri" },
};

export default function MissouriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
