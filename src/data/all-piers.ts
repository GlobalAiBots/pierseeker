/**
 * PierSeeker - Unified Pier Data Pipeline
 * Loads all state pier data into a single array with deduplication and slug generation.
 */
// PierSeeker data pipeline - no ramp imports needed

export interface UnifiedPier {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  county: string;
  state: string;
  rating: number;
  totalRatings: number;
  featured: boolean;
  amenities?: string[];
  fee?: string;
  enriched?: boolean;
}

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").substring(0, 60);
}

/** Check if a pier name is generic/unnamed */
export function isGenericName(name: string): boolean {
  const n = (name || "").trim().toLowerCase();
  if (!n || n.length < 3) return true;
  if (n === "pier" || n === "fishing pier" || n === "dock" || n === "fishing dock" || n === "jetty" || n === "wharf") return true;
  if (/^(fishing\s+)?(pier|dock|jetty|wharf)\s+(at|near|on|off)\s+/i.test(n)) return true;
  if (/^(fishing\s+)?(pier|dock|jetty|wharf)\s*[-#]/i.test(n)) return true;
  return false;
}

/** Sort piers: enriched first (by rating desc), then named (alpha), then generic (alpha) */
export function sortPiers(piers: UnifiedPier[]): UnifiedPier[] {
  return [...piers].sort((a, b) => {
    const aEnriched = a.rating > 0 || a.totalRatings > 0 || !!(a.amenities?.length) || a.featured;
    const bEnriched = b.rating > 0 || b.totalRatings > 0 || !!(b.amenities?.length) || b.featured;
    const aGeneric = isGenericName(a.name);
    const bGeneric = isGenericName(b.name);
    if (aEnriched && !bEnriched) return -1;
    if (!aEnriched && bEnriched) return 1;
    if (aEnriched && bEnriched) return (b.rating || 0) - (a.rating || 0) || a.name.localeCompare(b.name);
    if (!aGeneric && bGeneric) return -1;
    if (aGeneric && !bGeneric) return 1;
    return a.name.localeCompare(b.name);
  });
}

export const amenityLabels: Record<string, { icon: string; label: string }> = {
  "parking": { icon: "🅿️", label: "Parking" },
  "restrooms": { icon: "🚻", label: "Restrooms" },
  "fish-cleaning": { icon: "🐟", label: "Fish Cleaning" },
  "bait-shop": { icon: "🪱", label: "Bait Shop" },
  "lighting": { icon: "💡", label: "Lighting" },
  "ada-accessible": { icon: "♿", label: "ADA Accessible" },
  "covered": { icon: "🏠", label: "Covered/Shaded" },
  "picnic-area": { icon: "🧺", label: "Picnic Area" },
  "fuel-nearby": { icon: "⛽", label: "Fuel Nearby" },
};

function generateDescription(raw: { name: string; city: string; latitude: number; longitude: number }): string {
  const name = raw.name.replace(/[^\w\s'-]/g, "").trim();
  const city = raw.city || "the area";
  return `${name} is a public fishing pier located near ${city}. GPS coordinates: ${raw.latitude.toFixed(4)}, ${raw.longitude.toFixed(4)}.`;
}

// State abbreviation to prefix mapping
const stateMap: Record<string, { code: string; prefix: string }> = {
  "alabama": { code: "AL", prefix: "al" }, "alaska": { code: "AK", prefix: "ak" },
  "arizona": { code: "AZ", prefix: "az" }, "arkansas": { code: "AR", prefix: "ar" },
  "california": { code: "CA", prefix: "ca" }, "colorado": { code: "CO", prefix: "co" },
  "connecticut": { code: "CT", prefix: "ct" }, "delaware": { code: "DE", prefix: "de" },
  "florida": { code: "FL", prefix: "fl" }, "georgia": { code: "GA", prefix: "ga" },
  "hawaii": { code: "HI", prefix: "hi" }, "idaho": { code: "ID", prefix: "id" },
  "illinois": { code: "IL", prefix: "il" }, "indiana": { code: "IN", prefix: "in" },
  "iowa": { code: "IA", prefix: "ia" }, "kansas": { code: "KS", prefix: "ks" },
  "kentucky": { code: "KY", prefix: "ky" }, "louisiana": { code: "LA", prefix: "la" },
  "maine": { code: "ME", prefix: "me" }, "maryland": { code: "MD", prefix: "md" },
  "massachusetts": { code: "MA", prefix: "ma" }, "michigan": { code: "MI", prefix: "mi" },
  "minnesota": { code: "MN", prefix: "mn" }, "mississippi": { code: "MS", prefix: "ms" },
  "missouri": { code: "MO", prefix: "mo" }, "montana": { code: "MT", prefix: "mt" },
  "nebraska": { code: "NE", prefix: "ne" }, "nevada": { code: "NV", prefix: "nv" },
  "new-hampshire": { code: "NH", prefix: "nh" }, "new-jersey": { code: "NJ", prefix: "nj" },
  "new-mexico": { code: "NM", prefix: "nm" }, "new-york": { code: "NY", prefix: "ny" },
  "north-carolina": { code: "NC", prefix: "nc" }, "north-dakota": { code: "ND", prefix: "nd" },
  "ohio": { code: "OH", prefix: "oh" }, "oklahoma": { code: "OK", prefix: "ok" },
  "oregon": { code: "OR", prefix: "or" }, "pennsylvania": { code: "PA", prefix: "pa" },
  "rhode-island": { code: "RI", prefix: "ri" }, "south-carolina": { code: "SC", prefix: "sc" },
  "south-dakota": { code: "SD", prefix: "sd" }, "tennessee": { code: "TN", prefix: "tn" },
  "texas": { code: "TX", prefix: "tx" }, "utah": { code: "UT", prefix: "ut" },
  "vermont": { code: "VT", prefix: "vt" }, "virginia": { code: "VA", prefix: "va" },
  "washington": { code: "WA", prefix: "wa" }, "west-virginia": { code: "WV", prefix: "wv" },
  "wisconsin": { code: "WI", prefix: "wi" }, "wyoming": { code: "WY", prefix: "wy" },
};

// Dynamically import all state pier files
// eslint-disable-next-line @typescript-eslint/no-require-imports
function loadState(slug: string) { try { return require(`./${slug}-piers.json`); } catch { return []; } }

const seenSlugs = new Set<string>();
const allPiers: UnifiedPier[] = [];

for (const [stateSlug, info] of Object.entries(stateMap)) {
  const rawPiers = loadState(stateSlug) as Array<{
    place_id: string; name: string; formatted_address: string;
    latitude: number; longitude: number; city: string; county: string;
    rating: number | null; total_ratings: number; types: string[];
    business_status: string; amenities?: string[]; fee?: string; enriched?: boolean;
  }>;
  if (!rawPiers.length) continue;

  for (const raw of rawPiers) {
    const cleanName = (raw.name || "Fishing Pier").replace(/[^\w\s'-]/g, "").trim();
    let slug = `${info.prefix}-${slugify(cleanName) || "pier"}`;
    if (seenSlugs.has(slug)) slug = `${slug}-${raw.place_id.substring(0, 8).toLowerCase()}`;
    if (seenSlugs.has(slug)) slug = `${slug}-${raw.place_id.substring(8, 16).toLowerCase()}`;
    if (seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);

    allPiers.push({
      id: slug, name: cleanName,
      description: generateDescription({ name: cleanName, city: raw.city || "", latitude: raw.latitude, longitude: raw.longitude }),
      latitude: raw.latitude, longitude: raw.longitude,
      address: raw.formatted_address || "", city: raw.city || "", county: raw.county || "",
      state: info.code, rating: raw.rating || 0, totalRatings: raw.total_ratings || 0,
      featured: false, amenities: raw.amenities, fee: raw.fee, enriched: raw.enriched,
    });
  }
}

export const unified = allPiers;

export function getUnifiedPierById(id: string): UnifiedPier | undefined {
  return allPiers.find((r) => r.id === id);
}

export function getPiersByCity(city: string): UnifiedPier[] {
  return allPiers.filter((r) => r.city.toLowerCase() === city.toLowerCase());
}

export function getAllCities(): { city: string; count: number }[] {
  const map: Record<string, number> = {};
  for (const r of allPiers) {
    const c = r.city || "Unknown";
    map[c] = (map[c] || 0) + 1;
  }
  return Object.entries(map).map(([city, count]) => ({ city, count })).sort((a, b) => b.count - a.count);
}

/** Get piers in a specific state (for nearby on detail pages) */
export function getPiersByState(stateCode: string, limit = 10): UnifiedPier[] {
  return allPiers.filter((p) => p.state === stateCode).slice(0, limit);
}

/** Get total pier count for a state */
export function getStateCount(stateCode: string): number {
  return allPiers.filter((p) => p.state === stateCode).length;
}
