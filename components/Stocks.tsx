"use client";

import { useEffect, useState } from "react";

type Quote = {
  price: number | null;
  change: number | null;
  changePct: number | null;
};

function fmt(n: number, digits = 2) {
  return n.toFixed(digits);
}

export default function StockBadge({
  symbol,
  label,
  href,
}: {
  symbol: string;
  label: string;
  href: string;
}) {
  const [q, setQ] = useState<Quote>({ price: null, change: null, changePct: null });
  const [err, setErr] = useState(false);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setErr(false);
        const res = await fetch(`/api/quote?v=${symbol}`, { cache: "no-store" });
        if (!res.ok) throw new Error();

        const data = await res.json();
        if (!alive) return;

        setQ({
          price: data.price ?? null,
          change: data.change ?? null,
          changePct: data.changePct ?? null,
        });
      } catch {
        if (!alive) return;
        setErr(true);
      }
    }

    load();
    const id = setInterval(load, 60_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [symbol]);

  const up = (q.change ?? 0) >= 0;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-stone-200 dark:border-white/10 bg-white dark:bg-white/8 px-3 py-1 text-xs font-semibold text-stone-800 dark:text-stone-100 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:shadow-md transition"
      title={symbol}
    >
      <span className="text-[10px] font-black tracking-widest text-stone-400 dark:text-stone-400">
        {label}
      </span>

      {err || q.price === null ? (
        <span className="text-stone-400 dark:text-stone-500">—</span>
      ) : (
        <>
          <span className="tabular-nums text-stone-800 dark:text-stone-100">{fmt(q.price)}</span>
          <span className={`tabular-nums ${up ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
            {up ? "▲" : "▼"} {fmt(q.change!)} ({fmt(q.changePct!)}%)
          </span>
        </>
      )}
    </a>
  );
}
