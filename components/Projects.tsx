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
        title: "Robo-Advising Portfolio Optimizer",
        blurb: "Data-driven portfolio construction engine that builds a market-aligned CAD portfolio using real-time financial data and constraint-based optimization.",
        highlights: [
            "Screened 50+ equities on currency, liquidity, and market capitalization, resolving cross-listed duplicates by trading volume.",
            "Filtered the top 25% most volatile names per sector, ranking the rest by correlation to an S&P 500 and TSX benchmark.",
            "Constructed a $1,000,000 CAD portfolio matching sector weights under 40% and 15% position caps, net of FX and fees.",
        ],
        github: "https://github.com/aryan29-dev/Robo-Advising-Challenge",
        tech: ["Python", "pandas", "NumPy", "yfinance", "Jupyter Notebook"],
        note: "CFM 101 Case Competition Winner",
        featured: true,
    },
    {
        title: "Market Stress and Crisis Simulator",
        blurb: "Interactive web app that stress-tests investment portfolios against major historical crises to quantify downside risk and recovery behavior.",
        highlights: [
            "Engineered a stress-testing framework replaying the 2008 financial crisis, COVID-19, and 2022 interest rate shock scenarios.",
            "Simulated portfolio performance across US and TSX-listed equities with configurable daily, weekly, or monthly rebalancing.",
            "Computed 6 risk metrics including maximum drawdown, Sharpe ratio, volatility, and time-to-recovery over 12–36 months.",
        ],
        github: "https://github.com/aryan29-dev/Market-Crisis-Simulator",
        demo: "https://market-crisis-simulator.vercel.app",
        tech: ["Next.js", "TypeScript", "React", "Recharts"],
        note: "Quantitative Risk and FinTech Project",
        featured: true,
    },
    {
        title: "EPS Drift Scanner",
        blurb: "Full-stack earnings analysis tool that tracks EPS beats and misses against Wall Street estimates, flagging surprises that are unusual for each company.",
        highlights: [
            "Developed a real-time scanner comparing consensus Wall Street EPS estimates against reported actuals across 10+ equities.",
            "Designed a scikit-learn anomaly model flagging earnings surprises that deviate from each company's own historical pattern.",
            "Deployed a full-stack FastAPI and React dashboard surfacing 11 quarters of per-equity earnings data and threshold alerts.",
        ],
        github: "https://github.com/aryan29-dev/EPS-Drift-Scanner",
        demo: "https://eps-drift-scanner.vercel.app/",
        tech: ["Python", "FastAPI", "pandas", "scikit-learn", "React", "Recharts"],
        note: "Full-Stack FinTech Project",
        featured: true,
    },
    {
        title: "Ontario Education Gap Analysis",
        blurb: "Power BI report benchmarking Ontario's primary enrolment against national and global averages, built during my term at Focus on Nature.",
        highlights: [
            "Benchmarked Ontario's 72.05% primary enrolment rate against Canada's 94.75% average, exposing a 23-point shortfall.",
            "Analyzed 6 Ontario regions, surfacing a 46-point gap between the strongest and weakest regional primary enrolment rates.",
            "Automated drill-down across 6 Ontario and 8 world regions using DAX measures and bookmark navigation in one report page.",
        ],
        github: "https://youtu.be/Ex_ef8KfgoA",
        tech: ["Power BI", "DAX"],
        note: "Data Analytics and Reporting",
        featured: true,
    },
    {
        title: "Equity Trend Analyzer",
        blurb: "Interactive financial analytics dashboard for evaluating equity momentum, volatility, and signal-based trading strategies.",
        highlights: [
            "Constructed a quantitative equity analysis tool computing maximum drawdown, total return, and annualized volatility across 50+ equities from historical market data.",
            "Classified trend direction (uptrend/downtrend/neutral) via log-price regression, identifying momentum shifts for early trend detection.",
            "Engineered RSI (14) and moving average crossover signals with dynamic visualizations and CSV export, enabling downstream quantitative analysis workflows.",
        ],
        github: "https://github.com/aryan29-dev/Equity-Trend-Analyzer",
        demo: "https://equitytrendanalyzer.streamlit.app",
        tech: ["Python", "Streamlit", "pandas", "NumPy", "Matplotlib", "yfinance"],
        note: "Quantitative Finance Dashboard",
    },
    {
        title: "Portfolio Risk Engine",
        blurb: "Monte Carlo simulation engine for evaluating portfolio risk-return tradeoffs and identifying optimal risk-adjusted allocations.",
        highlights: [
            "Simulates thousands of randomized portfolio weight combinations to generate return and volatility distributions.",
            "Identifies efficient portfolios (maximum Sharpe ratio) to compare capital allocation tradeoffs across time horizons.",
        ],
        github: "https://github.com/aryan29-dev/Portfolio-Risk-Engine",
        tech: ["Python", "pandas", "NumPy", "Matplotlib", "yfinance"],
        note: "Quantitative Modeling Project",
    },
    {
        title: "Personal Website",
        blurb: "Portfolio site showcasing my projects, experience, and quantitative finance work.",
        highlights: [
            "Built responsive multi-section components with reusable patterns and a live market ticker.",
            "Optimized navigation flow, visual hierarchy, and deployment pipeline for performance and accessibility.",
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
            "Designed modular class architecture to manage player creation, search, removal, and sorting using ArrayLists.",
            "Implemented core algorithmic operations to reinforce data structure manipulation and time-complexity awareness.",
        ],
        github: "https://github.com/aryan29-dev/Baller",
        tech: ["Java", "OOP", "ArrayLists"],
        note: "Object-Oriented Design and Algorithms",
    },
    {
        title: "Mini Python Projects",
        blurb: "Collection of foundational Python programs demonstrating core problem-solving and programming fluency.",
        highlights: [
            "Built multiple standalone implementations covering control flow, data structures, input validation, and algorithmic logic.",
            "Strengthened software fundamentals through iterative development and modular program design.",
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
        <section id="projects" ref={fade.ref} className={`py-16 border-t border-stone-200 dark:border-white/8 fade-up ${fade.visible ? "visible" : ""}`}>
            <p className="text-xs font-bold text-stone-500 dark:text-stone-400 tracking-[0.2em] uppercase mb-5">Projects</p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-950 dark:text-white tracking-tight leading-tight mb-3">
                Selected Projects.
            </h2>
            <p className="max-w-2xl text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
                A selection of quantitative finance and full-stack projects. All source code is available on GitHub.
            </p>

            <div className="grid gap-4">
                {featured.length > 0 && (
                    <p className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2">Featured</p>
                )}
                {featured.map((p) => (
                    <ProjectCard key={p.title} p={p} />
                ))}
                {rest.length > 0 && (
                    <p className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mt-8 mb-2">More Projects</p>
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
    const isVideo = p.github.includes("youtu");

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
                        {isVideo ? <ExternalLink className="h-3.5 w-3.5" /> : <Github className="h-3.5 w-3.5" />}
                        {isVideo ? "Video" : "GitHub"}
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