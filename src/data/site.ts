/**
 * 網站基本設定 — 上線前請修改聯絡方式
 */
export const siteConfig = {
  name: "SooN悟空 · 工作室",
  title: "網站設計與架設",
  tagline: "從形象官網到客製系統，專注交付品質與長期維護",
  email: "soonwukong2026@gmail.com",
  lineUrl: "https://line.me/ti/p/qFmW2ZBTZR",
  lineQrImage: "/line-qr.png",
  location: "台灣",
  yearStarted: 2025,
};

export const navLinks = [
  { href: "#about", label: "關於" },
  { href: "#services", label: "服務" },
  { href: "#works", label: "作品" },
  { href: "#process", label: "流程" },
  { href: "#contact", label: "聯絡" },
] as const;

export const highlights = [
  { value: "2+", label: "完整專案交付" },
  { value: "全端", label: "Next.js · DB · 部署" },
  { value: "穩定", label: "依時程交付上線" },
  { value: "維護", label: "可簽長期合約" },
] as const;

export const aboutParagraphs = [
  "我專注在幫個人與小型團隊把想法變成能上線、能維護的網站。不是只做漂亮首頁，而是從登入、後台、資料庫到部署，整條路都走得通。",
  "我重視需求釐清與架構規劃，開發前先把範圍、時程與驗收標準談清楚。程式會以可維護為前提撰寫，上線後若要擴充或交接，都不會變成難以處理的黑盒子。",
  "如果你需要一個能自己改內容的形象官網，或像玩家入口、會員系統這類客製平台，我都能依預算與時程提供對應方案。",
] as const;

export const principlesIntro =
  "每個專案都依需求選擇合適技術，從規劃、開發到上線由我全程負責，關鍵節點會與你確認，確保成品符合預期。";

export const workPrinciples = [
  {
    title: "需求先行",
    description: "開工前先釐清目標、功能範圍與驗收標準，避免做到一半才改方向。",
  },
  {
    title: "穩定優先",
    description: "登入、資料、資安與部署都會實際驗證，不只求畫面好看。",
  },
  {
    title: "交付可維護",
    description: "程式結構清楚、有部署說明，之後改版或交接都能順利進行。",
  },
] as const;

export type ServiceItem = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  idealFor: string;
  priceHint: string;
};

export const services: ServiceItem[] = [
  {
    id: "wordpress",
    icon: "📄",
    title: "形象官網",
    subtitle: "WordPress · 快速上線",
    description: "適合需要「自己改文章、換圖片、加頁面」的客戶。後台直覺，交付快，後續維護成本低。",
    includes: [
      "RWD 響應式設計",
      "3～8 頁版型規劃",
      "基本 SEO 設定",
      "主機 / SSL 代設定",
      "後台操作教學",
    ],
    idealFor: "工作室、餐廳、個人品牌、小型公司",
    priceHint: "NT$15,000 起",
  },
  {
    id: "custom",
    icon: "⚡",
    title: "客製系統開發",
    subtitle: "Next.js · 全端",
    description: "登入、會員、金流流程、後台管理、API 串接等客製需求。依功能模組報價，適合有明確商業邏輯的專案。",
    includes: [
      "前後端一体開發",
      "資料庫設計（MySQL 等）",
      "Session / 權限控管",
      "Server Actions 或 API",
      "部署與上線協助",
    ],
    idealFor: "遊戲入口、會員平台、內部工具、特殊流程網站",
    priceHint: "依需求報價",
  },
  {
    id: "maintenance",
    icon: "🛡️",
    title: "網站維護代管",
    subtitle: "月費制 · 長期合作",
    description: "網站上線只是開始。我可以代管主機、定期備份、安全更新，並保留每月固定次數的小修改額度。",
    includes: [
      "主機監控與代付",
      "定期備份",
      "安全 / 套件更新",
      "每月小修改額度",
      "故障優先處理",
    ],
    idealFor: "已上線、不想自己顧技術的客戶",
    priceHint: "NT$1,500 / 月起",
  },
  {
    id: "revamp",
    icon: "✨",
    title: "改版與功能擴充",
    subtitle: "既有網站升級",
    description: "舊站太慢、不好看、或想加新功能？可在原有基礎上改版 UI、優化效能，或追加模組。",
    includes: [
      "現況評估",
      "UI / UX 改善",
      "效能優化",
      "新功能開發",
      "資料遷移協助",
    ],
    idealFor: "已有網站但想升級的客戶",
    priceHint: "依範圍報價",
  },
];

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  tech: string[];
  features: string[];
  status: "live" | "demo" | "private";
  link?: string;
  highlight?: boolean;
};

export const works: WorkItem[] = [
  {
    id: "game-portal",
    title: "某知名線上遊戲私服官方網站",
    category: "客製全端平台",
    summary: "知名線上遊戲私服的官方玩家入口，整合登入、帳號、儲值、論壇與 GM 後台。",
    description:
      "直接對接遊戲 MySQL 資料庫，玩家用遊戲帳號登入即可查角色、看排名、申請儲值、使用論壇。含 Rate Limit 防暴力破解、信箱驗證、人工核帳儲值流程，以及可設定的跑馬燈後台。",
    tech: ["Next.js 15", "React 19", "TypeScript", "Prisma", "MySQL", "iron-session", "Resend", "Tailwind CSS", "pm2"],
    features: [
      "遊戲帳號登入（bcrypt）與 Session 管理",
      "帳號資訊、角色列表、VIP / 月卡 / 平台點數",
      "儲值申請 + GM 人工核帳後台",
      "買賣 / 組隊論壇",
      "戰力 / 公會排名",
      "信箱綁定與驗證（背景寄信 worker）",
      "登入嘗試紀錄與 Rate Limit",
    ],
    status: "private",
    highlight: true,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "需求訪談",
    description: "了解目標、預算、時程與是否需要後台自行編輯。先定方案，不盲目開工。",
  },
  {
    step: "02",
    title: "規劃與報價",
    description: "提供頁面結構或功能清單、技術選型（WordPress 或客製），確認報價與交付範圍。",
  },
  {
    step: "03",
    title: "設計與開發",
    description: "UI 確認後進入開發，定期同步進度，關鍵節點請你驗收。",
  },
  {
    step: "04",
    title: "測試與上線",
    description: "跨裝置測試、效能與基本資安檢查，協助域名 / 主機 / SSL 設定並正式上線。",
  },
  {
    step: "05",
    title: "維護（可選）",
    description: "簽署月費維護合約，持續代管主機、備份與小修改，讓你專心經營本業。",
  },
] as const;

export const faqs = [
  {
    q: "跟一般網頁公司差在哪？",
    a: "我一人接案、溝通直接，且具備客製全端能力。簡單官網用 WordPress 快速做；複雜系統用 Next.js 客製，不會用大砲打蚊子。",
  },
  {
    q: "程式品質如何保證？",
    a: "架構、資安與驗收都由我把關，上線前會做跨裝置測試與基本檢查。程式以可維護為原則撰寫，不是做完就不管的拼湊品。",
  },
  {
    q: "一定要簽維護嗎？",
    a: "不強制，但強烈建議。網站需要更新、備份與偶爾小改，有維護合約會比每次急找人要省時也省錢。",
  },
  {
    q: "主機要我自己租嗎？",
    a: "可以。我會依方案建議託管主機或 VPS，也可代設定、代管，費用透明列在報價裡。",
  },
] as const;
