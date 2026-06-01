import { faqs, processSteps } from "@/data/site";
import { SectionHeading } from "@/components/AboutSection";

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--surface)]/30 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Process"
          title="合作流程"
          subtitle="透明、可追蹤。每個階段都有明確產出，避免做到一半才發現方向不對。"
        />

        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-5"
            >
              <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[var(--accent)]">
                {step.step}
              </span>
              <h3 className="mt-2 font-semibold text-[var(--text)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <h3 className="text-lg font-semibold text-[var(--text)]">常見問題</h3>
          <dl className="mt-5 divide-y divide-[var(--border)]/60 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5">
                <dt className="font-medium text-[var(--text)]">{faq.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
