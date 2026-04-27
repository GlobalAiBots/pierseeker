import Link from "next/link";
import type { ReactNode } from "react";

export interface FaqItem { q: string; a: string; }

export interface CategoryEditorial {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: ReactNode;       // Article header content (paragraphs only — H1 rendered by page.tsx)
  body: ReactNode;        // Article continuation (all H2 sections + paragraphs)
  faqItems: FaqItem[];
  continueReading: { slug: string; title: string; blurb: string }[];
}

const h2Class = "font-[Cabin] text-2xl font-bold text-charcoal mt-10 mb-3";
const proseClass = "text-gray-700 leading-relaxed space-y-5";
const linkClass = "text-ocean hover:underline font-semibold";
const ulClass = "list-disc pl-6 space-y-2 text-gray-700 leading-relaxed";

// ===========================================================================
// SALTWATER (24,410 piers across 22 states — biggest category)
// ===========================================================================
const saltwater: CategoryEditorial = {
  metaTitle: "Saltwater Fishing Piers: Complete Guide & U.S. Directory | PierSeeker",
  metaDescription: "Complete guide to saltwater fishing piers across coastal America — target species, gear, tides, regulations, and a directory of 24,000+ piers in 22 states.",
  h1: "Saltwater Fishing Piers: Where to Fish the American Coast",
  intro: (
    <>
      <p>Saltwater piers are how most American anglers first touch the ocean with a rod in their hand. They put you over species and structure that would otherwise require a boat, a guide, or a long surf cast — and they do it with parking, a railing to lean on, and usually a place to clean your fish. From Atlantic concrete giants like Jennette&apos;s in Nags Head to Pacific working wharves in San Francisco Bay to the Gulf Coast pier culture stretching from Galveston to Pensacola, these are the structures where pier fishing as a sport actually happens.</p>
      <p>Saltwater pier fishing is its own discipline. The gear is different (corrosion takes everything), the species rotate by season more aggressively than freshwater, and the same rigs that work on a flounder in spring become useless on a Spanish mackerel run in July. Tide timing matters more than time of day. Long surf rods earn their keep on the second sandbar but get in the way at a piling-tight bay pier. The learning curve isn&apos;t steep, but the wrong setup can mean a long day of watching other people catch fish.</p>
      <p>Below is PierSeeker&apos;s directory of saltwater fishing piers organized by state — over 24,000 listings across 22 coastal states. The complete guide continues below the directory with everything you need to fish them well: target species and the rigs that catch them, how to read tides, gear that actually survives saltwater, structure-reading tactics, regulations and licensing, etiquette, and how to find the productive piers near you.</p>
    </>
  ),
  body: (
    <>
      <h2 className={h2Class}>What Makes Saltwater Piers Different</h2>
      <p>Saltwater piers extend over water that is constantly in motion. Tides drive a 6-12 hour cycle that determines what species are accessible, where they&apos;re holding, and how aggressively they feed. Unlike freshwater bodies where the water sits still and fish patterns are slow to shift, a saltwater pier can fish completely differently at 6am than it does at 10am, just because the tide turned.</p>
      <p>The structure itself is built differently too. Atlantic and Gulf piers are typically concrete or treated heavy timber to survive storm surge and the relentless chemical assault of salt spray. Pacific piers lean toward concrete because of the heavier surf. Older wooden piers exist but are declining — once a hurricane takes one out, they&apos;re usually rebuilt in concrete or not rebuilt at all.</p>
      <p>The species mix is what drives most anglers to saltwater piers in the first place. A single pier in mid-Atlantic waters might produce flounder in spring, Spanish mackerel and bluefish in summer, citation-class red drum in fall, and sheepshead through winter — four entirely different fisheries from the same railing across one calendar year. That seasonal rotation is the saltwater pier promise: there is almost always something biting, if you know what season belongs to what species.</p>

      <h2 className={h2Class}>Target Species and What They Want</h2>
      <p>Saltwater pier species fall into rough geographic bands that loosely follow ocean temperature.</p>
      <p><strong>Mid-Atlantic and Northeast piers</strong> (NJ, DE, MD, VA, NC, NY, MA, RI) center on striped bass, fluke (summer flounder), bluefish, weakfish, tautog (blackfish), Atlantic mackerel, scup (porgies), and increasingly black sea bass as the species expands northward. Striped bass move in the spring, hold through summer at deeper-water piers, and run hard again in the fall — a chunk of bunker on a bottom rig is the basic formula. Fluke want squid or live minnow drifted slowly across the bottom on an incoming tide.</p>
      <p><strong>Southeast and Gulf piers</strong> (NC, SC, GA, FL, AL, MS, LA, TX) shift the species mix to red drum, speckled (spotted sea) trout, sheepshead, Spanish mackerel, king mackerel, pompano, whiting, and during summer, the chance at tarpon at the right piers. Sheepshead pile up around pilings in winter and want fiddler crabs or pieces of shrimp tight to structure. Spanish mackerel chase glass minnows past the end of the pier in summer and want fast-moving spoons or Gotcha plugs. Pompano work the surf zone close to shore on incoming tides — sand fleas or shrimp on a pompano rig is the standard.</p>
      <p><strong>Pacific piers</strong> (CA, OR, WA, AK, HI) target lingcod, rockfish, surfperch, jacksmelt, leopard shark, bat ray, halibut, and in San Francisco Bay specifically, white sturgeon and striped bass. Northern California adds Dungeness crab to the mix during winter season. Pier construction tends to be heavier and the surf bigger, so tackle generally runs heavier than equivalent Atlantic setups.</p>
      <p>Across all coasts, the universal rules apply: match the bait to local forage, fish the tide rather than the clock, and keep tackle light enough to feel a bite but stout enough to lift a fish over the railing.</p>

      <h2 className={h2Class}>Best Times to Fish Saltwater Piers</h2>
      <p>Tide cycle matters more than any other variable. The two hours on either side of a tide change &mdash; both incoming and outgoing &mdash; concentrate baitfish movement and trigger feeding windows. A slack tide kills most pier action. The rule of thumb most pier regulars follow: fish two hours before high to two hours after, and again the matching window around low tide. Tide tables for any pier are free at NOAA&apos;s tides and currents site, and apps like Tide Charts Free or Fishing Points show them on your phone.</p>
      <p>Time of day matters secondarily. Dawn and dusk produce active fish across most species &mdash; the &quot;golden hours&quot; are real. Midday fishing is generally slower except for sheepshead and bottom-feeding species that don&apos;t care about light. Night fishing on lit piers is its own discipline and often the most productive time for trout, redfish, and predatory species attracted to the light line. <Link href="/blog/night-pier-fishing-tips" className={linkClass}>Our night pier fishing guide</Link> covers technique and gear specifics.</p>
      <p>Seasonal patterns are species-specific and region-specific. The general rule: spring and fall are peak across most coasts, summer brings warm-water species but slower bites in midday heat, and winter narrows the species list but rewards anglers who target sheepshead, tautog, or whiting depending on coast. <Link href="/blog/best-pier-fishing-by-season" className={linkClass}>Our seasonal guide</Link> breaks the calendar down by region and species.</p>

      <h2 className={h2Class}>Essential Gear for Saltwater Pier Fishing</h2>
      <p>Saltwater destroys equipment that wasn&apos;t built for it. Freshwater bass tackle works for one trip and corrodes within weeks. The investment in proper saltwater gear pays back the first time you don&apos;t have a reel seize mid-fight.</p>
      <p>Most saltwater pier anglers carry two rod setups: a medium-heavy 7&apos; to 9&apos; spinning combo for general bottom fishing and a longer 9&apos; to 11&apos; surf-style rod for casting beyond the pier shadow when targeting bigger fish. Reels should be saltwater-rated (typically 3000-6000 size for the lighter setup, 6000-10000 for the heavier). Look for sealed bearings and corrosion-resistant components &mdash; Penn Battle, Shimano Saragosa, and Daiwa BG are reliable workhorses across price points. <Link href="/blog/pier-fishing-rod-recommendations" className={linkClass}>Our rod recommendations guide</Link> goes deeper on specifics.</p>
      <p>Line: braided main line (20-30 lb test for most pier work) with a fluorocarbon leader (15-30 lb depending on target species). Braid casts further, has zero stretch (better for hooksets at distance), and lets you feel subtle bites that monofilament hides. The fluoro leader is invisible underwater and resists abrasion against pilings.</p>
      <p>Terminal tackle: a basic kit covers 90% of pier scenarios &mdash; pyramid sinkers (1-4 oz), bank sinkers (1-2 oz), circle hooks (1/0 to 6/0), kahle hooks, swivels, beads, and a couple of pre-tied bottom rigs (high-low rigs and pompano rigs). <Link href="/blog/pier-fishing-rigs-setup" className={linkClass}>Our rig setup guide</Link> walks through which rig to use when.</p>
      <p>Pier-specific items most beginners forget: a pier net or pier gaff (you cannot lift a 30-inch redfish 15 feet straight up by line alone &mdash; you need to net or gaff at the railing), a 5-gallon bucket with a rope (for retrieving water to clean hands or hauling small bait fish), a rag, a cooler with ice, sunscreen, and a hat. <Link href="/blog/what-to-bring-pier-fishing" className={linkClass}>Our complete packing list</Link> covers everything.</p>

      <h2 className={h2Class}>Reading Pier Structure</h2>
      <p>Where you stand on a pier matters. The end of the pier &mdash; the &quot;T-head&quot; on most designs &mdash; gets the deepest water and is where pelagic species like Spanish mackerel and king mackerel cruise. But it is also the most crowded and not always the most productive. The mid-pier and shoreward sections often produce more fish for species that hold tight to structure or in the surf zone.</p>
      <p>Pilings are the secret of pier fishing. Sheepshead, mangrove snapper, tautog, and various small structure species hold within inches of the pilings, often within reach of a vertical drop straight down. Casting away from pilings is what most beginners do; experienced pier anglers fish straight down past the pilings with light tackle and short drops.</p>
      <p>Current matters. As tide moves, water flows past the pier and creates eddies behind pilings where baitfish congregate. Fishing the up-current side of pilings during incoming tide and the down-current side during outgoing puts your bait where predators are looking. The shadow line of the pier (where pier shade meets sun) is also a productive ambush point during midday.</p>
      <p>Depth changes affect everything. A pier on a steep beach might have 20 feet of water 50 feet from shore; one on a gradually shelving beach might still be in 8 feet at the end. Knowing the depth profile of a pier tells you which species to expect and where to position. Most pier regulars will share this information if asked respectfully.</p>

      <h2 className={h2Class}>Regulations and Licensing</h2>
      <p>Saltwater fishing license requirements vary dramatically by state. Some states (notably Florida) require a saltwater fishing license for pier fishing unless you&apos;re fishing from a pier specifically licensed under a county or municipal pier license that covers anglers fishing from it. Many Atlantic coast states (NJ, NY, NC, SC) require a free saltwater registry registration even when no fee is charged. California and Oregon require state fishing licenses. Texas requires a saltwater stamp added to a basic fishing license.</p>
      <p>Federal saltwater fishing within state waters (typically 3 nautical miles offshore) is governed by state agencies. Beyond state waters, federal regulations (NOAA Fisheries) apply &mdash; this rarely affects pier anglers since piers don&apos;t reach federal waters, but boat anglers leaving from pier launches need to know.</p>
      <p>Size limits, bag limits, and seasonal closures change frequently and vary by species and state. Red drum, snook, striped bass, and several other species are tightly regulated with slot limits (only fish within a certain length range can be kept). Stripers in many Atlantic states require specific tagging and reporting. Fluke regulations change annually based on stock assessments.</p>
      <p>The single most important habit: check the current regulations on your state&apos;s wildlife or marine fisheries agency website before each trip, especially in spring when annual updates take effect. <Link href="/blog/pier-fishing-license-requirements-by-state" className={linkClass}>Our state-by-state license guide</Link> summarizes the basics for every coastal state.</p>

      <h2 className={h2Class}>Pier Etiquette and Safety</h2>
      <p>A crowded pier works because everyone follows informal rules. Cast straight out from your spot, not diagonally across someone else&apos;s line. Don&apos;t walk over rods on the pier deck &mdash; step around. If a fish runs toward another angler&apos;s line, call out so they can clear it; reciprocate when others have hookups. Keep buckets and tackle boxes pulled in from the walkway.</p>
      <p>Most piers prohibit cleaning fish on the pier itself &mdash; check for cleaning stations on the deck or shore-side. Trash gets bagged and carried off; never throw bait scraps or dead fish off the pier (it draws sharks and seals around swimmers).</p>
      <p>Children are welcome on most piers but need close supervision. Casting weights and hooks fly faster than parents expect. Kids should wear sunglasses or eye protection on busy piers.</p>
      <p>Weather awareness matters. Lightning is the leading cause of pier deaths &mdash; if thunder is audible, leave the pier immediately. The pier is the highest object on the water and acts as a lightning rod. Hypothermia from falling into cold water is the second concern, especially on Pacific or Northeast winter piers. Wet pier surfaces are slip hazards; rubber-soled shoes save ankles. <Link href="/blog/fishing-pier-safety-tips" className={linkClass}>Our pier safety guide</Link> covers the rest.</p>

      <h2 className={h2Class}>How to Find Productive Saltwater Piers Near You</h2>
      <p>Browse the directory above by state to see all saltwater piers in your area with locations, amenities, and basic info. Beyond the directory, talk to local bait shops &mdash; they know which piers are producing this week and which ones the regulars have given up on. State wildlife agencies post fishing reports for many regions, especially during peak seasons. Social media groups (Facebook, Reddit r/saltwaterfishing, regional pier-specific groups) carry honest reports from anglers who fished the day before. Apps like FishBrain crowd-source catch reports to specific piers.</p>
      <p>For deeper editorial coverage, our <Link href="/blog/best-fishing-piers-in-america" className={linkClass}>best piers in America roundup</Link> highlights individual standout piers across the country, and our <Link href="/best-of/best-fishing-piers-in-florida" className={linkClass}>state-specific best-of guides</Link> dive deeper into top destinations by region.</p>
    </>
  ),
  faqItems: [
    { q: "Do I need a fishing license to fish from a saltwater pier?", a: "It depends on the state. Florida requires a saltwater fishing license unless the pier carries a municipal license that covers anglers. Most Atlantic states require either a license or free saltwater registry registration. California, Oregon, and Texas require state fishing licenses (Texas adds a saltwater stamp). Always check your state's wildlife or marine fisheries agency website before fishing." },
    { q: "What's the best time of year to fish saltwater piers?", a: "Spring and fall are peak across most coasts. Spring brings the start of the striped bass run on the Atlantic, fluke arriving in mid-Atlantic waters, and Spanish mackerel showing up in the Southeast. Fall brings citation-class red drum, the second striper run, and bull redfish in the Gulf. Summer is productive for warm-water species but bites slow during midday heat. Winter narrows the list but sheepshead, tautog, and whiting remain reliable depending on coast." },
    { q: "Can I keep what I catch from a pier?", a: "Yes, subject to size and bag limits set by your state. Many species have slot limits (only fish within a specific length range can be kept) — red drum, snook, striped bass, and others vary by state. Some species are catch-and-release only in certain seasons. Always measure before keeping and check current regulations." },
    { q: "What's the most important piece of saltwater pier gear beyond a rod and reel?", a: "A pier net or pier gaff. You cannot lift a 30-inch fish 15 feet straight up by line alone — the line breaks or the hook pulls. Pier nets attach to a rope and lower to water level for landing. Pier gaffs work for larger fish but are illegal for catch-and-release species. Without one, you'll lose most quality fish at the railing." },
    { q: "How does tide affect pier fishing?", a: "Tide is the single most important variable in saltwater pier fishing. The two-hour windows on either side of a tide change (both incoming and outgoing) concentrate baitfish movement and trigger feeding. Slack tide (when the tide is neither moving in nor out) typically kills the bite. Check tide tables before driving to a pier — fishing the wrong tide can mean an empty session at an otherwise productive spot." },
  ],
  continueReading: [
    { slug: "best-pier-fishing-by-season", title: "Best Pier Fishing by Season", blurb: "What's biting when, by region and species." },
    { slug: "pier-fishing-rigs-setup", title: "Pier Fishing Rigs & Setup", blurb: "High-low, pompano, fish-finder, drop shot — when to use which." },
    { slug: "pier-fishing-tide-charts", title: "Pier Fishing Tide Charts Guide", blurb: "How to read tides and time your trips." },
    { slug: "pier-fishing-license-requirements-by-state", title: "License Requirements by State", blurb: "Saltwater and freshwater license rules across all 50 states." },
  ],
};

