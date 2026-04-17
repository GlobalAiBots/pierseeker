export interface Species {
  slug: string;
  name: string;
  scientificName: string;
  description: string;
  bestStates: string[];
  bestSeason: string;
  peakMonths: string;
  bestBait: string[];
  bestTackle: string;
  averageSize: string;
  recordSize: string;
  tips: string[];
  faq: { q: string; a: string }[];
}

export const species: Species[] = [
  {
    slug: "redfish",
    name: "Red Drum",
    scientificName: "Sciaenops ocellatus",
    description:
      "Red drum, commonly known as redfish, are one of the most popular inshore game fish along the Gulf and South Atlantic coasts. Recognizable by the distinctive black spot near the base of the tail, redfish are powerful fighters that thrill anglers of every skill level. They inhabit shallow flats, marshes, jetties, and the pilings beneath fishing piers, making them an ideal target for pier anglers. Redfish feed aggressively on crustaceans, shrimp, crabs, and small baitfish, which means a wide variety of natural and artificial baits will draw strikes. Juvenile redfish, often called puppy drum, school in large numbers around pier structures during summer and fall, providing fast action on light tackle. Larger bull reds migrate along the coast during the fall spawning run, and pier anglers who position themselves in passes and inlets can intercept these trophy fish as they move through. Redfish populations have rebounded dramatically since conservation measures were put in place in the 1980s, and catch-and-release practices have helped maintain healthy stocks across their range. Whether you are soaking a chunk of cut mullet on the bottom or working a gold spoon through the current, redfish deliver some of the most exciting pier fishing action available anywhere in the country.",
    bestStates: ["FL", "TX", "LA", "SC"],
    bestSeason: "Spring through Fall",
    peakMonths: "September-November",
    bestBait: ["Live shrimp", "Cut mullet", "Blue crab", "Gold spoons", "Soft plastic jigs"],
    bestTackle: "Medium-heavy spinning rod, 7 ft, with 20-30 lb braided line and fluorocarbon leader. Use a Carolina rig with circle hooks for bottom fishing or a popping cork rig for suspending live bait.",
    averageSize: "18-27 inches, 3-8 lbs",
    recordSize: "94 lbs 2 oz (Avon, North Carolina, 1984)",
    tips: [
      "Fish the last two hours of incoming tide when redfish push onto shallow structure around pier pilings.",
      "Use circle hooks to improve hookup rates and make catch-and-release easier on the fish.",
      "During the fall bull red run, position yourself at the end of the pier near deeper channels and passes.",
      "Gold and copper spoons are deadly when redfish are feeding on schools of mullet around the pier.",
      "Pay attention to birds diving and baitfish scattering near the pier — redfish are often right below the surface activity.",
    ],
    faq: [
      {
        q: "What is the best time of day to catch redfish from a pier?",
        a: "Early morning and late afternoon are the most productive times for redfish from a pier. Redfish feed most actively during low-light conditions and on moving tides. The first two hours after sunrise and the last hour before sunset typically produce the best action.",
      },
      {
        q: "What size hooks should I use for redfish?",
        a: "Circle hooks in sizes 3/0 to 5/0 are ideal for redfish. They provide a better hookup ratio than J-hooks and almost always hook the fish in the corner of the mouth, which makes safe release much easier.",
      },
      {
        q: "Do I need a fishing license to catch redfish from a pier?",
        a: "In most states, yes. However, some states like Florida waive the license requirement on certain public fishing piers. Check your specific state regulations before fishing, as redfish also have strict slot limits and bag limits that vary by state.",
      },
    ],
  },
  {
    slug: "flounder",
    name: "Summer Flounder",
    scientificName: "Paralichthys dentatus",
    description:
      "Summer flounder, also called fluke, are one of the most sought-after flatfish species along the Atlantic coast. These ambush predators lie flat on the sandy bottom, camouflaged against the substrate, waiting to explode upward and engulf prey that passes overhead. Pier anglers target flounder because the pilings and shadows created by pier structures attract baitfish, which in turn draw flounder to set up feeding stations directly below the walkway. Flounder are prized for their mild, flaky white meat, and many anglers consider them the best-eating fish available from any pier on the East Coast. Summer flounder migrate inshore during spring and spend the warmer months in bays, inlets, and along the surf line near piers before moving offshore to deeper water in late fall. The key to catching flounder from a pier is to present your bait or lure right on the bottom, where these fish spend virtually all of their time. Slow presentations are critical — flounder need a moment to position themselves before striking, so a retrieve that is too fast will result in missed bites. Pier anglers along the mid-Atlantic coast enjoy some of the best flounder fishing in the country, with doormat-sized fish over 10 pounds caught from piers every season. Conservation-minded anglers should be aware of minimum size limits, which have helped rebuild flounder populations that were depleted by overfishing in the 1990s.",
    bestStates: ["NC", "VA", "NJ", "NY"],
    bestSeason: "Late Spring through Early Fall",
    peakMonths: "June-September",
    bestBait: ["Live minnows", "Strip bait (squid)", "Gulp! Swimming Mullet", "Bucktail jigs", "Live spot"],
    bestTackle: "Medium spinning rod, 6.5-7 ft, with 15-20 lb braided line and 20 lb fluorocarbon leader. Use a bucktail jig tipped with a minnow or strip bait, or a fish-finder rig with a wide-gap hook.",
    averageSize: "16-22 inches, 2-5 lbs",
    recordSize: "22 lbs 7 oz (Montauk, New York, 1975)",
    tips: [
      "Always keep your bait on or very near the bottom — flounder rarely chase bait more than a foot off the substrate.",
      "Tip your bucktail jig with a strip of squid or Gulp! bait for added scent and action.",
      "Fish the outgoing tide when water flows from bays through inlets, carrying baitfish past waiting flounder.",
      "When you feel a bite, wait three to five seconds before setting the hook — flounder grab prey and reposition it before swallowing.",
      "Target the shady side of the pier where flounder set up ambush points in the shadows of pilings.",
    ],
    faq: [
      {
        q: "What is the best rig for flounder from a pier?",
        a: "A bucktail jig in white or chartreuse, 1/2 to 1 oz, tipped with a strip of squid or a live minnow is the most effective flounder rig from a pier. You can also use a fish-finder rig with a sliding sinker and a wide-gap hook baited with a live minnow.",
      },
      {
        q: "When do flounder move inshore to piers?",
        a: "Summer flounder begin moving inshore in April and May as water temperatures rise above 55 degrees. The best pier fishing typically runs from June through September, with fish moving offshore again in October and November.",
      },
      {
        q: "What is a doormat flounder?",
        a: "A doormat flounder is a large summer flounder, typically over 8 pounds and 28 inches or more. The name comes from their flat shape and the fact that a fish this size is roughly the dimensions of a doormat. Doormats are trophy fish that many pier anglers spend years trying to catch.",
      },
    ],
  },
  {
    slug: "striped-bass",
    name: "Striped Bass",
    scientificName: "Morone saxatilis",
    description:
      "Striped bass are the premier game fish of the Northeast Atlantic coast and one of the most iconic species in American fishing history. Known as stripers or rockfish depending on the region, these powerful predators can grow to over 50 pounds and wage long, drag-screaming fights that test both tackle and angler skill. Striped bass are anadromous, migrating from ocean waters into rivers and estuaries to spawn each spring, then moving along the coast in massive schools during summer and fall. Pier anglers intercept these migrations at strategic points along the Atlantic coast, particularly around inlets, jetties, and oceanfront piers that sit near structure and current breaks. The fall run, when enormous schools of stripers chase migrating baitfish south along the coast, is the premier event in Northeast pier fishing. During this period, anglers on piers from Massachusetts to North Carolina enjoy fast action on big fish that are feeding aggressively before winter. Striped bass will eat almost anything, from live eels and bunker to swimming plugs and metal jigs. Night fishing from piers is especially productive because stripers are more comfortable feeding in shallow water near structure after dark. Strict conservation regulations, including slot limits and seasonal closures, have been essential in managing striper populations, and responsible anglers practice careful catch-and-release to protect the future of this fishery.",
    bestStates: ["MA", "NJ", "NY", "CT"],
    bestSeason: "Spring and Fall",
    peakMonths: "April-June, September-November",
    bestBait: ["Live eels", "Bunker (menhaden)", "Clams", "Swimming plugs", "Bucktail jigs"],
    bestTackle: "Heavy spinning or conventional rod, 7-9 ft, with 30-50 lb braided line and 40 lb fluorocarbon leader. Use fish-finder rigs for bait or cast swimming plugs and bucktails for active fishing.",
    averageSize: "20-34 inches, 5-15 lbs",
    recordSize: "81 lbs 14 oz (Long Island Sound, Connecticut, 2011)",
    tips: [
      "Fish the two hours before and after dawn and dusk — striped bass are low-light feeders that move into pier range during these windows.",
      "During the fall run, watch for bird activity and surface explosions that signal schools of stripers blitzing baitfish.",
      "Live eels fished on the bottom at night are one of the most consistent big-striper techniques from any pier.",
      "Match the hatch by using lures that mimic the predominant baitfish — bunker in fall, sand eels in spring.",
      "Use barbless hooks for easier releases, as striped bass are a carefully managed species with strict harvest regulations.",
    ],
    faq: [
      {
        q: "When is the striped bass fall run?",
        a: "The fall run typically begins in late September in New England and progresses southward through October and November. Migrating stripers follow schools of menhaden, mullet, and other baitfish along the coast, and pier anglers can intercept them as they pass.",
      },
      {
        q: "Can I keep striped bass caught from a pier?",
        a: "Regulations vary by state and change frequently. Most states have a slot limit, minimum size, and daily bag limit. Some states also have seasonal closures. Always check current state regulations before keeping any striped bass.",
      },
      {
        q: "What is the best pier for striped bass fishing?",
        a: "Some of the best striped bass piers include the Long Branch Pier in New Jersey, Montauk Point in New York, the Canal piers in Massachusetts, and the Outer Banks piers in North Carolina during the fall migration.",
      },
    ],
  },
  {
    slug: "sheepshead",
    name: "Sheepshead",
    scientificName: "Archosargus probatocephalus",
    description:
      "Sheepshead are one of the most unique and challenging fish you can catch from a pier. Named for their distinctly sheep-like teeth, which they use to crush barnacles, crabs, and shellfish off of pilings and rocks, sheepshead are structure-oriented fish that thrive around the very piers anglers fish from. This makes them an ideal pier fishing target because they are almost always present around the barnacle-encrusted pilings below your feet. Sheepshead are found throughout the Gulf of Mexico and along the South Atlantic coast, with particularly strong populations in Florida, Texas, and Georgia. They are most active during the cooler months, with winter and early spring being prime time as sheepshead gather in large numbers around nearshore structure to spawn. Catching sheepshead requires a specialized approach because they are notorious bait stealers. Their crushing teeth allow them to pick a hook clean without the angler ever feeling a bite. The key is to use small, sharp hooks, minimal weight, and natural baits like fiddler crabs, shrimp, or sand fleas presented right against the pilings. Many experienced sheepshead anglers describe the bite as a slight tightening of the line or a subtle tap rather than a definitive strike. Patience and a sensitive rod tip are essential. Despite their tricky bites, sheepshead are excellent table fare, with firm, white meat that many anglers rank among the best-tasting saltwater fish. A productive sheepshead session from a pier can fill a cooler in a hurry once you dial in the technique.",
    bestStates: ["FL", "TX", "GA"],
    bestSeason: "Winter through Early Spring",
    peakMonths: "December-March",
    bestBait: ["Fiddler crabs", "Sand fleas", "Live shrimp", "Oyster pieces", "Barnacles scraped from pilings"],
    bestTackle: "Medium-light spinning rod, 7 ft, with 10-15 lb braided line and 15-20 lb fluorocarbon leader. Use small #1 or 1/0 hooks with a light split shot, fished vertically against the pilings.",
    averageSize: "12-18 inches, 2-5 lbs",
    recordSize: "21 lbs 4 oz (Bayou St. John, Louisiana, 1982)",
    tips: [
      "Fish directly against the pilings — drop your bait straight down and keep it within inches of the barnacle-covered structure.",
      "Use the smallest hook you can get away with, a #1 or 1/0 short-shank hook, and keep your bait compact.",
      "Set the hook at the slightest change in line tension — sheepshead bites feel like a subtle tick or the line going slightly slack.",
      "Scrape barnacles off the pilings and let them fall into the water to create a chum slick that attracts sheepshead.",
      "Fish during the winter spawn when sheepshead congregate in large numbers around piers and bridge pilings.",
    ],
    faq: [
      {
        q: "Why are sheepshead so hard to catch?",
        a: "Sheepshead have flat, human-like teeth designed for crushing shells, which allows them to bite down on bait and strip it off the hook without swallowing the hook. Their bites are very subtle, and setting the hook requires excellent timing and sensitivity.",
      },
      {
        q: "What is the best bait for sheepshead from a pier?",
        a: "Fiddler crabs are widely considered the best bait for sheepshead. Sand fleas (mole crabs) and live shrimp are also highly effective. The key is to use fresh, natural baits that sheepshead naturally feed on around pier structure.",
      },
      {
        q: "Are sheepshead good to eat?",
        a: "Sheepshead are excellent table fare, often considered one of the best-tasting saltwater fish. The meat is firm, white, and mildly sweet, similar to triggerfish. They can be grilled, blackened, or fried and hold up well to almost any cooking method.",
      },
    ],
  },
  {
    slug: "bluefish",
    name: "Bluefish",
    scientificName: "Pomatomus saltatrix",
    description:
      "Bluefish are the aggressive, hard-fighting predators of the Atlantic coast, known for their razor-sharp teeth, explosive surface strikes, and willingness to eat anything that moves. Found from Maine to Florida, bluefish are one of the most accessible species for pier anglers because they travel in large schools, feed voraciously, and are not particularly selective about what they eat. When a school of bluefish moves within range of a pier, the action can be nonstop, with multiple hookups happening simultaneously up and down the rail. Bluefish are powerful swimmers that make blistering runs and will test your drag system, especially the larger specimens known as gators or choppers that can exceed 15 pounds. Their sharp teeth demand the use of wire leaders, as they will slice through monofilament and fluorocarbon in an instant. Bluefish are highly migratory, moving north along the coast in spring and summer, then south again in fall. The fall migration is particularly exciting for pier anglers as massive schools of bluefish chase baitfish along the surf line, often within easy casting range of oceanfront piers. Metal jigs, spoons, and topwater plugs are all effective lures, and fresh-cut bait like bunker or mullet will draw strikes when the fish are nearby. While bluefish are edible, their meat has a stronger flavor than most species and is best eaten fresh — bleed and ice them immediately. Many anglers enjoy bluefish smoked, which mellows the bold flavor. Regardless of whether you keep them or release them, bluefish provide some of the most exciting and fast-paced pier fishing action on the Atlantic coast.",
    bestStates: ["NJ", "NY", "NC"],
    bestSeason: "Spring through Fall",
    peakMonths: "May-June, September-October",
    bestBait: ["Cut bunker (menhaden)", "Metal jigs", "Spoons", "Topwater plugs", "Cut mullet"],
    bestTackle: "Medium-heavy spinning rod, 7-8 ft, with 20-30 lb braided line and a short wire leader. Use a fish-finder rig with cut bait or cast metal jigs and spoons when fish are actively feeding.",
    averageSize: "16-24 inches, 3-8 lbs",
    recordSize: "31 lbs 12 oz (Hatteras, North Carolina, 1972)",
    tips: [
      "Always use a wire leader — bluefish teeth will cut through monofilament and fluorocarbon leaders instantly.",
      "When bluefish are blitzing on the surface, cast metal jigs or spoons past the activity and retrieve quickly through the school.",
      "Handle bluefish with care, using pliers to remove hooks — their teeth can cause serious injury.",
      "Fish the end of the pier during the fall migration when large schools cruise along the beach within casting distance.",
      "Bleed and ice bluefish immediately if you plan to eat them — the meat deteriorates quickly and tastes much better when handled properly.",
    ],
    faq: [
      {
        q: "Are bluefish dangerous to handle?",
        a: "Bluefish have extremely sharp teeth and powerful jaws that can cause serious cuts. Always use long-nose pliers or a dehooking tool to remove hooks, and grip the fish firmly behind the head. Never put your fingers near a bluefish mouth.",
      },
      {
        q: "What is a bluefish blitz?",
        a: "A bluefish blitz occurs when a large school of bluefish traps baitfish near the surface and feeds aggressively. The water erupts with splashing, diving birds, and fleeing baitfish. Blitzes are the most exciting events in pier fishing and can provide nonstop action.",
      },
      {
        q: "Do bluefish taste good?",
        a: "Bluefish have a bold, rich flavor that some people love and others find too strong. The key is to bleed them immediately after catching, ice them down, and eat them the same day. Smoked bluefish is considered a delicacy, especially along the Northeast coast.",
      },
    ],
  },
  {
    slug: "spanish-mackerel",
    name: "Spanish Mackerel",
    scientificName: "Scomberomorus maculatus",
    description:
      "Spanish mackerel are sleek, fast, and beautiful fish that provide thrilling light-tackle action from piers along the Southeast Atlantic and Gulf coasts. With their iridescent blue-green backs, silver sides dotted with golden spots, and deeply forked tails built for speed, Spanish mackerel are among the most visually striking fish you can catch from a pier. They are also among the fastest, capable of blistering runs that will empty a spinning reel in seconds. Spanish mackerel are pelagic schooling fish that migrate along the coast in large numbers, arriving inshore as water temperatures warm in spring and remaining through fall. When a school of Spanish mackerel moves within range of a pier, anglers casting flashy lures or live-lining small baitfish can enjoy fast and furious action. These fish are aggressive feeders that strike with explosive speed, often launching completely out of the water when they hit a lure on the surface. Pier anglers typically target Spanish mackerel with small silver spoons, Got-Cha plugs, or live bait rigs using small pilchards or glass minnows. A long, fast retrieve is key because Spanish mackerel are attracted to speed and flash. Light wire or heavy fluorocarbon leaders are recommended because their teeth, while not as formerous as king mackerel, can still cut light line. Spanish mackerel are excellent table fare with firm, flavorful meat that is outstanding grilled, blackened, or made into ceviche. They should be eaten fresh because the meat does not freeze well. For pier anglers looking for fast action and good eating, Spanish mackerel are hard to beat.",
    bestStates: ["FL", "NC", "SC"],
    bestSeason: "Spring through Fall",
    peakMonths: "April-June, September-October",
    bestBait: ["Small silver spoons", "Got-Cha plugs", "Live pilchards", "Glass minnows", "Sabiki-caught baitfish"],
    bestTackle: "Medium-light spinning rod, 7 ft, with 10-15 lb braided line and a short length of 30 lb fluorocarbon or light wire leader. Use small spoons or Got-Cha plugs retrieved quickly through the water column.",
    averageSize: "14-20 inches, 2-4 lbs",
    recordSize: "13 lbs 0 oz (Ocracoke Inlet, North Carolina, 1987)",
    tips: [
      "Retrieve your lure as fast as you can crank the reel handle — Spanish mackerel are attracted to speed and will ignore slow presentations.",
      "Use a long casting rod to maximize your range from the pier, as mackerel schools often cruise just outside normal casting distance.",
      "When you see mackerel busting bait on the surface, cast beyond the school and retrieve through them.",
      "A sabiki rig is essential for catching live baitfish to use on a live-line rig for bigger mackerel.",
      "Fish early morning and late afternoon when Spanish mackerel are most actively feeding near the surface.",
    ],
    faq: [
      {
        q: "What is the difference between Spanish mackerel and king mackerel?",
        a: "Spanish mackerel are smaller (usually under 5 lbs) with golden spots on their sides, while king mackerel are much larger (commonly 15-40 lbs) with a lateral line that dips sharply below the second dorsal fin. Both are caught from piers, but king mackerel require much heavier tackle.",
      },
      {
        q: "What is the best lure for Spanish mackerel from a pier?",
        a: "A small silver or gold spoon, such as a Clark Spoon or Kastmaster, is the most popular and effective lure for Spanish mackerel from a pier. Got-Cha plugs in silver or pink are also extremely effective. Retrieve quickly for best results.",
      },
      {
        q: "Are Spanish mackerel good to eat?",
        a: "Spanish mackerel are excellent eating fish with firm, flavorful meat. They are best grilled, blackened, or made into ceviche. Eat them fresh, as the meat does not freeze particularly well. Bleed and ice them immediately after catching for the best quality.",
      },
    ],
  },
  {
    slug: "snook",
    name: "Snook",
    scientificName: "Centropomus undecimalis",
    description:
      "Snook are the crown jewel of inshore fishing in Florida and one of the most exciting game fish you can target from a pier. With their distinctive black lateral line, underslung jaw, and powerful build, snook are instantly recognizable and universally respected by anglers. They are primarily found in Florida, where they inhabit mangrove shorelines, beaches, inlets, and the pilings of fishing piers throughout the southern half of the state. Snook are ambush predators that use structure, current, and shadows to position themselves for feeding, which makes pier pilings an ideal hunting ground. During the summer months, snook migrate to the beaches and passes to spawn, congregating around inlets and piers in large numbers. The fall mullet run, when massive schools of finger mullet pour out of the estuaries, triggers some of the most explosive snook feeding activity of the year. Pier anglers during the mullet run can witness snook smashing bait on the surface in broad daylight, and a well-placed live mullet or swimbait can draw savage strikes. Night fishing from lit piers is another highly productive technique because snook use the light to ambush baitfish that are attracted to the illumination. Snook are catch-and-release only during certain seasons in Florida, and they have strict slot limits when harvest is open. Many experienced anglers practice voluntary catch-and-release year-round to protect this valuable fishery. Snook are also notoriously sensitive to cold water temperatures, and severe cold snaps can cause significant die-offs, which makes conservation all the more important.",
    bestStates: ["FL"],
    bestSeason: "Year-round (best Spring through Fall)",
    peakMonths: "May-July, September-November",
    bestBait: ["Live mullet", "Live pilchards", "White swimbaits", "Jerkbaits", "DOA shrimp"],
    bestTackle: "Medium-heavy spinning rod, 7-7.5 ft, with 20-30 lb braided line and 30-40 lb fluorocarbon leader. Use a free-line rig with live bait or cast swimbaits and jerkbaits around the pilings.",
    averageSize: "24-32 inches, 5-12 lbs",
    recordSize: "53 lbs 10 oz (Fort Myers, Florida, 2014)",
    tips: [
      "Fish at night under pier lights — snook position themselves in the shadow line where light meets dark and ambush baitfish drawn to the light.",
      "During the fall mullet run, free-line a live finger mullet along the pilings for explosive strikes.",
      "Use heavy fluorocarbon leaders because snook have razor-sharp gill plates that will cut lighter line during the fight.",
      "Target moving tides, especially the outgoing tide at inlets and passes, when snook set up in current breaks to feed.",
      "Handle snook carefully with wet hands and revive them before release — they are a fragile species that deserves respect.",
    ],
    faq: [
      {
        q: "Can I keep snook caught from a pier in Florida?",
        a: "Snook harvest in Florida is regulated with seasonal closures and a slot limit (currently 28-33 inches on the Atlantic coast and 28-33 inches on the Gulf coast). Seasons and limits change, so always check current FWC regulations. Many anglers release all snook regardless of season.",
      },
      {
        q: "What is the best pier for snook fishing in Florida?",
        a: "Sebastian Inlet is widely considered the best pier-accessible snook fishing location in Florida. The Juno Beach Pier, Deerfield Beach Pier, and various piers along the Gulf Coast from Naples to Fort Myers also produce excellent snook fishing, especially during the mullet run.",
      },
      {
        q: "Why do snook hang around pier lights at night?",
        a: "Pier lights attract plankton and small baitfish, creating a concentrated food source. Snook position themselves in the shadow line, where the light transitions to dark, and ambush prey that swims into the illuminated zone. This makes night piers one of the most reliable places to find feeding snook.",
      },
    ],
  },
  {
    slug: "catfish",
    name: "Channel Catfish",
    scientificName: "Ictalurus punctatus",
    description:
      "Channel catfish are the most popular freshwater game fish in the United States and a staple of freshwater pier fishing from coast to coast. Found in lakes, reservoirs, rivers, and ponds throughout the country, channel catfish are accessible, abundant, and willing to bite a wide variety of baits. For anglers who fish from freshwater piers, docks, and fishing platforms, catfish provide reliable action throughout the warmer months and are especially productive at night when they move into shallow water to feed. Channel catfish have an extraordinary sense of smell, which allows them to locate food in murky water and complete darkness. This makes scent-based baits like chicken liver, stink bait, nightcrawlers, and cut shad extremely effective. Pier anglers can cast out a bottom rig baited with a pungent bait and wait for the telltale dip of the rod tip that signals a catfish has found the offering. Channel catfish average 2 to 8 pounds in most waters, but fish over 20 pounds are caught with regularity from piers on large reservoirs and rivers. Blue catfish and flathead catfish, which can grow to over 100 pounds, are also caught from freshwater piers in certain regions. Catfish are one of the best-tasting freshwater fish and are a staple of Southern cooking. Fried catfish, catfish po-boys, and blackened catfish are beloved dishes throughout the South and Midwest. For families and beginners, catfish are a perfect introduction to pier fishing because they are forgiving, abundant, and provide both a fun fight and a delicious meal.",
    bestStates: ["TX", "TN", "MS", "AL"],
    bestSeason: "Spring through Fall",
    peakMonths: "May-September",
    bestBait: ["Chicken liver", "Nightcrawlers", "Cut shad", "Stink bait", "Live bluegill (where legal)"],
    bestTackle: "Medium-heavy spinning or baitcasting rod, 7 ft, with 15-20 lb monofilament line. Use a slip sinker rig (egg sinker sliding on the main line above a swivel) with a 2/0-4/0 circle hook.",
    averageSize: "14-22 inches, 2-8 lbs",
    recordSize: "58 lbs 0 oz (Santee Cooper, South Carolina, 1964)",
    tips: [
      "Fish at night when catfish move into shallow water near piers and docks to feed — the hours between 9 PM and midnight are prime time.",
      "Use a slip sinker rig that allows the catfish to pick up the bait and move without feeling resistance from the weight.",
      "Chicken liver stays on the hook better if you let it sit in the sun for 20 minutes to firm up before baiting.",
      "Cast to different distances and directions to locate where catfish are holding — they often follow specific bottom contours and depth changes.",
      "Keep your rod tip low and your drag set loose so catfish can take the bait without feeling pressure, then tighten down and set the hook.",
    ],
    faq: [
      {
        q: "What is the best bait for catfish from a pier?",
        a: "Chicken liver, nightcrawlers, and cut shad are the most consistently effective catfish baits from freshwater piers. Commercial stink baits and punch baits also work well. The key is using baits with strong scent because catfish locate food primarily through their sense of smell.",
      },
      {
        q: "What time of day is best for pier catfishing?",
        a: "Night fishing is generally the most productive for catfish. They feed most actively after dark when they move into shallower water near piers and docks. The period from sunset through midnight typically produces the best action, though catfish can be caught at any time of day.",
      },
      {
        q: "Do I need a special license for freshwater pier fishing?",
        a: "In most states, you need a valid freshwater fishing license to fish from any freshwater pier or dock. Some states offer free fishing days or waive license requirements for certain public fishing piers or for anglers under a certain age. Check your state regulations for details.",
      },
    ],
  },
];

export function getSpeciesBySlug(slug: string): Species | undefined {
  return species.find((s) => s.slug === slug);
}
