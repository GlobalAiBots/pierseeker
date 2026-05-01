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
  minnesota: {
    introOverride:
      "Minnesota has 1,706 piers across the country's most lake-dense state — over 11,800 named lakes, the world-class Lake Superior North Shore, the Boundary Waters Canoe Area Wilderness, the Twin Cities metro lake system, the Iron Range chain of lakes, the Mississippi River headwaters at Lake Itasca, and the country's premier walleye, muskie, and lake trout fisheries. Whether you're casting for walleye off a Mille Lacs dock at sunset, jigging for lake trout from Duluth's piers, ice-fishing through the spring breakup at Red Lake, or fishing for smallmouth on a BWCA portage lake, the directory below shows piers with verified locations, public-access status, parking availability, and amenity details.",
    h2Blocks: [
      {
        heading: "Minnesota's Pier Landscape",
        body:
          "Minnesota runs the country's most lake-rich pier market, anchored by 11,842 named lakes 10 acres or larger and supplemented by Lake Superior's North Shore, the Mississippi River, the Saint Croix and Minnesota rivers, and the BWCAW boundary waters. The Twin Cities metro lake system (Lake Minnetonka, White Bear Lake, Lake Calhoun/Bde Maka Ska, Lake Harriet, Lake Nokomis, Forest Lake, Prior Lake) hosts hundreds of municipal, county, and DNR public piers within a 30-mile radius of downtown — supporting walleye, northern pike, smallmouth and largemouth bass, panfish, and muskie fisheries year-round when not iced in. Mille Lacs Lake (Minnesota's second-largest, 132,000 acres, 100 miles north of the Twin Cities) is the country's most-fished walleye lake and supports a dense pier network on its shoreline resorts. The Brainerd Lakes region (Gull Lake, North Long Lake, Pelican Lake, Whitefish Chain) is the heart of central Minnesota cabin country, with hundreds of resort and public piers. The Iron Range chain (Lake Vermilion, Lake Bemidji, Lake of the Woods, Rainy Lake, Lake Winnibigoshish) hosts the country's premier walleye and muskie pier fishing. Lake Superior's North Shore from Duluth through Two Harbors, Grand Marais, and Grand Portage hosts a smaller but distinctive pier scene — concrete and stone piers fishing for lake trout, salmon (chinook, coho, pink), and steelhead in the world's largest freshwater lake. The Mississippi River and St. Croix River corridors support muskie and walleye piers extending from Lake Itasca all the way south through the Twin Cities to the Iowa border."
      },
      {
        heading: "Ice-In Season, Walleye Cycles, and Public Access",
        body:
          "Three Minnesota-specific factors shape every pier outing. Ice-in dictates the open-water season — most Minnesota piers are accessible roughly mid-April through late October, with northern lakes (BWCAW, Lake of the Woods, Rainy Lake) opening as late as mid-May in cold years and freezing again by late October. Open-water pier fishing peaks May-June (post-spawn walleye and muskie) and again September-October (fall walleye runs and trophy muskie season). Lake Superior piers stay accessible year-round but salmon and lake trout fishing is best April-June and September-November. Walleye season has specific opening and closing dates set annually by the Minnesota DNR — the open season generally runs mid-May through late February statewide with regional variations, and the trophy ice-fishing season runs all winter on most lakes. Mille Lacs has had unique walleye regulations in recent years driven by population stocking adjustments — confirm current limits and slot restrictions before fishing. Public access is excellent: Minnesota DNR maintains over 3,000 public water access points, and most resort piers offer day-use fishing for non-guests at reasonable fees ($5-15). A Minnesota fishing license is required for anyone 16+, with separate non-resident licenses and shorter-term permits available. Some BWCAW pier fishing requires a separate BWCAW permit during peak season."
      },
      {
        heading: "Regional Patterns Across the State",
        body:
          "Minnesota's pier market splits into five distinct regions. Twin Cities metro (Hennepin, Ramsey, Anoka, Dakota, Washington counties): largest concentration of municipal and county public piers, year-round access until ice-in, walleye and panfish focus, accessible to over 60% of the state's population. Brainerd Lakes and central Minnesota (Crow Wing, Cass, Aitkin, Hubbard counties): cabin country, dense resort pier network, walleye and muskie focus, peak summer demand. Iron Range and northern Minnesota (Itasca, Koochiching, Lake of the Woods, St. Louis counties): trophy walleye and muskie fishing, longer drive distances between piers, heavily seasonal with peak May-September. Lake Superior North Shore (Cook, Lake counties): salmon and lake trout fishery, distinctive concrete and stone piers, year-round access at Duluth-area piers, more limited beyond Two Harbors. Southern Minnesota and Mississippi/St. Croix corridors (Olmsted, Winona, Houston counties along the Mississippi; Washington, Chisago counties along the St. Croix): river-pier system fishing for walleye, smallmouth, catfish, and shad, with smaller lake piers scattered through the southeastern bluff country. The directory above includes coverage across all five regions."
      }
    ],
    faqExtra: [
      {
        q: "When is walleye season in Minnesota?",
        a: "Minnesota walleye open season generally runs from the second Saturday in May through late February, with regional variations and unique rules on certain lakes (especially Mille Lacs, where regulations adjust based on annual stocking and population assessments). The summer season is open continuously through mid-May to late February on most lakes; ice fishing is permitted on most lakes during the open-water and ice seasons. Confirm current dates, slot limits, and possession limits with the Minnesota DNR before each trip — rules can change year to year, especially on Mille Lacs and Lake of the Woods."
      },
      {
        q: "Do I need a Minnesota fishing license to fish from a public pier?",
        a: "Yes — Minnesota fishing licenses are required for anyone 16 or older fishing from any pier, lake, river, or stream. The license is required even on resort and private property piers if fishing public waters. Non-resident licenses, 24-hour permits, and 3-day permits are available for shorter trips. Some BWCAW areas require a separate BWCAW permit during peak season (May-September). All licenses are issued through the Minnesota DNR online portal or at most tackle shops and resorts."
      },
      {
        q: "What's the best fishing on a Minnesota pier?",
        a: "Walleye fishing peaks at sunset and sunrise May-June and again September-October at Mille Lacs, Leech, Vermilion, Lake of the Woods, and the Brainerd Lakes chain. Muskie season runs through fall on Lake Vermilion and the Brainerd chain. Lake trout and salmon (chinook, coho) fish from Lake Superior North Shore piers April-June and September-November. Smallmouth bass and panfish fish from Twin Cities metro piers May-September. Ice-fishing season opens roughly late November through mid-March across the state, with the most productive ice-fishing at Mille Lacs, Red Lake, and Lake of the Woods."
      }
    ]
  },
  washington: {
    introOverride:
      "Washington has 1,651 piers spanning Puget Sound's 2,500+ miles of saltwater shoreline, the Columbia River from Astoria-Megler to the inland gorges, the Pacific coast from Westport to Neah Bay, the Strait of Juan de Fuca, the freshwater Lake Washington and Lake Union complex within Seattle, and the inland reservoirs of central and eastern Washington. Whether you're salmon-fishing off the Edmonds Pier on a fall king run, crabbing for Dungeness off the Mukilteo Pier, casting for sturgeon on the Astoria-Megler Bridge, or jigging for walleye at a Banks Lake pier, the directory below shows piers with verified locations, public-access status, parking availability, and amenity details.",
    h2Blocks: [
      {
        heading: "Washington's Pier Landscape",
        body:
          "Washington runs the most varied saltwater-and-freshwater pier market in the Pacific Northwest, supported by Puget Sound's 2,500+ miles of shoreline plus the Columbia River and inland reservoir systems. Puget Sound public fishing piers — Edmonds, Mukilteo, Des Moines, Seacrest (West Seattle), Redondo, Dash Point, Kayak Point, Bremerton — host one of the country's most active saltwater pier fishing scenes. These piers double as crabbing platforms, an unusual feature compared to most U.S. states: Dungeness crab, red rock crab, and shrimp are catchable from public piers during open seasons (typically July-September for Dungeness), creating a dedicated crabbing-from-piers culture that doesn't exist anywhere else in the country. Salmon fishing from Sound piers focuses on coho, pink, and chum runs from late summer through fall; chinook are catchable but heavily restricted. The Pacific coast at Westport, Ilwaco, La Push, Neah Bay, and Sekiu offers offshore-charter pier access plus surf-perch and rockfish piers. The Columbia River corridor supports sturgeon, walleye, salmon, steelhead, and smallmouth bass piers from Astoria through Vancouver, Hood River, The Dalles, Umatilla, and Tri-Cities. The Strait of Juan de Fuca and the San Juan Islands host quieter piers with halibut and lingcod focus. Inland, Lake Washington and Lake Union within Seattle support smallmouth bass and trout piers; Lake Roosevelt, Banks Lake, Moses Lake, Potholes Reservoir, Lake Chelan, Lake Wenatchee, and the Spokane River corridor host walleye, kokanee, rainbow trout, and lake trout piers."
      },
      {
        heading: "Salmon Seasons, Tides, and Crabbing-From-Piers",
        body:
          "Three Washington-specific factors shape every pier outing. Salmon seasons are tightly regulated by the Washington Department of Fish & Wildlife (WDFW) and adjusted yearly based on returns — coho and pink salmon are the most reliably catchable from public piers during open seasons, typically late August through October on Puget Sound. Chinook salmon piers are heavily restricted and often closed to retention. Always check current WDFW emergency rules before fishing — Marine Areas 8-13 each have separate seasons and rules that change in-season. Tides are substantial and matter on Puget Sound piers (8-14 foot ranges typical) — fishing is best on the moving tide periods, with slack-tide bites generally weaker. Crabbing-from-piers is one of the most uniquely Washington pier activities: Dungeness crab season on Puget Sound typically runs July through Labor Day; red rock crab is open year-round. Most pier crabbing requires a Washington Catch Record Card (CRC, free) plus a fishing license. Pier crabbing is allowed at most public Sound piers — Edmonds, Mukilteo, Des Moines, and Seacrest are particularly popular. Public piers are mostly free or low-fee; some county and state-park piers charge $4-10 daily. A Washington fishing license is required for anyone 15+; the license costs $30-58 depending on residency and salt/freshwater coverage."
      },
      {
        heading: "Regional Patterns Across the State",
        body:
          "Washington's pier market splits into five distinct regions. Puget Sound (King, Snohomish, Pierce, Kitsap, Mason, Thurston counties): largest concentration, year-round saltwater pier fishing, salmon and crab focus, urban-shore pier density unmatched on the West Coast, accessible to over 70% of the state's population. North Sound and San Juan Islands (Skagit, Whatcom, San Juan, Island counties): quieter pier scene, halibut and lingcod focus, more limited public-pier access on the islands themselves but strong on Bellingham, Anacortes, and Port Townsend. Pacific coast (Grays Harbor, Pacific, Clallam, Jefferson counties): offshore-charter pier access at Westport and Ilwaco, surf-perch and rockfish piers, smaller working coastal harbors with weather-dependent access. Columbia River corridor (Pacific, Wahkiakum, Cowlitz, Clark, Skamania, Klickitat, Benton, Franklin counties): sturgeon, walleye, salmon, steelhead, and smallmouth bass piers extending from Astoria through Hood River and the Tri-Cities. Eastern Washington reservoirs and rivers (Spokane, Lincoln, Grant, Adams, Okanogan, Chelan, Yakima counties): inland-lake pier fishing for walleye, kokanee, rainbow trout, and lake trout — Lake Roosevelt, Banks Lake, Moses Lake, Lake Chelan, and the Spokane River dominate. The directory above includes coverage across all five regions."
      }
    ],
    faqExtra: [
      {
        q: "Can I crab from public piers in Washington?",
        a: "Yes — Washington is one of the few states where public-pier crabbing is a major activity. Dungeness crab season on Puget Sound typically runs July through Labor Day; red rock crab is open year-round. Edmonds, Mukilteo, Des Moines, Seacrest, Redondo, and Dash Point piers are popular crabbing destinations. You'll need a Washington fishing license plus a Catch Record Card (CRC, free) endorsement. Crab pots, rings, and snares are allowed; legal-size measurement is required, and only male Dungeness can be retained."
      },
      {
        q: "Do I need a Washington fishing license to fish from a pier?",
        a: "Yes — Washington fishing licenses are required for anyone 15 or older fishing from any pier, including saltwater piers. License costs run $30-58 depending on residency and salt/freshwater coverage. A separate Catch Record Card (CRC, free) is required for salmon, steelhead, sturgeon, halibut, and Dungeness crab. Two-day permits are available for short trips. All licenses are issued through WDFW's online portal or at most tackle shops."
      },
      {
        q: "What's the salmon fishing season on Washington Puget Sound piers?",
        a: "Coho salmon (silver) season typically runs late August through October on most Puget Sound piers. Pink salmon (humpy) run odd-numbered years, peaking in August. Chinook salmon (king) is heavily restricted and often closed to retention from Sound piers; check WDFW emergency regulations before fishing. Chum salmon run November-December at some piers. Salmon seasons are adjusted yearly based on returns; Marine Areas 8-13 each have separate rules. Confirm current dates and limits with WDFW before each trip."
      }
    ]
  },
  michigan: {
    introOverride:
      "Michigan has 1,608 piers spanning 3,288 miles of Great Lakes coastline (more than any other state), the densest inland-lake system in the country at 11,000+ named lakes, the Detroit River and Lake St. Clair fishery, the Saginaw Bay and Thumb shoreline, and the Upper Peninsula's Lake Superior and Lake Michigan harbors. Whether you're casting off the Frankfort Lighthouse Pier for a fall coho run, jigging for walleye on a Saginaw Bay pier, surf-fishing for steelhead from Manistee North Pier, or pulling perch off Lake St. Clair docks, the directory below shows piers with verified locations, public-access status, parking availability, and amenity details.",
    h2Blocks: [
      {
        heading: "Michigan's Pier Landscape",
        body:
          "Michigan runs the largest Great Lakes pier market in the country, with piers serving four of the five Great Lakes plus Lake St. Clair and the densest inland-lake system in the Lower 48. Lake Michigan's eastern shore — New Buffalo, St. Joseph, South Haven, Saugatuck-Holland, Grand Haven, Muskegon, Pentwater, Ludington, Manistee, Frankfort, Leland, and Charlevoix — hosts iconic concrete and stone breakwall piers that double as both navigation aids and fishing platforms. The Manistee, Pentwater, Frankfort, and St. Joseph piers rank among the country's most productive Great Lakes piers for chinook and coho salmon (peak runs August-October), steelhead (April-May and September-November), and brown trout. Lake Huron's Sunrise Coast (Cheboygan, Alpena, Tawas, Au Gres, Bay City) supports walleye, brown trout, and pike piers. The Thumb shoreline (Caseville, Port Austin, Harbor Beach, Lexington, Port Huron) hosts walleye, perch, and Atlantic salmon piers serving the Saginaw Bay fishery. Lake St. Clair and the Detroit River — heavily fished urban-shore piers — focus on smallmouth bass, walleye, perch, muskie, and steelhead. Lake Superior on the Upper Peninsula (Marquette, Munising, Grand Marais, Houghton, Copper Harbor, Sault Ste. Marie) hosts smaller and more remote piers with lake trout, coaster brook trout, and salmon focus. Inland, Michigan's 11,000+ lakes support a vast pier network — Houghton Lake, Higgins Lake, Lake Charlevoix, Torch Lake, Mullett Lake, Burt Lake, and the Brainerd-style cabin-lake chains throughout the Lower Peninsula's central regions."
      },
      {
        heading: "Salmon Runs, Ice-In Season, and Big Lake Weather",
        body:
          "Three Michigan-specific factors shape every pier outing. Great Lakes salmon and steelhead runs drive pier fishing seasonality dramatically. Chinook salmon peak August through October at Lake Michigan piers (Manistee, Pentwater, Frankfort, Ludington especially); coho run alongside in similar timing; pink salmon (in odd-numbered years) provide bonus fishing. Steelhead runs hit eastern Lake Michigan piers in April-May and again September-November. Brown trout fish year-round at most Lake Michigan piers but peak in spring and fall. Lake Huron walleye runs hit Saginaw Bay piers in April-May. Lake St. Clair smallmouth bass peak May-June and September-October. Ice-in dictates open-water pier season for all but Lake Michigan and Lake Huron, which rarely freeze enough to prevent shore-pier fishing — most inland piers are accessible mid-April through late October, with northern Lower Peninsula and Upper Peninsula lakes freezing earlier and reopening later. Big Lake weather is the dominant safety factor: Lakes Michigan, Superior, and Huron generate sea-state conditions that rival ocean fishing, with sustained northwest blows over 25 knots producing 8-12 foot wave heights. Pier walls become dangerous in heavy weather — many piers post warnings and some close during major storm events. NOAA marine forecasts and the Great Lakes Marine Weather page are essential. A Michigan fishing license is required for anyone 17+; the all-species license costs $26 (resident) or $76 (non-resident)."
      },
      {
        heading: "Regional Patterns Across the State",
        body:
          "Michigan's pier market splits into six distinct regions. Lake Michigan southeast and Harbor Country (New Buffalo, St. Joseph, South Haven, Saugatuck, Holland, Grand Haven): summer beach-tourist demand, salmon and steelhead piers, parking premiums in summer. Lake Michigan northeast and Up North (Muskegon, Ludington, Manistee, Frankfort, Charlevoix, Petoskey): heaviest salmon-pier action, peak August-October, multiple iconic concrete and stone piers. Saginaw Bay and the Thumb (Bay City, Caseville, Port Austin, Harbor Beach): walleye and perch focus, lower demand than west shore, traditional fishing scene. Detroit River, Lake St. Clair, and Lake Erie corridor (Detroit, St. Clair Shores, Algonac, Monroe): urban-shore piers, smallmouth bass and walleye dominance, year-round access at protected piers. Lake Superior and Upper Peninsula (Marquette, Munising, Houghton, Copper Harbor): remote pier fishing, lake trout and coaster brook trout focus, shortest open-water season. Inland lakes (Houghton, Higgins, Charlevoix, Torch, Mullett, Burt, plus the Cadillac and Traverse City regions): pontoon and runabout pier scene, pier fishing for smallmouth, perch, walleye, and pike. The directory above includes coverage across all six regions."
      }
    ],
    faqExtra: [
      {
        q: "When is the best salmon fishing on a Michigan pier?",
        a: "Chinook salmon peak August through October at Lake Michigan piers — Manistee, Pentwater, Frankfort, and Ludington consistently rank as the country's most productive Great Lakes salmon piers. Coho run alongside chinook in similar timing. Pink salmon run in odd-numbered years. Steelhead hit eastern Lake Michigan piers in April-May and again September-November. Spawning runs concentrate fish near pier mouths during these windows, making pier fishing exceptionally productive at sunrise and sunset."
      },
      {
        q: "Do I need a Michigan fishing license to fish from a pier?",
        a: "Yes — Michigan fishing licenses are required for anyone 17 or older fishing from any pier, public or private, on the Great Lakes or inland waters. The all-species license costs $26 for residents and $76 for non-residents. A 24-hour permit ($10) is available for short trips. Senior discounts apply at age 65. All licenses are issued through the Michigan DNR online portal or at most tackle shops and resort sporting goods stores."
      },
      {
        q: "Are Michigan Great Lakes piers safe during storms?",
        a: "No — Lakes Michigan, Superior, and Huron generate ocean-like sea-state conditions during storms, with sustained northwest blows producing 8-12 foot wave heights regularly. Pier walls become dangerous and have caused fatalities during major storm events. Most public piers post warning signs; some close during major storms. Always check the NOAA Great Lakes Marine Weather forecast before heading out, watch posted warnings, and avoid piers when sustained winds exceed 25 knots from any onshore direction."
      }
    ]
  },
  california: {
    introOverride:
      "California has 1,527 piers spanning the 840-mile Pacific coastline from Crescent City to San Diego, the San Francisco Bay system with public piers across nine counties, the 1,100-square-mile Sacramento-San Joaquin Delta, alpine lakes from Tahoe to Big Bear, the desert reservoirs at Lake Havasu and the Salton Sea, and the Colorado River corridor. Whether you're surf-fishing for halibut off the Crystal Pier in Pacific Beach, casting for striped bass from a Delta pier, jigging for kokanee at Lake Tahoe, or fishing for largemouth bass off a Castaic Lake pier, the directory below shows piers with verified locations, public-access status, parking availability, and amenity details.",
    h2Blocks: [
      {
        heading: "California's Pier Landscape",
        body:
          "California has the most geographically split pier market in the country, with three distinct waters supporting completely different fisheries. Pacific coast piers form one of America's most iconic public-fishing scenes — Pacific Beach Pier, Crystal Pier, Oceanside Pier, San Clemente Pier, Newport Pier, Huntington Beach Pier, Seal Beach Pier, Belmont Pier, Manhattan Beach Pier, Hermosa Beach Pier, Redondo Beach Pier, Santa Monica Pier, Malibu Pier, Goleta Pier, Stearns Wharf, Cayucos Pier, Avila Beach Pier, Morro Bay's North T-Pier, San Simeon Pier, Capitola Pier, Santa Cruz Wharf, San Mateo Pier, and Pacifica Pier all rank among the country's most-fished public piers. Catches include surf perch, halibut, white croaker, jacksmelt, mackerel, leopard shark, bonito, and seasonally yellowtail and bonito. San Francisco Bay piers (Berkeley, Emeryville, Pier 7 in San Francisco, Pacifica Coast Guard Pier, Candlestick Point, Oyster Point, Coyote Point) host striped bass, sturgeon, halibut, leopard shark, and Dungeness crab fisheries — uniquely, San Francisco Bay piers are among the few California piers where pier crabbing is permitted year-round. The Sacramento-San Joaquin Delta supports striped bass, sturgeon, salmon, largemouth, and catfish piers throughout the 1,100-square-mile back-bay system. Sierra and southern alpine lakes (Tahoe, Donner, June, Big Bear, Castaic, Pyramid, Diamond Valley, San Vicente, Lake Skinner) host kokanee, rainbow trout, lake trout (mackinaw), and trophy largemouth bass piers. Colorado River and desert reservoirs (Havasu, Mead, Mojave) round out the inland market with striped bass and largemouth bass focus."
      },
      {
        heading: "License Categories, Pier Exemptions, and Drought Effects",
        body:
          "Three California-specific factors shape every pier outing. California sport fishing licenses come in distinct categories — a freshwater license for inland piers, an Ocean Enhancement Validation for saltwater south of Point Arguello, and a Bay Delta Stamp for the Sacramento-San Joaquin Delta and Bay striped bass and sturgeon fishing. The 'public pier exemption' is a uniquely California feature: anyone fishing from a CDFW-designated public pier (most coastal city piers) does NOT need a fishing license — among the most generous pier-fishing rules in the country. Fishing from anywhere else (even a private dock or shore) requires a license. Confirm the pier's CDFW exemption status with posted signage before fishing without a license. Ocean and Bay piers also have specific bag and size limits regulated by CDFW that change yearly. Drought directly affects inland piers: Lake Oroville, Folsom, Shasta, New Melones, and Pyramid have all dropped 100+ feet from full pool in recent dry cycles, exposing or closing pier docks at low water. The Sacramento Delta is sea-level-driven and not affected by drought. Sierra alpine lakes see less drought impact but still vary seasonally. Wildfire smoke (typically July-October) periodically closes Sierra and inland-lake piers when air quality reaches hazardous levels."
      },
      {
        heading: "Regional Patterns Across the State",
        body:
          "California's pier market splits into five distinct regions. Southern California coast (San Diego through Santa Barbara): year-round operation, public-pier exemption applies to most municipal piers, halibut and surf perch focus, peak demand May-September. Central Coast (Morro Bay, Cambria, Cayucos, Avila, Pismo Beach, Santa Cruz): smaller working piers, salmon and rockfish focus during open seasons, fog-prone summer mornings. San Francisco Bay: dense Bay Area pier cluster across nine counties, striped bass and sturgeon dominance, year-round Dungeness crab access (uniquely permitted on Bay piers), tidal-current-aware fishing. Sacramento Delta: largest inland pier market in California, 1,100-square-mile back-bay system, summer peak with strong shoulder-season demand, drought-resistant water levels. Sierra and Mountain Lakes plus desert reservoirs (Tahoe, Donner, Big Bear, Castaic, Diamond Valley, Pyramid, Lake Havasu, Lake Mead): seasonal alpine pier access (May-October at Sierra lakes), year-round at southern reservoirs, drought-vulnerable inland reservoirs, kokanee and lake trout focus. The directory above includes coverage across all five regions."
      }
    ],
    faqExtra: [
      {
        q: "Do I need a fishing license to fish from a California pier?",
        a: "Not always — California has a unique 'public pier exemption' that allows fishing from CDFW-designated public piers without a sport fishing license. This includes most municipal coastal piers (Pacific Beach Pier, Newport Pier, Santa Monica Pier, etc.). The exemption applies only to specifically designated piers; check posted signage at each pier to confirm. Fishing from anywhere else (private docks, shore, jetties, breakwaters) requires a California sport fishing license. Anyone 16+ fishing inland or anywhere not exempted needs a license through CDFW."
      },
      {
        q: "Can I crab from California piers?",
        a: "Yes — Dungeness and rock crab can be taken from many San Francisco Bay piers year-round (with size and bag limits set by CDFW). Pacific coast pier crabbing for Dungeness opens during the recreational Dungeness crab season, typically November through July with regional variations and occasional closures driven by domoic acid testing. A California sport fishing license is required for crabbing (the public-pier exemption does NOT cover crabbing — crabbing requires a license everywhere). Check current CDFW season status before each trip."
      },
      {
        q: "What's the best fishing on a California pier?",
        a: "Surf perch year-round on Southern California coastal piers. Halibut May-September across coastal piers, with Pacific Beach, Newport, and Capitola consistently productive. White croaker, jacksmelt, and mackerel are reliable Pacific coast pier targets. Striped bass and sturgeon at SF Bay and Delta piers October-March. Bonito and yellowtail at Southern California piers in summer when warm currents push fish near shore. Kokanee and rainbow trout at Sierra lake piers May-September. Largemouth bass at Castaic, Pyramid, and Diamond Valley piers year-round."
      }
    ]
  },
  // Remaining top-10 entries will be added in batches:
  // maryland, new-york, north-carolina, illinois, virginia
};

export function getStateEditorial(stateSlug: string): StateEditorial | null {
  return STATE_EDITORIAL[stateSlug] || null;
}
