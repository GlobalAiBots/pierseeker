import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Maine — 1211+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Maine. 1211+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Maine Fishing Piers — PierSeeker", url: "https://pierseeker.com/maine", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Maine Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/maine" },
};

export default function MaineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
