"use client";

import StockBadge from "./Stocks";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#111318]/95 backdrop-blur-md border-b border-stone-200 dark:border-white/8">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-4 flex items-center justify-between gap-4">

        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", window.location.pathname);
          }}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-stone-900 dark:bg-white flex items-center justify-center shrink-0"
        >
          <span className="text-white dark:text-stone-900 text-xs font-bold tracking-tight">A.S.</span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors duration-150 tracking-widest uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex gap-2">
          <StockBadge symbol="VFV.TO" label="VFV" href="https://finance.yahoo.com/quote/VFV.TO" />
          <StockBadge symbol="AAPL" label="AAPL" href="https://finance.yahoo.com/quote/AAPL" />
        </div>
      </div>

      <div className="sm:hidden px-5 pb-3 flex justify-between w-full">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-xs font-semibold text-stone-500 hover:text-stone-900 transition uppercase tracking-wider">
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
