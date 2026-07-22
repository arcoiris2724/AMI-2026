import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import TimelineSection from "@/components/TimelineSection";
import PackagesSection from "@/components/PackagesSection";
import ResourceCenterSection from "@/components/ResourceCenterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <TimelineSection />
        <PackagesSection />
        <ResourceCenterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
