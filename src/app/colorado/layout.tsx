import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Colorado — 275+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Colorado. 275+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Colorado Fishing Piers — PierSeeker", url: "https://pierseeker.com/colorado", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Colorado Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/colorado" },
};

export default function ColoradoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
