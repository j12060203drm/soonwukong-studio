import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-[var(--text)]">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{siteConfig.title} · {siteConfig.location}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-[var(--accent-bright)]"
            title={siteConfig.email}
          >
            {siteConfig.name}
          </a>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7ddea8]"
          >
            LINE
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--border)]/60 py-4 text-center text-xs text-[var(--muted)]">
        © {year} {siteConfig.name}. Built with Next.js.
      </div>
    </footer>
  );
}
