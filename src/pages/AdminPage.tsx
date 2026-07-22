import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Inbox, Loader2, Lock, LogOut, Save } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Seo from "@/components/Seo";
import {
  ABOUT_STORY,
  FAQS,
  FaqItem,
  LOGO_URL,
  SERVICES,
  Service,
  TESTIMONIALS,
  Testimonial,
} from "@/data/siteData";
import { useSiteContent } from "@/hooks/useSiteContent";

type Tab = "about" | "services" | "testimonials" | "faqs" | "audits";

const TABS: { id: Tab; label: string }[] = [
  { id: "about", label: "About Story" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faqs", label: "FAQs" },
  { id: "audits", label: "Audit Requests" },
];

interface AuditRequest {
  id: string;
  website_url: string;
  business_name: string;
  name: string | null;
  email: string;
  phone: string | null;
  goals: string | null;
  created_at: string;
}

const inputCls =
  "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none";
const labelCls = "block text-xs font-bold text-gray-600 mb-1";

export default function AdminPage() {
  const [password, setPassword] = useState(() => sessionStorage.getItem("ami_admin_pw") ?? "");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [tab, setTab] = useState<Tab>("about");
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");

  // Editable state, seeded from DB overrides (fallback to static data)
  const dbStory = useSiteContent<string[]>("about_story", ABOUT_STORY);
  const dbServices = useSiteContent<Service[]>("services", SERVICES);
  const dbTestimonials = useSiteContent<Testimonial[]>("testimonials", TESTIMONIALS);
  const dbFaqs = useSiteContent<FaqItem[]>("faqs", FAQS);

  const [storyText, setStoryText] = useState("");
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [audits, setAudits] = useState<AuditRequest[]>([]);
  const [auditsLoading, setAuditsLoading] = useState(false);

  useEffect(() => setStoryText(dbStory.join("\n\n")), [dbStory]);
  useEffect(() => setServices(dbServices), [dbServices]);
  useEffect(() => setTestimonials(dbTestimonials), [dbTestimonials]);
  useEffect(() => setFaqs(dbFaqs), [dbFaqs]);

  // The database REST layer can return RPC results either as a plain scalar
  // (true) or as a row array like [{ fn_name: true }] — handle both shapes.
  const rpcOk = (data: unknown, fnName: string): boolean => {
    if (data === true) return true;
    if (Array.isArray(data) && (data[0] as Record<string, unknown> | undefined)?.[fnName] === true) return true;
    return false;
  };

  const verify = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerifying(true);
    setAuthError("");
    try {
      const { data, error } = await supabase.rpc("admin_verify_password", {
        p_password: password,
      });
      if (error || !rpcOk(data, "admin_verify_password")) throw new Error("Invalid password");
      sessionStorage.setItem("ami_admin_pw", password);
      setAuthed(true);
    } catch {
      setAuthError("Incorrect password. Please try again.");
    } finally {
      setVerifying(false);
    }
  };

  const save = async (key: string, value: unknown) => {
    setSaving(true);
    setSavedMsg("");
    try {
      const { data, error } = await supabase.rpc("admin_save_content", {
        p_password: password,
        p_key: key,
        // The DB function accepts a JSON string (text) and casts it to jsonb —
        // sending a pre-stringified value avoids RPC parameter serialization issues.
        p_value: JSON.stringify(value),
      });

      if (error || !rpcOk(data, "admin_save_content")) throw new Error(error?.message ?? "Save failed");
      setSavedMsg("Changes saved! They are now live on the site.");
      setTimeout(() => setSavedMsg(""), 4000);
    } catch (err) {
      setSavedMsg(`Save failed: ${(err as Error).message}`);
    } finally {
      setSaving(false);
    }
  };


  const loadAudits = async () => {
    setAuditsLoading(true);
    try {
      const { data, error } = await supabase.rpc("admin_list_audits", {
        p_password: password,
      });
      if (error) throw error;
      setAudits((data as AuditRequest[]) ?? []);
    } catch {
      setAudits([]);
    } finally {
      setAuditsLoading(false);
    }
  };

  useEffect(() => {
    if (authed && tab === "audits") loadAudits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed, tab]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <Seo title="Admin | Advance My Idea" description="Site administration." path="/admin" />
        <form onSubmit={verify} className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Advance My Idea logo" className="h-11 w-11 rounded-md object-cover ring-2 ring-gray-900" />
            <div>
              <h1 className="text-lg font-extrabold text-gray-900 leading-none">Admin Login</h1>
              <span className="text-xs text-gray-500">Content Management</span>
            </div>
          </div>
          <label className="mt-6 block text-sm font-bold text-gray-700 mb-1.5">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none"
          />
          {authError && <p className="mt-2 text-sm font-semibold text-red-600">{authError}</p>}
          <button
            type="submit"
            disabled={verifying}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-bold text-white hover:bg-[#E4342B] transition-colors disabled:opacity-60"
          >
            {verifying ? <Loader2 className="h-5 w-5 animate-spin" /> : <Lock className="h-5 w-5" />}
            {verifying ? "Verifying…" : "Sign In"}
          </button>
          <Link to="/" className="mt-4 block text-center text-sm font-semibold text-gray-500 hover:text-gray-900">
            Back to website
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Seo title="Content Admin | Advance My Idea" description="Edit site content." path="/admin" />
      {/* Admin header */}
      <header className="bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="logo" className="h-10 w-10 rounded-md object-cover ring-2 ring-white/20" />
            <div>
              <span className="block font-extrabold leading-none">Content Admin</span>
              <span className="text-xs text-gray-400">Changes go live immediately</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-semibold text-gray-300 hover:text-white">
              View Site
            </Link>
            <button
              onClick={() => {
                sessionStorage.removeItem("ami_admin_pw");
                setAuthed(false);
                setPassword("");
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-sm font-bold hover:bg-white/10"
            >
              <LogOut className="h-4 w-4" /> Log Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                tab === t.id ? "bg-gray-900 text-white" : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {savedMsg && (
          <div className={`mt-4 flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold ${savedMsg.startsWith("Save failed") ? "bg-red-50 text-red-700 border border-red-200" : "bg-green-50 text-green-700 border border-green-200"}`}>
            <CheckCircle2 className="h-5 w-5" /> {savedMsg}
          </div>
        )}

        <div className="mt-6 rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
          {/* ── About story ── */}
          {tab === "about" && (
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">About / Our Story</h2>
              <p className="mt-1 text-sm text-gray-500">
                Separate paragraphs with a blank line. Shown in the "About Us" section on the homepage.
              </p>
              <textarea
                value={storyText}
                onChange={(e) => setStoryText(e.target.value)}
                rows={14}
                className={`${inputCls} mt-4 leading-relaxed`}
              />
              <SaveButton
                saving={saving}
                onClick={() => save("about_story", storyText.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean))}
              />
            </div>
          )}

          {/* ── Services ── */}
          {tab === "services" && (
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Services</h2>
              <p className="mt-1 text-sm text-gray-500">Edit the title, tagline, and description of each service.</p>
              <div className="mt-5 space-y-6">
                {services.map((s, i) => (
                  <div key={s.id} className="rounded-xl border border-gray-200 p-4" style={{ borderLeftWidth: 4, borderLeftColor: s.color }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Title</label>
                        <input
                          value={s.title}
                          onChange={(e) => setServices(services.map((x, j) => (j === i ? { ...x, title: e.target.value } : x)))}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Tagline</label>
                        <input
                          value={s.short}
                          onChange={(e) => setServices(services.map((x, j) => (j === i ? { ...x, short: e.target.value } : x)))}
                          className={inputCls}
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className={labelCls}>Description</label>
                      <textarea
                        value={s.detail}
                        rows={3}
                        onChange={(e) => setServices(services.map((x, j) => (j === i ? { ...x, detail: e.target.value } : x)))}
                        className={inputCls}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <SaveButton saving={saving} onClick={() => save("services", services)} />
            </div>
          )}

          {/* ── Testimonials ── */}
          {tab === "testimonials" && (
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Testimonials</h2>
              <p className="mt-1 text-sm text-gray-500">Edit client quotes, names, and results.</p>
              <div className="mt-5 space-y-6">
                {testimonials.map((t, i) => (
                  <div key={t.id} className="rounded-xl border border-gray-200 p-4" style={{ borderLeftWidth: 4, borderLeftColor: t.color }}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className={labelCls}>Name</label>
                        <input value={t.name} onChange={(e) => setTestimonials(testimonials.map((x, j) => (j === i ? { ...x, name: e.target.value } : x)))} className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Role</label>
                        <input value={t.role} onChange={(e) => setTestimonials(testimonials.map((x, j) => (j === i ? { ...x, role: e.target.value } : x)))} className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Company</label>
                        <input value={t.company} onChange={(e) => setTestimonials(testimonials.map((x, j) => (j === i ? { ...x, company: e.target.value } : x)))} className={inputCls} />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className={labelCls}>Quote</label>
                      <textarea value={t.quote} rows={3} onChange={(e) => setTestimonials(testimonials.map((x, j) => (j === i ? { ...x, quote: e.target.value } : x)))} className={inputCls} />
                    </div>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Headline Result</label>
                        <input value={t.result} onChange={(e) => setTestimonials(testimonials.map((x, j) => (j === i ? { ...x, result: e.target.value } : x)))} className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Service</label>
                        <input value={t.service} onChange={(e) => setTestimonials(testimonials.map((x, j) => (j === i ? { ...x, service: e.target.value } : x)))} className={inputCls} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <SaveButton saving={saving} onClick={() => save("testimonials", testimonials)} />
            </div>
          )}

          {/* ── FAQs ── */}
          {tab === "faqs" && (
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-1 text-sm text-gray-500">Edit questions, answers, and categories.</p>
              <div className="mt-5 space-y-6">
                {faqs.map((f, i) => (
                  <div key={f.id} className="rounded-xl border border-gray-200 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr,200px] gap-3">
                      <div>
                        <label className={labelCls}>Question</label>
                        <input value={f.question} onChange={(e) => setFaqs(faqs.map((x, j) => (j === i ? { ...x, question: e.target.value } : x)))} className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Category</label>
                        <input value={f.category} onChange={(e) => setFaqs(faqs.map((x, j) => (j === i ? { ...x, category: e.target.value } : x)))} className={inputCls} />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className={labelCls}>Answer</label>
                      <textarea value={f.answer} rows={3} onChange={(e) => setFaqs(faqs.map((x, j) => (j === i ? { ...x, answer: e.target.value } : x)))} className={inputCls} />
                    </div>
                  </div>
                ))}
              </div>
              <SaveButton saving={saving} onClick={() => save("faqs", faqs)} />
            </div>
          )}

          {/* ── Audit requests ── */}
          {tab === "audits" && (
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-gray-900">Audit Requests</h2>
                <button onClick={loadAudits} className="text-sm font-bold text-[#1D4ED8] hover:underline">
                  Refresh
                </button>
              </div>
              {auditsLoading ? (
                <div className="py-16 text-center text-gray-500">
                  <Loader2 className="mx-auto h-8 w-8 animate-spin" />
                </div>
              ) : audits.length === 0 ? (
                <div className="py-16 text-center text-gray-500">
                  <Inbox className="mx-auto h-10 w-10 text-gray-300" />
                  <p className="mt-3 font-semibold">No audit requests yet.</p>
                </div>
              ) : (
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                        <th className="py-2 pr-4">Date</th>
                        <th className="py-2 pr-4">Website</th>
                        <th className="py-2 pr-4">Business</th>
                        <th className="py-2 pr-4">Contact</th>
                        <th className="py-2">Goals</th>
                      </tr>
                    </thead>
                    <tbody>
                      {audits.map((a) => (
                        <tr key={a.id} className="border-b border-gray-100 align-top">
                          <td className="py-3 pr-4 whitespace-nowrap text-gray-500">
                            {new Date(a.created_at).toLocaleDateString()}
                          </td>
                          <td className="py-3 pr-4 font-semibold text-gray-900">{a.website_url}</td>
                          <td className="py-3 pr-4">{a.business_name}</td>
                          <td className="py-3 pr-4">
                            <span className="block font-semibold text-gray-900">{a.name}</span>
                            <span className="block text-gray-500">{a.email}</span>
                            {a.phone && <span className="block text-gray-500">{a.phone}</span>}
                          </td>
                          <td className="py-3 text-gray-600">{a.goals || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SaveButton({ saving, onClick }: { saving: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={saving}
      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-bold text-white hover:bg-[#16A34A] transition-colors disabled:opacity-60"
    >
      {saving ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
      {saving ? "Saving…" : "Save Changes"}
    </button>
  );
}
