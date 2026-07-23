import { Check } from "lucide-react";
import { PACKAGES } from "@/data/siteData";

export default function PackagesSection() {
  const getStarted = (pkgName: string) => {
    window.dispatchEvent(new CustomEvent("select-package", { detail: pkgName }));
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.assign("/#contact");
  };


  return (
    <section id="packages" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7C3AED]">
            Engagement Models
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Packages Built to Advance
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Transparent tiers for every stage of growth — from first launch to
            full digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl bg-white p-8 border transition-all duration-300 hover:shadow-xl ${
                pkg.tag ? "border-[#E4342B] shadow-lg scale-[1.02]" : "border-gray-200"
              }`}
            >
              {pkg.tag && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#E4342B] px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                  {pkg.tag}
                </span>
              )}
              <h3 className="text-xl font-extrabold text-gray-900">{pkg.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold" style={{ color: pkg.color }}>
                  {pkg.price}
                </span>
                <span className="text-sm text-gray-500">{pkg.period}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check className="h-5 w-5 shrink-0" style={{ color: pkg.color }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => getStarted(pkg.name)}
                className="mt-8 rounded-lg px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: pkg.color }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
