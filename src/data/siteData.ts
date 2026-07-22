// ─── Advance My Idea — Single Source of Truth ─────────────────────────────

export const LOGO_URL =
  "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784734819839_1a972eb3.webp";

export const HERO_BG =
  "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733757230_96363b0e.jpg";

export const BOOKING_URL =
  "https://famous.ai/api/crm/6a60dfea4cabbf15ee462cbd/calendar/public?calendarId=2430c64c-8294-4b8c-9d33-9effae803ed7&view=booking";

export const CRM_SUBSCRIBE_URL =
  "https://famous.ai/api/crm/6a60dfea4cabbf15ee462cbd/subscribe";

export const FACEBOOK_URL = "https://www.facebook.com/advanceMYidea/";

export const BRAND = {
  name: "Advance My Idea",
  tagline: "Vision. Strategy. Advancement.",
  founded: 1999,
  yearsInBusiness: new Date().getFullYear() - 1999,
};

// Brand colors echoing the stained-glass eye logo
export const COLORS = ["#E4342B", "#1D4ED8", "#FACC15", "#16A34A", "#DB2777", "#7C3AED"];

// ─── Services ──────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  short: string;
  detail: string;
  color: string;
  icon: string; // lucide icon name key
}

export const SERVICES: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    short: "High-performance websites engineered to convert.",
    detail:
      "From lightning-fast marketing sites to complex web applications, we build responsive, secure, and scalable digital experiences using modern frameworks and best practices.",
    color: "#E4342B",
    icon: "Globe",
  },
  {
    id: "seo",
    title: "SEO",
    short: "Rank higher. Get found. Grow organically.",
    detail:
      "Technical audits, on-page optimization, content strategy, and authoritative link building that put your business at the top of search results — and keep it there.",
    color: "#1D4ED8",
    icon: "Search",
  },
  {
    id: "sem",
    title: "SEM & Paid Media",
    short: "Precision ad campaigns with measurable ROI.",
    detail:
      "Google Ads, display, retargeting, and social campaigns managed with relentless optimization. Every dollar tracked, every click accountable.",
    color: "#FACC15",
    icon: "Target",
  },
  {
    id: "app-development",
    title: "App Development",
    short: "Native & cross-platform apps users love.",
    detail:
      "iOS, Android, and progressive web apps designed with intuitive UX and built with robust architecture — from MVP to enterprise scale.",
    color: "#16A34A",
    icon: "Smartphone",
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    short: "Roadmaps that turn ideas into market wins.",
    detail:
      "As a business development think-tank, we analyze your market, competitors, and capabilities to craft actionable digital strategies rooted in Kaizen continuous improvement.",
    color: "#DB2777",
    icon: "Lightbulb",
  },
  {
    id: "brand-management",
    title: "Digital Footprint Management",
    short: "Own your reputation across every channel.",
    detail:
      "Review management, listings consistency, social presence, and brand monitoring — we curate how the world sees your business online.",
    color: "#7C3AED",
    icon: "Fingerprint",
  },
  {
    id: "analytics",
    title: "Analytics & Insights",
    short: "Data-driven decisions, beautifully visualized.",
    detail:
      "Custom dashboards, conversion tracking, and behavioral analysis that transform raw data into clear, profitable action.",
    color: "#0891B2",
    icon: "BarChart3",
  },
  {
    id: "consulting",
    title: "Consulting",
    short: "25+ years of solution design at your table.",
    detail:
      "Fractional CTO guidance, technology selection, vendor evaluation, and process design from a firm that has been solving digital problems since 1999.",
    color: "#EA580C",
    icon: "Users",
  },
];

// ─── Kaizen Process ────────────────────────────────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  color: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discover",
    description: "Deep-dive workshops to understand your business, audience, and goals.",
    color: "#E4342B",
  },
  {
    step: 2,
    title: "Design",
    description: "Solution architecture and creative direction mapped to measurable outcomes.",
    color: "#1D4ED8",
  },
  {
    step: 3,
    title: "Develop",
    description: "Agile build cycles with transparent milestones and constant communication.",
    color: "#FACC15",
  },
  {
    step: 4,
    title: "Deploy",
    description: "Rigorous QA, seamless launch, and performance benchmarking.",
    color: "#16A34A",
  },
  {
    step: 5,
    title: "Improve",
    description: "Kaizen in action — continuous measurement, iteration, and refinement forever.",
    color: "#7C3AED",
  },
];