// ===========================================================================
// FRESHWATER (10,887 piers across 26 states)
// ===========================================================================
const freshwater: CategoryEditorial = {
  metaTitle: "Freshwater Fishing Piers: Lakes, Rivers & Reservoirs | PierSeeker",
  metaDescription: "Complete guide to freshwater fishing piers across America — bass, walleye, crappie, catfish — gear, seasons, regulations, and 10,000+ pier directory in 26 states.",
  h1: "Freshwater Fishing Piers: Lakes, Rivers, and Reservoirs Across the U.S.",
  intro: (
    <>
      <p>Freshwater piers are how millions of Americans first learned to fish &mdash; a state park dock, a wooden pier extending out over a reservoir, the fishing platform built into a county boat launch. They are democratic in a way saltwater fishing rarely is: most are free, most allow simple gear, most produce some kind of fish on most days. They are how families teach kids, how cane-pole traditions live on, and how serious anglers without boats target species that would otherwise require a vessel.</p>
      <p>Freshwater pier fishing differs from saltwater in nearly every meaningful way. The water sits still, so feeding patterns shift more slowly and predictably. Tides don&apos;t exist; instead, water levels fluctuate based on rainfall, dam releases, and seasonal drawdowns. The species are warm-water and cold-water rather than coastal &mdash; bass, panfish, catfish, walleye, trout, crappie, perch, pike, pickerel. Tackle is generally lighter. Fish run smaller on average but make up for it in volume and accessibility.</p>
      <p>Below is PierSeeker&apos;s directory of freshwater fishing piers organized by state &mdash; over 10,000 listings across 26 states with significant freshwater fisheries. The complete guide continues below the directory with everything you need to know: which species to expect by region, the gear that works, how to read seasonal water-level patterns, structure-reading tactics, regulations, etiquette, and how to find the productive piers near you.</p>
    </>
  ),
  body: (
    <>
      <h2 className={h2Class}>What Makes Freshwater Piers Different</h2>
      <p>Freshwater piers extend over water that is biologically and chemically distinct from saltwater. No tide, less aggressive corrosion, more stable temperature gradients, and species that have spent millions of years adapting to specific lake or river environments. The fishing pace is generally slower and more deliberate &mdash; you can fish a freshwater pier for an hour without checking your bait and not be doing anything wrong.</p>
      <p>Pier construction is lighter than saltwater equivalents. Treated wood, composite decking, and aluminum-frame floating docks dominate freshwater pier design. Many freshwater piers are seasonal &mdash; pulled out before ice-up in the northern tier, reinstalled in spring &mdash; while saltwater piers are permanent fixtures that survive whatever weather throws at them.</p>
      <p>The species mix follows water type and region. Reservoirs hold stocked or naturally reproducing largemouth bass, crappie, bluegill, channel catfish, and increasingly striped bass and hybrid stripers in the South. Natural lakes in the upper Midwest and Northeast carry walleye, smallmouth bass, northern pike, perch, and lake trout in deeper, colder bodies. River piers (where they exist) target smallmouth, catfish, and seasonal runs of shad, white bass, and salmonids in some regions.</p>

      <h2 className={h2Class}>Target Species and What They Want</h2>
      <p>Freshwater pier species fall into rough groups by water type and temperature.</p>
      <p><strong>Warm-water species</strong> (bass, panfish, catfish): largemouth bass hold near pier pilings and overhanging structure during the warmer months &mdash; soft plastic worms, jig-and-pig combos, or live shiners on a slip-bobber rig produce. Bluegill and other panfish school under pier shadows and want small live worms or wax worms on light line under a tiny bobber. Channel catfish work the deeper water near piers at night &mdash; chicken liver, cut shad, or commercial dip baits on a sliding sinker rig fish them effectively.</p>
      <p><strong>Cool-water species</strong> (walleye, perch, pike): walleye hold near piers in the early morning and evening twilight, often returning to deeper water during the day. Live minnows on a jig head or a slip-sinker rig fish them across most pier scenarios. Yellow perch school heavily under piers during cooler months &mdash; small jigs tipped with minnows or perch eyes are the standard. Northern pike ambush from pier shadows; large spoons or live suckers under bobbers work in northern lakes.</p>
      <p><strong>Cold-water species</strong> (trout, salmonids): rainbow, brown, and brook trout cruise off piers in deeper, cooler lakes &mdash; PowerBait on a slip-sinker rig works for stocked fish; small spinners or spoons cover wild fish. Lake trout require deeper water than most piers reach but show up at piers with steep drop-offs.</p>
      <p>Crappie deserve their own paragraph &mdash; they are the most pier-friendly fish in freshwater. Crappie school in massive numbers near pier pilings and submerged brush, especially in spring when they move shallow to spawn. Small jigs (1/16 to 1/32 oz) tipped with minnows or fished with curly-tail grubs catch them in numbers that beginner anglers find addicting.</p>

      <h2 className={h2Class}>Best Times to Fish Freshwater Piers</h2>
      <p>Without tides, freshwater pier fishing follows different cycles. The biggest variables are time of day, water temperature, and seasonal patterns. Dawn and dusk produce active fish across most species &mdash; the &quot;solunar&quot; theory has its skeptics but the basic pattern of low-light feeding windows is real and observable. Midday in summer slows down for surface-feeding species but bottom species like catfish and carp keep eating.</p>
      <p>Spring is peak across most of the country. As water temperatures climb from the 40s into the 60s, bass, crappie, and panfish move shallow to spawn &mdash; piers extending into 4-8 feet of water put you directly over the action. Fall brings a second peak as fish feed heavily before winter; bass, walleye, and pike all bulk up during cooler water.</p>
      <p>Summer requires more strategy. Surface temperatures climb above 80 degrees in many lakes, pushing fish deeper and slower. Early morning and night fishing become productive windows. Cloudy and rainy days extend the active feeding period throughout the day.</p>
      <p>Winter pier fishing is regional. Northern states freeze over and pier fishing pauses entirely (ice fishing replaces it). Southern states maintain pier fishing through winter for crappie, bass, and catfish, though the bite slows. <Link href="/blog/best-pier-fishing-by-season" className={linkClass}>Our seasonal guide</Link> details patterns by species and region.</p>

      <h2 className={h2Class}>Essential Gear for Freshwater Pier Fishing</h2>
      <p>Freshwater pier gear is generally lighter, simpler, and cheaper than saltwater equivalents. A medium-action 6&apos; to 7&apos; spinning combo handles 90% of pier scenarios &mdash; everything from bluegill to mid-size bass. Reels in the 1000-3000 size range are sufficient. Most freshwater piers don&apos;t require the longer rods that saltwater pier fishing demands.</p>
      <p>Line: monofilament (6-12 lb test) is the standard freshwater pier line. It&apos;s cheap, forgiving, has some stretch (which absorbs hooksets and reduces pulled hooks on light biters), and ties knots reliably. Braid is overkill for most freshwater pier fishing; fluorocarbon is occasionally useful as a leader for ultra-clear water but not essential.</p>
      <p>Terminal tackle: a small box covers most needs &mdash; size 6-2 hooks, split shot weights (BB to size 5), bobbers (small slip floats and pencil floats), a few jig heads (1/16 to 1/4 oz), basic lures (curly-tail grubs, small soft plastics, in-line spinners). <Link href="/blog/pier-fishing-rigs-setup" className={linkClass}>Our rig guide</Link> covers the standard freshwater pier setups.</p>
      <p>Bait: live worms (red worms or nightcrawlers) catch nearly everything that swims in freshwater. Live minnows are essential for crappie, walleye, and bass. Wax worms target panfish. PowerBait works for stocked trout. A mix of options in a small cooler covers any pier session.</p>
      <p>Pier-specific items: a small landing net (most freshwater pier fish are small enough to lift but a net helps), a stringer or small cooler with ice, a tackle box that fits in a backpack, sunscreen, and a folding chair if you plan to fish for hours. Freshwater piers are usually quieter and less crowded than saltwater equivalents, so comfort items matter more.</p>

      <h2 className={h2Class}>Reading Pier Structure</h2>
      <p>Freshwater pier structure-reading is about depth changes, vegetation, and shadows. The end of the pier usually sits over the deepest water, which is where larger predators (bass, walleye, pike) hold during the heat of the day. The shoreward end is shallower and warmer, which attracts panfish, smaller bass, and minnows that become bait for the bigger fish.</p>
      <p>Pilings collect biological cover &mdash; algae, attached invertebrates, baitfish &mdash; and predators relate to that cover. Casting parallel to the pier lets your bait or lure pass close to multiple pilings on a single retrieve. Vertical fishing straight down past pilings catches crappie and panfish in numbers that horizontal casting often misses.</p>
      <p>Shadow lines matter. The shadow of the pier creates a defined line where bass and walleye ambush passing baitfish. Casting your lure or bait into the shadow and retrieving it across the line into the sun (or vice versa) triggers reaction strikes from fish holding in the shade.</p>
      <p>Submerged structure beyond the pier &mdash; brush piles, weed lines, drop-offs &mdash; concentrates fish more than pilings alone. Many state agencies sink artificial structure (Christmas trees, brush piles, concrete reefs) near public fishing piers specifically to improve fishing. Asking the local wildlife agency for fish-attractor maps is one of the most underused freshwater pier tactics.</p>

      <h2 className={h2Class}>Regulations and Licensing</h2>
      <p>A freshwater fishing license is required in nearly every state for any angler over a certain age (typically 16, sometimes 12 or 18 depending on state). Costs range from $10 to $40 for residents, more for non-residents. Some states offer free fishing days (typically a weekend in summer or the National Fishing and Boating Week) when licenses are waived for everyone. Licenses are typically purchased online through the state wildlife agency or at sporting goods stores.</p>
      <p>Bag limits and size limits vary by species and water body. Stocked trout waters often have specific creel limits. Bass tournaments have catch-and-release rules that practical anglers follow voluntarily. Many lakes have slot limits on bass &mdash; only fish within a specific length range can be kept &mdash; designed to protect spawning-age fish.</p>
      <p>Some piers and access points sit in special-regulation areas. Catch-and-release-only sections, artificial-lure-only zones, and fly-fishing-only stretches all exist on certain rivers. State park piers may have additional rules (no live bait at some piers, for instance). Posted regulations at the pier or trailhead take precedence over general state regulations.</p>
      <p>Federal regulations rarely affect freshwater pier fishing. The exception is piers on tribal land or federally managed waters (Bureau of Reclamation reservoirs, Corps of Engineers lakes, National Park or National Forest waters), which may have additional rules layered on top of state regulations. <Link href="/blog/pier-fishing-license-requirements-by-state" className={linkClass}>Our state-by-state license guide</Link> covers the basics for every state with significant freshwater fisheries.</p>

      <h2 className={h2Class}>Pier Etiquette and Safety</h2>
      <p>Freshwater piers are generally less crowded than saltwater equivalents, but the basic etiquette holds. Cast straight out from your spot, not across other lines. Keep noise reasonable &mdash; freshwater fish spook more easily than saltwater equivalents and pounding feet, dropped tackle boxes, or loud conversation can shut down a bite. Step around other anglers&apos; rods rather than over them.</p>
      <p>Fish cleaning rules vary by pier. Some have built-in cleaning stations; some specifically prohibit cleaning fish on the deck (it draws raccoons and creates a mess). Trash gets carried out &mdash; never leave bait containers, line, or hook packets behind. Fishing line in particular kills wildlife (birds and turtles) when discarded.</p>
      <p>Children fishing freshwater piers have a great experience if they catch something quickly &mdash; a few bluegill on worms keeps a kid engaged longer than two hours waiting for a bass that never bites. Targeting easy species first builds enthusiasm. <Link href="/blog/pier-fishing-with-kids" className={linkClass}>Our kid-friendly pier fishing guide</Link> covers technique and patience strategies.</p>
      <p>Safety on freshwater piers centers on slip hazards (especially algae-coated wood after rain), lightning (leave the pier when thunder is audible), and cold-water immersion in spring and fall. Northern lake piers can be deceptively dangerous in October when water temperatures drop into the 50s &mdash; falling in produces hypothermia symptoms within minutes. <Link href="/blog/fishing-pier-safety-tips" className={linkClass}>Our pier safety guide</Link> covers the rest.</p>

      <h2 className={h2Class}>How to Find Productive Freshwater Piers Near You</h2>
      <p>Browse the directory above by state to see all freshwater piers in your area. Beyond that, state wildlife agencies maintain stocking reports for trout, walleye, and other managed species &mdash; piers near recently stocked waters fish dramatically better for several weeks after stocking. State park websites list pier locations and often include recent fishing reports. Local bait shops carry the same intelligence for warm-water species; a $5 worm purchase and a casual question about &quot;what&apos;s biting&quot; usually produces honest information.</p>
      <p>For deeper editorial coverage, our <Link href="/blog/pier-fishing-beginners" className={linkClass}>beginner&apos;s guide</Link> walks through gear and technique fundamentals, and our <Link href="/blog/best-bait-pier-fishing" className={linkClass}>bait selection guide</Link> details what works on which species across freshwater and saltwater contexts.</p>
    </>
  ),
  faqItems: [
    { q: "Do I need a fishing license to fish from a freshwater pier?", a: "Yes, in nearly every state for anglers over a certain age (typically 16). Resident licenses cost $10-$40 annually depending on state. Free fishing days (typically a weekend in early summer or during National Fishing and Boating Week) waive the license requirement for everyone. Licenses are sold online through state wildlife agencies or at sporting goods stores." },
    { q: "What's the best species to target on freshwater piers as a beginner?", a: "Bluegill and other panfish. They school under piers in massive numbers, eat almost any small live bait (worms, wax worms, crickets), don't require special tackle, and provide steady action that keeps beginners engaged. A 1/2 dozen worms and a basic spinning rod with a bobber rig produces fish on most freshwater piers within minutes." },
    { q: "Can I keep fish I catch from a freshwater pier?", a: "Yes, subject to state bag limits and size limits. Most warm-water species (bass, crappie, bluegill, catfish) have generous limits suitable for keeping a meal's worth. Stocked trout waters have specific creel limits. Some lakes have slot limits on bass — only fish within a specific length range can be kept. Always check state regulations for the specific water body." },
    { q: "How does weather affect freshwater pier fishing?", a: "More than most beginners realize. Cloudy and rainy days extend active feeding windows throughout the day; bright sunny days push fish deeper and reduce surface activity. Falling barometric pressure (before a storm) often triggers feeding frenzies; rising pressure (after a front) typically slows the bite for 24-48 hours. Wind affects shoreline pier fishing — windward shores accumulate baitfish and predators." },
    { q: "What's the difference between fishing a lake pier and a river pier?", a: "Lake piers fish standing water with predictable structure (depth changes, weed lines, drop-offs). Most pier fishing technique applies straightforwardly. River piers add current — fish hold behind structure that breaks the current, casting upstream and letting bait drift down past the pier produces strikes that vertical fishing misses. River species (smallmouth bass, channel catfish, walleye in some rivers) often run differently than their lake cousins." },
  ],
  continueReading: [
    { slug: "pier-fishing-beginners", title: "Pier Fishing for Beginners", blurb: "Gear, technique, and the first 10 trips that build skill." },
    { slug: "best-bait-pier-fishing", title: "Best Bait for Pier Fishing", blurb: "What works on which species across freshwater and saltwater." },
    { slug: "pier-fishing-with-kids", title: "Pier Fishing with Kids", blurb: "Targeting easy species, managing patience, building enthusiasm." },
    { slug: "best-pier-fishing-by-season", title: "Best Pier Fishing by Season", blurb: "Patterns by region, species, and water type across the calendar." },
  ],
};

