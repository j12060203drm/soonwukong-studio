"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/AboutSection";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-[var(--border)] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="開始你的專案"
          subtitle="簡單描述需求、預算與期望上線時間即可。我會在 1～2 個工作天內回覆。"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 lg:col-span-1">
            <h3 className="font-semibold text-[var(--text)]">建議來信附上</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>• 網站用途（形象官網 / 客製系統 / 改版）</li>
              <li>• 大概頁數或功能清單</li>
              <li>• 預算範圍與期望時程</li>
              <li>• 參考網站（如有）</li>
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[var(--accent-dim)] bg-gradient-to-br from-[var(--accent)]/10 to-transparent p-6">
            <div>
              <p className="text-sm text-[var(--muted)]">聯絡信箱</p>
              <p className="mt-2 text-xl font-semibold text-[var(--text)]">{siteConfig.name}</p>
              <a
                href={`mailto:${siteConfig.email}?subject=網站專案洽詢`}
                className="mt-1 block text-sm text-[var(--accent-bright)] hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.email}?subject=網站專案洽詢&body=你好，我想洽詢網站專案：%0A%0A【用途】%0A%0A【預算】%0A%0A【時程】%0A%0A【其他說明】`}
                className="rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition hover:bg-[var(--accent-bright)]"
              >
                寄信洽詢
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-xl border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--text)] transition hover:bg-white/5"
              >
                {copied ? "已複製 Email" : "複製 Email"}
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-[#06C755]/30 bg-gradient-to-br from-[#06C755]/10 to-transparent p-6 text-center">
            <p className="text-sm font-medium text-[#7ddea8]">LINE 洽詢</p>
            <p className="mt-1 text-lg font-semibold text-[var(--text)]">{siteConfig.name}</p>

            <div className="mt-4 rounded-2xl bg-white p-3 shadow-lg shadow-black/20">
              <Image
                src={siteConfig.lineQrImage}
                alt="SooN悟空 · 工作室 LINE QR Code"
                width={160}
                height={160}
                className="h-40 w-40"
              />
            </div>

            <p className="mt-3 text-xs text-[var(--muted)]">手機掃描 QR Code 加入好友</p>

            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#06C755] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#05b84c]"
            >
              <LineIcon />
              加入 LINE 好友
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LineIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}
