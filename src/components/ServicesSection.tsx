import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe, Search, Target, Smartphone, Lightbulb, Fingerprint, BarChart3, Users, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/data/siteData";
import { SERVICE_PAGES } from "@/data/servicePages";
import { useSiteContent } from "@/hooks/useSiteContent";

const ICONS: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Globe, Search, Target, Smartphone, Lightbulb, Fingerprint, BarChart3, Users,
};

export default function ServicesSection() {
  const [active, setActive] = useState<string | null>(null);
  const services = useSiteContent("services", SERVICES);

  const scrollToContact = (serviceId: string) => {
    window.dispatchEvent(new CustomEvent("select-service", { detail: serviceId }));
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.assign("/#contact");
  };


  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E4342B]">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Eight Disciplines. One Vision.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A full-spectrum digital services firm — every capability your business
            needs to advance, under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = ICONS[s.icon] ?? Globe;
            const isActive = active === s.id;
            const page = SERVICE_PAGES.find((p) => p.serviceId === s.id);
            return (
              <div
                key={s.id}
                onMouseEnter={() => setActive(s.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : s.id)}
                className="group relative cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ borderTopColor: s.color, borderTopWidth: 4 }}
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${s.color}1A` }}
                >
                  <Icon className="h-6 w-6" style={{ color: s.color }} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.short}</p>

                <div
                  className={`grid transition-all duration-300 ${
                    isActive ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-gray-500 leading-relaxed">{s.detail}</p>
                    <div className="mt-4 flex flex-col gap-2">
                      {page && (
                        <Link
                          to={`/services/${page.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-sm font-bold hover:underline"
                          style={{ color: s.color }}
                        >
                          Learn more <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToContact(s.id);
                        }}
                        className="text-left text-sm font-bold hover:underline"
                        style={{ color: s.color }}
                      >
                        Start a project →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
