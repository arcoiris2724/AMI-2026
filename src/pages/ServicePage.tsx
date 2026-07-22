import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2, Gauge, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo, { SITE_URL } from "@/components/Seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getServicePage, SERVICE_PAGES } from "@/data/servicePages";
import { BOOKING_URL, BRAND, PORTFOLIO, SERVICES } from "@/data/siteData";
import { getCaseStudyByPortfolioId } from "@/data/caseStudies";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const page = getServicePage(slug ?? "");

  if (!page) {
    return (
      <div className="min-h-screen bg-white font-sans antialiased">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Service Not Found</h1>
          <p className="mt-3 text-gray-600">Explore our full range of services below.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {SERVICE_PAGES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="rounded-lg border-2 border-gray-900 px-5 py-2.5 text-sm font-bold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
              >
                {s.h1.split(" ").slice(0, 2).join(" ")}
              </Link>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const service = SERVICES.find((s) => s.id === page.serviceId);
  const color = service?.color ?? "#1D4ED8";
  const portfolioItems = PORTFOLIO.filter((p) => p.category === page.portfolioCategory).slice(0, 3);
  const otherServices = SERVICE_PAGES.filter((s) => s.slug !== page.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service?.title ?? page.h1,
      description: page.metaDescription,
      provider: { "@type": "ProfessionalService", name: BRAND.name, url: SITE_URL },
      areaServed: "United States",
      url: `${SITE_URL}/services/${page.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
        { "@type": "ListItem", position: 3, name: service?.title ?? page.h1, item: `${SITE_URL}/services/${page.slug}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        keywords={page.keywords}
        path={`/services/${page.slug}`}
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gray-950 py-20 lg:py-28">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25"
            style={{ backgroundColor: color }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
            <span
              className="mt-6 block text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color }}
            >
              {service?.title}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {page.h1}
            </h1>
            <p className="mt-5 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              {page.subheadline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#E4342B] px-7 py-3.5 font-bold text-white hover:bg-[#c22a22] transition-colors"
              >
                <CalendarCheck className="h-5 w-5" />
                Book a Free Consultation
              </a>
              <Link
                to="/#free-audit"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 font-bold text-white hover:bg-white/10 transition-colors"
              >
                <Gauge className="h-5 w-5" />
                Get a Free Website Audit
              </Link>
            </div>
          </div>
        </section>

        {/* Intro + stats */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-5">
              {page.intro.map((p, i) => (
                <p key={i} className="text-lg text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {page.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center"
                  style={{ borderTopWidth: 4, borderTopColor: color }}
                >
                  <div className="text-3xl font-extrabold text-gray-900">{s.value}</div>
                  <div className="mt-1 text-sm text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 lg:py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 text-center">
              What's Included
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.deliverables.map((d) => (
                <div key={d.title} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                  <CheckCircle2 className="h-6 w-6" style={{ color }} />
                  <h3 className="mt-3 text-lg font-bold text-gray-900">{d.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{d.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related portfolio */}
        {portfolioItems.length > 0 && (
          <section className="py-16 lg:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 text-center">
                Proven Results in {page.portfolioCategory}
              </h2>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((p) => {
                  const cs = getCaseStudyByPortfolioId(p.id);
                  const card = (
                    <>
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                        <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#16A34A]">
                          <TrendingUp className="h-4 w-4" />
                          {p.metric}
                        </div>
                        {cs && (
                          <span className="mt-3 flex items-center gap-1 text-sm font-bold text-[#1D4ED8]">
                            Read the case study <ArrowRight className="h-4 w-4" />
                          </span>
                        )}
                      </div>
                    </>
                  );
                  return cs ? (
                    <Link
                      key={p.id}
                      to={`/case-studies/${cs.slug}`}
                      className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {card}
                    </Link>
                  ) : (
                    <div key={p.id} className="group rounded-2xl overflow-hidden bg-white border border-gray-200">
                      {card}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="py-16 lg:py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mt-8 space-y-4">
              {page.faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-gray-200 bg-white px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-bold text-gray-900">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[15px] leading-relaxed text-gray-600">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA + other services */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
              Ready to advance your idea?
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Book a free consultation with the think-tank — or start with a free 48-hour website audit.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-900 px-7 py-3.5 font-bold text-white hover:bg-[#E4342B] transition-colors"
              >
                Book a Free Consultation
              </a>
              <Link
                to="/#free-audit"
                className="rounded-lg border-2 border-gray-900 px-7 py-3.5 font-bold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
              >
                Get My Free Audit
              </Link>
            </div>
            <div className="mt-14 border-t border-gray-100 pt-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">
                Explore Other Services
              </h3>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                {otherServices.map((s) => {
                  const svc = SERVICES.find((x) => x.id === s.serviceId);
                  return (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                      {svc?.title ?? s.slug}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
