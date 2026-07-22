import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Gauge,
  Loader2,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { CRM_SUBSCRIBE_URL, BRAND } from "@/data/siteData";

const AUDIT_CHECKS = [
  { icon: Gauge, label: "Speed & Performance" },
  { icon: Search, label: "SEO Visibility" },
  { icon: ShieldCheck, label: "Security & Trust" },
  { icon: Sparkles, label: "Design & Conversion" },
];

export default function AuditBannerSection() {
  const [step, setStep] = useState(1);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goals, setGoals] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [stepError, setStepError] = useState("");

  const goToStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl.trim() || !businessName.trim()) {
      setStepError("Please enter your website URL and business name.");
      return;
    }
    setStepError("");
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;
    setStatus("loading");
    const cleanUrl = websiteUrl
      .trim()
      .replace(/^https?:\/\//i, "")
      .replace(/\/+$/, "");
    try {
      // 1. Save the audit request to the database
      const { error: dbError } = await supabase.from("audit_requests").insert({
        website_url: cleanUrl,
        business_name: businessName.trim(),
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || null,
        sms_opt_in: smsOptIn === true,
        goals: goals.trim() || null,
      });
      if (dbError) throw dbError;

      // 2. Subscribe the contact to the CRM with the audit-request tag
      await fetch(CRM_SUBSCRIBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
          phone: phone.trim() ? phone.trim() : undefined,
          sms_opt_in: smsOptIn === true,
          source: "audit-request",
          tags: ["audit-request", "lead", `site:${cleanUrl}`],
        }),
      });
      setStatus("success");
      setStep(3);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="free-audit" className="relative overflow-hidden bg-[#1D4ED8]">
      {/* Stained-glass accent strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        {["#E4342B", "#FACC15", "#16A34A", "#DB2777", "#7C3AED", "#0EA5E9"].map((c) => (
          <div key={c} className="flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#FACC15]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#E4342B]/25 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: pitch */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15]">
            <Sparkles className="h-4 w-4" />
            Free Lead Magnet — No Strings Attached
          </span>
          <h2 className="mt-5 text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Get a Free Website Audit
          </h2>
          <p className="mt-4 text-lg text-blue-100 leading-relaxed">
            Wondering why your site isn't converting? Our strategists will run a
            hands-on review of your website and send you a personalized report —
            grounded in the same Kaizen principles {BRAND.name} has applied since
            1999.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {AUDIT_CHECKS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 px-4 py-3"
              >
                <Icon className="h-5 w-5 text-[#FACC15] shrink-0" />
                <span className="text-sm font-semibold text-white">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-100">
            <Clock className="h-4 w-4 text-[#FACC15]" />
            Personalized results delivered within 48 hours
          </div>
        </div>

        {/* Right: multi-step form card */}
        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          {/* Progress indicator */}
          {step < 3 && (
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-400">
                <span className={step >= 1 ? "text-[#1D4ED8]" : ""}>1 · Your Website</span>
                <span className={step >= 2 ? "text-[#1D4ED8]" : ""}>2 · Your Details</span>
                <span>3 · Confirmation</span>
              </div>
              <div className="mt-2 flex gap-1.5">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 rounded-full ${step >= s ? "bg-[#1D4ED8]" : "bg-gray-200"}`}
                  />
                ))}
              </div>
            </div>
          )}

          {step === 3 ? (
            /* ── Confirmation ── */
            <div className="flex flex-col items-center justify-center text-center py-10">
              <CheckCircle2 className="h-16 w-16 text-[#16A34A]" />
              <h3 className="mt-4 text-2xl font-extrabold text-gray-900">
                Your Audit Is Underway!
              </h3>
              <p className="mt-2 text-gray-600 max-w-sm">
                Thanks, {name.split(" ")[0] || "friend"}! Our strategists are
                reviewing{" "}
                <span className="font-semibold text-gray-900">{websiteUrl}</span> for{" "}
                <span className="font-semibold text-gray-900">{businessName}</span> now.
                Expect your personalized audit report in your inbox within{" "}
                <span className="font-semibold text-gray-900">48 hours</span>.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-[#1D4ED8]">
                <Clock className="h-4 w-4" />
                Results within 48 hours — guaranteed
              </div>
            </div>
          ) : step === 1 ? (
            /* ── Step 1: website + business ── */
            <form onSubmit={goToStep2} className="space-y-5">
              <h3 className="text-xl font-extrabold text-gray-900">
                Request Your Free Audit
              </h3>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Website URL *
                </label>
                <input
                  type="text"
                  required
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="www.yourwebsite.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Your business name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  What would you most like to improve? (optional)
                </label>
                <input
                  type="text"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder="e.g. more leads, faster site, better rankings"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
              {stepError && (
                <p className="text-sm font-semibold text-red-600">{stepError}</p>
              )}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-6 py-3.5 font-bold text-white hover:bg-[#173db3] transition-colors"
              >
                Continue
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-center text-xs text-gray-400">
                100% free. No obligation. Results within 48 hours.
              </p>
            </form>
          ) : (
            /* ── Step 2: contact details ── */
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-extrabold text-gray-900">
                Where should we send your report?
              </h3>
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

              {status === "error" && (
                <p className="text-sm font-semibold text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border-2 border-gray-300 px-5 py-3.5 font-bold text-gray-700 hover:border-gray-500 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#E4342B] px-6 py-3.5 font-bold text-white hover:bg-[#c22a22] transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Gauge className="h-5 w-5" />
                  )}
                  {status === "loading" ? "Submitting…" : "Get My Free Audit"}
                </button>
              </div>

              <p className="text-center text-xs text-gray-400">
                Auditing <span className="font-semibold text-gray-600">{websiteUrl}</span> for{" "}
                <span className="font-semibold text-gray-600">{businessName}</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
