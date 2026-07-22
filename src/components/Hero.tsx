import { ArrowRight, CalendarCheck } from "lucide-react";
import { HERO_BG, LOGO_URL, BRAND, BOOKING_URL } from "@/data/siteData";

const STATS = [
  { value: `${BRAND.yearsInBusiness}+`, label: "Years of Innovation", color: "#E4342B" },
  { value: "500+", label: "Projects Delivered", color: "#1D4ED8" },
  { value: "8", label: "Core Disciplines", color: "#16A34A" },
  { value: "∞", label: "Kaizen Improvements", color: "#7C3AED" },
];

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-gray-950">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-8 backdrop-blur">
            <img src={LOGO_URL} alt="" className="h-5 w-5 rounded-sm" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              Business Development Think-Tank · Since {BRAND.founded}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            We See What Your
            <br />
            Idea Can{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#E4342B] via-[#FACC15] to-[#1D4ED8] bg-clip-text text-transparent">
                Become.
              </span>
            </span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
            From websites and SEO to app development and digital footprint
            management — {BRAND.name} is the Kaizen-driven solution design firm
            that has been transforming visions into digital reality since {BRAND.founded}.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#E4342B] px-7 py-3.5 text-base font-bold text-white hover:bg-[#c22a22] transition-colors shadow-lg shadow-red-900/40"
            >
              <CalendarCheck className="h-5 w-5" />
              Book a Free Consultation
            </a>
            <button
              onClick={() => scrollTo("#services")}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                style={{ borderTopColor: s.color, borderTopWidth: 3 }}
              >
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
