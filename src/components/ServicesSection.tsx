import { services } from "@/data/site";
import { SectionHeading } from "@/components/AboutSection";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--surface)]/30 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="服務項目"
          subtitle="依需求選擇方案：快速形象官網、客製系統，或上線後的長期維護。"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 transition hover:border-[var(--accent-dim)] hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-2xl" aria-hidden>
                    {service.icon}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-[var(--text)] group-hover:text-[var(--accent-bright)]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--accent)]">{service.subtitle}</p>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--border)] bg-black/20 px-3 py-1 text-xs font-medium text-[var(--muted)]">
                  {service.priceHint}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>

              <ul className="mt-5 flex-1 space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-[var(--muted)]">
                    <span className="text-[var(--accent)]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-[var(--border)]/60 pt-4 text-xs text-[var(--muted)]">
                適合：<span className="text-[var(--text)]">{service.idealFor}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
