import { useCallback, useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";

function Stars({ rating, color }: { rating: number; color: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          style={{
            fill: i < rating ? color : "#E5E7EB",
            color: i < rating ? color : "#E5E7EB",
          }}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  // 3 cards per page on desktop; carousel pages through the list
  const perPage = 3;
  const pageCount = Math.ceil(TESTIMONIALS.length / perPage);

  const next = useCallback(() => setPage((p) => (p + 1) % pageCount), [pageCount]);
  const prev = useCallback(() => setPage((p) => (p - 1 + pageCount) % pageCount), [pageCount]);

  // Subtle auto-advance
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next, paused]);

  const visible = TESTIMONIALS.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* stained-glass accent strip */}
      <div className="absolute top-0 inset-x-0 h-1 flex">
        <div className="flex-1 bg-[#E4342B]" />
        <div className="flex-1 bg-[#1D4ED8]" />
        <div className="flex-1 bg-[#FACC15]" />
        <div className="flex-1 bg-[#16A34A]" />
        <div className="flex-1 bg-[#DB2777]" />
        <div className="flex-1 bg-[#7C3AED]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DB2777]">
            Client Success Stories
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Results Our Clients Brag About
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Twenty-seven years of Kaizen-driven engagements, measured in honest
            numbers — and told in our clients' own words.
          </p>
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((t) => (
              <figure
                key={t.id}
                className="relative flex flex-col rounded-2xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* stained-glass top accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: t.color }} />
                <Quote
                  className="h-8 w-8 mb-4 opacity-80"
                  style={{ color: t.color }}
                />
                <Stars rating={t.rating} color={t.color} />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-700">
                  "{t.quote}"
                </blockquote>

                <div
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full px-3.5 py-1.5 text-sm font-extrabold text-white"
                  style={{ backgroundColor: t.color }}
                >
                  <TrendingUp className="h-4 w-4" />
                  {t.result}
                </div>

                <figcaption className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3.5">
                  <div
                    className="h-11 w-11 shrink-0 rounded-full flex items-center justify-center text-sm font-extrabold text-white ring-2 ring-white shadow"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">
                      {t.role} · {t.company}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider mt-0.5" style={{ color: t.color }}>
                      {t.service}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* carousel controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="rounded-full border border-gray-200 p-2.5 text-gray-600 hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Go to testimonials page ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === page ? "w-8" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  style={i === page ? { backgroundColor: "#1D4ED8" } : undefined}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="rounded-full border border-gray-200 p-2.5 text-gray-600 hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* trust summary bar */}
        <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-100 px-6 py-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div>
            <div className="text-2xl font-extrabold text-gray-900">5.0</div>
            <div className="flex justify-center mt-1">
              <Stars rating={5} color="#FACC15" />
            </div>
            <div className="text-xs text-gray-500 mt-1">Average client rating</div>
          </div>
          <div className="hidden sm:block h-12 w-px bg-gray-200" />
          <div>
            <div className="text-2xl font-extrabold text-[#E4342B]">500+</div>
            <div className="text-xs text-gray-500 mt-1">Ideas advanced since 1999</div>
          </div>
          <div className="hidden sm:block h-12 w-px bg-gray-200" />
          <div>
            <div className="text-2xl font-extrabold text-[#16A34A]">92%</div>
            <div className="text-xs text-gray-500 mt-1">Clients stay 2+ years</div>
          </div>
        </div>
      </div>
    </section>
  );
}
