// ─── Case Study Detail Data ────────────────────────────────────────────────
// One case study per portfolio item, rendered at /case-studies/:slug

export interface CaseStudy {
  portfolioId: number; // matches PORTFOLIO id in siteData.ts
  slug: string;
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

export const CASE_STUDIES: CaseStudy[] = [
  {
    portfolioId: 1,
    slug: "regional-law-firm-platform",
    metaTitle: "Case Study: Law Firm Website Rebuild Drives +214% Leads | Advance My Idea",
    metaDescription:
      "How a full website rebuild with intake automation tripled qualified consultation requests for a regional law firm. Web development case study by Advance My Idea.",
    client: "Chen & Associates Law",
    industry: "Legal Services",
    timeline: "10 weeks to launch, ongoing Kaizen optimization",
    services: ["Web Development", "Intake Automation", "SEO Foundations"],
    challenge: [
      "The firm's decade-old website looked dated, loaded slowly on mobile, and — worst of all — funneled every inquiry into a single generic contact form. Paralegals spent hours qualifying leads by phone, and prospective clients often gave up before anyone called back.",
      "Partners knew they were losing cases to competitors with faster, more professional digital intake, but two previous redesign attempts had stalled in committee.",
    ],
    solution: [
      "We began think-tank style: mapping the client journey for each practice area before touching design. The rebuild delivered a fast, mobile-first platform with dedicated practice-area pages, attorney profiles, and — the centerpiece — an automated intake system that qualifies prospects with practice-specific questions and routes them to the right attorney instantly.",
      "Post-launch, quarterly Kaizen reviews kept refining the funnel: clearer CTAs, streamlined forms, and content answering the questions prospects actually search for.",
    ],
    results: [
      { value: "+214%", label: "qualified lead volume" },
      { value: "3x", label: "consultation requests in 6 months" },
      { value: "-70%", label: "time spent manually qualifying leads" },
    ],
    quote: {
      text: "Advance My Idea rebuilt our entire digital intake process. Within six months our qualified consultation requests tripled — and their quarterly Kaizen reviews keep finding new gains we never would have spotted ourselves.",
      name: "Margaret Chen",
      role: "Managing Partner, Chen & Associates Law",
    },
  },
  {
    portfolioId: 2,
    slug: "ecommerce-storefront-overhaul",
    metaTitle: "Case Study: E-Commerce Conversion Rate Up 168% | Advance My Idea",
    metaDescription:
      "How Kaizen-driven refinement — not a risky redesign — lifted an e-commerce storefront's conversion rate 168% and cut cart abandonment nearly in half.",
    client: "Harbor Goods Co.",
    industry: "E-Commerce / Retail",
    timeline: "12 months of weekly Kaizen cycles",
    services: ["Web Development", "Conversion Optimization", "Analytics"],
    challenge: [
      "Harbor Goods had healthy traffic but a leaky funnel: slow product pages, a five-step checkout, and a cart abandonment rate well above industry benchmarks. Two previous agencies had each pitched a full redesign — expensive, risky, and with no guarantee of improvement.",
    ],
    solution: [
      "Instead of a rebuild, we ran the storefront through our continuous-improvement engine: one measured experiment per week, every week. Image optimization and code cleanup cut load times by more than half. The checkout was compressed to two steps. Trust signals, clearer shipping messaging, and a persistent mini-cart each earned their place through honest A/B measurement.",
      "Every change was kept if it won and reverted if it didn't — protecting hard-won SEO equity and user familiarity throughout.",
    ],
    results: [
      { value: "+168%", label: "conversion rate" },
      { value: "-47%", label: "cart abandonment" },
      { value: "-58%", label: "page load time" },
    ],
    quote: {
      text: "We'd been through two agencies before finding this team. Instead of pitching a risky redesign, they refined our storefront week by week. Cart abandonment fell steadily every single month — the compounding effect is real.",
      name: "Derek Okafor",
      role: "E-Commerce Director, Harbor Goods Co.",
    },
  },
  {
    portfolioId: 3,
    slug: "healthcare-provider-portal",
    metaTitle: "Case Study: Healthcare Portal Onboards 40k Patients | Advance My Idea",
    metaDescription:
      "How a HIPAA-conscious patient portal with scheduling and secure messaging onboarded 40,000 patients and freed a health network's front desk.",
    client: "Lakeside Health Network",
    industry: "Healthcare",
    timeline: "16 weeks to launch, phased feature rollout",
    services: ["Web Application Development", "Security & Compliance", "UX Design"],
    challenge: [
      "Lakeside's front desk was drowning: appointment scheduling, prescription questions, and records requests all flowed through phone lines. Patients waited on hold; staff burned out. Leadership wanted a patient portal but had seen peer organizations launch portals nobody used.",
    ],
    solution: [
      "We designed for adoption first. Discovery workshops with actual patients — not just administrators — shaped a portal where the three most common tasks (book an appointment, message a provider, view results) each take under a minute.",
      "The build was HIPAA-conscious from architecture up: encrypted messaging, audited access, and secure authentication that stays friendly for older patients. A phased rollout with in-clinic onboarding drove adoption clinic by clinic.",
    ],
    results: [
      { value: "40k", label: "patients onboarded" },
      { value: "-62%", label: "front-desk call volume" },
      { value: "0", label: "security incidents since launch" },
    ],
    quote: {
      text: "They handled a HIPAA-conscious patient portal with the seriousness it deserved — clear milestones, transparent communication, zero surprises. Forty thousand patients onboarded and our front desk finally breathes.",
      name: "Dr. Priya Raman",
      role: "Chief Operations Officer, Lakeside Health Network",
    },
  },
  {
    portfolioId: 4,
    slug: "national-seo-campaign",
    metaTitle: "Case Study: Page 4 to #1 for 47 Keywords | SEO | Advance My Idea",
    metaDescription:
      "How technical SEO and a content engine took a B2B industrial brand from page 4 to position 1 for 47 revenue-driving keywords, growing organic traffic 287%.",
    client: "Summit Industrial Supply",
    industry: "B2B Industrial",
    timeline: "6 months to first-page dominance, ongoing",
    services: ["Technical SEO", "Content Strategy", "Link Building"],
    challenge: [
      "Summit sold superior products but lived on page four of Google — invisible. Paid ads carried the entire pipeline at rising cost, and leadership doubted SEO could ever work in their 'boring' industry.",
    ],
    solution: [
      "The technical audit found crippling issues first: duplicate content across thousands of product pages, broken canonical tags, and a mobile experience that failed Core Web Vitals. We fixed in priority order, then built a content engine around genuine expertise — application guides, spec comparisons, and real project write-ups no competitor could fake.",
      "Authoritative links followed naturally from content worth citing. Monthly reporting tracked the exact keywords tied to revenue, not vanity terms.",
    ],
    results: [
      { value: "#1", label: "position for 47 keywords" },
      { value: "+287%", label: "organic traffic" },
      { value: "Lowest", label: "cost-per-lead of any channel" },
    ],
    quote: {
      text: "Their SEO team took us from page four to position one for the searches that actually drive revenue. Organic traffic is up nearly threefold, and it's now our cheapest and best-converting channel by far.",
      name: "Tom Vasquez",
      role: "Founder & CEO, Summit Industrial Supply",
    },
  },
  {
    portfolioId: 5,
    slug: "restaurant-group-ads-engine",
    metaTitle: "Case Study: 5.2x ROAS for 12-Location Restaurant Group | Advance My Idea",
    metaDescription:
      "How geo-targeted SEM campaigns fill seats nightly across 12 restaurant locations at a 5.2x return on ad spend. Paid media case study.",
    client: "Bella Vita Restaurant Group",
    industry: "Hospitality / Restaurants",
    timeline: "90 days to target efficiency, managed monthly",
    services: ["SEM & Paid Media", "Geo-Targeting", "Conversion Tracking"],
    challenge: [
      "Twelve locations shared one ad budget spread thin and evenly — regardless of each restaurant's capacity, competition, or neighborhood. Corporate couldn't tell which dollars produced diners and which produced nothing.",
    ],
    solution: [
      "We rebuilt the account around geography and intent: campaign structures per location, bids weighted by zip-code performance, and dayparting matched to each restaurant's actual booking curve. Negative keywords eliminated a third of wasted spend in the first month.",
      "Call and reservation tracking connected every dollar to seated tables. A monthly ROAS review reallocates budget from underperformers to winners — relentlessly.",
    ],
    results: [
      { value: "5.2x", label: "return on ad spend" },
      { value: "12", label: "locations filled nightly" },
      { value: "-33%", label: "wasted spend eliminated in month one" },
    ],
    quote: {
      text: "Twelve locations, one ad budget, and a team that treats every dollar like their own. The geo-targeted campaigns fill seats nightly, and the monthly ROAS reviews mean we always know exactly what's working.",
      name: "Alicia Fontaine",
      role: "Marketing VP, Bella Vita Restaurant Group",
    },
  },
  {
    portfolioId: 6,
    slug: "saas-analytics-dashboard",
    metaTitle: "Case Study: SaaS Dashboard Cuts Churn 38% | Advance My Idea",
    metaDescription:
      "How a customer-facing analytics dashboard became a SaaS product's stickiest feature and reduced churn by 38%. Web application case study.",
    client: "SaaS Platform (B2B)",
    industry: "Software / SaaS",
    timeline: "14 weeks to v1, iterative releases since",
    services: ["Web Application Development", "Data Visualization", "Product Strategy"],
    challenge: [
      "The platform delivered real value, but customers couldn't see it. Monthly reports went unread, renewal conversations started from zero, and churn crept upward — customers weren't leaving for competitors; they were leaving because they'd forgotten why they were paying.",
    ],
    solution: [
      "We designed a customer-facing insights dashboard that surfaces the value already being delivered: outcomes achieved, time saved, and trends over time — visualized beautifully and pushed to stakeholders in a weekly digest.",
      "Think-tank sessions with the product team identified the metrics customers actually brag about internally, and the dashboard leads with those. It became the screen customers show their bosses.",
    ],
    results: [
      { value: "-38%", label: "customer churn" },
      { value: "4.6x", label: "weekly active usage of the dashboard" },
      { value: "#1", label: "most-used feature within 90 days" },
    ],
    quote: {
      text: "The dashboard changed our renewal conversations completely. Customers now see their ROI every week without us saying a word — it's become the stickiest feature in the product.",
      name: "Product VP",
      role: "B2B SaaS Platform",
    },
  },
  {
    portfolioId: 7,
    slug: "fitness-coaching-app",
    metaTitle: "Case Study: Fitness App Reaches 120k Downloads | Advance My Idea",
    metaDescription:
      "How a ruthlessly scoped MVP grew into a cross-platform fitness coaching app with 120k downloads, subscription billing, and live coaching.",
    client: "Fitness Coaching Startup",
    industry: "Health & Fitness",
    timeline: "12 weeks to MVP, roadmap driven by user data",
    services: ["App Development", "MVP Scoping", "Subscription Billing"],
    challenge: [
      "The founders arrived with a 40-feature wishlist and funding for about ten of them. Previous development quotes were triple their budget, and every agency they'd met simply priced the whole list instead of questioning it.",
    ],
    solution: [
      "Our scoping filter found the one job that mattered: logging a workout in under ten seconds. Version one shipped exactly that, plus program browsing — no payments, no push notifications, no social feed. Real user behavior then drove the roadmap: subscription billing arrived once retention proved demand, live coaching once users asked for it by name.",
      "Cross-platform architecture kept one codebase serving both iOS and Android, stretching the budget further with every release.",
    ],
    results: [
      { value: "120k", label: "downloads" },
      { value: "10 sec", label: "to log a workout — the core job" },
      { value: "3x", label: "budget efficiency vs. original quotes" },
    ],
    quote: {
      text: "Every other agency priced our wishlist. This team questioned it — and that discipline is the only reason we launched at all. The app now funds its own roadmap.",
      name: "Co-Founder",
      role: "Fitness Coaching Startup",
    },
  },
  {
    portfolioId: 8,
    slug: "field-services-mobile-suite",
    metaTitle: "Case Study: Field Services App Saves 6 Hours/Week | Advance My Idea",
    metaDescription:
      "How a dispatch, invoicing, and photo documentation mobile suite eliminated 6 hours of weekly paperwork per technician for a 40-tech service fleet.",
    client: "Regional Field Services Company",
    industry: "Home & Commercial Services",
    timeline: "18 weeks, phased rollout across the fleet",
    services: ["App Development", "Workflow Automation", "Systems Integration"],
    challenge: [
      "Forty technicians ran their days on paper: carbon-copy work orders, handwritten invoices, and photo documentation living on personal phones. Billing lagged jobs by weeks, disputes were unwinnable without records, and office staff re-typed everything.",
    ],
    solution: [
      "We built a mobile suite around the technician's actual day: jobs dispatched to the phone, forms that complete in the driveway, photo documentation attached automatically to the work order, and invoices generated on job completion — synced to the office in real time.",
      "Offline-first architecture kept everything working in basements and dead zones. A phased rollout with ride-along training won over even the most paper-loyal veterans.",
    ],
    results: [
      { value: "-6 hrs", label: "paperwork per technician per week" },
      { value: "-19 days", label: "invoice-to-payment cycle" },
      { value: "100%", label: "jobs with photo documentation" },
    ],
    quote: {
      text: "Our techs actually thank us for the app — that's how you know it works. Billing that took three weeks now happens the same day the job closes.",
      name: "Operations Director",
      role: "Regional Field Services Company",
    },
  },
  {
    portfolioId: 9,
    slug: "retail-loyalty-app",
    metaTitle: "Case Study: Loyalty App Lifts Repeat Purchases 31% | Advance My Idea",
    metaDescription:
      "How a points, offers, and push campaign loyalty app turned occasional shoppers into regulars, lifting repeat purchases 31% for a retail brand.",
    client: "Regional Retail Brand",
    industry: "Retail",
    timeline: "14 weeks to launch, seasonal campaign cycles since",
    services: ["App Development", "Loyalty Program Design", "Push Campaigns"],
    challenge: [
      "The retailer's punch-card loyalty program lived in wallets and junk drawers. Marketing had no channel to reach past customers besides paid ads — re-acquiring people who already loved the store, at full price, again and again.",
    ],
    solution: [
      "We designed a loyalty app around instant gratification: points visible in real time, a welcome offer redeemable on first visit, and birthday rewards that feel personal. Push campaigns are segmented by purchase history — lapsed shoppers get win-back offers; regulars get early access, not discounts they don't need.",
      "Kaizen cycles tuned the program continuously: offer thresholds, push timing, and reward mix all earned their settings through measurement.",
    ],
    results: [
      { value: "+31%", label: "repeat purchases" },
      { value: "62%", label: "of transactions linked to the app" },
      { value: "8x", label: "cheaper than re-acquiring via paid ads" },
    ],
    quote: {
      text: "We finally own the relationship with our customers instead of renting it from ad platforms. The app pays for itself many times over every quarter.",
      name: "Owner",
      role: "Regional Retail Brand",
    },
  },
  {
    portfolioId: 10,
    slug: "nonprofit-digital-rebrand",
    metaTitle: "Case Study: Nonprofit Rebrand Doubles Donations | Advance My Idea",
    metaDescription:
      "How a complete digital footprint refresh with storytelling-driven campaigns grew a nonprofit's donations 2.4x. Digital strategy case study.",
    client: "Brightpath Foundation",
    industry: "Nonprofit",
    timeline: "8 weeks rebrand, campaigns across giving season",
    services: ["Digital Strategy", "Brand & Web Refresh", "Campaign Storytelling"],
    challenge: [
      "Brightpath did remarkable work that almost nobody could see. An outdated website buried impact stories three clicks deep, donation pages leaked donors at every step, and social channels posted announcements instead of stories.",
    ],
    solution: [
      "We refreshed the entire digital footprint around one principle: lead with the people helped, not the organization. The new site opens with impact stories, a streamlined donation flow works beautifully on phones, and giving levels show donors exactly what each dollar does.",
      "Storytelling-driven campaigns carried the same voice across email and social through giving season — and we trained the small internal team to keep improving on their own.",
    ],
    results: [
      { value: "2.4x", label: "donations year over year" },
      { value: "+85%", label: "donation page completion rate" },
      { value: "3x", label: "average email campaign engagement" },
    ],
    quote: {
      text: "As a nonprofit, every dollar matters. Their digital rebrand and storytelling-driven campaigns more than doubled our donations — and they taught our small team to keep improving on our own. That generosity of knowledge is rare.",
      name: "Sandra Kim",
      role: "Executive Director, Brightpath Foundation",
    },
  },
  {
    portfolioId: 11,
    slug: "manufacturer-go-digital-roadmap",
    metaTitle: "Case Study: Digital Roadmap Opens $1.8M Pipeline | Advance My Idea",
    metaDescription:
      "How a think-tank digital transformation strategy opened a direct-to-dealer online sales channel worth $1.8M in first-year pipeline for a manufacturer.",
    client: "Whitfield Manufacturing",
    industry: "Manufacturing",
    timeline: "6-week strategy engagement, 12-month roadmap execution",
    services: ["Digital Strategy", "Market Analysis", "E-Commerce Enablement"],
    challenge: [
      "Whitfield sold exclusively through distributors — and watched margin erode as distributors consolidated. Leadership sensed a direct-to-dealer opportunity but had no map: which products, what pricing, what channel conflict risks, what technology.",
    ],
    solution: [
      "This was a think-tank engagement first: six weeks of market analysis, dealer interviews, competitive teardown, and channel-conflict modeling before a single line of code. The resulting roadmap sequenced everything — quick-win product lines first, dealer portal second, pricing guardrails throughout — in 90-day horizons with named owners and success metrics.",
      "Execution followed the map: a direct-to-dealer ordering platform launched on schedule, with distributor relationships intact.",
    ],
    results: [
      { value: "$1.8M", label: "new pipeline in year one" },
      { value: "0", label: "distributor relationships lost" },
      { value: "90-day", label: "planning horizons, all delivered on time" },
    ],
    quote: {
      text: "We hired them as a think-tank first — market analysis, competitive strategy, the works — before a line of code was written. That roadmap opened a direct-to-dealer channel worth $1.8M in new pipeline our first year.",
      name: "James Whitfield",
      role: "President, Whitfield Manufacturing",
    },
  },
  {
    portfolioId: 12,
    slug: "local-services-domination",
    metaTitle: "Case Study: Top 3 Map Pack in 9 Cities | Local SEO | Advance My Idea",
    metaDescription:
      "How local SEO and reputation management put a multi-market home services brand in the top 3 map pack across 9 cities simultaneously.",
    client: "Multi-Market Home Services Brand",
    industry: "Home Services",
    timeline: "9 months to nine-city dominance, managed ongoing",
    services: ["Local SEO", "Reputation Management", "Content Strategy"],
    challenge: [
      "Nine cities, nine Google Business Profiles in various states of neglect, and citation data so inconsistent that Google couldn't tell which listings belonged to the same company. Competitors owned the map pack in every market — and the phone calls that come with it.",
    ],
    solution: [
      "We executed the full local playbook market by market: profiles completed and categorized precisely, photos and posts on a steady cadence, and citation cleanup until every directory agreed on name, address, and phone.",
      "A review-velocity system built the ask into the service workflow — ten reviews a month beats a hundred all at once. Service-area pages, local project galleries, and neighborhood FAQs gave each city genuinely local content worth ranking.",
    ],
    results: [
      { value: "Top 3", label: "map pack position in 9 cities" },
      { value: "+340%", label: "calls from Google Business Profiles" },
      { value: "4.8", label: "average review rating maintained" },
    ],
    quote: {
      text: "We went from invisible to owning the map in every market we serve. The phones ring all day now — and we can trace it directly to the work.",
      name: "General Manager",
      role: "Multi-Market Home Services Brand",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getCaseStudyByPortfolioId(id: number): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.portfolioId === id);
}