// ===========================================================================
// PUBLIC PIERS (246 piers, 32 states — smaller but distinct category)
// ===========================================================================
const publicPiers: CategoryEditorial = {
  metaTitle: "Public Fishing Piers: Free Access Across America | PierSeeker",
  metaDescription: "Find public fishing piers across 32 states — free access, no license requirements vary, family-friendly. Complete guide plus directory of 240+ public piers.",
  h1: "Public Fishing Piers: Free Fishing Access Across America",
  intro: (
    <>
      <p>Public fishing piers are pier fishing&apos;s most accessible entry point. They&apos;re built and maintained by state wildlife agencies, county parks departments, municipalities, and the occasional federal land manager &mdash; specifically to give the general public a place to fish without owning a boat, paying for access, or knowing the secret spots only locals share. Most are free. Many waive license requirements (or fall under state programs that license the pier itself, covering anyone fishing from it).</p>
      <p>The democratic nature of public piers is the point. They are where introduce-a-kid programs happen, where people new to fishing can try without buying gear or paying for guides, and where retirees fish daily without making it an expensive hobby. They also produce real fish &mdash; agencies that build public piers usually choose locations specifically because the fishing is reliable.</p>
      <p>Below is PierSeeker&apos;s directory of public fishing piers across 32 states. The complete guide continues below the directory with what to expect at a public pier, who runs them and why, license rules that vary by state, gear and technique that works for the typical public-pier visitor, etiquette in shared spaces, and how to find the most productive public piers in your area.</p>
    </>
  ),
  body: (
    <>
      <h2 className={h2Class}>What Makes Public Piers Different</h2>
      <p>Public piers are funded and maintained by government agencies rather than private operators. That funding model shapes everything about the experience. Public piers tend to be older, sometimes simpler in construction, often built decades ago when public works budgets were larger. They are typically free or charge a nominal fee ($1-$5) covering only basic operating costs. Most don&apos;t have on-site bait shops or tackle rental &mdash; you bring what you need.</p>
      <p>The species mix is the same as the underlying water (saltwater or freshwater depending on location), but the user mix is different. Public piers attract a broader cross-section of anglers &mdash; first-timers, families, retirees, locals who fish daily, and serious anglers who appreciate free water. The crowds skew higher on weekends and holidays. Weekday early mornings often have the entire pier to a handful of regulars.</p>
      <p>Maintenance varies. State-managed piers are usually well-kept &mdash; railings repaired, decking replaced as needed, parking maintained. Smaller municipal piers can show their age more visibly. The agency name on the entrance sign tells you a lot about what to expect.</p>

      <h2 className={h2Class}>Who Builds and Runs Public Piers</h2>
      <p>State wildlife or fish-and-game agencies build the largest share of public fishing piers. The North Carolina Wildlife Resources Commission, Florida Fish and Wildlife Conservation Commission, California Department of Fish and Wildlife, and similar agencies run programs specifically focused on public fishing access. Funding typically comes from a mix of fishing license revenue, federal Sport Fish Restoration Act dollars, and state general funds.</p>
      <p>County and municipal parks departments operate the next-largest share. These tend to be in or near population centers &mdash; lakes within metro areas, public beachfronts, urban riverfronts &mdash; and serve high-volume recreational fishing. Funding is local and sometimes precarious; pier closures during budget shortfalls happen.</p>
      <p>Federal agencies (U.S. Army Corps of Engineers, Bureau of Reclamation, National Park Service, U.S. Forest Service) operate piers on federally managed waters. Corps of Engineers piers on flood-control reservoirs are particularly common in the Southeast and Midwest. Federal pier rules typically follow state regulations but can have additional restrictions.</p>
      <p>Native American tribes operate piers on tribal land in some western states. These typically require tribal fishing permits in addition to (or instead of) state licenses. Permit fees support tribal fisheries programs and access to tribal waters that would otherwise be closed.</p>

      <h2 className={h2Class}>License Requirements at Public Piers</h2>
      <p>Public pier license rules vary more than at private piers, and the variation matters financially for casual anglers. Three main patterns exist.</p>
      <p><strong>License-required piers</strong>: most public piers fall into this category. Fishing requires a current state fishing license (saltwater or freshwater appropriate to the water type). Cost is the standard state license fee.</p>
      <p><strong>Pier-licensed piers</strong>: in some states, the pier itself holds a license that covers anyone fishing from it. Florida&apos;s saltwater piers commonly operate this way &mdash; the pier pays an annual license fee, and any angler fishing from the pier is covered. This is enormously valuable for occasional anglers and visiting tourists. The signage at the pier indicates whether this applies.</p>
      <p><strong>License-exempt piers</strong>: certain piers are designated as free fishing locations. Some are designated permanently; others operate under free fishing days or state-wide license-free programs (typically a weekend in early summer). State wildlife agencies maintain lists of designated license-exempt piers; <Link href="/blog/free-fishing-piers" className={linkClass}>our free fishing piers guide</Link> documents the largest of these.</p>
      <p>Beyond license requirements, posted regulations at the pier itself take precedence. Some piers have additional rules &mdash; no overnight fishing, no live bait, no specific gear types. Read posted signs before fishing.</p>

      <h2 className={h2Class}>What to Expect at a Public Pier</h2>
      <p>Parking is usually free or low-cost ($2-$10 day-use fee at state park piers). Larger piers have dedicated lots; smaller community piers may share parking with adjacent boat ramps or beach areas.</p>
      <p>Restrooms are typically available at state park and major municipal piers, less reliably at smaller community installations. Drinking water fountains are common at state park piers, less so elsewhere.</p>
      <p>Bait and tackle: rare on-site at public piers. Plan to buy what you need before arriving. Bait shops near most major public piers stock species-appropriate options and provide local intel on what&apos;s working.</p>
      <p>Cleaning stations: vary widely. Many state-managed piers have built-in cleaning stations with running water. Smaller piers usually do not, and cleaning fish on the pier itself is often prohibited (signage will indicate).</p>
      <p>Crowds: weekends and holidays are busy at popular public piers, especially during peak species runs. Weekday early mornings are usually quiet. Off-season fishing (winter at warm-water piers, summer at cold-water piers) sees minimal crowds.</p>

      <h2 className={h2Class}>Gear Strategy for Public Piers</h2>
      <p>Because public piers serve a wide range of anglers, gear strategy depends on what you&apos;re targeting and how much you want to invest. A basic medium-action 6-7&apos; spinning combo handles most species on most piers &mdash; the same setup that works at a freshwater state park pier also handles bay piers in saltwater regions if you&apos;re not targeting the largest species.</p>
      <p>Invest in good terminal tackle even if you skimp on the rod. Quality hooks, swivels, and weights cost a few dollars more than budget options and dramatically improve catch rates. A small assortment box covers most public pier scenarios &mdash; size 6-2 hooks, split shot weights, basic bobbers and slip floats, a handful of jig heads and soft plastics.</p>
      <p>Live bait is generally welcome at public piers (occasionally restricted &mdash; check posted signs). Worms, minnows, and shrimp cover the species spectrum. Frozen bait works in a pinch and stores between trips. Artificial lures (small spinners, soft plastics) are useful for active species.</p>
      <p>Don&apos;t overlook the small comforts. A folding chair, a small cooler with water and snacks, sunscreen, a hat, and rain gear (in season) make a 4-hour pier session pleasant rather than endured. <Link href="/blog/what-to-bring-pier-fishing" className={linkClass}>Our packing list</Link> covers the full kit.</p>

      <h2 className={h2Class}>Etiquette and Family-Friendly Behavior</h2>
      <p>Public piers serve many users with different expectations. Etiquette matters more than at private piers because the user mix is broader. Cast straight from your spot, not diagonally across other lines. Keep tackle boxes and buckets pulled in from the walkway. Step around rods on the deck, never over.</p>
      <p>Children are common at public piers, and most regulars welcome family fishing. Keep kids close, especially around the railing &mdash; falls into the water happen and most public piers don&apos;t have lifeguards. Eye protection (sunglasses or safety glasses) for kids near multiple casters is a sensible precaution.</p>
      <p>Noise level should be conversational. Loud music, shouted conversation, and rowdy behavior get pier regulars unhappy quickly and can spook fish. Most pier regulars are friendly when approached respectfully and will share information about what&apos;s biting and what bait works.</p>
      <p>Trash discipline is critical at high-volume public piers. Bait containers, line, and hook packets all get carried out. Lost line in particular kills wildlife &mdash; birds, turtles, and fish swallow it or get tangled. Many public piers have line recycling bins specifically for spent fishing line. <Link href="/blog/fishing-pier-safety-tips" className={linkClass}>Our pier safety guide</Link> covers the rest.</p>

      <h2 className={h2Class}>Regulations Beyond Licensing</h2>
      <p>State fishing regulations apply at public piers the same as elsewhere &mdash; bag limits, size limits, and seasonal closures all carry through. Some species have specific restrictions in certain waters (catch-and-release only zones, slot limits, no-take seasons). Posted regulations at the pier itself usually summarize the most important rules for that location.</p>
      <p>Many public piers have additional local rules. Common ones include: no overnight fishing, no live minnows (in some freshwater regions to prevent invasive species spread), no fish cleaning on the deck, no glass containers, no swimming. Read the posted rules before your first visit.</p>
      <p>Federal-managed piers (Corps of Engineers reservoirs, National Park waters) may have additional rules. Tribal-managed piers require tribal permits in addition to or instead of state licenses. <Link href="/blog/pier-fishing-license-requirements-by-state" className={linkClass}>Our state-by-state license guide</Link> covers the basics for every state with significant public pier infrastructure.</p>

      <h2 className={h2Class}>How to Find the Best Public Piers Near You</h2>
      <p>Browse the directory above by state to see all public piers in your area with locations, water type (saltwater or freshwater), and operating agency where known. State wildlife agency websites list public fishing access points; many maintain interactive maps that show pier locations alongside boat ramps and bank fishing access. Local bait shops know which public piers fish well and which are essentially photo opportunities &mdash; a casual conversation usually produces honest local intel.</p>
      <p>State park websites list piers within state parks and often include amenity details (parking, restrooms, cleaning stations, fee status). County and municipal parks websites cover their own piers with similar information. Federal agencies (USACE, BoR, NPS, USFS) maintain their own access pages on their websites.</p>
    </>
  ),
  faqItems: [
    { q: "Do I need a fishing license to fish from a public pier?", a: "Usually yes, but rules vary. Most public piers require the standard state fishing license (saltwater or freshwater as appropriate). Some piers — particularly in Florida — operate under a pier license that covers all anglers fishing from them. A small number are designated as license-exempt fishing locations. Always check posted signs at the pier or the operating agency's website before fishing." },
    { q: "Are public piers free?", a: "Most are free. State park piers may charge a vehicle entry fee ($2-$10 typical) covering park access, but actual pier use is included. Some larger municipal piers charge a small daily fee ($1-$5) for fishing access. A few popular piers in tourist areas charge more — check before arriving if budget matters." },
    { q: "What's the best time to visit a public pier to avoid crowds?", a: "Weekday early mornings (sunrise to 9am) are typically the quietest. Weekends and holidays draw heavy crowds, especially during peak fishing seasons. Off-season visits (winter at warm-water piers, summer at cold-water piers) see minimal crowds but the fishing may be slower. Bad weather days drop crowd counts dramatically and often produce the best fishing." },
    { q: "Can children fish at public piers without a license?", a: "In most states, yes — children below a certain age (typically 16, sometimes 12 or 18 depending on state) don't need their own license. They can fish under their parent's license. Some piers offer youth-specific fishing programs with loaner gear and instruction. Always check state-specific age requirements." },
    { q: "What if I don't know what species I caught?", a: "Most public piers have informational signs identifying common species in the area. State wildlife agency apps (most states have free fish ID apps) are useful for confirming species. When in doubt, release the fish — fines for keeping illegal species are substantial in most states. Pier regulars are usually happy to identify a fish if asked respectfully." },
  ],
  continueReading: [
    { slug: "free-fishing-piers", title: "Free Fishing Piers Guide", blurb: "License-exempt piers and free fishing day programs by state." },
    { slug: "pier-fishing-license-requirements-by-state", title: "License Requirements by State", blurb: "Saltwater and freshwater rules across all 50 states." },
    { slug: "pier-fishing-tips-for-beginners", title: "Pier Fishing Tips for Beginners", blurb: "Practical fundamentals for first-time pier anglers." },
    { slug: "fishing-pier-safety-tips", title: "Pier Fishing Safety Tips", blurb: "Lightning, slip hazards, cold water, and how to fish safely." },
  ],
};

