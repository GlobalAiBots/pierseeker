import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Every Fishing Pier in Utah — 147+ Piers | PierSeeker",
  description: "The most complete fishing pier directory for Utah. 147+ piers, docks, and jetties with GPS coordinates and amenities.",
  openGraph: { title: "Utah Fishing Piers — PierSeeker", url: "https://pierseeker.com/utah", siteName: "PierSeeker" },
  twitter: { card: "summary", title: "Utah Fishing Piers | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/utah" },
};

export default function UtahLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
