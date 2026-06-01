import { highlights, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[var(--glow)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <p className="animate-fade-up text-xs font-medium uppercase tracking-[0.35em] text-[var(--accent)]">
          Web Design · Development · Maintenance
        </p>

        <h1 className="animate-fade-up-delay-1 mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl md:text-6xl">
          {siteConfig.name}
          <span className="mt-2 block text-2xl font-semibold text-[var(--accent-bright)] sm:text-3xl md:text-4xl">
            {siteConfig.title}
          </span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          {siteConfig.tagline}
        </p>

        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--bg)] shadow-lg shadow-[var(--glow)] transition hover:bg-[var(--accent-bright)]"
          >
            開始洽談
          </a>
          <a
            href="#works"
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/80 px-6 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent-dim)] hover:bg-[var(--surface-2)]"
          >
            查看作品
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-4 backdrop-blur"
            >
              <dt className="text-2xl font-bold tabular-nums text-[var(--accent-bright)]">{item.value}</dt>
              <dd className="mt-1 text-xs text-[var(--muted)]">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
