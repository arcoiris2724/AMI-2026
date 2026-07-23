/**
 * Single source of truth for dedicated, indexable section pages.
 * Each entry maps a real URL path (/{slug}) to its homepage anchor
 * and page-level SEO metadata. Used by SectionPage, Header, Footer,
 * App routes, and the sitemap.
 */
export interface SectionPageMeta {
  slug: string;
  /** Anchor id on the homepage one-pager, e.g. "#about" */
  anchor: string;
  /** Short label used in navigation */
  label: string;
  /** Document title */
  title: string;
  /** Meta description */
  description: string;
  keywords: string;
  /** H1 shown in the page breadcrumb hero */
  heading: string;
  /** Supporting line under the H1 */
  subheading: string;
}

export const SECTION_PAGES: SectionPageMeta[] = [
  {
    slug: "about",
    anchor: "#about",
    label: "About",
    title: "About Us | Advance My Idea — Kaizen-Driven Digital Think-Tank Since 1999",
    description:
      "Learn about Advance My Idea, a Kaizen-driven business development think-tank delivering web development, SEO, SEM, and app development since 1999.",
    keywords:
      "about advance my idea, digital agency since 1999, kaizen digital agency, business development think-tank",
    heading: "About Advance My Idea",
    subheading:
      "A Kaizen-driven business development think-tank advancing ideas into digital reality since 1999.",
  },
  {
    slug: "services",
    anchor: "#services",
    label: "Services",
    title: "Digital Services | Web Development, SEO, SEM & App Development",
    description:
      "Explore our full-service digital offering: custom web development, search engine optimization, paid search (SEM), and mobile app development.",
    keywords:
      "web development services, seo services, sem agency, app development company, digital strategy services",
    heading: "Our Services",
    subheading:
      "Full-stack digital capability — from strategy and design to build, launch, and continuous improvement.",
  },
  {
    slug: "process",
    anchor: "#process",
    label: "Process",
    title: "Our Kaizen Process | How Advance My Idea Delivers Results",
    description:
      "See our proven Kaizen process: discovery, strategy, design, development, launch, and continuous improvement — refined over 25+ years.",
    keywords:
      "kaizen process, digital project process, continuous improvement web development, agency methodology",
    heading: "Our Process",
    subheading:
      "A disciplined, Kaizen-based methodology refined over 25+ years of client engagements.",
  },
  {
    slug: "portfolio",
    anchor: "#portfolio",
    label: "Work",
    title: "Portfolio & Case Studies | Advance My Idea Client Work",
    description:
      "Browse our portfolio of web development, SEO, SEM, and app development projects — with measurable results across industries.",
    keywords:
      "digital agency portfolio, web development case studies, seo results, client work examples",
    heading: "Our Work",
    subheading:
      "Real projects, real outcomes — a selection of client engagements across industries.",
  },
  {
    slug: "our-story",
    anchor: "#timeline",
    label: "Our Story",
    title: "Our Story | 25+ Years of Advancing Ideas Since 1999",
    description:
      "From a 1999 founding to a modern digital think-tank — the story and milestones behind Advance My Idea.",
    keywords:
      "advance my idea history, digital agency story, company timeline, founded 1999",
    heading: "Our Story",
    subheading:
      "Milestones from 1999 to today — a quarter century of continuous improvement.",
  },
  {
    slug: "packages",
    anchor: "#packages",
    label: "Packages",
    title: "Packages & Pricing | Advance My Idea Digital Growth Plans",
    description:
      "Compare our digital growth packages — transparent, value-driven plans for web development, SEO, SEM, and ongoing optimization.",
    keywords:
      "digital marketing packages, web development pricing, seo plans, agency pricing",
    heading: "Packages",
    subheading:
      "Transparent, value-driven plans built around your growth stage and goals.",
  },
  {
    slug: "resources",
    anchor: "#resources",
    label: "Resources",
    title: "Resource Center | Digital Strategy, SEO & Kaizen Insights",
    description:
      "Guides and articles on digital strategy, SEO fundamentals, SEM budget efficiency, and applying Kaizen to digital teams.",
    keywords:
      "digital strategy articles, seo guides, kaizen resources, marketing insights",
    heading: "Resource Center",
    subheading:
      "Practical guides and insights on digital strategy, SEO, SEM, and Kaizen thinking.",
  },
  {
    slug: "faq",
    anchor: "#faq",
    label: "FAQ",
    title: "Frequently Asked Questions | Advance My Idea",
    description:
      "Answers to common questions about our services, pricing, timelines, process, and how we work with clients.",
    keywords:
      "digital agency faq, web development questions, seo faq, agency pricing questions",
    heading: "Frequently Asked Questions",
    subheading:
      "Everything you need to know about working with Advance My Idea.",
  },
  {
    slug: "contact",
    anchor: "#contact",
    label: "Contact",
    title: "Contact Us | Advance My Idea — Free 48-Hour Website Audit",
    description:
      "Get in touch with Advance My Idea. Request a free 48-hour website audit or book a consultation to discuss your project.",
    keywords:
      "contact digital agency, free website audit, book consultation, project inquiry",
    heading: "Contact Us",
    subheading:
      "Tell us about your project — or claim your free 48-hour website audit.",
  },
];

export function getSectionPage(slug: string): SectionPageMeta | undefined {
  return SECTION_PAGES.find((p) => p.slug === slug);
}
