import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "US Fishing Pier Map — Find Piers in All 50 States | PierSeeker",
  description: "Interactive map of 30,000+ fishing piers across 44 states. Browse by state to find public piers, jetties, and docks with GPS coordinates, amenities, and directions.",
  openGraph: {
    title: "US Fishing Pier Map — PierSeeker",
    description: "30,000+ fishing piers across 44 states. Find your pier.",
    url: "https://pierseeker.com/map",
    siteName: "PierSeeker",
  },
  twitter: { card: "summary", title: "US Fishing Pier Map | PierSeeker" },
  alternates: { canonical: "https://pierseeker.com/map" },
};

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
