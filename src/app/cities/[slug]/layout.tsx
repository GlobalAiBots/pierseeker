import type { Metadata } from "next";
import cityPages from "@/data/city-pages.json";

interface CityPage { state: string; stateName: string; stateSlug: string; city: string; citySlug: string; count: number; lat: number; lng: number; }
const allCityPages = cityPages as CityPage[];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = allCityPages.find((c) => `${c.stateSlug}-${c.citySlug}` === slug);
  const canonical = `https://www.pierseeker.com/cities/${slug}`;
  if (!city) {
    return { alternates: { canonical } };
  }
  const title = `Fishing Piers in ${city.city}, ${city.stateName} | PierSeeker`;
  const description = `${city.count} fishing pier${city.count !== 1 ? "s" : ""} in ${city.city}, ${city.stateName}. GPS, directions, amenities. Find your spot on PierSeeker.`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, url: canonical },
  };
}

export default function CityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
