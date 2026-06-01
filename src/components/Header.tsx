import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="group flex flex-col">
          <span className="text-sm font-semibold tracking-wide text-[var(--text)] group-hover:text-[var(--accent-bright)]">
            {siteConfig.name}
          </span>
          <span className="text-[11px] text-[var(--muted)]">{siteConfig.title}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--text)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="shrink-0 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition hover:bg-[var(--accent-bright)]"
        >
          洽詢專案
        </Link>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-[var(--border)]/60 px-4 py-2 md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--text)]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
