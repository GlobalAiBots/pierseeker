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
  {
    slug: "tarpon",
    name: "Tarpon",
    scientificName: "Megalops atlanticus",
    description:
      "Tarpon, known to anglers as the silver king, are among the most legendary game fish in all of saltwater fishing and represent the ultimate trophy challenge for pier anglers willing to invest in heavy tackle. Reaching weights of 100 to 250 pounds with adult fish commonly exceeding six feet in length, tarpon are prized not for their table qualities but for the spectacular aerial battles they put up when hooked. A hooked tarpon will launch its massive silver body completely clear of the water, shaking its head violently and crashing back down in explosions of spray that anglers never forget. Pier fishing for tarpon is less common than boat-based tarpon fishing, but dedicated anglers successfully target them from specific piers that sit near deep water and natural migration corridors. Places like Big Pine Key, Boca Grande, and several piers throughout the Florida Keys see rolling tarpon within casting range during the late spring and summer migration. Tarpon feed on live crabs, pinfish, mullet, and other baitfish, and patient anglers who soak a well-presented bait during the right tide have a real chance at hookups. The bony mouth of a tarpon makes solid hooksets difficult, and the combination of size, strength, and acrobatic jumps means many hooked fish are lost. Tarpon are strictly catch-and-release in Florida except for record attempts requiring a special tag. Handling is heavily regulated to protect spawning populations, and the experience of simply watching one of these ancient fish thrash alongside a pier is reward enough for most anglers.",
    bestStates: ["FL", "LA", "AL", "TX"],
    bestSeason: "Late Spring through Summer",
    peakMonths: "May-July",
    bestBait: ["Live pinfish", "Live crabs", "Dead mullet", "Live mullet", "Pilchards"],
    bestTackle: "30-50 lb class rod, 80+ lb braid, 100 lb fluorocarbon leader, circle hooks 8/0-10/0. A fighting belt helps for long fights.",
    averageSize: "60-120 lbs",
    recordSize: "286 lbs 9 oz (Guinea-Bissau, West Africa, 2003 IGFA)",
    tips: [
      "Watch for rolling tarpon on the surface near the pier at dawn and dusk — they gulp air and give away their position before you ever see a fish under water.",
      "Use circle hooks in 8/0 to 10/0 sizes and let the fish load up the rod before applying pressure — setting too early pulls the hook from their bony mouth.",
      "Bow to the king when a tarpon jumps by lowering your rod tip and giving slack to prevent the leader from snapping on the thrash.",
      "Fish the outgoing tide at inlets and passes where tarpon stage to ambush crabs and baitfish being flushed out of the estuary.",
      "Bring a tag kit and camera rather than a cooler — tarpon must be released in Florida and even the photo op requires keeping them in the water when possible.",
    ],
    faq: [
      {
        q: "Can you really catch tarpon from a pier?",
        a: "Yes, though it is far less common than boat fishing for them. Specific piers located near deep water, passes, and migration corridors — such as those in the Florida Keys, Boca Grande area, and parts of the Gulf coast — see rolling tarpon within casting range during the late spring and summer migration. Success requires patience, the right tide, and heavy enough tackle to have a realistic chance of landing a fish.",
      },
      {
        q: "What tackle do I need for pier tarpon?",
        a: "Heavy tackle is mandatory. A 30-50 lb class rod paired with a reel spooled with 80 lb or heavier braid, topped with a 100 lb fluorocarbon shock leader and 8/0 to 10/0 circle hooks, is a reasonable starting point. A fighting belt is extremely helpful because landing a big tarpon from a pier can take an hour or more, and the vertical pull puts serious strain on the angler.",
      },
      {
        q: "Are there regulations on tarpon?",
        a: "Florida treats tarpon as a catch-and-release-only species with very limited exceptions for record attempts that require a purchased tag. The fish cannot be removed from the water for photos if it is over 40 inches, and handling must minimize stress. Similar conservation-minded regulations exist in other Gulf and Atlantic states. Always check current state rules before targeting tarpon.",
      },
    ],
  },
  {
    slug: "cobia",
    name: "Cobia",
    scientificName: "Rachycentron canadum",
    description:
      "Cobia, also known as ling or lemonfish, are powerful, solitary game fish that combine blistering runs with excellent table fare, making them one of the most sought-after species along the Atlantic and Gulf coasts. With their dark brown bodies, white underbellies, and flattened heads, cobia look unlike any other fish you will encounter from a pier, often mistaken at first glance for a shark or remora cruising past. Cobia follow a well-known spring migration route up the Atlantic coast from Florida to Virginia and throughout the Gulf of Mexico, and pier anglers who position themselves along this route during April, May, and June enjoy a rare opportunity to sight-cast to big fish from a stationary platform. These are structure-oriented predators that investigate almost any floating object, which is why they regularly cruise past pier pilings, buoys, and the ends of fishing piers looking for a meal. The classic approach is to scan the water from the top rail of the pier, spot a cobia swimming by, and cast a live eel, pinfish, or a heavy bucktail jig directly in its path. The strike is usually visual and immediate. Cobia fight with strong, deep runs rather than jumps, and they do not give up until they are gaffed or released. Because they are such a prized food fish with firm, white, mild-flavored meat, cobia are heavily regulated with minimum size and bag limits that vary by state. Pier-caught trophies up to 70 pounds are reported every spring.",
    bestStates: ["FL", "NC", "VA", "AL"],
    bestSeason: "Spring",
    peakMonths: "April-June",
    bestBait: ["Live eels", "Live pinfish", "Jigs (bucktail, 2-4 oz)", "Live blue crab", "Dead shrimp"],
    bestTackle: "30-50 lb class rod, 50-80 lb braid, 80 lb fluorocarbon leader, 6/0-8/0 circle hooks. Bucktail jigs in white/pink/chartreuse work well when sight-casting.",
    averageSize: "20-50 lbs",
    recordSize: "135 lbs 9 oz (Shark Bay, Australia, 1985 IGFA)",
    tips: [
      "Station yourself on the top rail or highest point of the pier with polarized sunglasses and scan the water constantly — cobia are often seen before they are caught.",
      "Keep a rod rigged with a 2-4 oz bucktail jig ready at all times for sight-casting, and a second rod with a live eel or pinfish on a free-line for follow-up shots.",
      "Lead the fish by several feet and let the jig sink slightly in its path — cobia will rarely chase backwards, but they pounce on anything that appears in front of them.",
      "Fish the second half of the incoming tide during peak migration weeks in April and May when cobia push into nearshore waters along the beach.",
      "Always have a large landing net or a pier gaff rigged on a drop line ready before the fight ends — cobia are heavy fish and lifting them up from water to deck is a common failure point.",
    ],
    faq: [
      {
        q: "When do cobia migrate past piers?",
        a: "Cobia migrate northward along the Atlantic coast and spread throughout the Gulf of Mexico as water temperatures rise above about 68 degrees. The peak window on the Atlantic side runs from mid-April through early June, starting in Florida and progressing up through Georgia, the Carolinas, and Virginia. Gulf coast migration peaks a bit earlier, often in March and April along the Panhandle and into Alabama.",
      },
      {
        q: "What is the minimum legal size for cobia?",
        a: "Cobia size and bag limits vary by state and change frequently due to stock assessments. Florida and the federal South Atlantic zone have often used 36 inches fork length as a minimum, while Gulf states and Virginia have their own rules. Bag limits typically range from one to two fish per angler per day. Check current state regulations before keeping any cobia.",
      },
      {
        q: "What is the best lure for sight-casting cobia?",
        a: "A heavy bucktail jig in the 2 to 4 oz range is the classic cobia sight-casting lure. White, pink, and chartreuse are the most productive colors, often tipped with a soft plastic trailer or a strip of squid for added scent. Jigs give you casting distance and allow you to quickly get the lure in front of a moving fish, which is crucial when the window to cast is only a few seconds long.",
      },
    ],
  },
  {
    slug: "pompano",
    name: "Florida Pompano",
    scientificName: "Trachinotus carolinus",
    description:
      "Florida pompano are small, silver, scrappy fish that punch far above their weight class and rank at the very top of the list for both fighting quality and table fare among surf and pier anglers. Rarely exceeding three pounds, pompano nonetheless pull drag with surprising power, make short strong runs, and fight all the way to the sand or rail. What truly sets pompano apart is their reputation in the kitchen — their firm, sweet, white fillets are regarded by many chefs as the finest eating fish that can be caught from shore. Pompano cruise the surf line and the wash at the ends of piers along the Southeast Atlantic and Gulf coasts, feeding on sand fleas, also known as mole crabs, that they dig out of the sand as waves recede. Pier anglers target them with specialized pompano rigs featuring two or three hooks spaced along a leader, with small brightly colored floats in yellow, pink, or orange positioned just above each hook to mimic the sand fleas pompano naturally feed on. The fall run, typically October through November along the Florida east coast, and the spring run in March and April are the productive windows most anglers plan their trips around. Pompano school up during these migrations, and a single good cast into a passing school can result in a double or triple hookup. Outside those peak windows, pompano can still be caught opportunistically along Gulf beaches and piers from Texas to the Carolinas.",
    bestStates: ["FL", "AL", "MS", "NC", "SC"],
    bestSeason: "Fall and Spring",
    peakMonths: "October-November and March-April",
    bestBait: ["Sand fleas (mole crabs)", "Fresh shrimp", "Fishbites (sand flea flavor)", "Clams", "Cut squid"],
    bestTackle: "Light-medium surf rod 9-10 ft, 15-20 lb braid or mono, two- or three-hook pompano rig with size 1-2 circle hooks and colored floats.",
    averageSize: "1-3 lbs, 10-15 inches",
    recordSize: "8 lbs 4 oz (Flagler Beach, FL, 1999 IGFA)",
    tips: [
      "Use fresh sand fleas whenever possible — they are the single most effective bait and can often be found by digging in the wash during the walk out to the pier.",
      "Rig a two- or three-hook pompano rig with small yellow, pink, or orange floats above each hook to keep the bait off the bottom and in the sight zone.",
      "Fish the trough where the waves break along the sides of the pier — pompano cruise this zone sweeping up dislodged sand fleas.",
      "Keep rods in holders and watch for the unmistakable sharp tap-tap-tap followed by the rod tip loading — pompano hook themselves on circle hooks if you resist setting too hard.",
      "During the fall and spring runs, check local reports and social media groups daily because schools move up and down the beach quickly and a hot bite can shift piers in a matter of hours.",
    ],
    faq: [
      {
        q: "What is the best bait for pompano?",
        a: "Sand fleas, also called mole crabs, are the premier pompano bait because they make up the bulk of a pompano diet in the surf. Fresh sand fleas fished live or frozen work extremely well. Fresh shrimp and Fishbites sand flea flavor strips are excellent backup options when live fleas are unavailable. Combining a small piece of shrimp with a Fishbite on the same hook is a proven tactic.",
      },
      {
        q: "What is a pompano rig?",
        a: "A pompano rig is a specialized multi-hook bottom rig designed specifically for surf and pier pompano fishing. It features two or three small circle hooks on short dropper loops along a leader, with small brightly colored floats (usually yellow, pink, or orange) positioned just above each hook. The floats keep the baits slightly off the sand and mimic the colorful sand fleas pompano feed on.",
      },
      {
        q: "When do pompano run?",
        a: "Pompano runs peak along the Florida east coast in October and November during the fall migration and again in March and April during the spring return. Along the Gulf coast, the peak is generally earlier in spring and later into fall due to warmer water temperatures. Schools move with water temperature, so runs shift year to year based on weather patterns.",
      },
    ],
  },
  {
    slug: "mangrove-snapper",
    name: "Mangrove Snapper",
    scientificName: "Lutjanus griseus",
    description:
      "Mangrove snapper, also commonly called gray snapper, are a staple species on South Florida and Gulf Coast piers and offer some of the most consistent light-tackle action available in inshore saltwater fishing. With their reddish-gray bodies, prominent canine teeth, and sharp-eyed stare, mangrove snapper look every bit like the wary, intelligent predators they are. These fish earn their name from their association with mangrove shorelines, but they are equally at home around the pilings, rocks, and artificial reefs that sit under fishing piers throughout their range. Mangroves are notoriously line-shy, which makes them a fun technical challenge even though they are readily available. Where redfish or sheepshead might tolerate heavy fluorocarbon, a mangrove snapper will often refuse a bait presented on line heavier than 20 pounds. Savvy pier anglers downsize their leaders, use small sharp hooks, and fish live shrimp or cut pilchards with as little hardware as possible. When a school of mangroves settles under a lit pier at night, the action can be excellent with fish in the 12 to 16 inch range caught consistently and occasional two to four pound trophies mixed in. Mangrove snapper are aggressive fighters that dive immediately for structure, so the angler must stop them before they break off in the pilings. They are also superb eating, with firm sweet white fillets that grill, fry, or bake beautifully. Florida enforces a 12 inch total length minimum and bag limits to protect this popular fishery.",
    bestStates: ["FL", "LA", "AL", "TX"],
    bestSeason: "Summer",
    peakMonths: "June-September",
    bestBait: ["Live shrimp", "Cut pilchards", "Live pilchards", "Small jigs", "Squid strips"],
    bestTackle: "Medium spinning rod, 10-20 lb braid, 15-20 lb fluorocarbon leader (heavier leader spooks them), size 1-1/0 circle hooks. Light tackle and stealth matter — mangroves are wary.",
    averageSize: "10-16 inches, 1-3 lbs",
    recordSize: "18 lbs 10 oz (Port Canaveral, FL, 1992 IGFA)",
    tips: [
      "Downsize your leader — 15 to 20 lb fluorocarbon is the sweet spot, and going heavier will cost you bites from wary fish.",
      "Fish live shrimp free-lined with just enough split shot to get the bait down to the pilings and let it drift naturally in the current.",
      "Use small sharp hooks in the 1 to 1/0 range and bury the hook point in the bait so almost nothing is visible.",
      "Night fishing under pier lights is especially productive because mangroves stack up in the shadow line waiting for illuminated baitfish.",
      "When you hook a fish, pull hard and fast in the first two seconds — every mangrove you hook will try to bury itself in the pilings and cut you off.",
    ],
    faq: [
      {
        q: "Why are mangrove snapper so line-shy?",
        a: "Mangrove snapper have excellent eyesight and spend their lives in clear inshore water where they constantly evaluate prey. Heavy or visible line tipped off with a small hook looks unnatural and triggers suspicion. Most experienced anglers report a noticeable drop in bites when switching from 20 lb to 30 lb fluorocarbon leader, and the difference between 40 lb and 20 lb can be the difference between a full cooler and a skunking.",
      },
      {
        q: "What is the legal size for mangrove snapper?",
        a: "In Florida state waters, mangrove snapper must be at least 10 inches total length, with a bag limit that is part of the aggregate snapper bag limit of 10 fish per angler per day. Federal waters have different rules, and other Gulf and Atlantic states set their own size and bag limits. Always check current state and federal regulations before keeping any fish.",
      },
      {
        q: "Do mangrove snapper fight well?",
        a: "For their size, mangrove snapper are excellent fighters. They hit hard and make an immediate powerful run for structure, which means the angler must apply maximum pressure in the first few seconds to turn the fish away from the pilings. On light tackle with 10 to 15 lb line, even a two pound mangrove snapper will give a spirited battle that many anglers find more fun than catching larger but less aggressive species.",
      },
    ],
  },
  {
    slug: "black-drum",
    name: "Black Drum",
    scientificName: "Pogonias cromis",
    description:
      "Black drum are the larger, broader cousin of the redfish and one of the most reliable bottom-fishing targets for pier anglers along the Southeast and Gulf coasts. Smaller black drum, often called puppy drum, school around pier pilings, jetties, and bridge abutments year-round throughout their range, offering steady light-tackle action on natural baits. The real excitement arrives in the spring when enormous adult black drum, ranging from 40 to over 80 pounds, push into coastal waters for their annual spawning run. These trophy fish stage around passes, inlets, and the deeper ends of piers during March, April, and May, and anglers who target them with heavy bottom rigs baited with whole or half blue crabs have a genuine shot at a fish of a lifetime. Black drum do not run as hard as redfish or cobia, but a big one is simply an immovable weight that requires patient heavy pressure to bring to the pier. The fight is more like a tug-of-war than a race. Black drum use their cobblestone throat plates to crush crabs, clams, and other shellfish, which is why bottom-presented crab and shellfish baits outfish almost everything else. While the smaller puppy drum up to about 15 pounds are excellent eating with firm, sweet, white meat, larger adult fish often carry parasitic spaghetti worms in their flesh and are typically released as breeders rather than kept. Strict slot limits in most states reinforce this catch-and-release ethic for trophy fish.",
    bestStates: ["FL", "LA", "TX", "VA"],
    bestSeason: "Spring (trophies), Year-round (smaller)",
    peakMonths: "March-May for trophies",
    bestBait: ["Whole blue crab", "Half blue crab", "Clam", "Cut shrimp", "Dead shrimp"],
    bestTackle: "Medium-heavy bottom rod, 30-50 lb braid, 40-50 lb fluorocarbon leader, 5/0-8/0 circle hooks. Heavy pyramid sinker for surf and inlet current.",
    averageSize: "5-30 lbs (trophies 40-80 lbs)",
    recordSize: "113 lbs 1 oz (Lewes, DE, 1975 IGFA)",
    tips: [
      "Use half a blue crab with the legs and top shell removed during the spring trophy run — the scent trail from a crushed crab draws in the biggest fish.",
      "Position a heavy pyramid sinker on a fish-finder rig so the drum can pick up the bait without feeling lead, then load up on the circle hook.",
      "Fish the deeper ends of the pier during the spring run where adults stage near passes and channels before moving in to spawn.",
      "Keep the drag moderate — big black drum do not make blistering runs but they will pull steadily, and locked drags lose fish to broken leaders.",
      "Release any drum over 15 pounds for the table because larger fish commonly host spaghetti worms in the flesh and lose quality as they age.",
    ],
    faq: [
      {
        q: "What size black drum can I keep?",
        a: "Regulations vary by state. Florida allows a slot of 14 to 24 inches with one fish per day allowed to exceed the slot, while Texas uses a 14 to 30 inch slot. Louisiana, Virginia, and other states set their own rules. The common theme is that the best eating fish are in the 14 to 24 inch range, and very large adult fish are typically released as important breeding stock.",
      },
      {
        q: "What is the best bait for black drum?",
        a: "Whole or half blue crab is widely considered the single best bait for trophy black drum during the spring run. Clams, shrimp, and cut bait also produce, especially for smaller fish. The key is that black drum locate food by smell and use their crushing throat plates on hard-shelled prey, so a bait with strong scent and real texture outperforms flashy artificials almost every time.",
      },
      {
        q: "Are there worms in black drum?",
        a: "Larger black drum, generally those over 15 pounds, commonly carry parasitic spaghetti worms in their flesh. These worms are harmless to humans once the fish is cooked thoroughly, but they are visually unappealing and affect meat quality. Because of this, most experienced anglers release bigger fish and keep only smaller puppy drum up to about 15 pounds for the table.",
      },
    ],
  },
  {
    slug: "whiting",
    name: "Southern Kingfish (Whiting)",
    scientificName: "Menticirrhus americanus",
    description:
      "Whiting, known in various regions as kingfish, sea mullet, Virginia mullet, or Southern kingfish, are one of the most ubiquitous and angler-friendly fish along the entire Atlantic coast. Small members of the drum family, whiting rarely exceed two pounds but make up for their modest size with willingness to bite, ease of catching, and excellent table qualities. For families, kids, and beginning anglers, there is simply no better introduction to pier fishing than a whiting trip on a warm summer morning. These fish cruise the surf line and the wash just off the ends of piers, feeding on sand fleas, shrimp, bloodworms, and small crustaceans that they root out of the sand with their underslung mouths. A simple bottom rig with two small hooks baited with fresh shrimp or Fishbites will produce steady action in season, and the catch rates are high enough that patience is rarely tested. Whiting are available throughout the warm months from Virginia southward and can be caught in meaningful numbers along the entire Southeast and Gulf coasts. They are a schooling species, so when one is caught others are usually nearby and a dialed-in spot often produces fish for hours. Whiting also make outstanding table fare with delicate, mild, flaky white meat that fries exceptionally well and appeals to even picky eaters. A morning limit of whiting is the foundation of many classic Southern pier fish fries, and their availability, reliability, and deliciousness keep them at the top of the pier fishing list.",
    bestStates: ["FL", "NC", "SC", "VA", "GA"],
    bestSeason: "Late Spring through Early Fall",
    peakMonths: "May-September",
    bestBait: ["Fresh shrimp", "Fishbites (shrimp flavor)", "Cut squid", "Sand fleas", "Bloodworms"],
    bestTackle: "Light spinning rod, 10-15 lb line, two-hook bottom rig with size 4-2 circle hooks, 1-2 oz pyramid sinker.",
    averageSize: "10-14 inches, 1-2 lbs",
    recordSize: "4 lbs 13 oz (Virginia Beach, VA, 2008 IGFA)",
    tips: [
      "Use small circle hooks in the size 4 to 2 range with just enough bait to cover the hook — whiting have small mouths and oversized baits reduce hookups.",
      "Fish the trough right along the sides of the pier, especially at the sand bar break where whiting cruise the wash rooting for sand fleas.",
      "Combine a small piece of fresh shrimp with a strip of Fishbites on the same hook for a scent profile that both triggers bites and stays on through multiple fish.",
      "Fish the first two hours of incoming tide during the summer months when whiting move in with the wash and feed most actively.",
      "Keep a second rod ready with a bigger bait because larger predators like pompano and small redfish often cruise the same zones and will take a whiting bait readily.",
    ],
    faq: [
      {
        q: "Are whiting a good fish for beginners?",
        a: "Whiting are one of the absolute best species for beginning pier anglers, especially kids. They bite eagerly on simple baits, require no specialized tackle, and are found within easy casting distance of most piers. Catch rates during peak summer months are high enough that even a first-time angler is likely to hook several fish in a session, which keeps interest high and builds confidence.",
      },
      {
        q: "How do you clean a whiting?",
        a: "Whiting are typically scaled, gutted, and either pan-dressed whole or filleted. To fillet, lay the fish flat, cut behind the gills down to the spine, then run the knife along the backbone to the tail. Flip and repeat on the other side, then skin the fillets. The meat is thin and cooks quickly, making whiting an excellent choice for a simple pan-fry or fish fry.",
      },
      {
        q: "What is the difference between whiting, kingfish, and sea mullet?",
        a: "These names are often used interchangeably for the same fish, though technically there are three closely related species — Southern kingfish, Gulf kingfish, and Northern kingfish — each with slightly different ranges and markings. Anglers in North Carolina and Virginia often call them sea mullet, while anglers farther south call them whiting or kingfish. All three species are caught the same way, eat the same baits, and taste essentially identical.",
      },
    ],
  },
  {
    slug: "croaker",
    name: "Atlantic Croaker",
    scientificName: "Micropogonias undulatus",
    description:
      "Atlantic croaker are small, eager, widely distributed bottom fish that deliver some of the most reliable pier action available from New York through Texas, and they earn their name from the distinctive croaking sound they produce using specialized muscles vibrating against their swim bladder. That croak is often audible right through the deck of the pier when a fish hits the boards. Croaker are a fundamental species for beginning and casual pier anglers because they bite willingly on almost any natural bait, school in large numbers on sandy bottoms near structure, and can be caught on the simplest of bottom rigs. Their range from the mid-Atlantic through the Gulf of Mexico means nearly every pier angler on the East and Gulf coasts has an opportunity to catch them in season. Croaker feed on small crustaceans, worms, and bits of dead bait that they root out of the sand with downturned mouths, which is why bloodworms, fresh shrimp, cut squid, and Fishbites rank at the top of the effective bait list. Beyond being a fun target in their own right, croaker are among the most prized cut bait species for larger predator fish — cut croaker is a staple bait for redfish and striped bass anglers up and down the coast because the oily flesh and bold scent call in bigger fish effectively. The meat is mild, white, and reasonably flaky when eaten fresh, though smaller fish are often used for bait while larger croaker are kept for the pan.",
    bestStates: ["NC", "VA", "MD", "NJ", "FL"],
    bestSeason: "Late Spring through Early Fall",
    peakMonths: "May-August",
    bestBait: ["Bloodworms", "Fresh shrimp", "Cut squid", "Fishbites", "Sand fleas"],
    bestTackle: "Light spinning rod, 10 lb mono or braid, two-hook bottom rig with size 4-6 circle hooks.",
    averageSize: "10-14 inches, 1 lb",
    recordSize: "8 lbs 11 oz (Chesapeake Bay, VA, 2007 IGFA)",
    tips: [
      "Use bloodworms or Fishbites bloodworm formula when available — croaker respond to that scent more consistently than to any other bait.",
      "Fish a simple two-hook bottom rig with size 4 to 6 circle hooks and small pyramid sinkers on a light rod to feel the subtle bite clearly.",
      "Move along the pier and test different spots because croaker school in specific sandy holes and depressions — one rail can be slow while the next is loaded.",
      "Keep a few larger croaker alive in a bucket or pin one to a big hook for cut bait when a bigger redfish or striped bass moves through.",
      "Fish the incoming tide in late afternoon during the summer months when croaker feed most aggressively in the wash along the pier sides.",
    ],
    faq: [
      {
        q: "Why do croaker croak?",
        a: "Atlantic croaker produce their characteristic croaking sound using specialized muscles that vibrate against the swim bladder, which acts as a resonating chamber. Both males and females croak, but males call more frequently during the spawning season when the sound is used as a mating signal. The noise is loud enough to be heard through the pier deck when a fish is landed, and it is the feature that gives croaker their common name.",
      },
      {
        q: "What is the best bait for croaker?",
        a: "Bloodworms are the classic croaker bait and consistently outperform other offerings, though they can be expensive. Fishbites bloodworm-flavored strips are an excellent synthetic alternative that lasts longer on the hook. Fresh shrimp and cut squid also produce well. The key is using baits with strong scent that appeal to a fish that feeds primarily by smell and taste on the bottom.",
      },
      {
        q: "How do you tell a croaker apart from a whiting?",
        a: "Croaker have shorter, stockier bodies with wavy dark bars along the sides and small dark spots, while whiting have a more elongated silver body with no prominent spots or bars. Croaker also have small barbels under the chin for rooting in the sand, whereas whiting have a single short chin barbel. The easiest tell is the sound — a croaker will literally croak when handled, while a whiting is silent.",
      },
    ],
  },
];

export function getSpeciesBySlug(slug: string): Species | undefined {
  return species.find((s) => s.slug === slug);
}
