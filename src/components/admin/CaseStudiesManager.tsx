import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Loader2, Plus, Save, Trash2 } from "lucide-react";
import { PORTFOLIO_CATEGORIES } from "@/data/siteData";
import {
  CUSTOM_CASE_STUDIES_KEY,
  CustomCaseStudy,
  DEFAULT_CASE_STUDY_IMAGE,
} from "@/hooks/useCaseStudies";
import { useSiteContent } from "@/hooks/useSiteContent";

const inputCls =
  "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 outline-none";
const labelCls = "block text-xs font-bold text-gray-600 mb-1";

const CATEGORIES = PORTFOLIO_CATEGORIES.filter((c) => c !== "All");

/** Editable form shape — long-text fields as plain strings for easy editing */
interface Draft {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  metric: string;
  description: string;
  client: string;
  industry: string;
  timeline: string;
  servicesText: string; // comma-separated
  challengeText: string; // blank-line separated paragraphs
  solutionText: string;
  results: { value: string; label: string }[];
  quoteText: string;
  quoteName: string;
  quoteRole: string;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toDraft(c: CustomCaseStudy): Draft {
  return {
    id: c.id,
    slug: c.slug,
    title: c.title,
    category: c.category,
    image: c.image ?? "",
    metric: c.metric,
    description: c.description,
    client: c.client,
    industry: c.industry,
    timeline: c.timeline,
    servicesText: (c.services ?? []).join(", "),
    challengeText: (c.challenge ?? []).join("\n\n"),
    solutionText: (c.solution ?? []).join("\n\n"),
    results: c.results?.length ? c.results : [{ value: "", label: "" }],
    quoteText: c.quote?.text ?? "",
    quoteName: c.quote?.name ?? "",
    quoteRole: c.quote?.role ?? "",
  };
}

function toParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function fromDraft(d: Draft): CustomCaseStudy {
  const slug = d.slug.trim() ? slugify(d.slug) : slugify(d.title);
  return {
    id: d.id,
    slug,
    title: d.title.trim(),
    category: d.category || CATEGORIES[0],
    image: d.image.trim() || DEFAULT_CASE_STUDY_IMAGE,
    metric: d.metric.trim(),
    description: d.description.trim(),
    metaTitle: `Case Study: ${d.title.trim()} | Advance My Idea`,
    metaDescription: d.description.trim(),
    client: d.client.trim(),
    industry: d.industry.trim(),
    timeline: d.timeline.trim(),
    services: d.servicesText.split(",").map((s) => s.trim()).filter(Boolean),
    challenge: toParagraphs(d.challengeText),
    solution: toParagraphs(d.solutionText),
    results: d.results.filter((r) => r.value.trim() && r.label.trim()),
    quote: d.quoteText.trim()
      ? { text: d.quoteText.trim(), name: d.quoteName.trim(), role: d.quoteRole.trim() }
      : undefined,
  };
}

function blankDraft(nextId: number): Draft {
  return {
    id: nextId,
    slug: "",
    title: "",
    category: CATEGORIES[0],
    image: "",
    metric: "",
    description: "",
    client: "",
    industry: "",
    timeline: "",
    servicesText: "",
    challengeText: "",
    solutionText: "",
    results: [
      { value: "", label: "" },
      { value: "", label: "" },
      { value: "", label: "" },
    ],
    quoteText: "",
    quoteName: "",
    quoteRole: "",
  };
}

interface Props {
  saving: boolean;
  onSave: (studies: CustomCaseStudy[]) => void;
}

export default function CaseStudiesManager({ saving, onSave }: Props) {
  const stored = useSiteContent<CustomCaseStudy[]>(CUSTOM_CASE_STUDIES_KEY, []);
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [open, setOpen] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setDrafts((Array.isArray(stored) ? stored : []).map(toDraft));
  }, [stored]);

  const update = (i: number, patch: Partial<Draft>) =>
    setDrafts(drafts.map((d, j) => (j === i ? { ...d, ...patch } : d)));

  const addNew = () => {
    const nextId =
      drafts.length > 0 ? Math.max(...drafts.map((d) => d.id)) + 1 : 1000;
    setDrafts([...drafts, blankDraft(nextId)]);
    setOpen(drafts.length);
    setError("");
  };

  const remove = (i: number) => {
    if (!window.confirm("Delete this case study? This removes it from the live site on save.")) return;
    setDrafts(drafts.filter((_, j) => j !== i));
    setOpen(null);
  };

  const handleSave = () => {
    for (const d of drafts) {
      if (!d.title.trim() || !d.client.trim() || !d.metric.trim() || !d.description.trim()) {
        setError("Every case study needs at least a Title, Client, Headline Metric, and Card Description before saving.");
        return;
      }
    }
    setError("");
    onSave(drafts.map(fromDraft));
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-gray-900">Case Studies</h2>
          <p className="mt-1 text-sm text-gray-500 max-w-2xl">
            Add real client success stories here. They appear on the homepage portfolio grid, the
            /portfolio page, and get their own full page at /case-studies/&lt;slug&gt; — right
            alongside the 12 built-in studies (those are managed in code and not editable here).
          </p>
        </div>
        <button
          onClick={addNew}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#1D4ED8] px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-800 transition-colors"
        >
          <Plus className="h-4 w-4" /> Add Case Study
        </button>
      </div>

      {drafts.length === 0 && (
        <div className="mt-8 rounded-xl border-2 border-dashed border-gray-200 py-14 text-center text-gray-500">
          <p className="font-semibold">No custom case studies yet.</p>
          <p className="mt-1 text-sm">Click "Add Case Study" to publish your first real client story.</p>
        </div>
      )}

      <div className="mt-6 space-y-4">
        {drafts.map((d, i) => (
          <div key={d.id} className="rounded-xl border border-gray-200 overflow-hidden">
            {/* Card header */}
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-3 bg-gray-50 px-4 py-3 text-left hover:bg-gray-100 transition-colors"
            >
              <div className="min-w-0">
                <span className="block truncate font-bold text-gray-900">
                  {d.title || "Untitled case study"}
                </span>
                <span className="block truncate text-xs text-gray-500">
                  {d.client || "No client set"} · {d.category} {d.metric && `· ${d.metric}`}
                </span>
              </div>
              {open === i ? (
                <ChevronUp className="h-5 w-5 shrink-0 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 shrink-0 text-gray-400" />
              )}
            </button>

            {open === i && (
              <div className="p-4 sm:p-5 space-y-4">
                {/* Basics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className={labelCls}>Project Title *</label>
                    <input
                      value={d.title}
                      onChange={(e) => {
                        const title = e.target.value;
                        update(i, {
                          title,
                          slug: d.slug && d.slug !== slugify(d.title) ? d.slug : slugify(title),
                        });
                      }}
                      placeholder="ExSell Sales LinkedIn Platform"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Client Name *</label>
                    <input
                      value={d.client}
                      onChange={(e) => update(i, { client: e.target.value })}
                      placeholder="ExSell Sales"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Category</label>
                    <select
                      value={d.category}
                      onChange={(e) => update(i, { category: e.target.value })}
                      className={inputCls}
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className={labelCls}>Industry</label>
                    <input
                      value={d.industry}
                      onChange={(e) => update(i, { industry: e.target.value })}
                      placeholder="Sales Consulting"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Timeline</label>
                    <input
                      value={d.timeline}
                      onChange={(e) => update(i, { timeline: e.target.value })}
                      placeholder="8 weeks to launch"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Headline Metric *</label>
                    <input
                      value={d.metric}
                      onChange={(e) => update(i, { metric: e.target.value })}
                      placeholder="+180% inbound leads"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Card Description * (short teaser shown on the portfolio card)</label>
                  <textarea
                    value={d.description}
                    rows={2}
                    onChange={(e) => update(i, { description: e.target.value })}
                    placeholder="One or two sentences summarizing the project and result."
                    className={inputCls}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className={labelCls}>Image URL (optional — a default is used if blank)</label>
                    <input
                      value={d.image}
                      onChange={(e) => update(i, { image: e.target.value })}
                      placeholder="https://…"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>URL Slug (auto-generated from title)</label>
                    <input
                      value={d.slug}
                      onChange={(e) => update(i, { slug: slugify(e.target.value) })}
                      placeholder="exsell-sales-linkedin-platform"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Services (comma-separated)</label>
                  <input
                    value={d.servicesText}
                    onChange={(e) => update(i, { servicesText: e.target.value })}
                    placeholder="Web Development, SEO Foundations, Brand Design"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>The Challenge (separate paragraphs with a blank line)</label>
                  <textarea
                    value={d.challengeText}
                    rows={4}
                    onChange={(e) => update(i, { challengeText: e.target.value })}
                    placeholder="What problem was the client facing before you started?"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>The Solution (separate paragraphs with a blank line)</label>
                  <textarea
                    value={d.solutionText}
                    rows={4}
                    onChange={(e) => update(i, { solutionText: e.target.value })}
                    placeholder="What did you build/do, and how?"
                    className={inputCls}
                  />
                </div>

                {/* Results */}
                <div>
                  <label className={labelCls}>Results (value + label, e.g. "+214%" / "qualified lead volume")</label>
                  <div className="space-y-2">
                    {d.results.map((r, ri) => (
                      <div key={ri} className="flex gap-2">
                        <input
                          value={r.value}
                          onChange={(e) =>
                            update(i, {
                              results: d.results.map((x, xi) => (xi === ri ? { ...x, value: e.target.value } : x)),
                            })
                          }
                          placeholder="+180%"
                          className={`${inputCls} w-32`}
                        />
                        <input
                          value={r.label}
                          onChange={(e) =>
                            update(i, {
                              results: d.results.map((x, xi) => (xi === ri ? { ...x, label: e.target.value } : x)),
                            })
                          }
                          placeholder="inbound lead volume"
                          className={inputCls}
                        />
                        <button
                          onClick={() => update(i, { results: d.results.filter((_, xi) => xi !== ri) })}
                          className="shrink-0 rounded-lg border border-gray-200 px-2.5 text-gray-400 hover:text-red-600 hover:border-red-200"
                          aria-label="Remove result"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => update(i, { results: [...d.results, { value: "", label: "" }] })}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1D4ED8] hover:underline"
                    >
                      <Plus className="h-4 w-4" /> Add result
                    </button>
                  </div>
                </div>

                {/* Quote */}
                <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 space-y-3">
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                    Client Quote (optional)
                  </span>
                  <textarea
                    value={d.quoteText}
                    rows={3}
                    onChange={(e) => update(i, { quoteText: e.target.value })}
                    placeholder="What the client said about the engagement…"
                    className={inputCls}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      value={d.quoteName}
                      onChange={(e) => update(i, { quoteName: e.target.value })}
                      placeholder="Name"
                      className={inputCls}
                    />
                    <input
                      value={d.quoteRole}
                      onChange={(e) => update(i, { quoteRole: e.target.value })}
                      placeholder="Role, Company"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => remove(i)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" /> Delete This Case Study
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}

      <button
        onClick={handleSave}
        disabled={saving}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-bold text-white hover:bg-[#16A34A] transition-colors disabled:opacity-60"
      >
        {saving ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
        {saving ? "Saving…" : "Save Case Studies"}
      </button>
    </div>
  );
}
