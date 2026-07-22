import { useEffect, useState } from "react";
import { CalendarCheck, CheckCircle2, Loader2, Send } from "lucide-react";
import { SERVICES, CRM_SUBSCRIBE_URL, BOOKING_URL, BRAND } from "@/data/siteData";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Listen for "Start a project" / "Get Started" events from other sections
  useEffect(() => {
    const onService = (e: Event) => setService((e as CustomEvent<string>).detail);
    const onPackage = (e: Event) =>
      setMessage((prev) =>
        prev ? prev : `I'm interested in the ${(e as CustomEvent<string>).detail} package.`
      );
    window.addEventListener("select-service", onService);
    window.addEventListener("select-package", onPackage);
    return () => {
      window.removeEventListener("select-service", onService);
      window.removeEventListener("select-package", onPackage);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;
    setStatus("loading");
    try {
      const serviceLabel = SERVICES.find((s) => s.id === service)?.title;
      await fetch(CRM_SUBSCRIBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
          phone: phone.trim() ? phone.trim() : undefined,
          sms_opt_in: smsOptIn === true,
          source: "contact-form",
          tags: ["contact-form", "lead", ...(serviceLabel ? [serviceLabel.toLowerCase().replace(/\s+/g, "-")] : []), ...(budget ? [`budget:${budget}`] : [])],
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        {["#E4342B", "#1D4ED8", "#FACC15", "#16A34A", "#DB2777", "#7C3AED"].map((c) => (
          <div key={c} className="flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FACC15]">
            Let's Advance Your Idea
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Tell Us Where You Want to Go
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Every great engagement starts with a conversation. Share your project
            details and a strategist from {BRAND.name} will respond within one
            business day — or skip the form and book a consultation directly.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-[#FACC15] px-6 py-3 font-bold text-[#FACC15] hover:bg-[#FACC15] hover:text-gray-900 transition-colors"
          >
            <CalendarCheck className="h-5 w-5" />
            Book a Consultation Now
          </a>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-bold text-white">Why businesses choose us</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>• {BRAND.yearsInBusiness}+ years of solution design experience</li>
              <li>• Kaizen-driven continuous improvement on every engagement</li>
              <li>• Strategy and execution under one roof</li>
              <li>• Transparent pricing and measurable results</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-16">
              <CheckCircle2 className="h-16 w-16 text-[#16A34A]" />
              <h3 className="mt-4 text-2xl font-extrabold text-gray-900">Message Received!</h3>
              <p className="mt-2 text-gray-600 max-w-sm">
                Thanks, {name.split(" ")[0]}. A strategist will reach out within one
                business day. Want to move faster?
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-lg bg-gray-900 px-6 py-3 font-bold text-white hover:bg-[#E4342B] transition-colors"
              >
                Book Your Consultation
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Phone number (optional)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none"
                />
                <label className="mt-2 flex items-start gap-2 text-xs text-gray-500">
                  <input
                    type="checkbox"
                    checked={smsOptIn}
                    onChange={(e) => setSmsOptIn(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#1D4ED8]"
                  />
                  Text me updates. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 bg-white focus:border-[#1D4ED8] outline-none"
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 bg-white focus:border-[#1D4ED8] outline-none"
                  >
                    <option value="">Select a range…</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 – $15,000</option>
                    <option value="15k-50k">$15,000 – $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your idea…"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm font-semibold text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#E4342B] px-6 py-3.5 font-bold text-white hover:bg-[#c22a22] transition-colors disabled:opacity-60"
              >
                {status === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
                {status === "loading" ? "Sending…" : "Send My Project Brief"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
