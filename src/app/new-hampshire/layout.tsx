import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in New Hampshire — 453+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for New Hampshire. 453+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "New Hampshire Fishing Piers — PierSeeker", url: "https://pierseeker.com/new-hampshire", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "New Hampshire Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/new-hampshire" },
};

export default function NewHampshireLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
