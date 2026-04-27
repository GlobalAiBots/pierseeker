import type { Metadata } from "next";
import categoriesData from "@/data/categories.json";
import { CATEGORY_EDITORIALS } from "@/data/category-editorials";

interface CatState { code: string; name: string; slug: string; count: number; }
interface Category { slug: string; title: string; description: string; totalCount: number; states: CatState[]; }
const categories = categoriesData as Category[];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  const editorial = CATEGORY_EDITORIALS[slug];
  const canonical = `https://www.pierseeker.com/category/${slug}`;
  if (!cat) {
    return { alternates: { canonical } };
  }
  const title = editorial?.metaTitle || `${cat.title} in America | PierSeeker`;
  const description = editorial?.metaDescription || `${cat.totalCount.toLocaleString()} ${cat.title.toLowerCase()} across ${cat.states.length} states. ${cat.description}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, url: canonical },
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
