"use client";

import { useEffect, useState } from "react";

type Quote = {
    symbol: string;
    label: string;
    price: number | null;
    change: number | null;
    changePct: number | null;
};

const SYMBOLS = [
    { symbol: "NVDA", label: "NVDA" },
    { symbol: "AAPL", label: "AAPL" },
    { symbol: "VFV.TO", label: "VFV" },
    { symbol: "TSLA", label: "TSLA" },
    { symbol: "AMZN", label: "AMZN" },
    { symbol: "META", label: "META" },
    { symbol: "MRVL", label: "MRVL" },
    { symbol: "NOW", label: "NOW" },
    { symbol: "XEQT.TO", label: "XEQT" },
    { symbol: "VDY.TO", label: "VDY" },
    { symbol: "ZQQ.TO", label: "ZQQ" },
    { symbol: "RY.TO", label: "RY" },
];

function fmt(n: number, digits = 2) {
    return n.toFixed(digits);
}

function QuoteItem({ q }: { q: Quote }) {
    const up = (q.change ?? 0) >= 0;

    return (
        <span className="inline-flex shrink-0 items-center gap-2 px-5 text-xs">
            <span className="font-semibold text-stone-600 dark:text-stone-400">{q.label}</span>

            {q.price === null ? (
                <span className="text-stone-400 dark:text-stone-600">—</span>
            ) : (
                <>
                    <span className="tabular-nums text-stone-900 dark:text-stone-100">{fmt(q.price)}</span>
                    <span
                        className={`tabular-nums ${up ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                            }`}
                    >
                        {up ? "▲" : "▼"} {fmt(q.changePct!)}%
                    </span>
                </>
            )}
        </span>
    );
}

export default function Ticker() {
    const [quotes, setQuotes] = useState<Quote[]>(
        SYMBOLS.map((s) => ({ ...s, price: null, change: null, changePct: null }))
    );

    useEffect(() => {
        let alive = true;

        async function load() {
            const results = await Promise.all(
                SYMBOLS.map(async (s) => {
                    try {
                        const res = await fetch(`/api/quote?v=${s.symbol}`, { cache: "no-store" });
                        if (!res.ok) throw new Error();
                        const data = await res.json();
                        return {
                            ...s,
                            price: data.price ?? null,
                            change: data.change ?? null,
                            changePct: data.changePct ?? null,
                        };
                    } catch {
                        return { ...s, price: null, change: null, changePct: null };
                    }
                })
            );

            if (alive) setQuotes(results);
        }

        load();
        const id = setInterval(load, 60_000);
        return () => {
            alive = false;
            clearInterval(id);
        };
    }, []);

    return (
        <div className="ticker-wrap border-y border-stone-200 bg-stone-50 dark:border-white/8 dark:bg-[#0d0f13]">
            <div className="ticker-track py-2">
                {quotes.map((q) => (
                    <QuoteItem key={q.symbol} q={q} />
                ))}
                {quotes.map((q) => (
                    <QuoteItem key={`${q.symbol}-dup`} q={q} />
                ))}
            </div>
        </div>
    );
}
