import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote, Target, TrendingUp, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo, { SITE_URL } from "@/components/Seo";
import { CASE_STUDIES, getCaseStudy } from "@/data/caseStudies";
import { BOOKING_URL, BRAND, LOGO_URL, PORTFOLIO } from "@/data/siteData";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = getCaseStudy(slug ?? "");
  const portfolioItem = study ? PORTFOLIO.find((p) => p.id === study.portfolioId) : undefined;

  if (!study || !portfolioItem) {
    return (
      <div className="min-h-screen bg-white font-sans antialiased">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Case Study Not Found</h1>
          <p className="mt-3 text-gray-600">Browse all of our client success stories.</p>
          <Link
            to="/portfolio"

            className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 font-bold text-white hover:bg-[#E4342B] transition-colors"
          >
            View Our Work
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug)
    .map((c) => ({ study: c, item: PORTFOLIO.find((p) => p.id === c.portfolioId)! }))
    .filter((x) => x.item)
    .slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: portfolioItem.title,
      description: study.metaDescription,
      image: portfolioItem.image,
      author: { "@type": "Organization", name: BRAND.name, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: BRAND.name,
        logo: { "@type": "ImageObject", url: LOGO_URL },
      },
      mainEntityOfPage: `${SITE_URL}/case-studies/${study.slug}`,
      articleSection: "Case Study",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE_URL}/portfolio` },

        { "@type": "ListItem", position: 3, name: portfolioItem.title, item: `${SITE_URL}/case-studies/${study.slug}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Seo
        title={study.metaTitle}
        description={study.metaDescription}
        path={`/case-studies/${study.slug}`}
        image={portfolioItem.image}
        type="article"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gray-950 py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/portfolio"

              className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Case Studies
            </Link>
            <span className="mt-6 block text-xs font-bold uppercase tracking-[0.25em] text-[#FACC15]">
              Case Study · {portfolioItem.category}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {portfolioItem.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <span className="block text-gray-500 font-semibold uppercase tracking-wider text-xs">Client</span>
                <span className="text-white font-bold">{study.client}</span>
              </div>
              <div>
                <span className="block text-gray-500 font-semibold uppercase tracking-wider text-xs">Industry</span>
                <span className="text-white font-bold">{study.industry}</span>
              </div>
              <div>
                <span className="block text-gray-500 font-semibold uppercase tracking-wider text-xs">Timeline</span>
                <span className="text-white font-bold">{study.timeline}</span>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.services.map((s) => (
                <span key={s} className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-bold text-white">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-0">
          <img
            src={portfolioItem.image}
            alt={portfolioItem.title}
            className="mt-10 w-full rounded-2xl object-cover aspect-[21/9] border border-gray-100 shadow-lg"
          />
        </div>

        {/* Results banner */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {study.results.map((r) => (
                <div key={r.label} className="rounded-2xl bg-green-50 border border-green-100 p-6 text-center">
                  <div className="inline-flex items-center gap-2 text-3xl font-extrabold text-[#16A34A]">
                    <TrendingUp className="h-6 w-6" />
                    {r.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-gray-700">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge / Solution */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                  <Target className="h-6 w-6 text-[#E4342B]" />
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900">The Challenge</h2>
              </div>
              <div className="mt-5 space-y-4">
                {study.challenge.map((p, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <Wrench className="h-6 w-6 text-[#1D4ED8]" />
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900">The Solution</h2>
              </div>
              <div className="mt-5 space-y-4">
                {study.solution.map((p, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            {study.quote && (
              <blockquote className="relative overflow-hidden rounded-3xl bg-gray-950 p-8 sm:p-12">
                <div className="absolute top-0 inset-x-0 h-1 flex">
                  {["#E4342B", "#1D4ED8", "#FACC15", "#16A34A", "#DB2777", "#7C3AED"].map((c) => (
                    <div key={c} className="flex-1" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <Quote className="h-10 w-10 text-[#FACC15]" />
                <p className="mt-5 text-xl leading-relaxed text-white italic">
                  &ldquo;{study.quote.text}&rdquo;
                </p>
                <footer className="mt-6">
                  <span className="block font-bold text-white">{study.quote.name}</span>
                  <span className="text-sm text-gray-400">{study.quote.role}</span>
                </footer>
              </blockquote>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
              Want results like these?
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Every engagement starts with a conversation — and a free 48-hour audit if you want one.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#E4342B] px-7 py-3.5 font-bold text-white hover:bg-[#c22a22] transition-colors"
              >
                Discuss a Project Like This
              </a>
              <Link
                to="/contact#free-audit"

                className="rounded-lg border-2 border-gray-900 px-7 py-3.5 font-bold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
              >
                Get My Free Audit
              </Link>
            </div>
          </div>
        </section>

        {/* More case studies */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center">More Client Success Stories</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map(({ study: cs, item }) => (
                <Link
                  key={cs.slug}
                  to={`/case-studies/${cs.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#16A34A]">
                      <TrendingUp className="h-4 w-4" />
                      {item.metric}
                    </div>
                    <span className="mt-3 flex items-center gap-1 text-sm font-bold text-[#1D4ED8]">
                      Read the case study <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
