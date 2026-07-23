import { Link } from "react-router-dom";
import { ChevronRight, Cookie, Mail, ShieldCheck, EyeOff, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo, { SITE_URL } from "@/components/Seo";
import { BRAND } from "@/data/siteData";

const LAST_UPDATED = "July 23, 2026";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: `${SITE_URL}/privacy-policy`,
    description:
      "How Advance My Idea collects, uses, and protects visitor data — including Google Analytics cookies and contact form submissions — and how you can opt out.",
    dateModified: "2026-07-23",
    isPartOf: { "@type": "WebSite", name: BRAND.name, url: SITE_URL },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy-policy` },
    ],
  },
];

/** Reusable section wrapper for consistent typography */
function PolicySection({
  id,
  icon: Icon,
  color,
  title,
  children,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}15`, color }}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">{title}</h2>
      </div>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-gray-600">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Seo
        title={`Privacy Policy | ${BRAND.name}`}
        description="Learn what data Advance My Idea collects (Google Analytics cookies, contact form submissions), how it is used, and how you can opt out of analytics tracking."
        keywords="privacy policy, cookies, Google Analytics, data protection, opt out, Advance My Idea"
        path="/privacy-policy"
        jsonLd={jsonLd}
      />
      <Header />

      {/* Breadcrumb hero */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-400"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#FACC15]">Privacy Policy</span>
          </nav>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300 leading-relaxed">
            We believe in the same honesty with your data that we bring to your metrics. This page
            explains exactly what we collect, why, and how you can opt out.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
            <Clock className="h-3.5 w-3.5" /> Last updated: {LAST_UPDATED}
          </p>
          <div className="mt-8 flex h-1.5 w-40 rounded-full overflow-hidden">
            {["#E4342B", "#1D4ED8", "#FACC15", "#16A34A", "#DB2777", "#7C3AED"].map((c) => (
              <div key={c} className="flex-1" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {/* Quick summary */}
        <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-blue-800">
            The Short Version
          </h2>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-gray-700">
            <li>
              • We use <strong>Google Analytics cookies</strong> (via Google Tag Manager) to
              understand how visitors use this site.
            </li>
            <li>
              • When you submit a <strong>contact, audit, or newsletter form</strong>, we store the
              details you provide so we can respond and stay in touch.
            </li>
            <li>
              • We <strong>never sell</strong> your personal data, and you can{" "}
              <strong>opt out</strong> of analytics tracking or our communications at any time.
            </li>
          </ul>
        </div>

        <PolicySection id="what-we-collect" icon={Cookie} color="#1D4ED8" title="1. What Data We Collect">
          <h3 className="font-bold text-gray-900">Analytics cookies (Google Analytics)</h3>
          <p>
            This website uses <strong>Google Analytics</strong>, loaded through Google Tag Manager,
            to collect anonymous, aggregated information about how visitors use the site. This
            includes things like the pages you visit, how long you stay, the type of device and
            browser you use, your approximate geographic region (city level), and the site that
            referred you here. Google Analytics sets small text files called <strong>cookies</strong>{" "}
            in your browser (for example, <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[13px]">_ga</code>{" "}
            and <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[13px]">_ga_*</code>) to
            distinguish returning visitors and measure sessions. This data does not directly
            identify you by name.
          </p>
          <h3 className="font-bold text-gray-900 pt-2">Contact &amp; form submissions</h3>
          <p>
            When you fill out our contact form, request a free website audit, book a consultation,
            or subscribe to our newsletter, we collect the information you provide — typically your{" "}
            <strong>name, email address, phone number (optional), company/website details, and
            your message</strong>. This information is stored securely in our customer relationship
            management (CRM) system.
          </p>
          <h3 className="font-bold text-gray-900 pt-2">Cookie consent preference</h3>
          <p>
            When you accept or dismiss our cookie banner, we store that choice in your browser's
            local storage so we don't show you the banner again. This preference never leaves your
            device.
          </p>
        </PolicySection>

        <PolicySection id="how-we-use" icon={ShieldCheck} color="#16A34A" title="2. How We Use Your Data">
          <p>We use the data we collect for the following purposes only:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Improving the website</strong> — analytics data shows us which pages are
              useful, where visitors get stuck, and what to improve next (our Kaizen philosophy
              applied to our own site).
            </li>
            <li>
              <strong>Responding to your inquiries</strong> — contact and audit form submissions are
              used to reply to you, prepare your requested audit or proposal, and schedule
              consultations.
            </li>
            <li>
              <strong>Sending communications you asked for</strong> — if you subscribe to our
              newsletter or opt in to SMS updates, we'll send you the content you requested. Every
              email includes an unsubscribe link, and you can reply STOP to any text message.
            </li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal information to third
            parties. We share data only with the service providers needed to operate this site
            (Google for analytics, our CRM/hosting providers for form processing), and only for the
            purposes described above.
          </p>
        </PolicySection>

        <PolicySection id="opt-out" icon={EyeOff} color="#E4342B" title="3. How to Opt Out">
          <h3 className="font-bold text-gray-900">Opting out of Google Analytics</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Install Google's official{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                Google Analytics Opt-out Browser Add-on
                <ExternalLink className="h-3.5 w-3.5" />
              </a>{" "}
              — it prevents Google Analytics from collecting data on any site you visit.
            </li>
            <li>
              Block or delete cookies in your browser settings. All major browsers (Chrome, Safari,
              Firefox, Edge) let you block third-party cookies or clear existing ones. Note that
              blocking all cookies may affect how some websites function.
            </li>
            <li>
              Use your browser's private/incognito mode, which discards cookies when the window is
              closed.
            </li>
          </ul>
          <h3 className="font-bold text-gray-900 pt-2">Opting out of our communications</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Click the <strong>unsubscribe</strong> link at the bottom of any email we send.</li>
            <li>Reply <strong>STOP</strong> to any SMS message to stop text updates.</li>
            <li>
              Or simply{" "}
              <Link to="/contact" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
                contact us
              </Link>{" "}
              and ask us to delete your contact details — we'll honor the request promptly.
            </li>
          </ul>
        </PolicySection>

        <PolicySection id="retention" icon={Clock} color="#7C3AED" title="4. Data Retention & Security">
          <p>
            Analytics data is retained according to Google Analytics' standard retention settings
            and is only ever viewed in aggregate. Contact form submissions and newsletter
            subscriptions are kept for as long as we have an active relationship with you, or until
            you ask us to delete them. We use industry-standard safeguards — encrypted connections
            (HTTPS), access controls, and reputable infrastructure providers — to protect the
            information we hold.
          </p>
        </PolicySection>

        <PolicySection id="contact" icon={Mail} color="#DB2777" title="5. Questions or Requests">
          <p>
            If you have any questions about this policy, or want to access, correct, or delete
            personal information we hold about you, reach out through our{" "}
            <Link to="/contact" className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900">
              contact page
            </Link>
            . We'll respond as quickly as we can.
          </p>
          <p>
            We may update this policy from time to time as our practices or legal requirements
            change. The "Last updated" date at the top of this page always reflects the current
            version.
          </p>
        </PolicySection>
      </main>

      <Footer />
    </div>
  );
}
