import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import AuditBannerSection from "@/components/AuditBannerSection";
import TimelineSection from "@/components/TimelineSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PackagesSection from "@/components/PackagesSection";
import ResourceCenterSection from "@/components/ResourceCenterSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Seo from "@/components/Seo";

import Footer from "@/components/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Seo
        title="Advance My Idea | Web Development, SEO & Digital Strategy Think-Tank Since 1999"
        description="Kaizen-driven business development think-tank offering web development, SEO, SEM, and app development since 1999. Get a free 48-hour website audit."
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <AuditBannerSection />
        <TimelineSection />
        <TestimonialsSection />
        <PackagesSection />
        <ResourceCenterSection />
        <FaqSection />
        <ContactSection />

      </main>
      <Footer />
    </div>
  );
}