// ─── Portfolio ─────────────────────────────────────────────────────────────
export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  metric: string;
  description: string;
}

export const PORTFOLIO_CATEGORIES = ["All", "Web Development", "App Development", "SEO & SEM", "Strategy"];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: "Regional Law Firm Platform",
    category: "Web Development",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733775135_6f2220e5.jpg",
    metric: "+214% lead volume",
    description: "Full rebuild with intake automation drove a 3x increase in qualified consultations.",
  },
  {
    id: 2,
    title: "E-Commerce Storefront Overhaul",
    category: "Web Development",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733775604_bb179532.jpg",
    metric: "+168% conversion rate",
    description: "Speed optimization and UX redesign cut cart abandonment nearly in half.",
  },
  {
    id: 3,
    title: "Healthcare Provider Portal",
    category: "Web Development",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733776525_a6063990.jpg",
    metric: "40k patients onboarded",
    description: "HIPAA-conscious patient portal with scheduling and secure messaging.",
  },
  {
    id: 4,
    title: "National SEO Campaign",
    category: "SEO & SEM",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733777067_e0f413a8.jpg",
    metric: "#1 for 47 keywords",
    description: "Technical SEO and content engine took a B2B brand from page 4 to position 1.",
  },
  {
    id: 5,
    title: "Restaurant Group Ads Engine",
    category: "SEO & SEM",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733779690_0d336b63.jpg",
    metric: "5.2x ROAS",
    description: "Geo-targeted SEM strategy filling seats across 12 locations nightly.",
  },
  {
    id: 6,
    title: "SaaS Analytics Dashboard",
    category: "Web Development",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733780631_023503c7.jpg",
    metric: "-38% churn",
    description: "Customer-facing insights dashboard that became the product's stickiest feature.",
  },
  {
    id: 7,
    title: "Fitness Coaching App",
    category: "App Development",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733804294_8a6e770b.jpg",
    metric: "120k downloads",
    description: "Cross-platform training app with subscription billing and live coaching.",
  },
  {
    id: 8,
    title: "Field Services Mobile Suite",
    category: "App Development",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733805267_7f04247c.jpg",
    metric: "-6 hrs paperwork/week",
    description: "Dispatch, invoicing, and photo documentation for a 40-tech service fleet.",
  },
  {
    id: 9,
    title: "Retail Loyalty App",
    category: "App Development",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733809449_c8ed22d1.jpg",
    metric: "+31% repeat purchases",
    description: "Points, offers, and push campaigns that turned shoppers into regulars.",
  },
  {
    id: 10,
    title: "Nonprofit Digital Rebrand",
    category: "Strategy",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733808557_4ee1d3b9.jpg",
    metric: "2.4x donations",
    description: "Complete digital footprint refresh with storytelling-driven campaigns.",
  },
  {
    id: 11,
    title: "Manufacturer Go-Digital Roadmap",
    category: "Strategy",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733811439_b5fff5d6.jpg",
    metric: "$1.8M new pipeline",
    description: "Digital transformation strategy opening direct-to-dealer online sales.",
  },
  {
    id: 12,
    title: "Local Services Domination",
    category: "SEO & SEM",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784733810443_558d914d.jpg",
    metric: "Top 3 map pack, 9 cities",
    description: "Local SEO and reputation management for a multi-market home services brand.",
  },
];

// ─── Timeline ──────────────────────────────────────────────────────────────
export interface Milestone {
  year: string;
  title: string;
  description: string;
  color: string;
}

export const MILESTONES: Milestone[] = [
  { year: "1999", title: "Founded", description: "Advance My Idea launches as a solution design firm at the dawn of the web era.", color: "#E4342B" },
  { year: "2003", title: "Kaizen Adopted", description: "Continuous improvement becomes the operating philosophy behind every engagement.", color: "#1D4ED8" },
  { year: "2007", title: "SEO & SEM Practice", description: "Search marketing division opens as businesses race to be found online.", color: "#FACC15" },
  { year: "2011", title: "Mobile-First", description: "App development studio launches, shipping native iOS and Android products.", color: "#16A34A" },
  { year: "2016", title: "Think-Tank Model", description: "Formalized as a business development think-tank pairing strategy with execution.", color: "#DB2777" },
  { year: "2020", title: "Digital Footprint Mgmt", description: "Reputation and footprint management services help clients navigate a remote-first world.", color: "#7C3AED" },
  { year: "2026", title: "27 Years Strong", description: "A quarter-century-plus of advancing ideas — and we are just getting started.", color: "#0891B2" },
];

