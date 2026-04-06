import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Alabama — 703+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Alabama. 703+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Alabama Fishing Piers — PierSeeker", url: "https://pierseeker.com/alabama", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Alabama Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/alabama" },
};

export default function AlabamaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
