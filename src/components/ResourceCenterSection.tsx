import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, CalendarDays, Clock, Search, X } from "lucide-react";
import { ARTICLES, ARTICLE_CATEGORIES } from "@/data/siteData";

const CATEGORY_COLORS: Record<string, string> = {
  "Digital Strategy": "#DB2777",
  "SEO Tips": "#1D4ED8",
  Kaizen: "#16A34A",
  "Web & Apps": "#E4342B",
};

export default function ResourceCenterSection() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.content.some((p) => p.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="resources" className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#DB2777]">
              <BookOpen className="h-4 w-4" />
              Resource Center
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Insights from the Think-Tank
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Digital strategy, SEO tips, and Kaizen methodology — {new Date().getFullYear() - 1999} years
              of expertise, freely shared.
            </p>
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              aria-label="Search articles"
              className="w-full rounded-full border border-gray-300 pl-11 pr-10 py-3 text-gray-900 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {ARTICLE_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                category === c
                  ? "text-white"
                  : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-400"
              }`}
              style={
                category === c
                  ? { backgroundColor: c === "All" ? "#111827" : CATEGORY_COLORS[c] ?? "#111827" }
                  : undefined
              }
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 py-20 text-center">
            <p className="text-lg font-bold text-gray-700">No articles match your search.</p>
            <p className="mt-1 text-gray-500">Try a different keyword or category.</p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="mt-5 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-[#E4342B] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {filtered.map((a) => (
              <Link
                key={a.id}
                to={`/resources/${a.id}`}
                className="group flex flex-col text-left rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-extrabold text-white"
                    style={{ backgroundColor: CATEGORY_COLORS[a.category] ?? "#1D4ED8" }}
                  >
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#1D4ED8] transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">{a.excerpt}</p>
                  <div className="mt-auto pt-4 flex items-center justify-between text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {a.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {a.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