// ===========================================================================
// DOCKS & JETTIES (1,179 piers across 39 states)
// ===========================================================================
const docks: CategoryEditorial = {
  metaTitle: "Fishing Docks & Jetties: Where to Find & How to Fish Them | PierSeeker",
  metaDescription: "Complete guide to fishing docks and jetties across 39 states. Targeting structure-oriented fish, gear strategy, regulations, plus directory of 1,100+ access points.",
  h1: "Fishing Docks & Jetties: Structure Fishing the American Coastline",
  intro: (
    <>
      <p>Docks and jetties are the structure-fisher&apos;s pier equivalent. Where traditional fishing piers are built specifically as platforms for anglers, docks and jetties exist for other reasons &mdash; mooring boats, breaking surf, protecting harbor entrances &mdash; and almost incidentally turn out to be excellent places to catch fish. The structure they create concentrates baitfish and predators in ways that even purpose-built fishing piers often can&apos;t match.</p>
      <p>The fishing experience is different from a traditional pier. Docks tend to be low to the water, often only a few feet of freeboard, which changes how you land fish and what gear works. Jetties are typically rocky or rip-rap structures extending into the water, often without any railing or formal walkway &mdash; you walk out on the rocks themselves. Both reward anglers who understand structure fishing rather than the open-water tactics that work on long surf piers.</p>
      <p>Below is PierSeeker&apos;s directory of fishing docks and jetties across 39 states. The complete guide continues below the directory with what makes these access points distinct from traditional piers, the species that hold around them, gear and technique adjustments, regulations, safety considerations specific to jetty walking, and how to find the productive structures near you.</p>
    </>
  ),
  body: (
    <>
      <h2 className={h2Class}>What Makes Docks and Jetties Different</h2>
      <p>Docks are typically low platforms designed for boat access. They sit close to the water (often within a few feet), which means hooked fish can be lifted directly to the dock without landing nets in many cases. Construction varies wildly &mdash; floating dock systems on lakes, fixed pier-style docks on tidal water, marina-attached docks alongside boats. The fishing access is often informal &mdash; some are explicitly public, others tolerate fishing as long as anglers stay out of the way of boat traffic.</p>
      <p>Jetties are entirely different animals. They&apos;re typically built of large rocks or rip-rap arranged to break surf, protect inlet mouths, or contain navigation channels. There&apos;s no decking, no railing, often no signage saying what&apos;s allowed. You walk out on the rocks themselves, which means stable footwear, careful balance, and awareness of wave action become critical safety considerations. The fishing rewards are exceptional &mdash; jetties concentrate fish along their full length and at their tips where current breaks create predator-friendly ambush points.</p>
      <p>The user culture differs too. Dock fishing tends to be casual and quiet &mdash; locals who walk down to the marina before work, families fishing for an hour after dinner. Jetty fishing skews toward serious anglers willing to walk out on rocks at dawn for a shot at species they can&apos;t reach from sand or pier &mdash; striped bass on Atlantic jetties, redfish on Gulf jetties, lingcod on Pacific jetties.</p>

      <h2 className={h2Class}>Target Species at Docks and Jetties</h2>
      <p>Structure-oriented species dominate the catch at both docks and jetties. The fish that hold tight to pilings, rocks, and current breaks &mdash; rather than open-water cruisers &mdash; concentrate around these access points.</p>
      <p><strong>Saltwater dock species</strong> include sheepshead (the structure-fisher&apos;s favorite), mangrove snapper, redfish, snook (in southern Florida), speckled trout, flounder, and various jacks. Freshwater dock species center on largemouth bass holding under and beside dock structures, crappie schooling in the dock shadows, bluegill and panfish around dock pilings, and channel catfish in deeper dock water at night.</p>
      <p><strong>Jetty species</strong> add open-water predators to the structure mix. Atlantic jetties produce striped bass, bluefish, weakfish, tautog, and seasonal runs of false albacore and bonito. Gulf jetties (especially the Texas jetty system from Galveston to Port Mansfield) produce trophy red drum, speckled trout, sharks, jack crevalle, and tarpon during summer. Pacific jetties target lingcod, rockfish, halibut, surfperch, and on northern jetties, salmon during spawning runs.</p>
      <p>The technique that produces these fish is structure-tight fishing. Casts close to pilings or rocks. Bottom rigs that don&apos;t drift away from the structure. Slow retrieves that keep lures in the strike zone. Live bait fished tight to cover. <Link href="/blog/best-bait-pier-fishing" className={linkClass}>Our bait selection guide</Link> covers what works on structure-oriented species across both fresh and saltwater.</p>

      <h2 className={h2Class}>Best Times to Fish Docks and Jetties</h2>
      <p>Tides drive saltwater dock and jetty fishing the same way they drive pier fishing. The two-hour windows on either side of tide changes produce the best action. Jetties at inlet mouths fish particularly hard during outgoing tides when bait flushes from bay systems past the jetty tips into open water.</p>
      <p>Time of day matters. Dawn and dusk are productive across most species. Night fishing at lit jetties and dock systems is exceptional for predatory species &mdash; striped bass, snook, and trout all feed aggressively in the light line where artificial light meets darkness.</p>
      <p>Seasonal patterns are species-specific. Sheepshead pile up around saltwater docks and jetty rocks in winter. Striped bass run jetties in spring and fall. Redfish school at jetty mouths in fall when bull reds spawn. Freshwater bass move shallow to spawn around docks in spring. Crappie use docks as spawn structure in spring and as winter holding cover in cooler months. <Link href="/blog/best-pier-fishing-by-season" className={linkClass}>Our seasonal guide</Link> covers patterns by region.</p>

      <h2 className={h2Class}>Gear Strategy for Docks and Jetties</h2>
      <p>Dock fishing and jetty fishing demand different gear approaches even though the species overlap.</p>
      <p><strong>Dock fishing</strong> rewards medium-light tackle. A 6&apos;6&quot; to 7&apos; medium-action spinning combo with 8-15 lb test handles most dock species. Light tackle improves casting accuracy in tight spaces around pilings. Short pitches and gentle presentations matter more than long-distance casts. A landing net is occasionally useful but most dock-caught fish can be lifted directly.</p>
      <p><strong>Jetty fishing</strong> demands heavier gear. Surf-style 9-11&apos; rods with 4000-8000 size reels and 30-50 lb braided line are the standard. The jetty environment punishes light tackle &mdash; rocks abrade lighter line on every retrieve, and bigger species (striped bass, bull reds, lingcod) require backbone to lift fish before they reach the rocks and break off. Long casts away from the jetty toward open water are often productive.</p>
      <p>Terminal tackle for both: heavier than typical pier fishing. Hooks need to be strong and sharp (3X-strong saltwater hooks for jetty work). Weights need to anchor against current; 3-6 oz pyramid sinkers are common on jetties. Leaders should be heavier and longer to resist abrasion against rocks and pilings.</p>
      <p>Footwear matters more than gear at jetties. Felt-soled wading boots or rubber-soled shoes with aggressive tread are essential. Slick rocks have ended fishing trips and occasionally lives. Don&apos;t walk a jetty in flip-flops or smooth-soled sneakers. <Link href="/blog/pier-fishing-rod-recommendations" className={linkClass}>Our rod recommendations guide</Link> covers gear specifics by species.</p>

      <h2 className={h2Class}>Reading Dock and Jetty Structure</h2>
      <p>At docks, the highest-value fishing positions are at structural transitions &mdash; corners, where the dock meets pilings, where deeper water meets shallower water, the down-current side of pilings during outgoing tide. Fish hold tight to these structural edges and come out to feed when bait passes by. Casting parallel to the dock face and retrieving slowly past multiple pilings on each cast is the standard productive technique.</p>
      <p>Jetties have their own structural logic. The very tip of the jetty produces big fish &mdash; bull reds, large stripers, sharks &mdash; because the tip is where current breaks and bait concentrates. The seaward side of the jetty fishes the open water; the calmer bay side fishes the protected water with different species mixes. Pockets and cuts along the jetty length where rocks have shifted hold their own fish. Walking the jetty and fishing different positions tells you where the fish are holding on a given day.</p>
      <p>Underwater structure beyond the visible rocks matters too. Jetty bases extend underwater further than the surface rocks suggest. Casting near the jetty and letting bait sink toward the underwater base often produces more strikes than casting far away.</p>

      <h2 className={h2Class}>Regulations and Access</h2>
      <p>Public access at docks and jetties varies enormously. State and municipal jetties (built by state DOT or USACE) are typically open to public access, with parking and informal trails leading to them. Marina docks may be public or private; signage and management approach varies. Tribal jetties and docks require tribal permits.</p>
      <p>State fishing regulations apply at all docks and jetties &mdash; same licenses, bag limits, size limits as elsewhere. Some jetties at federally managed harbor mouths have additional federal restrictions. Always check posted signage; legitimate public jetties typically post the rules at the access point.</p>
      <p>Special considerations: many marinas allow fishing from their docks with restrictions (don&apos;t cast over moored boats, don&apos;t bring fish onto boats without permission). Some private dock systems explicitly prohibit fishing &mdash; respect posted signs. Tribal jetties may have additional restrictions and require specific permits available through tribal fish-and-game offices.</p>

      <h2 className={h2Class}>Safety on Docks and Jetties</h2>
      <p>Dock fishing safety is similar to general pier safety &mdash; lightning awareness, slip hazards on wet decking, supervised children near the water. Cold water immersion is the main risk in northern climates during shoulder seasons.</p>
      <p>Jetty safety is its own discipline. Wave action is the biggest killer &mdash; rogue waves can sweep anglers off jetties, especially during heavy surf or storm conditions. Never turn your back on the ocean while standing at a jetty tip. Watch incoming sets and time movement on the jetty between waves. Avoid jetties entirely during high-surf advisories.</p>
      <p>Footing on jetty rocks is treacherous when wet. Algae-coated rocks become ice-slick. Felt-soled wading boots provide the best traction; aggressive-tread rubber soles are the next best option. Walking sticks help with balance on uneven rocks. Many serious jetty anglers wear inflatable PFDs &mdash; the consequences of falling off a jetty into surf are severe.</p>
      <p>Cold water on northern jetties (Pacific Northwest, Northeast) produces hypothermia within minutes of immersion. Even strong swimmers can&apos;t survive long in 50-degree water. Plan as if any fall into the water is potentially fatal. <Link href="/blog/fishing-pier-safety-tips" className={linkClass}>Our pier safety guide</Link> covers general principles; jetty-specific risks deserve extra attention.</p>

      <h2 className={h2Class}>How to Find Productive Docks and Jetties</h2>
      <p>Browse the directory above by state to see docks and jetties in your area. Beyond the directory, state DOT and USACE websites list jetty locations on coastal navigation projects. State wildlife agencies maintain lists of public dock and pier access points. Local bait shops carry the best intelligence on which structures are producing currently &mdash; jetty bites are seasonal and shift week to week.</p>
      <p>Marina dock fishing requires more research; not all marinas allow public fishing. Calling the marina office before your first visit avoids awkward situations. Many waterfront restaurants and bars have dock structures that allow fishing &mdash; etiquette is to buy a meal and fish from their dock as a thank-you.</p>
    </>
  ),
  faqItems: [
    { q: "What's the difference between a fishing pier and a dock or jetty?", a: "Fishing piers are purpose-built platforms designed for angling, typically with safety railings, fish-cleaning stations, and bait shops. Docks are platforms designed for boat access where fishing is incidental. Jetties are rocky structures built to break surf or protect harbor entrances — fishing happens on the rocks themselves. Each fishes differently and demands different gear and technique." },
    { q: "Can I fish from any dock or jetty I find?", a: "No — access varies. State and municipal jetties at public access points are typically open to public fishing. Marina docks may be public or private; signage indicates. Some private docks explicitly prohibit fishing. Tribal jetties require tribal permits. Always check posted signage and respect private property." },
    { q: "What gear do I need for jetty fishing that I don't need for pier fishing?", a: "Felt-soled wading boots or aggressive-tread rubber shoes for traction on wet rocks. A walking stick helps balance on uneven rocks. Heavier tackle than standard pier fishing — jetty fish are bigger on average and rocks abrade lighter line. Inflatable PFDs are worth considering for serious jetty anglers, especially in cold-water regions." },
    { q: "Are jetties safe to fish?", a: "They can be, but require more care than pier fishing. Wave action is the biggest risk — rogue waves can sweep anglers off jetties. Never turn your back on the ocean at a jetty tip. Avoid jetties during high surf or storm conditions. Wet rocks are slip hazards. Cold water immersion in northern climates is potentially fatal within minutes. Treat jetty fishing as a more serious activity than typical pier fishing." },
    { q: "What's the best species to target at a saltwater jetty?", a: "Sheepshead in winter are perhaps the most reliable — they pile up around jetty rocks and want fiddler crabs or shrimp tight to structure. Striped bass on Atlantic jetties (spring and fall runs) and red drum on Gulf jetties (especially fall bull reds) are the trophy targets. Speckled trout and snook (in Florida) hold along jetty current breaks. Pacific jetties target lingcod, rockfish, and seasonal salmon runs." },
  ],
  continueReading: [
    { slug: "best-bait-pier-fishing", title: "Best Bait for Pier Fishing", blurb: "Structure-oriented species respond to specific baits — what to use." },
    { slug: "pier-fishing-rigs-setup", title: "Pier Fishing Rigs & Setup", blurb: "Bottom rigs, drop-shot, and structure-tight setups." },
    { slug: "fishing-pier-safety-tips", title: "Pier Fishing Safety Tips", blurb: "General safety plus jetty-specific considerations." },
    { slug: "best-pier-fishing-by-season", title: "Best Pier Fishing by Season", blurb: "When sheepshead, stripers, redfish, and other structure species are biting." },
  ],
};

