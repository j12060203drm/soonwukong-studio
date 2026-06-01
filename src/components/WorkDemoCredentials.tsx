"use client";

import { useState } from "react";

export function WorkDemoCredentials({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyText = username;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="mt-6 rounded-xl border border-[var(--border)] bg-black/25 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">測試帳號（登入後可瀏覽）</p>
      <dl className="mt-3 space-y-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-[var(--muted)]">帳號</dt>
          <dd className="font-[family-name:var(--font-mono)] text-[var(--text)]">{username}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[var(--muted)]">密碼</dt>
          <dd className="font-[family-name:var(--font-mono)] text-[var(--text)]">{password}</dd>
        </div>
      </dl>
      <button
        type="button"
        onClick={handleCopy}
        className="mt-4 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent-dim)] hover:bg-[var(--surface-2)]"
      >
        {copied ? "已複製" : "複製帳號密碼"}
      </button>
    </div>
  );
}
