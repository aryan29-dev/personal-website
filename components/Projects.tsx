import { Github, ExternalLink } from "lucide-react";
import { useMemo } from "react";

type Project = {
    title: string;
    blurb: string;
    highlights: string[];
    github: string;
    demo?: string;
    tech: string[];
    note?: string;
    featured?: boolean;
};

const projects: Project[] = [
    {
        title: "Market Stress & Crisis Simulator 📉📈",
        blurb:
            "Stress-test portfolios across major historical crises to understand drawdowns and recovery.",
        highlights: [
            "Replays 3 crisis windows (2008 GFC, COVID-19, 2022 rate shock) for U.S. + Canadian portfolios",
            "Computes 6+ risk metrics (max drawdown, volatility, Sharpe, time-to-recovery) over 12–36 month horizons",
        ],
        github: "https://github.com/aryan29-dev/Market-Crisis-Simulator",
        demo: "https://market-crisis-simulator.vercel.app",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Recharts"],
        note: "Portfolio Risk & FinTech Project",
        featured: true,
    },
    {
        title: "Robo-Advising Portfolio Optimizer 📊",
        blurb:
            "Builds a market-meet portfolio from a CSV input with sector caps and real price data (yfinance API).",
        highlights: [
            "Filters equities by currency, liquidity, and market cap with validation for invalid/delisted tickers",
            "Constructs a $1,000,000 CAD portfolio aligned to S&P 500 + TSX Composite while accounting for FX and fees",
        ],
        github: "https://github.com/aryan29-dev/Robo-Advising-Challenge",
        tech: ["Python", "pandas", "NumPy", "yfinance", "Jupyter Notebook"],
        note: "Portfolio Optimization Challenge @ UWaterloo",
        featured: true,
    },
    {
        title: "Equity Trend Analyzer 📉📈",
        blurb:
            "Interactive dashboard to analyze trends and signals using historical market data.",
        highlights: [
            "Calculates key risk/return metrics (max drawdown, total return, annualized volatility)",
            "Classifies trend via linear regression on log-prices and generates MA crossover + RSI(14) signals",
        ],
        github: "https://github.com/aryan29-dev/Equity-Trend-Analyzer",
        demo: "https://equitytrendanalyzer.streamlit.app",
        tech: ["Python", "Streamlit", "pandas", "NumPy", "Matplotlib", "yfinance"],
        note: "FinTech Project",
        featured: true,
    },
    {
        title: "Portfolio Risk Engine 📈",
        blurb: "Monte Carlo simulation engine to explore portfolio risk-return tradeoffs.",
        highlights: [
            "Simulates thousands of portfolios to evaluate distributions of return/volatility",
            "Identifies risk-adjusted candidates (e.g., highest Sharpe ratio) to compare tradeoffs over a chosen period",
        ],
        github: "https://github.com/aryan29-dev/Portfolio-Risk-Engine",
        tech: ["Python", "pandas", "NumPy", "Matplotlib", "yfinance"],
        note: "FinTech Project",
    },
    {
        title: "Personal Website 🌐",
        blurb: "Modern portfolio site with clean UI, responsive layout, and accessibility-friendly components.",
        highlights: [
            "Built numerous sections (About/Experience/Projects/Contact) with consistent design and smooth interactions",
            "Optimized for fast navigation, clear CTAs, and project links",
        ],
        github: "https://github.com/aryan29-dev/personal-website",
        demo: "https://aryansingh.app/",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
        note: "This website!",
    },
    {
        title: "Baller (Basketball Roster Manager) 🏀",
        blurb: "Java roster manager focused on clean OOP structure and core DSA operations.",
        highlights: [
            "Implements add/remove/search/sort logic using ArrayLists with clear class responsibilities",
            "Designed to practice OOP patterns and algorithmic thinking with clean console output",
        ],
        github: "https://github.com/aryan29-dev/Baller",
        tech: ["Java", "OOP", "ArrayLists"],
        note: "OOP & Algorithmic Design",
    },
    {
        title: "Mini Python Projects 🐍",
        blurb: "Small projects showcasing core programming fundamentals and problem solving.",
        highlights: [
            "Practice set covering control flow, data structures, and input handling",
            "Built to reinforce fundamentals through many small, complete implementations",
        ],
        github: "https://github.com/aryan29-dev/Mini-Projects-Python",
        tech: ["Python"],
    },
];

export default function Projects() {
    const featured = useMemo(() => projects.filter((p) => p.featured), []);
    const rest = useMemo(() => projects.filter((p) => !p.featured), []);

    return (
        <section id="projects" className="py-28 border-t border-zinc-200">
            <div className="mb-10">
                <div className="inline-flex items-center gap-3">
                    <span className="inline-block h-2 w-10 rounded-full bg-zinc-900" />
                    <h2
                        className="font-black uppercase tracking-[0.28em] text-zinc-900 text-3xl sm:text-4xl"
                        style={{
                            fontFamily:
                                "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial",
                        }}
                    >
                        PROJECTS
                    </h2>
                </div>

                <p className="mt-4 max-w-2xl text-lg text-zinc-700 leading-relaxed">
                    Here are a few projects I've worked on that showcase my skills and interests in finance and technology. Feel free to explore the code and live demos!
                </p>
            </div>

            <div className="grid gap-6">
                {featured.length > 0 && (
                    <div className="mb-2">
                        <div className="text-xs font-black uppercase tracking-widest text-zinc-500">
                            Featured
                        </div>
                    </div>
                )}

                {featured.map((p) => (
                    <ProjectCard key={p.title} p={p} />
                ))}

                {rest.length > 0 && (
                    <div className="mt-10 mb-2">
                        <div className="text-xs font-black uppercase tracking-widest text-zinc-500">
                            More Projects
                        </div>
                    </div>
                )}

                {rest.map((p) => (
                    <ProjectCard key={p.title} p={p} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ p }: { p: Project }) {
    const Note =
        p.note && p.title === "Robo-Advising Portfolio Optimizer 📊" ? (
            <a
                href="https://uwaterloo.ca/computing-financial-management/news/cfm-101-case-competition-winners-fall-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-300 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 hover:text-zinc-900 transition"
            >
                {p.note}
            </a>
        ) : p.note ? (
            <span className="rounded-full border border-zinc-300 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700">
                {p.note}
            </span>
        ) : null;

    return (
        <div className="rounded-3xl border border-zinc-200 bg-white/60 p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <div className="flex flex-wrap items-start gap-3">
                        <h3 className="text-xl font-bold text-zinc-900">{p.title}</h3>
                        {Note}
                    </div>

                    <p className="mt-3 max-w-3xl text-zinc-700 leading-relaxed">
                        {p.blurb}
                    </p>
                    <ul className="mt-3 list-disc! list-outside pl-6! space-y-2 text-sm text-zinc-700 marker:text-zinc-500">
                        {p.highlights.map((h) => (
                            <li key={h}>{h}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-row gap-3 sm:flex-row sm:items-center whitespace-nowrap">
                    {p.demo ? (
                        <a
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-2xl border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            Live Demo
                            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                        </a>
                    ) : null}

                    <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 rounded-2xl border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <Github className="h-4 w-4" />
                        GitHub
                        <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </a>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                    <span
                        key={t}
                        className="rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-800"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}
