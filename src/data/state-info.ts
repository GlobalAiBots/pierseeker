// Auto-extracted from former per-state pages.
// Source: scripts/extract-state-info.js (one-shot extraction).
// Hand-edits here OK; the script is not re-run on each build.

export interface StateFaqItem {
  q: string;
  a: string;
}

export interface StateInfo {
  slug: string;
  code: string | null;
  name: string;
  /**
   * Intro paragraph as a JS template-literal body. `${stateTotal}` and
   * `${stateTotal.toLocaleString()}` placeholders get filled in by the
   * dynamic route at render time.
   */
  introParagraph: string;
  tips: string[];
  faqItems: StateFaqItem[];
}

export const STATE_INFO: Record<string, StateInfo> = {
  "alabama": {
    "slug": "alabama",
    "code": "AL",
    "name": "Alabama",
    "introParagraph": "Alabama offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Mobile Bay and the Gulf Coast, there's no shortage of places to cast a line. Popular catches include redfish, flounder, and speckled trout.",
    "tips": [
      "Check Alabama's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Alabama?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Alabama."
      },
      {
        "q": "Do I need a fishing license in Alabama?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Alabama's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Alabama?",
        "a": "Popular catches from Alabama piers include redfish, flounder, and speckled trout. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Alabama free?",
        "a": "Many fishing piers in Alabama are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "arizona": {
    "slug": "arizona",
    "code": "AZ",
    "name": "Arizona",
    "introParagraph": "Arizona offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Lake Powell, Lake Havasu, and Roosevelt Lake, there's no shortage of places to cast a line. Popular catches include bass, catfish, and trout.",
    "tips": [
      "Check Arizona's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Arizona?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Arizona."
      },
      {
        "q": "Do I need a fishing license in Arizona?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Arizona's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Arizona?",
        "a": "Popular catches from Arizona piers include bass, catfish, and trout. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Arizona free?",
        "a": "Many fishing piers in Arizona are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "arkansas": {
    "slug": "arkansas",
    "code": "AR",
    "name": "Arkansas",
    "introParagraph": "Arkansas offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Beaver Lake, Bull Shoals, and the White River, there's no shortage of places to cast a line. Popular catches include bass, crappie, and catfish.",
    "tips": [
      "Check Arkansas's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Arkansas?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Arkansas."
      },
      {
        "q": "Do I need a fishing license in Arkansas?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Arkansas's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Arkansas?",
        "a": "Popular catches from Arkansas piers include bass, crappie, and catfish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Arkansas free?",
        "a": "Many fishing piers in Arkansas are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "california": {
    "slug": "california",
    "code": "CA",
    "name": "California",
    "introParagraph": "California offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Pacific coastline, San Francisco Bay, and the Sacramento Delta, there's no shortage of places to cast a line. Popular catches include halibut, rockfish, and striped bass.",
    "tips": [
      "Check California's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in California?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across California."
      },
      {
        "q": "Do I need a fishing license in California?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check California's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in California?",
        "a": "Popular catches from California piers include halibut, rockfish, and striped bass. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in California free?",
        "a": "Many fishing piers in California are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "colorado": {
    "slug": "colorado",
    "code": "CO",
    "name": "Colorado",
    "introParagraph": "Colorado offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Lake Granby, Blue Mesa Reservoir, and the Colorado River, there's no shortage of places to cast a line. Popular catches include trout, kokanee, and walleye.",
    "tips": [
      "Check Colorado's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Colorado?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Colorado."
      },
      {
        "q": "Do I need a fishing license in Colorado?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Colorado's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Colorado?",
        "a": "Popular catches from Colorado piers include trout, kokanee, and walleye. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Colorado free?",
        "a": "Many fishing piers in Colorado are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "connecticut": {
    "slug": "connecticut",
    "code": "CT",
    "name": "Connecticut",
    "introParagraph": "Connecticut offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Long Island Sound and the Connecticut River, there's no shortage of places to cast a line. Popular catches include striped bass, bluefish, and flounder.",
    "tips": [
      "Check Connecticut's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Connecticut?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Connecticut."
      },
      {
        "q": "Do I need a fishing license in Connecticut?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Connecticut's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Connecticut?",
        "a": "Popular catches from Connecticut piers include striped bass, bluefish, and flounder. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Connecticut free?",
        "a": "Many fishing piers in Connecticut are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "delaware": {
    "slug": "delaware",
    "code": "DE",
    "name": "Delaware",
    "introParagraph": "Delaware offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Delaware Bay and the Atlantic coast, there's no shortage of places to cast a line. Popular catches include striped bass, flounder, and bluefish.",
    "tips": [
      "Check Delaware's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Delaware?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Delaware."
      },
      {
        "q": "Do I need a fishing license in Delaware?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Delaware's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Delaware?",
        "a": "Popular catches from Delaware piers include striped bass, flounder, and bluefish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Delaware free?",
        "a": "Many fishing piers in Delaware are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "florida": {
    "slug": "florida",
    "code": "FL",
    "name": "Florida",
    "introParagraph": "Florida offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Gulf Coast, Atlantic coast, and the Keys, there's no shortage of places to cast a line. Popular catches include snook, redfish, tarpon, and snapper.",
    "tips": [
      "Check Florida's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Florida?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Florida."
      },
      {
        "q": "Do I need a fishing license in Florida?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Florida's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Florida?",
        "a": "Popular catches from Florida piers include snook, redfish, tarpon, and snapper. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Florida free?",
        "a": "Many fishing piers in Florida are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "georgia": {
    "slug": "georgia",
    "code": "GA",
    "name": "Georgia",
    "introParagraph": "Georgia offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Georgia coast, Lake Lanier, and the Altamaha River, there's no shortage of places to cast a line. Popular catches include redfish, bass, and catfish.",
    "tips": [
      "Check Georgia's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Georgia?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Georgia."
      },
      {
        "q": "Do I need a fishing license in Georgia?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Georgia's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Georgia?",
        "a": "Popular catches from Georgia piers include redfish, bass, and catfish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Georgia free?",
        "a": "Many fishing piers in Georgia are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "idaho": {
    "slug": "idaho",
    "code": "ID",
    "name": "Idaho",
    "introParagraph": "Idaho offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Lake Coeur d'Alene, Payette Lake, and the Snake River, there's no shortage of places to cast a line. Popular catches include trout, kokanee, and bass.",
    "tips": [
      "Check Idaho's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Idaho?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Idaho."
      },
      {
        "q": "Do I need a fishing license in Idaho?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Idaho's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Idaho?",
        "a": "Popular catches from Idaho piers include trout, kokanee, and bass. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Idaho free?",
        "a": "Many fishing piers in Idaho are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "illinois": {
    "slug": "illinois",
    "code": "IL",
    "name": "Illinois",
    "introParagraph": "Illinois offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Lake Michigan and the Illinois River, there's no shortage of places to cast a line. Popular catches include salmon, perch, and catfish.",
    "tips": [
      "Check Illinois's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Illinois?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Illinois."
      },
      {
        "q": "Do I need a fishing license in Illinois?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Illinois's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Illinois?",
        "a": "Popular catches from Illinois piers include salmon, perch, and catfish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Illinois free?",
        "a": "Many fishing piers in Illinois are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "indiana": {
    "slug": "indiana",
    "code": "IN",
    "name": "Indiana",
    "introParagraph": "Indiana offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Monroe Lake, Patoka Lake, and the Ohio River, there's no shortage of places to cast a line. Popular catches include bass, catfish, and bluegill.",
    "tips": [
      "Check Indiana's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Indiana?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Indiana."
      },
      {
        "q": "Do I need a fishing license in Indiana?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Indiana's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Indiana?",
        "a": "Popular catches from Indiana piers include bass, catfish, and bluegill. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Indiana free?",
        "a": "Many fishing piers in Indiana are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "iowa": {
    "slug": "iowa",
    "code": "IA",
    "name": "Iowa",
    "introParagraph": "Iowa offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Mississippi River and Okoboji, there's no shortage of places to cast a line. Popular catches include walleye, catfish, and bass.",
    "tips": [
      "Check Iowa's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Iowa?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Iowa."
      },
      {
        "q": "Do I need a fishing license in Iowa?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Iowa's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Iowa?",
        "a": "Popular catches from Iowa piers include walleye, catfish, and bass. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Iowa free?",
        "a": "Many fishing piers in Iowa are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "kansas": {
    "slug": "kansas",
    "code": "KS",
    "name": "Kansas",
    "introParagraph": "Kansas offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Milford Lake, Cheney Reservoir, and the Kansas River, there's no shortage of places to cast a line. Popular catches include walleye, wiper, and catfish.",
    "tips": [
      "Check Kansas's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Kansas?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Kansas."
      },
      {
        "q": "Do I need a fishing license in Kansas?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Kansas's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Kansas?",
        "a": "Popular catches from Kansas piers include walleye, wiper, and catfish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Kansas free?",
        "a": "Many fishing piers in Kansas are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "kentucky": {
    "slug": "kentucky",
    "code": "KY",
    "name": "Kentucky",
    "introParagraph": "Kentucky offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Kentucky Lake, Lake Cumberland, and Dale Hollow, there's no shortage of places to cast a line. Popular catches include bass, crappie, and catfish.",
    "tips": [
      "Check Kentucky's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Kentucky?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Kentucky."
      },
      {
        "q": "Do I need a fishing license in Kentucky?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Kentucky's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Kentucky?",
        "a": "Popular catches from Kentucky piers include bass, crappie, and catfish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Kentucky free?",
        "a": "Many fishing piers in Kentucky are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "louisiana": {
    "slug": "louisiana",
    "code": "LA",
    "name": "Louisiana",
    "introParagraph": "Louisiana offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Lake Pontchartrain, the Gulf Coast, and the Mississippi River, there's no shortage of places to cast a line. Popular catches include redfish, speckled trout, and catfish.",
    "tips": [
      "Check Louisiana's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Louisiana?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Louisiana."
      },
      {
        "q": "Do I need a fishing license in Louisiana?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Louisiana's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Louisiana?",
        "a": "Popular catches from Louisiana piers include redfish, speckled trout, and catfish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Louisiana free?",
        "a": "Many fishing piers in Louisiana are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "maine": {
    "slug": "maine",
    "code": "ME",
    "name": "Maine",
    "introParagraph": "Maine offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Atlantic coast, Moosehead Lake, and Sebago Lake, there's no shortage of places to cast a line. Popular catches include striped bass, landlocked salmon, and trout.",
    "tips": [
      "Check Maine's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Maine?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Maine."
      },
      {
        "q": "Do I need a fishing license in Maine?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Maine's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Maine?",
        "a": "Popular catches from Maine piers include striped bass, landlocked salmon, and trout. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Maine free?",
        "a": "Many fishing piers in Maine are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "maryland": {
    "slug": "maryland",
    "code": "MD",
    "name": "Maryland",
    "introParagraph": "Maryland offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Chesapeake Bay, Deep Creek Lake, and the Potomac River, there's no shortage of places to cast a line. Popular catches include striped bass, blue crabs, and perch.",
    "tips": [
      "Check Maryland's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Maryland?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Maryland."
      },
      {
        "q": "Do I need a fishing license in Maryland?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Maryland's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Maryland?",
        "a": "Popular catches from Maryland piers include striped bass, blue crabs, and perch. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Maryland free?",
        "a": "Many fishing piers in Maryland are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "massachusetts": {
    "slug": "massachusetts",
    "code": "MA",
    "name": "Massachusetts",
    "introParagraph": "Massachusetts offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Cape Cod, Boston Harbor, and the Connecticut River, there's no shortage of places to cast a line. Popular catches include striped bass, bluefish, and flounder.",
    "tips": [
      "Check Massachusetts's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Massachusetts?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Massachusetts."
      },
      {
        "q": "Do I need a fishing license in Massachusetts?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Massachusetts's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Massachusetts?",
        "a": "Popular catches from Massachusetts piers include striped bass, bluefish, and flounder. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Massachusetts free?",
        "a": "Many fishing piers in Massachusetts are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "michigan": {
    "slug": "michigan",
    "code": "MI",
    "name": "Michigan",
    "introParagraph": "Michigan offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Great Lakes, Houghton Lake, and the Au Sable River, there's no shortage of places to cast a line. Popular catches include walleye, salmon, and perch.",
    "tips": [
      "Check Michigan's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Michigan?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Michigan."
      },
      {
        "q": "Do I need a fishing license in Michigan?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Michigan's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Michigan?",
        "a": "Popular catches from Michigan piers include walleye, salmon, and perch. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Michigan free?",
        "a": "Many fishing piers in Michigan are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "minnesota": {
    "slug": "minnesota",
    "code": "MN",
    "name": "Minnesota",
    "introParagraph": "Minnesota offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Mille Lacs, Lake of the Woods, and the St. Croix River, there's no shortage of places to cast a line. Popular catches include walleye, northern pike, and crappie.",
    "tips": [
      "Check Minnesota's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Minnesota?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Minnesota."
      },
      {
        "q": "Do I need a fishing license in Minnesota?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Minnesota's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Minnesota?",
        "a": "Popular catches from Minnesota piers include walleye, northern pike, and crappie. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Minnesota free?",
        "a": "Many fishing piers in Minnesota are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "mississippi": {
    "slug": "mississippi",
    "code": "MS",
    "name": "Mississippi",
    "introParagraph": "Mississippi offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Gulf Coast, Ross Barnett Reservoir, and the Mississippi River, there's no shortage of places to cast a line. Popular catches include redfish, bass, and catfish.",
    "tips": [
      "Check Mississippi's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Mississippi?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Mississippi."
      },
      {
        "q": "Do I need a fishing license in Mississippi?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Mississippi's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Mississippi?",
        "a": "Popular catches from Mississippi piers include redfish, bass, and catfish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Mississippi free?",
        "a": "Many fishing piers in Mississippi are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "missouri": {
    "slug": "missouri",
    "code": "MO",
    "name": "Missouri",
    "introParagraph": "Missouri offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Table Rock Lake, Lake of the Ozarks, and the Missouri River, there's no shortage of places to cast a line. Popular catches include bass, crappie, and catfish.",
    "tips": [
      "Check Missouri's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Missouri?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Missouri."
      },
      {
        "q": "Do I need a fishing license in Missouri?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Missouri's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Missouri?",
        "a": "Popular catches from Missouri piers include bass, crappie, and catfish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Missouri free?",
        "a": "Many fishing piers in Missouri are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "montana": {
    "slug": "montana",
    "code": "MT",
    "name": "Montana",
    "introParagraph": "Montana offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Flathead Lake, Fort Peck, and the Missouri River, there's no shortage of places to cast a line. Popular catches include trout, walleye, and pike.",
    "tips": [
      "Check Montana's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Montana?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Montana."
      },
      {
        "q": "Do I need a fishing license in Montana?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Montana's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Montana?",
        "a": "Popular catches from Montana piers include trout, walleye, and pike. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Montana free?",
        "a": "Many fishing piers in Montana are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "nebraska": {
    "slug": "nebraska",
    "code": "NE",
    "name": "Nebraska",
    "introParagraph": "Nebraska offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Mobile Bay and the Gulf Coast, there's no shortage of places to cast a line. Popular catches include redfish, flounder, and speckled trout.",
    "tips": [
      "Check Nebraska's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Nebraska?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Nebraska."
      },
      {
        "q": "Do I need a fishing license in Nebraska?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Nebraska&apos;s fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Nebraska?",
        "a": "Popular catches from Nebraska piers include redfish, flounder, and speckled trout. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Nebraska free?",
        "a": "Many fishing piers in Nebraska are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "nevada": {
    "slug": "nevada",
    "code": "NV",
    "name": "Nevada",
    "introParagraph": "Nevada offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Lake Mead, Pyramid Lake, and Lake Tahoe, there's no shortage of places to cast a line. Popular catches include bass, trout, and stripers.",
    "tips": [
      "Check Nevada's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Nevada?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Nevada."
      },
      {
        "q": "Do I need a fishing license in Nevada?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Nevada's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Nevada?",
        "a": "Popular catches from Nevada piers include bass, trout, and stripers. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Nevada free?",
        "a": "Many fishing piers in Nevada are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "new-hampshire": {
    "slug": "new-hampshire",
    "code": "NH",
    "name": "New Hampshire",
    "introParagraph": "New Hampshire offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Lake Winnipesaukee, Squam Lake, and the Atlantic coast, there's no shortage of places to cast a line. Popular catches include bass, trout, and striped bass.",
    "tips": [
      "Check New Hampshire's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in New Hampshire?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across New Hampshire."
      },
      {
        "q": "Do I need a fishing license in New Hampshire?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check New Hampshire's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in New Hampshire?",
        "a": "Popular catches from New Hampshire piers include bass, trout, and striped bass. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in New Hampshire free?",
        "a": "Many fishing piers in New Hampshire are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "new-jersey": {
    "slug": "new-jersey",
    "code": "NJ",
    "name": "New Jersey",
    "introParagraph": "New Jersey offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Jersey Shore, Barnegat Bay, and the Delaware River, there's no shortage of places to cast a line. Popular catches include striped bass, bluefish, and flounder.",
    "tips": [
      "Check New Jersey's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in New Jersey?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across New Jersey."
      },
      {
        "q": "Do I need a fishing license in New Jersey?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check New Jersey's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in New Jersey?",
        "a": "Popular catches from New Jersey piers include striped bass, bluefish, and flounder. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in New Jersey free?",
        "a": "Many fishing piers in New Jersey are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "new-mexico": {
    "slug": "new-mexico",
    "code": "NM",
    "name": "New Mexico",
    "introParagraph": "New Mexico offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Elephant Butte, Navajo Lake, and Conchas Lake, there's no shortage of places to cast a line. Popular catches include bass, walleye, and catfish.",
    "tips": [
      "Check New Mexico's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in New Mexico?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across New Mexico."
      },
      {
        "q": "Do I need a fishing license in New Mexico?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check New Mexico's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in New Mexico?",
        "a": "Popular catches from New Mexico piers include bass, walleye, and catfish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in New Mexico free?",
        "a": "Many fishing piers in New Mexico are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "new-york": {
    "slug": "new-york",
    "code": "NY",
    "name": "New York",
    "introParagraph": "New York offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Long Island Sound, the Finger Lakes, and Lake Ontario, there's no shortage of places to cast a line. Popular catches include striped bass, walleye, and trout.",
    "tips": [
      "Check New York's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in New York?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across New York."
      },
      {
        "q": "Do I need a fishing license in New York?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check New York's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in New York?",
        "a": "Popular catches from New York piers include striped bass, walleye, and trout. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in New York free?",
        "a": "Many fishing piers in New York are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "north-carolina": {
    "slug": "north-carolina",
    "code": "NC",
    "name": "North Carolina",
    "introParagraph": "North Carolina offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Outer Banks, Pamlico Sound, and the Blue Ridge lakes, there's no shortage of places to cast a line. Popular catches include flounder, red drum, and trout.",
    "tips": [
      "Check North Carolina's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in North Carolina?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across North Carolina."
      },
      {
        "q": "Do I need a fishing license in North Carolina?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check North Carolina's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in North Carolina?",
        "a": "Popular catches from North Carolina piers include flounder, red drum, and trout. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in North Carolina free?",
        "a": "Many fishing piers in North Carolina are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "north-dakota": {
    "slug": "north-dakota",
    "code": "ND",
    "name": "North Dakota",
    "introParagraph": "North Dakota offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Mobile Bay and the Gulf Coast, there's no shortage of places to cast a line. Popular catches include redfish, flounder, and speckled trout.",
    "tips": [
      "Check North Dakota's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in North Dakota?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across North Dakota."
      },
      {
        "q": "Do I need a fishing license in North Dakota?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check North Dakota&apos;s fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in North Dakota?",
        "a": "Popular catches from North Dakota piers include redfish, flounder, and speckled trout. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in North Dakota free?",
        "a": "Many fishing piers in North Dakota are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "ohio": {
    "slug": "ohio",
    "code": "OH",
    "name": "Ohio",
    "introParagraph": "Ohio offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Lake Erie, Alum Creek, and the Ohio River, there's no shortage of places to cast a line. Popular catches include walleye, perch, and bass.",
    "tips": [
      "Check Ohio's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Ohio?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Ohio."
      },
      {
        "q": "Do I need a fishing license in Ohio?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Ohio's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Ohio?",
        "a": "Popular catches from Ohio piers include walleye, perch, and bass. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Ohio free?",
        "a": "Many fishing piers in Ohio are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "oklahoma": {
    "slug": "oklahoma",
    "code": "OK",
    "name": "Oklahoma",
    "introParagraph": "Oklahoma offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Grand Lake, Lake Texoma, and Broken Bow, there's no shortage of places to cast a line. Popular catches include bass, catfish, and crappie.",
    "tips": [
      "Check Oklahoma's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Oklahoma?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Oklahoma."
      },
      {
        "q": "Do I need a fishing license in Oklahoma?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Oklahoma's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Oklahoma?",
        "a": "Popular catches from Oklahoma piers include bass, catfish, and crappie. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Oklahoma free?",
        "a": "Many fishing piers in Oklahoma are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "oregon": {
    "slug": "oregon",
    "code": "OR",
    "name": "Oregon",
    "introParagraph": "Oregon offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Pacific coast, the Columbia River, and Crater Lake, there's no shortage of places to cast a line. Popular catches include salmon, steelhead, and halibut.",
    "tips": [
      "Check Oregon's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Oregon?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Oregon."
      },
      {
        "q": "Do I need a fishing license in Oregon?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Oregon's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Oregon?",
        "a": "Popular catches from Oregon piers include salmon, steelhead, and halibut. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Oregon free?",
        "a": "Many fishing piers in Oregon are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "pennsylvania": {
    "slug": "pennsylvania",
    "code": "PA",
    "name": "Pennsylvania",
    "introParagraph": "Pennsylvania offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Lake Erie, Raystown Lake, and the Delaware River, there's no shortage of places to cast a line. Popular catches include walleye, bass, and trout.",
    "tips": [
      "Check Pennsylvania's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Pennsylvania?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Pennsylvania."
      },
      {
        "q": "Do I need a fishing license in Pennsylvania?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Pennsylvania's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Pennsylvania?",
        "a": "Popular catches from Pennsylvania piers include walleye, bass, and trout. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Pennsylvania free?",
        "a": "Many fishing piers in Pennsylvania are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "rhode-island": {
    "slug": "rhode-island",
    "code": "RI",
    "name": "Rhode Island",
    "introParagraph": "Rhode Island offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Narragansett Bay and the Atlantic coast, there's no shortage of places to cast a line. Popular catches include striped bass, bluefish, and tautog.",
    "tips": [
      "Check Rhode Island's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Rhode Island?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Rhode Island."
      },
      {
        "q": "Do I need a fishing license in Rhode Island?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Rhode Island's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Rhode Island?",
        "a": "Popular catches from Rhode Island piers include striped bass, bluefish, and tautog. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Rhode Island free?",
        "a": "Many fishing piers in Rhode Island are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "south-carolina": {
    "slug": "south-carolina",
    "code": "SC",
    "name": "South Carolina",
    "introParagraph": "South Carolina offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Lowcountry coast, Lake Murray, and Santee Cooper, there's no shortage of places to cast a line. Popular catches include redfish, flounder, and bass.",
    "tips": [
      "Check South Carolina's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in South Carolina?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across South Carolina."
      },
      {
        "q": "Do I need a fishing license in South Carolina?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check South Carolina's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in South Carolina?",
        "a": "Popular catches from South Carolina piers include redfish, flounder, and bass. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in South Carolina free?",
        "a": "Many fishing piers in South Carolina are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "south-dakota": {
    "slug": "south-dakota",
    "code": "SD",
    "name": "South Dakota",
    "introParagraph": "South Dakota offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Lake Oahe, Lake Sharpe, and the Missouri River, there's no shortage of places to cast a line. Popular catches include walleye, bass, and catfish.",
    "tips": [
      "Check South Dakota's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in South Dakota?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across South Dakota."
      },
      {
        "q": "Do I need a fishing license in South Dakota?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check South Dakota's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in South Dakota?",
        "a": "Popular catches from South Dakota piers include walleye, bass, and catfish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in South Dakota free?",
        "a": "Many fishing piers in South Dakota are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "tennessee": {
    "slug": "tennessee",
    "code": "TN",
    "name": "Tennessee",
    "introParagraph": "Tennessee offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Norris Lake, Cherokee Lake, and the Tennessee River, there's no shortage of places to cast a line. Popular catches include bass, crappie, and catfish.",
    "tips": [
      "Check Tennessee's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Tennessee?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Tennessee."
      },
      {
        "q": "Do I need a fishing license in Tennessee?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Tennessee's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Tennessee?",
        "a": "Popular catches from Tennessee piers include bass, crappie, and catfish. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Tennessee free?",
        "a": "Many fishing piers in Tennessee are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "texas": {
    "slug": "texas",
    "code": "TX",
    "name": "Texas",
    "introParagraph": "Texas offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Gulf Coast, Lake Travis, and Sam Rayburn, there's no shortage of places to cast a line. Popular catches include redfish, flounder, and bass.",
    "tips": [
      "Check Texas's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Texas?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Texas."
      },
      {
        "q": "Do I need a fishing license in Texas?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Texas's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Texas?",
        "a": "Popular catches from Texas piers include redfish, flounder, and bass. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Texas free?",
        "a": "Many fishing piers in Texas are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "utah": {
    "slug": "utah",
    "code": "UT",
    "name": "Utah",
    "introParagraph": "Utah offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Lake Powell, Strawberry Reservoir, and Flaming Gorge, there's no shortage of places to cast a line. Popular catches include bass, trout, and kokanee.",
    "tips": [
      "Check Utah's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Utah?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Utah."
      },
      {
        "q": "Do I need a fishing license in Utah?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Utah's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Utah?",
        "a": "Popular catches from Utah piers include bass, trout, and kokanee. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Utah free?",
        "a": "Many fishing piers in Utah are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "vermont": {
    "slug": "vermont",
    "code": "VT",
    "name": "Vermont",
    "introParagraph": "Vermont offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Mobile Bay and the Gulf Coast, there's no shortage of places to cast a line. Popular catches include redfish, flounder, and speckled trout.",
    "tips": [
      "Check Vermont's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Vermont?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Vermont."
      },
      {
        "q": "Do I need a fishing license in Vermont?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Vermont&apos;s fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Vermont?",
        "a": "Popular catches from Vermont piers include redfish, flounder, and speckled trout. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Vermont free?",
        "a": "Many fishing piers in Vermont are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "virginia": {
    "slug": "virginia",
    "code": "VA",
    "name": "Virginia",
    "introParagraph": "Virginia offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From the Chesapeake Bay, Smith Mountain Lake, and the James River, there's no shortage of places to cast a line. Popular catches include striped bass, catfish, and crappie.",
    "tips": [
      "Check Virginia's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Virginia?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Virginia."
      },
      {
        "q": "Do I need a fishing license in Virginia?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Virginia's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Virginia?",
        "a": "Popular catches from Virginia piers include striped bass, catfish, and crappie. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Virginia free?",
        "a": "Many fishing piers in Virginia are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "washington": {
    "slug": "washington",
    "code": "WA",
    "name": "Washington",
    "introParagraph": "Washington offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Puget Sound, the Columbia River, and Lake Chelan, there's no shortage of places to cast a line. Popular catches include salmon, steelhead, and halibut.",
    "tips": [
      "Check Washington's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Washington?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Washington."
      },
      {
        "q": "Do I need a fishing license in Washington?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Washington's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Washington?",
        "a": "Popular catches from Washington piers include salmon, steelhead, and halibut. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Washington free?",
        "a": "Many fishing piers in Washington are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "west-virginia": {
    "slug": "west-virginia",
    "code": "WV",
    "name": "West Virginia",
    "introParagraph": "West Virginia offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Summersville Lake, the New River, and Stonewall Jackson Lake, there's no shortage of places to cast a line. Popular catches include bass, walleye, and trout.",
    "tips": [
      "Check West Virginia's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in West Virginia?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across West Virginia."
      },
      {
        "q": "Do I need a fishing license in West Virginia?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check West Virginia's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in West Virginia?",
        "a": "Popular catches from West Virginia piers include bass, walleye, and trout. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in West Virginia free?",
        "a": "Many fishing piers in West Virginia are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "wisconsin": {
    "slug": "wisconsin",
    "code": "WI",
    "name": "Wisconsin",
    "introParagraph": "Wisconsin offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Mobile Bay and the Gulf Coast, there's no shortage of places to cast a line. Popular catches include redfish, flounder, and speckled trout.",
    "tips": [
      "Check Wisconsin's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Wisconsin?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Wisconsin."
      },
      {
        "q": "Do I need a fishing license in Wisconsin?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Wisconsin&apos;s fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Wisconsin?",
        "a": "Popular catches from Wisconsin piers include redfish, flounder, and speckled trout. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Wisconsin free?",
        "a": "Many fishing piers in Wisconsin are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  },
  "wyoming": {
    "slug": "wyoming",
    "code": "WY",
    "name": "Wyoming",
    "introParagraph": "Wyoming offers ${stateTotal.toLocaleString()}+ fishing piers, docks, and jetties across the state. From Yellowstone Lake, Flaming Gorge, and Boysen Reservoir, there's no shortage of places to cast a line. Popular catches include trout, walleye, and kokanee.",
    "tips": [
      "Check Wyoming's fishing license requirements — most states require one even for pier fishing.",
      "Best times to fish from piers are early morning, late afternoon, and around tidal changes.",
      "Bring a variety of bait — shrimp, cut bait, and artificial lures all work from piers.",
      "Always check weather and water conditions before heading to any pier.",
      "Read our pier fishing tips guide for more advice."
    ],
    "faqItems": [
      {
        "q": "How many fishing piers are in Wyoming?",
        "a": "PierSeeker lists ${stateTotal}+ fishing piers, docks, and jetties across Wyoming."
      },
      {
        "q": "Do I need a fishing license in Wyoming?",
        "a": "Most states require a fishing license even when fishing from a public pier. Check Wyoming's fish and wildlife department for current requirements."
      },
      {
        "q": "What fish can I catch from piers in Wyoming?",
        "a": "Popular catches from Wyoming piers include trout, walleye, and kokanee. Species vary by location and season."
      },
      {
        "q": "Are fishing piers in Wyoming free?",
        "a": "Many fishing piers in Wyoming are free to access. Some popular piers may charge a small fee during peak season."
      },
      {
        "q": "Is PierSeeker free?",
        "a": "Yes, completely free. No login, no account, no fees. Just find your pier and go fish."
      }
    ]
  }
};

export function getStateInfo(slug: string): StateInfo | null {
  return STATE_INFO[slug] || null;
}

export const ALL_STATE_SLUGS: string[] = [
  "alabama",
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "florida",
  "georgia",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "nevada",
  "new-hampshire",
  "new-jersey",
  "new-mexico",
  "new-york",
  "north-carolina",
  "north-dakota",
  "ohio",
  "oklahoma",
  "oregon",
  "pennsylvania",
  "rhode-island",
  "south-carolina",
  "south-dakota",
  "tennessee",
  "texas",
  "utah",
  "vermont",
  "virginia",
  "washington",
  "west-virginia",
  "wisconsin",
  "wyoming"
];
