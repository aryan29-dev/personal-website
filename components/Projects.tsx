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
            "Interactive web app that stress-tests investment portfolios against major historical crises to quantify downside risk and recovery behavior.",
        highlights: [
            "Replays 3 historical crisis periods (2008 GFC, COVID-19 Crash, 2022 Rate Shock) across U.S. & Canadian portfolios to simulate real-world drawdowns",
            "Calculates 6+ portfolio-level metrics including total return, maximum drawdown, annualized volatility, Sharpe ratio, annualized return, and recovery duration over customizable 12–36 month horizons",
        ],
        github: "https://github.com/aryan29-dev/Market-Crisis-Simulator",
        demo: "https://market-crisis-simulator.vercel.app",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Recharts"],
        note: "Quantitative Risk & FinTech Project",
        featured: true,
    },
    {
        title: "Robo-Advising Portfolio Optimizer 📊",
        blurb:
            "Data-driven portfolio construction engine that builds a market-aligned CAD portfolio using real-time financial data and constraint-based optimization.",
        highlights: [
            "Processes CSV equity inputs and validates tickers using the yfinance API, filtering by liquidity, market cap, and currency exposure",
            "Constructs a $1,000,000 CAD portfolio aligned to S&P 500 + TSX Composite benchmarks while incorporating FX adjustments and transaction cost assumptions",
        ],
        github: "https://github.com/aryan29-dev/Robo-Advising-Challenge",
        tech: ["Python", "pandas", "NumPy", "yfinance", "Jupyter Notebook"],
        note: "Portfolio Optimization | UWaterloo Challenge",
        featured: true,
    },
    {
        title: "Equity Trend Analyzer 📉📈",
        blurb:
            "Interactive financial analytics dashboard for evaluating equity momentum, volatility, and signal-based trading strategies.",
        highlights: [
            "Analyzes historical price data to compute total return, annualized volatility, and max drawdown across user-selected equities",
            "Implements quantitative indicators including log-linear regression trend classification, moving average crossovers, and RSI (14) signal generation",
        ],
        github: "https://github.com/aryan29-dev/Equity-Trend-Analyzer",
        demo: "https://equitytrendanalyzer.streamlit.app",
        tech: ["Python", "Streamlit", "pandas", "NumPy", "Matplotlib", "yfinance"],
        note: "Quantitative Finance Dashboard",
        featured: true,
    },
    {
        title: "Portfolio Risk Engine 📈",
        blurb:
            "Monte Carlo simulation engine for evaluating portfolio risk-return tradeoffs and identifying optimal risk-adjusted allocations.",
        highlights: [
            "Simulates thousands of randomized portfolio weight combinations to generate return and volatility distributions",
            "Identifies efficient portfolios (e.g., maximum Sharpe ratio) to compare capital allocation tradeoffs across time horizons",
        ],
        github: "https://github.com/aryan29-dev/Portfolio-Risk-Engine",
        tech: ["Python", "pandas", "NumPy", "Matplotlib", "yfinance"],
        note: "Quantitative Modeling Project",
    },
    {
        title: "Personal Website 🌐",
        blurb:
            "High-performance portfolio designed to showcase my technical projects, leadership experience, and quantitative finance work.",
        highlights: [
            "Built responsive multi-section components (About, Experience, Projects, Contact) with reusable components and clean UI patterns",
            "Optimized navigation flow, visual hierarchy, and deployment pipeline for performance and accessibility",
        ],
        github: "https://github.com/aryan29-dev/personal-website",
        demo: "https://aryansingh.app/",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
        note: "Full-Stack Web Development",
    },
    {
        title: "Baller (Basketball Roster Manager) 🏀",
        blurb:
            "Object-oriented Java application modeling a basketball roster system with clean data structures and algorithmic operations.",
        highlights: [
            "Designed modular class architecture to manage player creation, search, removal, and sorting using ArrayLists",
            "Implemented core algorithmic operations to reinforce data structure manipulation and time-complexity awareness",
        ],
        github: "https://github.com/aryan29-dev/Baller",
        tech: ["Java", "OOP", "ArrayLists"],
        note: "Object-Oriented Design & Algorithms",
    },
    {
        title: "Mini Python Projects 🐍",
        blurb:
            "Collection of foundational Python programs demonstrating core problem-solving and programming fluency.",
        highlights: [
            "Built multiple standalone implementations covering control flow, data structures, input validation, and algorithmic logic",
            "Strengthened software fundamentals through iterative development and modular program design",
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
