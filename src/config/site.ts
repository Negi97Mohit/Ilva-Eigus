/**
 * Site identity configuration.
 *
 * This is the single source of truth for the site name, tagline, and
 * base metadata. Edit these values to rebrand the template for any artist,
 * performer, or portfolio.
 */
export const site = {
  /** Name used in titles, headings, and copyright. */
  name: "Ilva Eigus",
  /** Short tagline shown under the name in the hero and footer. */
  tagline: "Violinist",
  /** Full description used in meta tags and search results. */
  description:
    "Official website of Swiss-Latvian violinist Ilva Eigus: season calendar, biography, video, press and contact.",
  /** Homepage hero strapline. */
  heroStrapline: "A distinctive voice in classical violin.",
  /** Website base URL for SEO and canonical links */
  url: "https://www.ilvaeigus.com",
  /** SEO keywords */
  keywords: ["Ilva Eigus", "violinist", "classical music", "Swiss-Latvian violinist", "concerts", "classical violin"],
  /** Social / external links. */
  social: {
    youtube: "https://www.youtube.com/channel/UCQZC5LGoXDzOHntApz6IcYg",
  },
};

/** Helper to build a page title: "Page Name — Site Name". */
export function title(page?: string): string {
  return page ? `${page} — ${site.name}` : `${site.name} — ${site.tagline}`;
}

/** Helper to build a page description from the site description. */
export function description(page?: string): string {
  return page ? `${page} of ${site.name}. ${site.description}` : site.description;
}
