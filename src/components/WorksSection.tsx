import { works } from "@/data/site";
import { SectionHeading } from "@/components/AboutSection";
import { WorkDemoCredentials } from "@/components/WorkDemoCredentials";

const statusLabel = {
  live: "已上線",
  demo: "Demo",
  private: "非公開展示",
} as const;

export function WorksSection() {
  return (
    <section id="works" className="scroll-mt-20 border-t border-[var(--border)] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Works"
          title="代表作品"
          subtitle="以下為實際交付等級的專案，展示全端開發與系統整合能力。"
        />

        <div className="mt-10 space-y-6">
          {works.map((work) => (
            <article
              key={work.id}
              className={`overflow-hidden rounded-2xl border ${
                work.highlight
                  ? "border-[var(--accent-dim)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface-2)] to-[var(--surface)]"
                  : "border-[var(--border)] bg-[var(--surface)]/60"
              }`}
            >
              <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
                <div className="border-b border-[var(--border)]/60 p-6 lg:border-b-0 lg:border-r">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-[var(--accent)]/15 px-2 py-0.5 text-[11px] font-medium text-[var(--accent-bright)]">
                      {work.category}
                    </span>
                    <span className="rounded-md border border-[var(--border)] px-2 py-0.5 text-[11px] text-[var(--muted)]">
                      {statusLabel[work.status]}
                    </span>
                    {work.clientNote ? (
                      <span className="rounded-md bg-sky-500/15 px-2 py-0.5 text-[11px] text-sky-200">
                        {work.clientNote}
                      </span>
                    ) : null}
                    {work.highlight ? (
                      <span className="rounded-md bg-amber-500/15 px-2 py-0.5 text-[11px] text-amber-200">
                        主打案例
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-[var(--text)]">{work.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{work.summary}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{work.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {work.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[var(--border)] bg-black/20 px-2 py-1 font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {work.link ? (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1 rounded-lg bg-[var(--accent)]/15 px-4 py-2 text-sm font-medium text-[var(--accent-bright)] ring-1 ring-[var(--accent-dim)]/50 transition hover:bg-[var(--accent)]/25"
                    >
                      前往客戶網站 →
                    </a>
                  ) : null}
                </div>

                <div className="p-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">主要功能</h4>
                  <ul className="mt-3 space-y-2">
                    {work.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-[var(--muted)]">
                        <span className="mt-0.5 text-[var(--accent)]">▸</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {work.demoAccount ? (
                    <WorkDemoCredentials
                      username={work.demoAccount.username}
                      password={work.demoAccount.password}
                    />
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
