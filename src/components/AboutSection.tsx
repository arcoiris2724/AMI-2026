import { RefreshCw, Lightbulb, Gauge, Eye, Quote } from "lucide-react";
import {
  BRAND,
  LOGO_URL,
  MISSION_STATEMENT,
  ABOUT_STORY,
  CORE_VALUES,
  LOGO_MEANING,
  FOUNDER_MESSAGE,
  BOOKING_URL,
} from "@/data/siteData";
import { useSiteContent } from "@/hooks/useSiteContent";

const ICONS: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  RefreshCw,
  Lightbulb,
  Gauge,
  Eye,
};

export default function AboutSection() {
  const aboutStory = useSiteContent("about_story", ABOUT_STORY);
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-[#1D4ED8]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">
            About Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            The Story Behind{" "}
            <span className="bg-gradient-to-r from-[#E4342B] via-[#7C3AED] to-[#1D4ED8] bg-clip-text text-transparent">
              the Eye
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A Kaizen-driven business development think-tank, advancing ideas since {BRAND.founded}.
          </p>
        </div>

        {/* Story + logo meaning */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Our story */}
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">
              Founded in {BRAND.founded}. Improving Ever Since.
            </h3>
            <div className="mt-5 space-y-5">
              {aboutStory.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Mission statement */}
            <div className="mt-8 relative overflow-hidden rounded-2xl bg-gray-900 p-8">
              <div className="absolute inset-x-0 top-0 h-1 flex">
                <div className="flex-1 bg-[#E4342B]" />
                <div className="flex-1 bg-[#1D4ED8]" />
                <div className="flex-1 bg-[#FACC15]" />
                <div className="flex-1 bg-[#16A34A]" />
                <div className="flex-1 bg-[#DB2777]" />
                <div className="flex-1 bg-[#7C3AED]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FACC15]">
                Our Mission
              </span>
              <p className="mt-3 text-xl font-semibold leading-relaxed text-white">
                {MISSION_STATEMENT}
              </p>
            </div>
          </div>

          {/* Logo meaning */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 lg:p-10 shadow-sm">
            <div className="flex items-center gap-5">
              <img
                src={LOGO_URL}
                alt={`${BRAND.name} stained-glass eye logo`}
                className="h-24 w-24 rounded-xl object-cover ring-2 ring-gray-900 shadow-md"
              />
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                  Why the Eye?
                </span>
                <h3 className="mt-1 text-2xl font-extrabold text-gray-900">
                  {LOGO_MEANING.headline}
                </h3>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {LOGO_MEANING.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-6 h-1.5 flex rounded-full overflow-hidden">
              <div className="flex-1 bg-[#E4342B]" />
              <div className="flex-1 bg-[#1D4ED8]" />
              <div className="flex-1 bg-[#FACC15]" />
              <div className="flex-1 bg-[#16A34A]" />
              <div className="flex-1 bg-[#DB2777]" />
              <div className="flex-1 bg-[#7C3AED]" />
            </div>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our Core Values</h3>
            <p className="mt-2 text-gray-600">
              The principles behind every engagement since {BRAND.founded}.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((v) => {
              const Icon = ICONS[v.icon] ?? Eye;
              return (
                <div
                  key={v.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderTopWidth: 4, borderTopColor: v.color }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${v.color}1A` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: v.color }} />
                  </div>
                  <h4 className="mt-5 text-lg font-bold text-gray-900">{v.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Founder message */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm">
          <div className="absolute inset-y-0 left-0 w-1.5 flex flex-col">
            <div className="flex-1 bg-[#E4342B]" />
            <div className="flex-1 bg-[#1D4ED8]" />
            <div className="flex-1 bg-[#FACC15]" />
            <div className="flex-1 bg-[#16A34A]" />
            <div className="flex-1 bg-[#DB2777]" />
            <div className="flex-1 bg-[#7C3AED]" />
          </div>
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[auto,1fr] lg:gap-12 items-center">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <img
                  src={LOGO_URL}
                  alt="Advance My Idea founder emblem"
                  className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-900 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#E4342B] text-white shadow-md">
                  <Quote className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-4 text-sm font-bold text-gray-900">{FOUNDER_MESSAGE.name}</p>
              <p className="text-xs text-gray-500">{FOUNDER_MESSAGE.signoff}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E4342B]">
                {FOUNDER_MESSAGE.title}
              </span>
              <blockquote className="mt-4 text-lg sm:text-xl leading-relaxed text-gray-700 italic">
                &ldquo;{FOUNDER_MESSAGE.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E4342B]"
                >
                  Book a Consultation
                </a>
                <button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else window.location.assign("/#contact");
                  }}

                  className="rounded-lg border-2 border-gray-900 px-6 py-3 text-sm font-bold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
                >
                  Tell Us Your Idea
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
