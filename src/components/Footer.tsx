import { useState } from "react";
import { CheckCircle2, Facebook, Loader2 } from "lucide-react";
import { LOGO_URL, BRAND, SERVICES, CRM_SUBSCRIBE_URL, FACEBOOK_URL, BOOKING_URL } from "@/data/siteData";

const COMPANY_LINKS = [
  { label: "Our Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resource Center", href: "#resources" },

  { label: "Our Story", href: "#timeline" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      await fetch(CRM_SUBSCRIBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          phone: phone.trim() ? phone.trim() : undefined,
          sms_opt_in: smsOptIn === true,
          source: "footer-signup",
          tags: ["newsletter", "footer-signup"],
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt={`${BRAND.name} logo`}
              className="h-12 w-12 rounded-md object-cover ring-2 ring-white/20"
            />
            <div>
              <span className="block text-lg font-extrabold text-white leading-none">
                Advance<span className="text-[#E4342B]">My</span>Idea
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">
                {BRAND.tagline}
              </span>
            </div>
          </div>
          <p className="mt-5 text-sm text-gray-400 leading-relaxed">
            A Kaizen-driven business development think-tank and solution design
            firm, advancing ideas into digital reality since {BRAND.founded}.
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
          >
            <Facebook className="h-5 w-5" />
            Follow us on Facebook
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-widest text-white">Services</h4>
          <ul className="mt-5 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo("#services")}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-widest text-white">Company</h4>
          <ul className="mt-5 space-y-2.5">
            {COMPANY_LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#FACC15] hover:underline"
              >
                Book a Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-widest text-white">
            Insights Newsletter
          </h4>
          <p className="mt-4 text-sm text-gray-400">
            Digital strategy tips, SEO insights, and Kaizen thinking — straight to
            your inbox.
          </p>
          {status === "success" ? (
            <div className="mt-5 flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/30 px-4 py-3 text-sm font-semibold text-green-400">
              <CheckCircle2 className="h-5 w-5" />
              You're subscribed. Welcome aboard!
            </div>
          ) : (
            <form onSubmit={subscribe} className="mt-5 space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#FACC15] outline-none"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number (optional)"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#FACC15] outline-none"
              />
              <label className="flex items-start gap-2 text-xs text-gray-500">
                <input
                  type="checkbox"
                  checked={smsOptIn}
                  onChange={(e) => setSmsOptIn(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-500"
                />
                Text me updates. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
              </label>
              {status === "error" && (
                <p className="text-xs font-semibold text-red-400">
                  Subscription failed. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#FACC15] px-4 py-2.5 text-sm font-extrabold text-gray-900 hover:bg-yellow-300 transition-colors disabled:opacity-60"
              >
                {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Founded {BRAND.founded}.
          </p>
          <div className="flex h-1.5 w-40 rounded-full overflow-hidden">
            {["#E4342B", "#1D4ED8", "#FACC15", "#16A34A", "#DB2777", "#7C3AED"].map((c) => (
              <div key={c} className="flex-1" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