// ─── Packages ──────────────────────────────────────────────────────────────
export interface Package {
  id: string;
  name: string;
  price: string;
  period: string;
  tag?: string;
  color: string;
  features: string[];
}

export const PACKAGES: Package[] = [
  {
    id: "launch",
    name: "Launch",
    price: "$1,499",
    period: "starting at",
    color: "#1D4ED8",
    features: [
      "5-page professional website",
      "Mobile-responsive design",
      "Foundational on-page SEO",
      "Google Business Profile setup",
      "30 days post-launch support",
    ],
  },
  {
    id: "advance",
    name: "Advance",
    price: "$2,900",
    period: "per month",
    tag: "Most Popular",
    color: "#E4342B",
    features: [
      "Everything in Launch",
      "Ongoing SEO & content strategy",
      "SEM campaign management",
      "Monthly analytics reporting",
      "Digital footprint monitoring",
      "Quarterly Kaizen strategy reviews",
    ],
  },
  {
    id: "thinktank",
    name: "Think-Tank",
    price: "Custom",
    period: "tailored engagement",
    color: "#16A34A",
    features: [
      "Everything in Advance",
      "Custom app development",
      "Fractional CTO consulting",
      "Dedicated strategy team",
      "Priority support & SLAs",
      "Full digital transformation roadmap",
    ],
  },
];

// ─── Resource Center / Blog ────────────────────────────────────────────────
export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  content: string[]; // paragraphs
}

export const ARTICLE_CATEGORIES = ["All", "Digital Strategy", "SEO Tips", "Kaizen", "Web & Apps"];

