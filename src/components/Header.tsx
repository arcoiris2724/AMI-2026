import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LOGO_URL, BRAND, BOOKING_URL } from "@/data/siteData";
import { SECTION_PAGES, SectionPageMeta } from "@/data/sectionPages";

/** Order of nav items (by slug) */
const NAV_SLUGS = [
  "about",
  "services",
  "process",
  "portfolio",
  "our-story",
  "packages",
  "resources",
  "faq",
  "contact",
];

const NAV_PAGES = NAV_SLUGS
  .map((slug) => SECTION_PAGES.find((p) => p.slug === slug))
  .filter((p): p is SectionPageMeta => Boolean(p));

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  /**
   * Real hrefs (/about, /services…) so search engines can crawl every page.
   * When already on the homepage, intercept the click and smooth-scroll to
   * the matching section instead of navigating.
   */
  const handleNavClick = (e: React.MouseEvent, page: SectionPageMeta) => {
    setOpen(false);
    if (location.pathname === "/") {
      const target = document.querySelector(page.anchor);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const goHome = (e: React.MouseEvent) => {
    setOpen(false);
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      {/* colorful accent strip */}
      <div className="h-1 flex">
        <div className="flex-1 bg-[#E4342B]" />
        <div className="flex-1 bg-[#1D4ED8]" />
        <div className="flex-1 bg-[#FACC15]" />
        <div className="flex-1 bg-[#16A34A]" />
        <div className="flex-1 bg-[#DB2777]" />
        <div className="flex-1 bg-[#7C3AED]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link to="/" onClick={goHome} className="flex items-center gap-3" aria-label="Go to homepage">
            <img
              src={LOGO_URL}
              alt={`${BRAND.name} logo`}
              className="h-11 w-11 rounded-md object-cover ring-2 ring-gray-900"
            />
            <div className="text-left">
              <span className="block text-lg font-extrabold tracking-tight text-gray-900 leading-none">
                Advance<span className="text-[#E4342B]">My</span>Idea
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Est. {BRAND.founded} · Kaizen Driven
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_PAGES.map((p) => (
              <Link
                key={p.slug}
                to={`/${p.slug}`}
                onClick={(e) => handleNavClick(e, p)}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === `/${p.slug}`
                    ? "text-[#1D4ED8]"
                    : "text-gray-700 hover:text-[#1D4ED8]"
                }`}
              >
                {p.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-[#E4342B] transition-colors"
            >
              Book a Consultation
            </a>
          </nav>

          <button
            className="lg:hidden p-2 text-gray-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {NAV_PAGES.map((p) => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              onClick={(e) => handleNavClick(e, p)}
              className="block w-full text-left py-3 text-sm font-semibold text-gray-700 border-b border-gray-50"
            >
              {p.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-lg bg-gray-900 px-5 py-3 text-center text-sm font-bold text-white"
          >
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  );
}
