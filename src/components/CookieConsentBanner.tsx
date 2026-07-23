import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";


const STORAGE_KEY = "ami-cookie-consent";

/**
 * Small, dismissible cookie consent banner fixed to the bottom of the viewport.
 * Informs visitors that analytics cookies (Google Analytics) are used.
 * The choice is remembered in localStorage so it only shows once.
 */
export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Small delay so the banner doesn't compete with initial page paint
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage unavailable (private mode etc.) — just show once per session
      setVisible(true);
    }
  }, []);

  const remember = (value: "accepted" | "dismissed") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore storage errors */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
        <div className="flex items-start gap-3 sm:items-center">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 sm:mt-0">
            <Cookie className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            We use analytics cookies (Google Analytics) to understand how visitors
            use our site and to improve your experience. No personal data is sold.{" "}
            <Link
              to="/privacy-policy"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Learn more in our Privacy Policy
            </Link>
            .
          </p>

        </div>

        <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => remember("accepted")}
            className="rounded-lg bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => remember("dismissed")}
            aria-label="Dismiss cookie notice"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-300"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