export const ARTICLES: Article[] = [
  {
    id: "kaizen-for-digital-teams",
    title: "Kaizen for Digital Teams: Small Improvements, Massive Results",
    category: "Kaizen",
    excerpt:
      "How the Japanese philosophy of continuous improvement transforms websites, campaigns, and entire businesses — one 1% gain at a time.",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784734139387_c25663eb.jpg",
    author: "Advance My Idea Think-Tank",
    date: "July 14, 2026",
    readTime: "6 min read",
    content: [
      "Kaizen — 改善, literally 'change for the better' — was born on Toyota's factory floors, but its most powerful modern application may be in digital business. The core idea is deceptively simple: instead of betting everything on massive, risky overhauls, you commit to small, continuous, measurable improvements that compound over time.",
      "Consider a website converting at 2%. A redesign might promise to double that overnight — and might just as easily tank it. The Kaizen approach instead runs a steady cadence of small experiments: a clearer headline this week, a faster checkout next week, better mobile navigation the week after. Each change is measured, kept if it wins, reverted if it doesn't.",
      "At Advance My Idea, we've operated this way since 2003. Our five-phase process — Discover, Design, Develop, Deploy, Improve — deliberately loops back on itself. The 'Improve' phase feeds directly into the next round of discovery, which means no client engagement ever truly plateaus.",
      "The math is compelling. A 1% improvement each week compounds to roughly 67% improvement in a year. Few redesigns can promise that — and none can promise it with so little risk.",
      "Start small: pick one metric that matters, make one improvement this week, and measure honestly. Then do it again. That's Kaizen. That's how ideas advance.",
    ],
  },
  {
    id: "seo-fundamentals-2026",
    title: "SEO in 2026: The Fundamentals That Still Win",
    category: "SEO Tips",
    excerpt:
      "Algorithms change constantly, but the pillars of search visibility haven't moved. Here's where to focus your energy this year.",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784734138298_9b640c1c.jpg",
    author: "Advance My Idea Think-Tank",
    date: "June 30, 2026",
    readTime: "8 min read",
    content: [
      "Every year brings breathless headlines that 'SEO is dead.' Every year, businesses that rank well keep winning customers at a fraction of the cost of paid channels. The truth is that SEO isn't dying — it's maturing, and the fundamentals matter more than ever.",
      "First: technical health. Search engines reward sites that load fast, render cleanly on mobile, and are easy to crawl. Before chasing keywords, fix your Core Web Vitals, eliminate broken links, and ensure your site structure makes sense to both humans and bots.",
      "Second: genuine expertise. AI-generated filler content is everywhere, which makes authentic, experience-backed content stand out more than ever. Write what only your business can write — real case studies, real numbers, real opinions earned from real work.",
      "Third: local signals. For service businesses, the map pack is the battleground. Consistent listings, steady review velocity, and locally-relevant content routinely outperform national campaigns for driving actual phone calls.",
      "Finally, treat SEO as a Kaizen discipline, not a one-time project. Rankings compound the same way improvements do: steadily, then suddenly.",
    ],
  },
  {
    id: "digital-strategy-roadmap",
    title: "Building a Digital Strategy Roadmap That Actually Gets Executed",
    category: "Digital Strategy",
    excerpt:
      "Most strategy decks die in a drawer. A think-tank's guide to creating roadmaps that survive contact with reality.",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784734139848_792ca420.jpg",
    author: "Advance My Idea Think-Tank",
    date: "June 18, 2026",
    readTime: "7 min read",
    content: [
      "After 27 years of strategy engagements, we've learned that the difference between a strategy that works and one that gathers dust isn't intelligence — it's structure. Great roadmaps share three traits: they're sequenced, they're owned, and they're measurable.",
      "Sequenced means every initiative has an order and a dependency map. 'Launch a loyalty app' is a wish; 'fix checkout, then add accounts, then launch loyalty' is a plan. When priorities compete, sequence decides.",
      "Owned means every line item has a single accountable name attached — not a department, a person. Shared ownership is no ownership.",
      "Measurable means each phase defines its success metric before work begins. If you can't say what number should move, the initiative isn't ready for the roadmap.",
      "We recommend planning in 90-day horizons with a 12-month vision. Long enough to accomplish something real, short enough to adapt when the market shifts. Then review quarterly — Kaizen applies to strategy, too.",
    ],
  },
  {
    id: "local-seo-map-pack",
    title: "Winning the Map Pack: Local SEO Tactics for Service Businesses",
    category: "SEO Tips",
    excerpt:
      "The three-listing map pack captures the lion's share of local clicks. Here's the playbook we use to get clients there.",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784734141061_74fdd00f.jpg",
    author: "Advance My Idea Think-Tank",
    date: "May 27, 2026",
    readTime: "5 min read",
    content: [
      "When someone searches 'plumber near me,' the three businesses in the map pack win the call. Everyone else splits the leftovers. Getting into that pack is one of the highest-ROI moves a local service business can make.",
      "Start with your Google Business Profile. Complete every field, choose categories precisely, add photos monthly, and post updates weekly. Google rewards profiles that look alive.",
      "Next, reviews — the single strongest ranking and conversion signal combined. Build a simple, consistent ask into your service workflow. Velocity matters more than volume: ten reviews a month beats a hundred all at once, every time.",
      "Citation consistency comes third. Your name, address, and phone number must match exactly across every directory. Small mismatches erode trust signals more than most owners realize.",
      "Finally, build location-relevant content on your site: service-area pages, local project galleries, neighborhood-specific FAQs. We've used this exact playbook to put clients in the top three across nine cities simultaneously.",
    ],
  },
  {
    id: "website-redesign-vs-kaizen",
    title: "Redesign or Refine? When to Rebuild Your Website (and When Not To)",
    category: "Web & Apps",
    excerpt:
      "The full redesign is often the wrong call. A framework for deciding between rebuilding and continuous refinement.",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784734144081_0cecf91f.jpg",
    author: "Advance My Idea Think-Tank",
    date: "May 12, 2026",
    readTime: "6 min read",
    content: [
      "The average business redesigns its website every three years — and loses hard-won SEO equity, conversion learnings, and user familiarity each time. Sometimes a rebuild is genuinely necessary. Often, it's an expensive way to avoid harder questions.",
      "Rebuild when the foundation is broken: the platform can't support what the business needs, the codebase is unmaintainable, or the site fails on mobile at a structural level. These are engineering problems, and engineering problems justify engineering solutions.",
      "Refine when the foundation is sound but performance lags. Weak conversion, dated visuals, and slow pages can almost always be fixed incrementally — with less risk, less cost, and no traffic cliff.",
      "The honest test: list what the redesign is supposed to fix, then ask which items truly require starting over. In our experience, it's usually fewer than a third.",
      "Whichever path you choose, protect your search equity: map every URL, preserve your best-performing content, and measure before-and-after relentlessly.",
    ],
  },
  {
    id: "sem-budget-efficiency",
    title: "Stretching Your SEM Budget: 7 Efficiency Plays for Smaller Advertisers",
    category: "Digital Strategy",
    excerpt:
      "You don't need enterprise spend to compete in paid search. You need tighter targeting, better structure, and honest measurement.",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784734143609_b51305e2.jpg",
    author: "Advance My Idea Think-Tank",
    date: "April 22, 2026",
    readTime: "7 min read",
    content: [
      "Small advertisers often assume they're doomed to lose paid search to bigger budgets. Not so. Big budgets breed waste; small budgets, managed well, breed discipline — and discipline wins auctions.",
      "Play one: negative keywords. Most accounts we audit waste 20–35% of spend on irrelevant queries. A weekly negative-keyword review is the cheapest optimization in all of SEM.",
      "Play two: geographic precision. Bid up in the zip codes where your best customers actually live; exclude the ones that never convert. Play three: dayparting — if your leads convert on weekday mornings, stop paying full price for Saturday midnight clicks.",
      "Play four: single-theme ad groups with tightly matched landing pages. Relevance lowers your cost per click and raises your conversion rate simultaneously — a double win.",
      "Plays five through seven: call tracking so you count real leads, not clicks; retargeting the 97% who didn't convert the first time; and a monthly ROAS review where you ruthlessly reallocate from losers to winners. That's how a modest budget produces a 5x return.",
    ],
  },
  {
    id: "kaizen-customer-experience",
    title: "Applying Kaizen to Customer Experience: The Feedback Loop That Never Closes",
    category: "Kaizen",
    excerpt:
      "Your customers are telling you exactly how to improve — daily. Kaizen gives you the system to actually listen and act.",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784734153477_08db36b8.jpg",
    author: "Advance My Idea Think-Tank",
    date: "April 3, 2026",
    readTime: "5 min read",
    content: [
      "Every support ticket, review, abandoned cart, and rage-click is a customer telling you how to improve. Most businesses collect this feedback; very few operationalize it. Kaizen provides the missing system.",
      "The mechanism is a standing weekly ritual we call the improvement loop: gather the week's signals, pick the single highest-impact friction point, fix it, and measure the result. One fix per week, every week, forever.",
      "The discipline is in the constraint. Teams that try to fix everything fix nothing. Teams that fix one real problem weekly transform their customer experience within a quarter — and their metrics prove it.",
      "Digital footprint management is where this pays off publicly. When customers see their feedback acted on — a confusing page clarified, a slow process streamlined — reviews improve, and improved reviews compound into rankings, trust, and revenue.",
      "Small improvements, honestly measured, relentlessly repeated. It works on factory floors, it works on websites, and it works on customer relationships.",
    ],
  },
  {
    id: "app-mvp-scope",
    title: "Scoping Your App MVP: What to Build First (and What to Cut)",
    category: "Web & Apps",
    excerpt:
      "The most dangerous phrase in app development is 'while we're at it.' How to scope a first version that ships and succeeds.",
    image: "https://d64gsuwffb70l.cloudfront.net/6a60dfea4cabbf15ee462cbd_1784734145730_2a3f092c.jpg",
    author: "Advance My Idea Think-Tank",
    date: "March 17, 2026",
    readTime: "6 min read",
    content: [
      "Most app projects don't fail in development — they fail in scoping. Features accumulate, budgets balloon, launch dates slide, and by the time version one ships, the market has moved. The antidote is a genuinely minimal viable product.",
      "Start with the one job your app must do. Not the ten things it could do — the one thing a user would miss if it vanished. For a fitness app, that might be logging a workout in under ten seconds. Everything else is a candidate for cutting.",
      "Our scoping filter has three questions: Does this feature serve the core job? Will its absence stop launch? Can it be added later without re-architecting? If the answers are no, no, and yes — cut it from v1.",
      "Authentication, payments, and push notifications feel mandatory but often aren't for a first release. We've launched successful MVPs with none of the three, validating demand before investing in infrastructure.",
      "Ship the smallest thing that delivers real value, then let actual user behavior — not stakeholder opinion — drive the roadmap. That's Kaizen applied to product development, and it's why our MVPs reach six-figure download counts.",
    ],
  },
];
