
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticlePage from "./pages/ArticlePage";
import ServicePage from "./pages/ServicePage";
import CaseStudyPage from "./pages/CaseStudyPage";
import AdminPage from "./pages/AdminPage";
import SectionPage from "./pages/SectionPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { SECTION_PAGES } from "./data/sectionPages";
import CookieConsentBanner from "./components/CookieConsentBanner";




const queryClient = new QueryClient();

/** Scrolls to top on route change, or to the hash target when present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // wait a tick for the page to render before scrolling to the anchor
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollManager />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/resources/:slug" element={<ArticlePage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

            {/* Dedicated indexable section pages: /about, /services, /contact, etc. */}
            {SECTION_PAGES.map((p) => (
              <Route key={p.slug} path={`/${p.slug}`} element={<SectionPage />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsentBanner />

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