// ===========================================================================
// PIERS WITH BOAT LAUNCHES (838 piers across 32 states)
// ===========================================================================
const boatLaunches: CategoryEditorial = {
  metaTitle: "Piers with Boat Launches: Multi-Use Fishing Access | PierSeeker",
  metaDescription: "Complete guide to fishing piers paired with boat launches across 32 states. Pier-and-launch combo strategy, gear, regulations, plus directory of 800+ access points.",
  h1: "Piers with Boat Launches: Multi-Use Fishing Access Across America",
  intro: (
    <>
      <p>Multi-use access points that combine a fishing pier with a boat launch are some of the most valuable infrastructure in American sport fishing. They serve two communities simultaneously &mdash; anglers without boats who fish from the pier, and boaters who launch from the same site &mdash; and the combination usually means the access point sits in genuinely productive water. Wildlife agencies and parks departments don&apos;t build expensive boat ramps on bad fishing spots.</p>
      <p>For pier anglers, the boat-launch pairing has real advantages beyond the productive water. The infrastructure tends to be better than pier-only sites &mdash; paved parking, boat-trailer-sized lots, often restrooms and cleaning stations, sometimes a small bait shop or vending. The company is interesting too &mdash; the regulars who launch boats here often share intelligence about what&apos;s biting where, which adjacent waters fish well, and which times of day produce the best bites.</p>
      <p>Below is PierSeeker&apos;s directory of piers paired with boat launches across 32 states. The complete guide continues below the directory with what to expect at multi-use sites, how pier and boat anglers share these spaces effectively, the species mix at typical launch sites, gear strategy, and how to find the productive boat-launch piers near you.</p>
    </>
  ),
  body: (
    <>
      <h2 className={h2Class}>What Makes Boat-Launch Piers Different</h2>
      <p>The pier itself at a boat launch tends to be functional rather than elaborate. Most are short courtesy docks designed primarily for boats to tie up while loading and unloading passengers and gear. Those that allow fishing typically extend a section beyond the courtesy zone for anglers to use without interfering with boat traffic.</p>
      <p>The site infrastructure is what really distinguishes these access points. Paved boat-trailer parking is much larger than equivalent pier-only lots. Lighting is common (boats launch and return after dark). Restrooms are usually available. Many sites include fish-cleaning stations, swim platforms, picnic areas, and trash receptacles. State park and federal sites often have campgrounds nearby.</p>
      <p>The water selection is biased toward productive fisheries. Wildlife agencies and parks departments build boat ramps where boating and fishing demand justifies the investment &mdash; which means the underlying water typically holds healthy fish populations and reasonable diversity. A boat ramp on a marginal lake doesn&apos;t justify the construction cost, so the lakes and rivers with multi-use access points are usually genuinely worth fishing.</p>

      <h2 className={h2Class}>Sharing Space with Boaters</h2>
      <p>The etiquette of multi-use sites is the most important thing to understand before fishing one. Boat traffic takes priority at the launch and courtesy dock area. When boats are loading or unloading, fishing anglers need to stay clear &mdash; this isn&apos;t a courtesy, it&apos;s the operating purpose of the facility.</p>
      <p>The fishing area is typically marked or obvious by separation &mdash; a dedicated fishing pier extending beyond the boat dock, a designated bank or shore section, a fishing platform set apart from the launch zone. Stay in the fishing-designated area unless the boat ramp is genuinely empty.</p>
      <p>Casting awareness matters more here than at pier-only sites. Boats coming and going at variable speeds, trailers backing in, tie-up activities &mdash; all of this is incompatible with casting weight in the wrong direction. Cast straight out from the pier in the direction away from the launch lane.</p>
      <p>Communication helps. Boaters returning from a fishing trip are usually happy to share information about what&apos;s biting where; striking up a conversation while they&apos;re tying up often produces useful intelligence. Treat boaters as collaborators rather than competition for space.</p>

      <h2 className={h2Class}>Target Species at Launch Sites</h2>
      <p>The species mix at boat-launch piers depends entirely on the underlying water. Lake-launch piers in the upper Midwest target walleye, smallmouth bass, panfish, and northern pike. Reservoir-launch piers in the Southeast and Texas focus on largemouth bass, crappie, white bass, and increasingly striped bass and hybrid stripers. River-launch piers add channel catfish and seasonal runs of shad, white bass, and salmonids in some regions.</p>
      <p>Saltwater boat-launch piers in coastal states cover the same species mix as nearby pier-only sites but with the added advantage that boat anglers regularly bring intelligence back about what&apos;s biting in adjacent waters &mdash; intelligence that pier anglers can apply to their own fishing.</p>
      <p>The pier itself fishes the same species available from shore. The advantage is that the underlying water has been pre-vetted by agencies as productive enough to justify infrastructure investment. Pier fishing at a launch site usually outperforms pier fishing at random shoreline access by a meaningful margin.</p>

      <h2 className={h2Class}>Gear Strategy for Boat-Launch Piers</h2>
      <p>Standard pier fishing gear works at launch sites &mdash; medium-action 6-7&apos; spinning combos for general fishing, heavier setups for specific species (catfish, bigger bass, saltwater predators). The pier itself is usually low to the water, so landing nets aren&apos;t essential for most freshwater species; lift-and-swing landing works for most fish.</p>
      <p>Terminal tackle is standard. Live bait is generally welcome (occasionally restricted; check signage). Worms, minnows, and live crawfish cover most freshwater species. Saltwater launch piers carry the same bait considerations as nearby pier-only sites.</p>
      <p>One specific consideration: launch sites get heavy boat traffic, especially on weekends. Boat wakes hit the pier regularly and can dislodge tackle boxes, knock over rod stands, or bounce kids. Secure your gear and teach kids about wakes during the first visit. <Link href="/blog/what-to-bring-pier-fishing" className={linkClass}>Our packing list</Link> covers the standard kit; for launch sites, add a couple of extra rod stands and a clip-on hat to handle wake spray.</p>
      <p>Cooler space matters more at launch sites because you may end up keeping more fish than expected (the productive water often produces unexpectedly good catches). A 48-quart cooler with ice handles a half-day of catches without crowding.</p>

      <h2 className={h2Class}>When to Fish Launch Piers</h2>
      <p>Early morning before boat traffic builds (sunrise to 9am) is the ideal pier fishing window at launch sites. The water is calm, the boats haven&apos;t stirred up the bottom yet, and you have the pier mostly to yourself. After 10am on weekends, boat traffic peaks and pier fishing becomes a sharing exercise rather than a contemplative activity.</p>
      <p>Evening (sunset onward) is the second productive window. Boat traffic dies down, the water settles, and night-active species (catfish, snook in Florida, walleye in northern lakes) start moving. Many launch sites have lights that make night fishing feasible and productive.</p>
      <p>Weekday fishing has its own appeal. Most launch sites are quiet weekdays, with minimal boat traffic and the entire pier often available. Retired anglers and shift workers know this; weekday early mornings at launch sites are some of the best fishing windows in the country.</p>
      <p>Seasonal patterns follow the underlying species. <Link href="/blog/best-pier-fishing-by-season" className={linkClass}>Our seasonal guide</Link> covers what&apos;s biting when by region.</p>

      <h2 className={h2Class}>Regulations and Site Rules</h2>
      <p>State fishing regulations apply at boat-launch piers the same as elsewhere &mdash; standard licenses, bag limits, size limits, seasonal closures. License requirements depend on whether the water is classified saltwater or freshwater for that state.</p>
      <p>Site-specific rules typically include posted limits on fishing locations (where pier fishing is allowed vs. where boat traffic takes precedence), restrictions on cleaning fish on the dock (most launch sites have separate cleaning stations), and rules about line and tackle in launch zones (don&apos;t leave tackle where boats trailer over it). Read posted signage on first visit.</p>
      <p>Federal launch sites (Corps of Engineers reservoirs, Bureau of Reclamation impoundments, National Park waters) may have additional rules. Tribal launch sites require tribal permits. State park launch sites may have day-use vehicle fees on top of fishing license requirements.</p>
      <p>Boat-trailer-only parking is enforced at busy sites &mdash; pier anglers should park in standard vehicle spaces, not boat-trailer spaces. Violations get vehicles ticketed or towed during peak weekends. <Link href="/blog/pier-fishing-license-requirements-by-state" className={linkClass}>Our state-by-state license guide</Link> covers the basics for license requirements.</p>

      <h2 className={h2Class}>Safety at Boat-Launch Piers</h2>
      <p>Safety considerations at launch sites add boat-traffic awareness to the standard pier safety list. Watch for boats backing out from the launch &mdash; backing boats have limited visibility and travel at unpredictable speeds. Stand clear of the launch lane during boat operations. Children should be kept well back from the launch area; bigger boats trailing in or out can&apos;t see small kids on the dock.</p>
      <p>Boat wakes hit pier surfaces regularly at launch sites. Wet decking from wakes is a slip hazard. Aggressive-tread shoes help. Keep tackle organized and secured so wake-bounce doesn&apos;t knock gear into the water.</p>
      <p>Standard pier safety considerations apply: lightning awareness (leave the pier when thunder is audible), hypothermia risk in cold-water regions during shoulder seasons, sun exposure, hydration. Launch sites are typically more exposed than wooded shorelines &mdash; sunscreen and hats matter more.</p>
      <p><Link href="/blog/fishing-pier-safety-tips" className={linkClass}>Our pier safety guide</Link> covers general safety; the launch-site addition is just heightened boat-traffic awareness.</p>

      <h2 className={h2Class}>How to Find Productive Boat-Launch Piers</h2>
      <p>Browse the directory above by state. State wildlife agency websites list boat ramp locations alongside pier and bank fishing access; many maintain interactive maps. State park websites cover state park boat launches with amenity details. Federal agencies (USACE, BoR, NPS, USFS) maintain their own boat ramp directories on their respective websites.</p>
      <p>Local bait shops know which launch sites produce reliably and which are essentially photo opportunities. Boater-focused communities (Facebook groups, fishing forums by region) carry intelligence about which launch sites have productive water nearby.</p>
      <p>For broader pier-fishing context, our <Link href="/blog/pier-vs-boat-fishing" className={linkClass}>pier vs. boat fishing comparison</Link> covers when pier fishing makes sense versus launching a boat from these multi-use sites.</p>
    </>
  ),
  faqItems: [
    { q: "Can I fish from any pier at a boat launch site?", a: "Usually yes — most public launch sites include a pier or section designated for fishing. Some have dedicated fishing piers extending beyond the courtesy boat dock; others share space between pier anglers and boat traffic. Posted signage indicates fishing-allowed areas. Always stay clear of active boat launching operations." },
    { q: "Do I need to pay extra to fish at a boat launch site?", a: "Sometimes. State park boat launches typically charge a vehicle entry fee ($2-$10 day-use). Federal boat ramps (USACE, BoR) sometimes charge daily or annual passes. Smaller municipal and county launch sites are often free. Standard fishing license requirements apply on top of any access fees." },
    { q: "What's the best time to fish a boat-launch pier?", a: "Weekday early mornings (sunrise to 9am) before boat traffic builds. Evenings (sunset onward) after most boats return for the day. Avoid midday weekends in summer — boat traffic peaks and pier fishing becomes a sharing exercise. Weekday fishing at launch sites is particularly underrated; many are essentially empty Tuesday through Thursday morning." },
    { q: "How do I share space with boaters at a launch site?", a: "Yield to boat traffic at the launch and courtesy dock. Stay in fishing-designated areas. Cast away from the launch lane. Don't park in boat-trailer parking spaces (use standard vehicle spaces). Don't bring tackle or gear into the launch zone where boats trailer over. Most boaters are happy to share information about what's biting if asked respectfully." },
    { q: "Is the fishing actually better at boat-launch sites than pier-only sites?", a: "Often, yes. Wildlife agencies build expensive boat ramps in genuinely productive water — they don't justify the construction cost on marginal lakes. Boat-launch piers benefit from this pre-vetting. Pier-only sites can be on equally good water but the boat-launch infrastructure is a useful signal that the underlying fishery has been confirmed as worth investing in." },
  ],
  continueReading: [
    { slug: "pier-vs-boat-fishing", title: "Pier vs. Boat Fishing", blurb: "When pier fishing wins, when launching a boat is worth it." },
    { slug: "pier-fishing-rigs-setup", title: "Pier Fishing Rigs & Setup", blurb: "Standard rigs that work at most multi-use access points." },
    { slug: "best-bait-pier-fishing", title: "Best Bait for Pier Fishing", blurb: "What to use across freshwater and saltwater species." },
    { slug: "fishing-pier-safety-tips", title: "Pier Fishing Safety Tips", blurb: "General safety plus boat-traffic-specific considerations." },
  ],
};

// ===========================================================================
// EXPORT
// ===========================================================================
export const CATEGORY_EDITORIALS: Record<string, CategoryEditorial> = {
  saltwater,
  freshwater,
  "public-piers": publicPiers,
  docks,
  "boat-launches": boatLaunches,
};

export const ARTICLE_HEADER_H1_CLASS = "font-[Cabin] text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight";
export const ARTICLE_HEADER_PROSE_CLASS = proseClass;
export const ARTICLE_BODY_PROSE_CLASS = proseClass;
export const TRANSITION_DIVIDER_LABEL = "Complete Guide Continues";
export const FAQ_H2_CLASS = h2Class;
export const FAQ_OPEN_BG = "bg-white";
export const UL_CLASS = ulClass;
