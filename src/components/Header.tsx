import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_URL, BRAND, BOOKING_URL } from "@/data/siteData";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#portfolio" },
  { label: "Our Story", href: "#timeline" },
  { label: "Packages", href: "#packages" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];



export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
            aria-label="Back to top"
          >
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
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-semibold text-gray-700 hover:text-[#1D4ED8] transition-colors"
              >
                {l.label}
              </button>
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
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left py-3 text-sm font-semibold text-gray-700 border-b border-gray-50"
            >
              {l.label}
            </button>
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
