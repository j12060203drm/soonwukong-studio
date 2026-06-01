import { aboutParagraphs, principlesIntro, workPrinciples } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-[var(--border)] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="關於我"
          subtitle="一人接案，全端交付。從版型到資料庫、部署與維護，一條龍處理。"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)]">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-2)] p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]/15 text-sm">
                🤝
              </span>
              <h3 className="font-semibold text-[var(--text)]">開發原則</h3>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-[var(--muted)]">{principlesIntro}</p>
            <ul className="space-y-3">
              {workPrinciples.map((point) => (
                <li key={point.title} className="rounded-xl border border-[var(--border)]/70 bg-black/20 p-3">
                  <p className="text-sm font-medium text-[var(--accent-bright)]">{point.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{point.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text)]">{title}</h2>
      <p className="mt-3 text-[var(--muted)]">{subtitle}</p>
    </div>
  );
}
