import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, COLORS, BOOKING_URL } from "@/data/siteData";
import { useSiteContent } from "@/hooks/useSiteContent";

export default function FaqSection() {
  const faqs = useSiteContent("faqs", FAQS);
  const scrollToAudit = () => {
    const el = document.querySelector("#free-audit");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.assign("/#free-audit");
  };


  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* stained-glass accent strip */}
      <div className="absolute top-0 inset-x-0 h-1 flex">
        {COLORS.map((c) => (
          <div key={c} className="flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#16A34A]">
            Good Questions, Straight Answers
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you're wondering about pricing, timelines, the free
            audit, and how a Kaizen-driven engagement actually works.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => {
            const color = COLORS[i % COLORS.length];
            return (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-xl border border-gray-200 bg-white px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 gap-4">
                  <span className="flex items-start gap-3.5">
                    <span
                      className="mt-0.5 h-6 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="flex-1">
                      <span className="block text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color }}>
                        {faq.category}
                      </span>
                      <span className="block text-base font-bold text-gray-900">
                        {faq.question}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-[22px] text-[15px] leading-relaxed text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* still-have-questions CTA */}
        <div className="mt-12 rounded-2xl bg-gray-900 p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 flex">
            {COLORS.map((c) => (
              <div key={c} className="flex-1" style={{ backgroundColor: c }} />
            ))}
          </div>
          <HelpCircle className="mx-auto h-10 w-10 text-[#FACC15]" />
          <h3 className="mt-4 text-2xl font-extrabold text-white">
            Still have a question?
          </h3>
          <p className="mt-2 text-gray-300 max-w-xl mx-auto">
            Book a free consultation and ask us anything — or start with a free
            48-hour audit of your current website.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#E4342B] px-6 py-3 text-sm font-bold text-white hover:bg-[#c92a22] transition-colors"
            >
              Book a Free Consultation
            </a>
            <button
              onClick={scrollToAudit}
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Get My Free Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
