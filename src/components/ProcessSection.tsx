import { RefreshCw } from "lucide-react";
import { PROCESS_STEPS } from "@/data/siteData";

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-gray-950 relative overflow-hidden">
      {/* decorative geometric shapes */}
      <div className="absolute -top-16 -right-16 h-64 w-64 rotate-12 bg-[#1D4ED8]/10 rounded-3xl" />
      <div className="absolute -bottom-20 -left-10 h-72 w-72 -rotate-12 bg-[#E4342B]/10 rounded-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FACC15]">
            <RefreshCw className="h-4 w-4" />
            The Kaizen Way
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Continuous Improvement, Engineered Into Every Project
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            改善 — “change for the better.” Our five-phase methodology never truly
            ends, because great digital products are never truly finished.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((p, i) => (
            <div key={p.step} className="relative">
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 h-0.5 bg-gray-700 z-0" />
              )}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 h-full backdrop-blur hover:bg-white/10 transition-colors">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-extrabold text-white shadow-lg"
                  style={{ backgroundColor: p.color }}
                >
                  {p.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-500">
          Step 5 loops back to Step 1 — measurement fuels the next round of discovery. That is Kaizen.
        </p>
      </div>
    </section>
  );
}
