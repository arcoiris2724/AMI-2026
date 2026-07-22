import { useState } from "react";
import { X, TrendingUp } from "lucide-react";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, PortfolioItem, BOOKING_URL } from "@/data/siteData";

export default function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const items = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1D4ED8]">
              Proven Results
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real projects, real metrics. A sample of the ideas we have advanced.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === c
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="group text-left rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-800 backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#16A34A]">
                  <TrendingUp className="h-4 w-4" />
                  {p.metric}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Case study modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.image} alt={selected.title} className="h-56 w-full object-cover" />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 rounded-full bg-white/90 p-2 text-gray-800 hover:bg-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8]">
                {selected.category}
              </span>
              <h3 className="mt-1 text-2xl font-extrabold text-gray-900">{selected.title}</h3>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-sm font-extrabold text-[#16A34A]">
                <TrendingUp className="h-4 w-4" />
                {selected.metric}
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">{selected.description}</p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full rounded-lg bg-gray-900 px-6 py-3 text-center font-bold text-white hover:bg-[#E4342B] transition-colors"
              >
                Discuss a Project Like This
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
