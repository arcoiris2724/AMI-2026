import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo, { SITE_URL } from "@/components/Seo";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import TimelineSection from "@/components/TimelineSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PackagesSection from "@/components/PackagesSection";
import ResourceCenterSection from "@/components/ResourceCenterSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import AuditBannerSection from "@/components/AuditBannerSection";
import { getSectionPage } from "@/data/sectionPages";

/** Which section component(s) each slug renders, plus optional extras. */
const PAGE_SECTIONS: Record<string, React.ComponentType[]> = {
  about: [AboutSection, TestimonialsSection, AuditBannerSection],
  services: [ServicesSection, PackagesSection, AuditBannerSection],
  process: [ProcessSection, AuditBannerSection],
  portfolio: [PortfolioSection, TestimonialsSection, AuditBannerSection],
  "our-story": [TimelineSection, AboutSection],
  packages: [PackagesSection, FaqSection, AuditBannerSection],
  resources: [ResourceCenterSection, AuditBannerSection],
  faq: [FaqSection, ContactSection],
  contact: [ContactSection, AuditBannerSection],

};

export default function SectionPage() {
  const { slug = "" } = useParams();
  const page = getSectionPage(slug);
  const sections = PAGE_SECTIONS[slug];

  if (!page || !sections) {
    return <Navigate to="/" replace />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: page.label,
        item: `${SITE_URL}/${page.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Seo
        title={page.title}
        description={page.description}
        keywords={page.keywords}
        path={`/${page.slug}`}
        jsonLd={jsonLd}
      />
      <Header />

      {/* Breadcrumb hero */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#FACC15]">{page.label}</span>
          </nav>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {page.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300 leading-relaxed">
            {page.subheading}
          </p>
          <div className="mt-8 flex h-1.5 w-40 rounded-full overflow-hidden">
            {["#E4342B", "#1D4ED8", "#FACC15", "#16A34A", "#DB2777", "#7C3AED"].map((c) => (
              <div key={c} className="flex-1" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
      </section>

      <main>
        {sections.map((Section, i) => (
          <Section key={i} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
