import { MILESTONES, BRAND } from "@/data/siteData";

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#16A34A]">
            Our Story
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            {BRAND.yearsInBusiness} Years of Innovation
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From the dial-up era to the AI age — a leading service provider and
            solution design firm, continuously improving since {BRAND.founded}.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 sm:-translate-x-px" />
          <div className="space-y-10">
            {MILESTONES.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div
                  className="absolute left-5 sm:left-1/2 -translate-x-1/2 mt-1.5 h-4 w-4 rounded-full ring-4 ring-white z-10"
                  style={{ backgroundColor: m.color }}
                />
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-extrabold text-white"
                    style={{ backgroundColor: m.color }}
                  >
                    {m.year}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{m.title}</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">{m.description}</p>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
