export interface H2Block {
  heading: string;
  body: string;
}

export interface StateEditorial {
  introOverride?: string;
  h2Blocks: H2Block[];
  faqExtra?: { q: string; a: string }[];
}

export const STATE_EDITORIAL: Record<string, StateEditorial> = {
  florida: {
    introOverride:
      "Florida has 2,636 piers spanning over 8,400 miles of tidal coastline, the longest fishing-pier coastline in the country, the Intracoastal Waterway from Fernandina Beach to Key West, the Florida Keys archipelago, the Gulf Coast from Panama City to Marco Island, Lake Okeechobee, and the St. Johns River system. Whether you're surf-fishing for pompano off Daytona, drop-fishing for grouper on a Gulf-side concrete pier, casting for snook from the mangroves in the Ten Thousand Islands, or chasing largemouth bass off a Lake Okeechobee dock, the directory below shows piers with verified locations, public-access status, parking availability, and amenity details.",
    h2Blocks: [
      {
        heading: "Florida's Pier Landscape",
        body:
          "Florida runs the largest and most diverse fishing-pier market in the country, with piers serving five distinct fisheries that don't overlap anywhere else in the Lower 48. The Atlantic coast from Fernandina Beach south through Jacksonville Beach, Daytona, New Smyrna, Cocoa, Sebastian, Vero Beach, Fort Pierce, Stuart, Jupiter, Lake Worth, Juno Beach, and Pompano Beach hosts iconic public fishing piers — Jacksonville Beach Pier, Daytona Pier, Sebastian Inlet Pier, Juno Beach Pier, and Lake Worth Pier rank among the most-fished public piers in America, targeting whiting, pompano, mackerel, snook, and tarpon depending on season. The Florida Keys (Key Largo through Key West) host a different pier scene — primarily bridge fishing on the Overseas Highway with the famous Old Seven Mile Bridge fishing pier at Bahia Honda among the most productive saltwater piers in the country for tarpon, permit, and bonefish. The Gulf Coast from Panama City through Pensacola, Destin, Anna Maria Island, Sunshine Skyway, Naples, and Marco Island supports concrete and wooden piers fishing emerald-water snapper, grouper, kingfish, and Spanish mackerel — the Sunshine Skyway North and South piers near St. Petersburg are essentially the world's longest fishing piers (4,200+ feet each, the remnants of the original 1954 Skyway bridge). The Intracoastal Waterway and back bays add hundreds of municipal, state-park, and county-owned piers across the state. Inland, Lake Okeechobee, the St. Johns River corridor (Sanford to Jacksonville), and the Suwannee River support freshwater piers serving largemouth bass, catfish, bluegill, and shad fisheries."
      },
      {
        heading: "Pier Fishing Seasons, Hurricane Damage, and Public Access",
        body:
          "Three Florida-specific factors shape every pier outing. Pier fishing seasons follow distinct migrations: Spanish mackerel and bluefish runs hit Atlantic-coast piers in spring and fall, pompano move down the Atlantic in fall and back up in spring, snook season is closed June through August on the Atlantic and December through February on the Gulf for spawning protection, and Gulf piers see heavy kingfish migrations in spring and fall. Tarpon migrations move up the Gulf coast from April through July, peaking on the Old Seven Mile Bridge and Sunshine Skyway South in May and June. Hurricane damage is the dominant pier-availability factor — Hurricanes Ian (2022), Idalia (2023), Helene (2024), and Milton (2024) destroyed or closed dozens of Florida piers, some permanently. Anna Maria Island City Pier, Pinellas Pier, Pier 60 at Clearwater Beach, and Lauderdale-By-The-Sea Pier all suffered major damage in recent storms; rebuild timelines run 18-36 months. Always confirm current pier status before driving out — many piers operate on reduced sections or remain fully closed pending reconstruction. Public access varies: most state-park piers charge $4-8 daily; many municipal piers charge $2-5 fishing fees; county piers are typically free with paid parking. Florida saltwater fishing requires a state license for anyone 16+, with separate Snook Permits and Tarpon Tags during open seasons. The Free Fishing Pier program designates certain piers as license-exempt — confirm at each pier."
      },
      {
        heading: "Regional Patterns Across the State",
        body:
          "Florida's pier market splits into six distinct regions. South Florida Atlantic (Palm Beach, Broward, Miami-Dade): year-round pier fishing, snook and tarpon focus, Pompano Beach Pier and Juno Beach Pier among the most-fished, urban-shore parking premium. Florida Keys: bridge-fishing dominance with Bahia Honda and the Old Seven Mile Bridge as iconic destinations, tarpon and permit specialty, separate Florida Keys saltwater rules. Treasure and Space Coast (Stuart through Cocoa): Sebastian Inlet Pier and Cocoa Beach Pier anchor a productive springer-and-fall-run market, snook and pompano focus. Northeast Atlantic (Daytona, St. Augustine, Jacksonville Beach): whiting, drum, mackerel, and shark fishing, multiple municipal piers with parking. Gulf Coast (Panama City through Naples and Marco Island): emerald-water concrete piers, snapper and kingfish focus, Sunshine Skyway North and South unmatched length, hurricane-damage rebuilds in progress at multiple west-coast piers. Inland Florida (Lake Okeechobee, St. Johns, Suwannee, Indian River Lagoon): freshwater bass, catfish, and shad, plus brackish snook in the Indian River. The directory above includes coverage across all six regions."
      }
    ],
    faqExtra: [
      {
        q: "Do I need a fishing license to fish from a Florida pier?",
        a: "Yes — Florida saltwater fishing requires a state license for anyone 16 or older, even from a public pier. Snook, tarpon, and red drum require additional permits or tags during open seasons. The exception is the Free Fishing Pier program, which designates certain public piers as license-exempt — confirm at each pier with posted signage. Licenses are issued through the Florida Fish and Wildlife Conservation Commission (FWC) and can be purchased online or at most tackle shops."
      },
      {
        q: "Which Florida piers are open after recent hurricanes?",
        a: "Hurricane damage from Ian (2022), Idalia (2023), Helene (2024), and Milton (2024) closed dozens of Florida piers, some permanently. Anna Maria Island City Pier, Pinellas Pier, Pier 60 at Clearwater Beach, and Lauderdale-By-The-Sea Pier all suffered major damage. Rebuild timelines run 18-36 months at most affected piers. Always check current status with the local parks department or municipal pier operator before driving out — many piers operate on reduced sections or remain fully closed pending reconstruction."
      },
      {
        q: "What's the best fishing on a Florida pier?",
        a: "Pompano runs hit Atlantic piers in fall and spring. Spanish mackerel and bluefish run March-May and again October-November. Snook season is open March-May and September-November on the Atlantic, March-May and September-November on the Gulf — but always check FWC for current closures. Tarpon migrate up the Gulf coast April-July, peaking in May-June at the Old Seven Mile Bridge and Sunshine Skyway. Kingfish run Gulf piers in spring and fall. Whiting, croaker, and drum fish year-round at most Atlantic piers."
      }
    ]
  },
  // Remaining top-10 entries will be added in batches:
  // minnesota, washington, michigan, california, maryland,
  // new-york, north-carolina, illinois, virginia
};

export function getStateEditorial(stateSlug: string): StateEditorial | null {
  return STATE_EDITORIAL[stateSlug] || null;
}
