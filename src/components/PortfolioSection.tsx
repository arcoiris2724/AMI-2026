import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/data/siteData";
import { getCaseStudyByPortfolioId } from "@/data/caseStudies";

export default function PortfolioSection() {
  const [filter, setFilter] = useState("All");

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
              Real projects, real metrics. Click any project to read the full case study.
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
          {items.map((p) => {
            const cs = getCaseStudyByPortfolioId(p.id);
            const inner = (
              <>
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
                  {cs && (
                    <span className="mt-3 flex items-center gap-1 text-sm font-bold text-[#1D4ED8] group-hover:gap-2 transition-all">
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
                className="group text-left rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={p.id}
                className="group text-left rounded-2xl overflow-hidden bg-white border border-gray-200"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
