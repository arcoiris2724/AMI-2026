// ─── SEO Landing Page Data for Core Services ───────────────────────────────
// Rendered at /services/:slug by src/pages/ServicePage.tsx

export interface ServicePageFaq {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  serviceId: string; // matches SERVICES id in siteData.ts
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  subheadline: string;
  intro: string[];
  deliverables: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  portfolioCategory: string; // filters PORTFOLIO items
  faqs: ServicePageFaq[];
}

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: "web-development",
    serviceId: "web-development",
    metaTitle: "Web Development Services | Custom Websites That Convert | Advance My Idea",
    metaDescription:
      "Custom web development since 1999. High-performance, SEO-ready websites and web applications engineered to convert visitors into customers. Free website audit included.",
    keywords:
      "web development services, custom website development, business website design, web application development, responsive web design agency",
    h1: "Web Development That Turns Visitors Into Customers",
    subheadline:
      "High-performance, SEO-ready websites and web applications — engineered by a think-tank that has been building for the web since 1999.",
    intro: [
      "Your website is your hardest-working employee: it greets every prospect, answers every question, and closes deals while you sleep. We build websites that take that job seriously — fast, secure, mobile-first, and structured around measurable conversion goals from day one.",
      "From five-page marketing sites to complex portals and e-commerce platforms, every build follows our Kaizen process: Discover, Design, Develop, Deploy, Improve. Launch is the beginning of improvement, not the end of the project.",
    ],
    deliverables: [
      { title: "Custom Website Design & Build", description: "Bespoke, mobile-responsive designs built on modern frameworks — no bloated templates, no page-builder lock-in." },
      { title: "E-Commerce Development", description: "Storefronts optimized for speed and checkout conversion, with analytics wired into every step of the funnel." },
      { title: "Web Applications & Portals", description: "Customer portals, dashboards, and internal tools with robust architecture and secure authentication." },
      { title: "Performance & Core Web Vitals", description: "Sub-second load targets, image optimization, and technical SEO baked in — not bolted on." },
      { title: "Accessibility & Best Practices", description: "Semantic, accessible markup that serves every visitor and satisfies search engines." },
      { title: "Ongoing Kaizen Optimization", description: "Post-launch conversion experiments, measured weekly, compounding into major gains." },
    ],
    stats: [
      { value: "+214%", label: "lead volume for a law firm rebuild" },
      { value: "+168%", label: "conversion rate for an e-commerce overhaul" },
      { value: "40k", label: "patients onboarded to a healthcare portal" },
    ],
    portfolioCategory: "Web Development",
    faqs: [
      {
        question: "How much does a custom website cost?",
        answer:
          "Our Launch package starts at $1,499 for a 5-page professional website with foundational SEO. Larger builds — e-commerce, portals, custom web applications — are scoped individually with itemized, fixed-price proposals. You always know exactly what you're paying for before work begins.",
      },
      {
        question: "How long does a website project take?",
        answer:
          "A Launch-tier site typically goes live in 4–6 weeks. E-commerce platforms and custom web applications generally run 8–16 weeks depending on scope, with transparent milestones so you always know what ships when.",
      },
      {
        question: "Will my website be optimized for search engines?",
        answer:
          "Yes — every site we build ships with technical SEO fundamentals: clean semantic markup, fast Core Web Vitals, structured data, XML sitemaps, and mobile-first responsive design. SEO isn't an add-on; it's how we build.",
      },
      {
        question: "Can you improve my existing website instead of rebuilding?",
        answer:
          "Usually, yes — and we'll tell you honestly which path is right. When the foundation is sound, incremental Kaizen refinement almost always beats a rebuild: less risk, less cost, and no SEO traffic cliff. Start with our free audit to find out.",
      },
    ],
  },
  {
    slug: "seo",
    metaTitle: "SEO Services | Rank Higher on Google | Advance My Idea",
    serviceId: "seo",
    metaDescription:
      "Professional SEO services: technical audits, on-page optimization, local SEO, and content strategy that put your business at the top of Google — and keep it there. Free SEO audit.",
    keywords:
      "SEO services, search engine optimization agency, local SEO, technical SEO audit, Google rankings, SEO company",
    h1: "SEO Services That Put Your Business at the Top of Google",
    subheadline:
      "Technical audits, on-page optimization, content strategy, and local SEO — a compounding organic growth engine, managed the Kaizen way.",
    intro: [
      "Ranking well on Google is the closest thing to free customer acquisition a business can own. But rankings aren't won with tricks — they're earned with technical health, genuine expertise, and relentless consistency. That's exactly how we've run SEO campaigns since 2007.",
      "We treat SEO as a Kaizen discipline, not a one-time project: steady technical fixes, honest content, consistent local signals, and monthly reporting against metrics we define together up front. Rankings compound the same way improvements do — steadily, then suddenly.",
    ],
    deliverables: [
      { title: "Technical SEO Audits", description: "Core Web Vitals, crawlability, indexation, structured data, and site architecture — fixed in priority order." },
      { title: "On-Page Optimization", description: "Keyword-mapped titles, meta descriptions, headings, and internal linking across every page that matters." },
      { title: "Local SEO & Map Pack", description: "Google Business Profile optimization, review velocity systems, and citation consistency that win the map pack." },
      { title: "Content Strategy", description: "Experience-backed content that only your business could write — the kind Google increasingly rewards." },
      { title: "Authoritative Link Building", description: "Earned links from relevant sources — no spam networks, no shortcuts that risk penalties." },
      { title: "Monthly Reporting & Kaizen Reviews", description: "Transparent rankings, traffic, and conversion reporting with quarterly strategy reviews." },
    ],
    stats: [
      { value: "#1", label: "for 47 keywords in a national B2B campaign" },
      { value: "+287%", label: "organic traffic for an industrial supplier" },
      { value: "Top 3", label: "map pack across 9 cities for a services brand" },
    ],
    portfolioCategory: "SEO & SEM",
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Technical fixes often show movement in 4–8 weeks. Competitive rankings generally build over 3–6 months — then keep growing. SEO is a compounding investment: we define success metrics up front and report against them monthly so you're never guessing.",
      },
      {
        question: "What does your free SEO audit include?",
        answer:
          "We examine your rankings, technical health (Core Web Vitals, crawlability, mobile experience), content gaps versus competitors, and local visibility. You receive a personalized, genuinely actionable report within 48 hours — not a generic sales sheet.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No honest SEO firm can guarantee specific rankings — Google's algorithm belongs to Google. What we guarantee is disciplined execution, honest measurement, and full transparency. Our track record — page 4 to position 1, 47 first-place keywords — speaks for itself.",
      },
      {
        question: "Is local SEO different from regular SEO?",
        answer:
          "Yes. For service businesses, the three-listing map pack is the battleground, and it's won with different signals: Google Business Profile completeness, review velocity, citation consistency, and locally-relevant content. We've used this playbook to put clients in the top three across nine cities simultaneously.",
      },
    ],
  },
  {
    slug: "sem",
    serviceId: "sem",
    metaTitle: "SEM & Paid Media Management | Google Ads Agency | Advance My Idea",
    metaDescription:
      "Expert SEM and paid media management: Google Ads, retargeting, and social campaigns with relentless optimization. Every dollar tracked, every click accountable. 5.2x average ROAS.",
    keywords:
      "SEM agency, Google Ads management, PPC management services, paid search agency, retargeting campaigns, paid media ROI",
    h1: "SEM & Paid Media With Measurable, Accountable ROI",
    subheadline:
      "Google Ads, display, retargeting, and social campaigns managed with weekly optimization discipline — every dollar tracked, every click accountable.",
    intro: [
      "Paid search is an auction, and auctions are won with discipline, not budget. Most accounts we audit waste 20–35% of spend on irrelevant queries, wrong geographies, and dead hours. We eliminate that waste first — then reinvest it where it converts.",
      "Our management cadence is pure Kaizen: weekly negative-keyword reviews, geographic and daypart precision, single-theme ad groups matched to dedicated landing pages, call tracking that counts real leads, and a monthly ROAS review where budget is ruthlessly reallocated from losers to winners.",
    ],
    deliverables: [
      { title: "Google Ads Management", description: "Search, display, and Performance Max campaigns structured for relevance, quality score, and profit." },
      { title: "Retargeting Campaigns", description: "Re-engage the 97% who didn't convert the first time with sequenced, frequency-capped messaging." },
      { title: "Landing Page Optimization", description: "Tightly matched landing pages that lower cost per click and raise conversion rate simultaneously." },
      { title: "Call & Conversion Tracking", description: "Full-funnel measurement so we optimize for real leads and revenue, not vanity clicks." },
      { title: "Geo-Targeted Local Campaigns", description: "Bid up in the zip codes where your best customers live; exclude the ones that never convert." },
      { title: "Monthly ROAS Reviews", description: "Transparent reporting and honest reallocation — you always know exactly what's working." },
    ],
    stats: [
      { value: "5.2x", label: "ROAS for a 12-location restaurant group" },
      { value: "20-35%", label: "typical wasted spend we recover in audits" },
      { value: "60-90", label: "days to optimized campaign efficiency" },
    ],
    portfolioCategory: "SEO & SEM",
    faqs: [
      {
        question: "What budget do I need for Google Ads?",
        answer:
          "Less than you might think. Small budgets managed with discipline routinely beat big budgets managed carelessly. We've produced 5x returns on modest local budgets through negative keywords, geographic precision, dayparting, and tight ad-group structure. We'll recommend a starting budget based on your market during a free consultation.",
      },
      {
        question: "How quickly will paid campaigns generate leads?",
        answer:
          "Paid campaigns generate measurable traffic within days and are typically optimized to strong efficiency inside 60–90 days. Unlike SEO, SEM delivers immediate visibility — which is why many clients run both: paid for speed, organic for compounding long-term value.",
      },
      {
        question: "How is your SEM management different from other agencies?",
        answer:
          "Weekly optimization instead of set-and-forget, call tracking so we count real leads rather than clicks, and monthly ROAS reviews where we show you exactly where every dollar went. We treat your budget like our own — because accountability is one of our core values.",
      },
      {
        question: "Do you handle social media advertising too?",
        answer:
          "Yes. Beyond Google Ads we manage display, retargeting, and paid social campaigns. For multi-location businesses we specialize in geo-targeted campaigns — like the strategy that fills seats nightly across 12 restaurant locations at a 5.2x return.",
      },
    ],
  },
  {
    slug: "app-development",
    serviceId: "app-development",
    metaTitle: "App Development Services | iOS, Android & Web Apps | Advance My Idea",
    metaDescription:
      "Native and cross-platform app development: iOS, Android, and progressive web apps from MVP to enterprise scale. Intuitive UX, robust architecture, 120k+ downloads delivered.",
    keywords:
      "app development company, mobile app development, iOS app development, Android app development, MVP development, cross-platform apps",
    h1: "App Development From MVP to Enterprise Scale",
    subheadline:
      "Native iOS, Android, and progressive web apps designed with intuitive UX and built on robust architecture — scoped honestly, shipped on time.",
    intro: [
      "Most app projects don't fail in development — they fail in scoping. Features accumulate, budgets balloon, and by the time version one ships, the market has moved. We scope differently: find the one job your app must do, ship the smallest thing that delivers real value, then let actual user behavior drive the roadmap.",
      "That discipline is why our MVPs reach six-figure download counts and why our enterprise apps save clients hours of paperwork every week. From subscription-billing fitness platforms to HIPAA-conscious patient portals and 40-technician field service suites, we build apps people actually use.",
    ],
    deliverables: [
      { title: "iOS & Android Development", description: "Native and cross-platform builds with the right technology choice for your budget and roadmap." },
      { title: "MVP Scoping & Launch", description: "Our three-question scoping filter cuts ruthlessly to a v1 that ships fast and validates demand." },
      { title: "Progressive Web Apps", description: "App-like experiences delivered through the browser — no app store gatekeepers, instant updates." },
      { title: "UX & Product Design", description: "Intuitive interfaces designed around the core job your users need done in seconds, not minutes." },
      { title: "Backend & API Architecture", description: "Secure, scalable infrastructure: authentication, payments, push notifications, and analytics." },
      { title: "Post-Launch Iteration", description: "Kaizen product cycles driven by real user behavior — not stakeholder opinion." },
    ],
    stats: [
      { value: "120k", label: "downloads for a fitness coaching app" },
      { value: "-6 hrs", label: "paperwork per week for a field services fleet" },
      { value: "+31%", label: "repeat purchases from a retail loyalty app" },
    ],
    portfolioCategory: "App Development",
    faqs: [
      {
        question: "How much does it cost to build an app?",
        answer:
          "It depends entirely on scope — which is why we scope first, as a think-tank, before writing code. A focused MVP costs a fraction of a feature-complete platform, and it's usually the smarter first step. Think-Tank engagements are custom-quoted with itemized proposals and no hidden fees.",
      },
      {
        question: "Should I build native or cross-platform?",
        answer:
          "It depends on your users, features, and budget. Cross-platform frameworks deliver excellent results for most business apps at lower cost; native makes sense for demanding performance or deep platform integration. We recommend the right choice for your case — we build both.",
      },
      {
        question: "What is an MVP and why start with one?",
        answer:
          "A minimum viable product is the smallest version of your app that delivers real value. Starting with an MVP validates demand before you invest in infrastructure — we've launched successful MVPs without authentication, payments, or push notifications, adding each only once real users proved the need.",
      },
      {
        question: "Do you maintain and improve apps after launch?",
        answer:
          "Always — it's the heart of our Kaizen philosophy. Launch is the beginning of improvement, not the end of the project. We run post-launch iteration cycles driven by real usage data, and we offer ongoing support plans with defined SLAs for business-critical applications.",
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
