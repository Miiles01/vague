/**
 * Site-wide configuration — the single source of truth for SEO.
 *
 * Consumed by the metadata generator, `robots.ts`, `sitemap.ts`, and the
 * JSON-LD structured-data helper. Update these values per project.
 */
import { publicEnv } from "@/env";

export const siteConfig = {
  name: "Vague Bleue",
  shortName: "Vague Bleue",
  /** Used in the title template and OG/structured-data where the full name reads better. */
  legalName: "Vague Bleue Tennis Club & Academy",
  description:
    "Vague Bleue — a members' tennis club and academy where result-driven coaching meets championship courts. Book courts, coaching, and membership.",
  /** Short tagline reused in OG copy / structured data. */
  tagline: "Focus. Discipline. Power.",
  /**
   * Public origin, no trailing slash. Drives canonical URLs, OG tags, the
   * sitemap, and JSON-LD. Set `NEXT_PUBLIC_SITE_URL` in production.
   */
  url: publicEnv.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Default Open Graph / Twitter share image (path under `public/`). */
  ogImage: "/open-graph.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Vague Bleue — Tennis Club & Academy",
  /** Search keywords (kept tight — keyword stuffing is ignored / penalised). */
  keywords: [
    "taekwondo",
    "martial arts school",
    "martial arts instructor",
    "taekwondo classes",
    "dojang",
    "kids martial arts",
    "private martial arts training",
    "membership",
    "Vague Bleue",
  ],
  twitterHandle: "@vaguebleuetkd",
  author: "Vague Bleue Tennis Club",
  locale: "en_CA",
  /** Browser theme-color (address bar / PWA). */
  themeColor: "#0f2f63",
  /** PWA splash background. */
  backgroundColor: "#0f2f63",
  /** Real-world contact — also feeds the LocalBusiness structured data. */
  contact: {
    email: "info@vaguebleue.ca",
    phone: "",
    address: {
      street: "Sherbrooke",
      locality: "Sherbrooke",
      region: "QC",
      postalCode: "J1H",
      country: "CA",
    },
  },
  /** Official profiles — emitted as `sameAs` for entity disambiguation. */
  sameAs: [
    "https://www.instagram.com/vaguebleuetkd",
    "",
    "https://youtube.com/@vaguebleuetkd",
    "",
  ],
} as const;
