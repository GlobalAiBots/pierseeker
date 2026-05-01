#!/usr/bin/env node
/* eslint-disable */
/**
 * One-shot extraction: walk the existing src/app/{state}/page.tsx files,
 * pull per-state variants (code, name, intro paragraph, FAQ items, tips
 * list) into a single src/data/state-info.ts module the dynamic [state]
 * route can consume.
 */
const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "..", "src", "app");
const OUT_FILE = path.join(__dirname, "..", "src", "data", "state-info.ts");

const NON_STATE = new Set([
  "about", "advertise", "bait-guide", "best-of", "blog", "category", "cities",
  "claim", "compare", "find", "fishing-licenses", "fonts", "for-businesses",
  "map", "near-me", "piers", "pricing", "privacy", "rigs", "search", "species",
  "submit", "terms",
]);

const dirs = fs
  .readdirSync(APP_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((n) => /^[a-z]+(-[a-z]+)*$/.test(n))
  .filter((n) => !NON_STATE.has(n))
  .sort();

const stateInfo = {};

for (const slug of dirs) {
  const file = path.join(APP_DIR, slug, "page.tsx");
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, "utf8");

  // 2-letter state code from `r.state === "FL"`
  const codeMatch = src.match(/r\.state\s*===\s*["']([A-Z]{2})["']/);
  const code = codeMatch ? codeMatch[1] : null;

  // State name from the heading "Pier Fishing in Florida" or similar
  let nameMatch = src.match(/Pier Fishing in ([A-Z][A-Za-z\s]+?)</);
  if (!nameMatch) nameMatch = src.match(/Fishing Pier in ([A-Z][A-Za-z\s]+?)</);
  if (!nameMatch) nameMatch = src.match(/Every Fishing Pier in ([A-Z][A-Za-z\s]+?)</);
  const name = nameMatch
    ? nameMatch[1].trim()
    : slug
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");

  // Intro paragraph — look for the gray-600 leading-relaxed text-sm class
  // that the existing template uses for the intro card body
  const introMatch = src.match(
    /<p\s+className="text-gray-600 leading-relaxed text-sm">([\s\S]*?)<\/p>/,
  );
  let introParagraph = "";
  if (introMatch) {
    introParagraph = introMatch[1]
      .replace(/\{stPiers\.length\.toLocaleString\(\)\}/g, "${stateTotal.toLocaleString()}")
      .replace(/\{stPiers\.length\}/g, "${stateTotal}")
      .replace(/<Link[^>]*>(.*?)<\/Link>/g, "$1")
      .replace(/<[^>]+>/g, "")
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&mdash;/g, "—")
      .replace(/&ndash;/g, "–")
      .trim();
  }

  // Tips list items — extract the visible <li> texts from the bg-blue-50
  // tips card. Each li holds a check icon span then text content.
  const tipsBlockMatch = src.match(/bg-blue-50[\s\S]*?<\/ul>/);
  const tips = [];
  if (tipsBlockMatch) {
    const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
    let m;
    while ((m = liRegex.exec(tipsBlockMatch[0])) !== null) {
      const text = m[1]
        .replace(/<span[^>]*>[\s\S]*?<\/span>/g, "")
        .replace(/<Link[^>]*>(.*?)<\/Link>/g, "$1")
        .replace(/<[^>]+>/g, "")
        .replace(/&apos;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/&mdash;/g, "—")
        .replace(/&ndash;/g, "–")
        .trim();
      if (text) tips.push(text);
    }
  }

  // FAQ items from the visible FAQ array — pattern is { q: "...", a: "..." }
  // and { q: `...`, a: `...` } with backticks for template literals.
  // Existing pages use various FAQ headings ("Pier Fishing FAQ", "Frequently
  // Asked Questions", etc.) so anchor the search on the .map((f, i) =>
  // pattern that wraps the array.
  const faqItems = [];
  const faqArrayMatch = src.match(/\[\s*(\{\s*q:[\s\S]*?\}\s*,?\s*)+\s*\]\s*\.map\s*\(\s*\(\s*f\s*,/);
  if (faqArrayMatch) {
    const itemRegex = /\{\s*q:\s*(`[^`]+`|"[^"]+"),\s*a:\s*(`[^`]+`|"[^"]+")\s*\}/g;
    let m;
    while ((m = itemRegex.exec(faqArrayMatch[0])) !== null) {
      const stripQuote = (s) => {
        const inner = s.slice(1, -1);
        return inner
          .replace(/\$\{stPiers\.length\}/g, "${stateTotal}")
          .replace(/\$\{stPiers\.length\.toLocaleString\(\)\}/g, "${stateTotal.toLocaleString()}");
      };
      faqItems.push({ q: stripQuote(m[1]), a: stripQuote(m[2]) });
    }
  }

  stateInfo[slug] = { slug, code, name, introParagraph, tips, faqItems };
}

const ts = `// Auto-extracted from former per-state pages.
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
   * Intro paragraph as a JS template-literal body. \`\${stateTotal}\` and
   * \`\${stateTotal.toLocaleString()}\` placeholders get filled in by the
   * dynamic route at render time.
   */
  introParagraph: string;
  tips: string[];
  faqItems: StateFaqItem[];
}

export const STATE_INFO: Record<string, StateInfo> = ${JSON.stringify(stateInfo, null, 2)};

export function getStateInfo(slug: string): StateInfo | null {
  return STATE_INFO[slug] || null;
}

export const ALL_STATE_SLUGS: string[] = ${JSON.stringify(Object.keys(stateInfo), null, 2)};
`;

fs.writeFileSync(OUT_FILE, ts);
console.log(`Wrote ${dirs.length} state entries to ${path.relative(process.cwd(), OUT_FILE)}`);

// Quick quality check — print samples
const sampleSlugs = ["florida", "california", "minnesota", "wyoming", "alaska"];
for (const s of sampleSlugs) {
  const info = stateInfo[s];
  if (info) {
    console.log(`\n--- ${s} ---`);
    console.log("  code:", info.code);
    console.log("  name:", info.name);
    console.log("  intro chars:", info.introParagraph.length);
    console.log("  tips:", info.tips.length, "items");
    console.log("  faq:", info.faqItems.length, "items");
  }
}
