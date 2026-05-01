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
  // Top-10 entries (by polygon-validated count) will land in subsequent
  // batches as data-edit prompts:
  // florida (2,636), minnesota (1,706), washington (1,651),
  // michigan (1,608), california (1,527), maryland (1,510),
  // new-york (1,456), north-carolina (1,337), illinois (1,113),
  // virginia (1,078)
};

export function getStateEditorial(stateSlug: string): StateEditorial | null {
  return STATE_EDITORIAL[stateSlug] || null;
}
