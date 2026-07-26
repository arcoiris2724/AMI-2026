import { CASE_STUDIES, CaseStudy } from "@/data/caseStudies";
import { PORTFOLIO, PortfolioItem } from "@/data/siteData";
import { useSiteContent } from "@/hooks/useSiteContent";

/**
 * A "custom" case study is one added from the /admin CMS.
 * It combines the PortfolioItem card fields and the CaseStudy detail
 * fields in a single object, stored in the site_content table under
 * the key "custom_case_studies".
 */
export interface CustomCaseStudy {
  id: number; // portfolio id — custom entries start at 1000 to avoid clashing with built-ins
  slug: string;
  title: string;
  category: string;
  image: string;
  metric: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  client: string;
  industry: string;
  timeline: string;
  services: string[];
  challenge: string[];
  solution: string[];
  results: { value: string; label: string }[];
  quote?: { text: string; name: string; role: string };
}

export const CUSTOM_CASE_STUDIES_KEY = "custom_case_studies";

/** Fallback card image used when no image URL is provided in the admin. */
export const DEFAULT_CASE_STUDY_IMAGE =
  "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733757230_96363b0e.jpg";

export function customToPortfolioItem(c: CustomCaseStudy): PortfolioItem {
  return {
    id: c.id,
    title: c.title,
    category: c.category,
    image: c.image || DEFAULT_CASE_STUDY_IMAGE,
    metric: c.metric,
    description: c.description,
  };
}

export function customToCaseStudy(c: CustomCaseStudy): CaseStudy {
  return {
    portfolioId: c.id,
    slug: c.slug,
    metaTitle: c.metaTitle || `Case Study: ${c.title} | Advance My Idea`,
    metaDescription: c.metaDescription || c.description,
    client: c.client,
    industry: c.industry,
    timeline: c.timeline,
    services: c.services,
    challenge: c.challenge,
    solution: c.solution,
    results: c.results,
    quote: c.quote && c.quote.text ? c.quote : undefined,
  };
}

/**
 * Returns the site's portfolio items and case studies with any
 * admin-added client stories merged in after the built-in ones.
 */
export function useMergedCaseStudies(): {
  portfolio: PortfolioItem[];
  caseStudies: CaseStudy[];
} {
  const custom = useSiteContent<CustomCaseStudy[]>(CUSTOM_CASE_STUDIES_KEY, []);
  const safe = Array.isArray(custom) ? custom.filter((c) => c && c.title && c.slug) : [];

  return {
    portfolio: [...PORTFOLIO, ...safe.map(customToPortfolioItem)],
    caseStudies: [...CASE_STUDIES, ...safe.map(customToCaseStudy)],
  };
}
