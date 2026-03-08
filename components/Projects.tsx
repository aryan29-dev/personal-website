import { useFadeIn } from "./useFadeIn";
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
        title: "EPS Drift Scanner 📈",
        blurb: "Full-stack real-time earnings analysis tool that scans stocks for EPS beats and misses against Wall Street estimates, with ML-powered anomaly detection.",
        highlights: [
            "Fetches live EPS actuals vs analyst estimates via Financial Modeling Prep API, calculates drift % per quarter and classifies as Strong Beat / Beat / In Line / Miss / Strong Miss",
            "Uses scikit-learn LinearRegression to flag anomalous EPS surprises vs a company's own historical pattern, with configurable alerts and interactive drill-down charts",
        ],
        github: "https://github.com/aryan29-dev/EPS-Drift-Scanner",
        demo: "https://eps-drift-scanner.vercel.app/",
        tech: ["FastAPI", "Python", "pandas", "scikit-learn", "React", "Recharts", "CSS Modules"],
        note: "Full-Stack FinTech Project",
        featured: true,
    },
    {
        title: "Market Stress and Crisis Simulator",
        blurb: "Interactive web app that stress-tests investment portfolios against major historical crises to quantify downside risk and recovery behavior.",
        highlights: [
            "Replays 3 historical crisis periods (2008 GFC, COVID-19 Crash, 2022 Rate Shock) across U.S. and Canadian portfolios to simulate real-world drawdowns",
            "Calculates 6+ portfolio-level metrics including total return, maximum drawdown, annualized volatility, Sharpe ratio, annualized return, and recovery duration over customizable 12-36 month horizons",
        ],
        github: "https://github.com/aryan29-dev/Market-Crisis-Simulator",
        demo: "https://market-crisis-simulator.vercel.app",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Recharts"],
        note: "Quantitative Risk and FinTech Project",
        featured: true,
    },
    {
        title: "Robo-Advising Portfolio Optimizer",
        blurb: "Data-driven portfolio construction engine that builds a market-aligned CAD portfolio using real-time financial data and constraint-based optimization.",
        highlights: [
            "Processes CSV equity inputs and validates tickers using the yfinance API, filtering by liquidity, market cap, and currency exposure",
            "Constructs a $1,000,000 CAD portfolio aligned to S&P 500 and TSX Composite benchmarks while incorporating FX adjustments and transaction cost assumptions",
        ],
        github: "https://github.com/aryan29-dev/Robo-Advising-Challenge",
        tech: ["Python", "pandas", "NumPy", "yfinance", "Jupyter Notebook"],
        note: "Portfolio Optimization | UWaterloo Challenge",
        featured: true,
    },
    {
        title: "Equity Trend Analyzer",
        blurb: "Interactive financial analytics dashboard for evaluating equity momentum, volatility, and signal-based trading strategies.",
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
        title: "Portfolio Risk Engine",
        blurb: "Monte Carlo simulation engine for evaluating portfolio risk-return tradeoffs and identifying optimal risk-adjusted allocations.",
        highlights: [
            "Simulates thousands of randomized portfolio weight combinations to generate return and volatility distributions",
            "Identifies efficient portfolios (e.g., maximum Sharpe ratio) to compare capital allocation tradeoffs across time horizons",
        ],
        github: "https://github.com/aryan29-dev/Portfolio-Risk-Engine",
        tech: ["Python", "pandas", "NumPy", "Matplotlib", "yfinance"],
        note: "Quantitative Modeling Project",
    },
    {
        title: "Personal Website",
        blurb: "High-performance portfolio designed to showcase my technical projects, leadership experience, and quantitative finance work.",
        highlights: [
            "Built responsive multi-section components with reusable components and clean UI patterns",
            "Optimized navigation flow, visual hierarchy, and deployment pipeline for performance and accessibility",
        ],
        github: "https://github.com/aryan29-dev/personal-website",
        demo: "https://aryansingh.app/",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
        note: "Full-Stack Web Development",
    },
    {
        title: "Baller (Basketball Roster Manager)",
        blurb: "Object-oriented Java application modeling a basketball roster system with clean data structures and algorithmic operations.",
        highlights: [
            "Designed modular class architecture to manage player creation, search, removal, and sorting using ArrayLists",
            "Implemented core algorithmic operations to reinforce data structure manipulation and time-complexity awareness",
        ],
        github: "https://github.com/aryan29-dev/Baller",
        tech: ["Java", "OOP", "ArrayLists"],
        note: "Object-Oriented Design and Algorithms",
    },
    {
        title: "Mini Python Projects",
        blurb: "Collection of foundational Python programs demonstrating core problem-solving and programming fluency.",
        highlights: [
            "Built multiple standalone implementations covering control flow, data structures, input validation, and algorithmic logic",
            "Strengthened software fundamentals through iterative development and modular program design",
        ],
        github: "https://github.com/aryan29-dev/Mini-Projects-Python",
        tech: ["Python"],
    },
];

export default function Projects() {
    const fade = useFadeIn();
    const featured = useMemo(() => projects.filter((p) => p.featured), []);
    const rest = useMemo(() => projects.filter((p) => !p.featured), []);

    return (
        <section id="projects" ref={fade.ref} className={`py-16 border-t border-stone-200 fade-up ${fade.visible ? "visible" : ""}`}>
            <p className="text-xs font-bold text-stone-500 tracking-[0.2em] uppercase mb-5">Projects</p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight mb-3">
                Selected Projects.
            </h2>
            <p className="max-w-2xl text-base text-stone-700 leading-relaxed mb-8">
                A selection of quantitative finance and full-stack projects. All source code is available on GitHub.
            </p>

            <div className="grid gap-4">
                {featured.length > 0 && (
                    <p className="text-xs text-stone-500 uppercase tracking-widest mb-2">Featured</p>
                )}
                {featured.map((p) => (
                    <ProjectCard key={p.title} p={p} />
                ))}
                {rest.length > 0 && (
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-8 mb-2">More Projects</p>
                )}
                {rest.map((p) => (
                    <ProjectCard key={p.title} p={p} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ p }: { p: Project }) {
    const isRobo = p.title === "Robo-Advising Portfolio Optimizer";

    const Note = p.note ? (
        isRobo ? (
            <a
                href="https://uwaterloo.ca/computing-financial-management/news/cfm-101-case-competition-winners-fall-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-500 hover:text-stone-800 transition"
            >
                {p.note}
            </a>
        ) : (
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-500">
                {p.note}
            </span>
        )
    ) : null;

    return (
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-base font-semibold text-stone-800">{p.title}</h3>
                        {Note}
                    </div>
                    <p className="text-sm text-stone-700 leading-relaxed max-w-2xl">{p.blurb}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-stone-700 list-disc list-outside pl-5 marker:text-stone-300">
                        {p.highlights.map((h) => (
                            <li key={h}>{h}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-2 shrink-0">
                    {p.demo && (
                        <a
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-400"
                        >
                            Demo
                            <ExternalLink className="h-3 w-3 opacity-50" />
                        </a>
                    )}
                    <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-400"
                    >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                    </a>
                </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-600">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}
