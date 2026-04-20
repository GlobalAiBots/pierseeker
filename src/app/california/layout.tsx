import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in California — 1832+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for California. 1832+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "California Fishing Piers — PierSeeker", url: "https://www.pierseeker.com/california", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "California Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://www.pierseeker.com/california" },
};

export default function CaliforniaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
