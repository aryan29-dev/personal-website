
import { Github } from "lucide-react";

type Project = {
    title: string;
    description: string;
    href: string;
    tech: string[];
    note?: string;
};

const projects: Project[] = [
    {
        title: "Robo-Advising Portfolio Optimizer 📊",
        description: "A quantitative portfolio optimization tool that constructs a market-meet optimized portfolio given a csv file and evaluates each equity using real market data (yFinance API). Applies portfolio weighting techniques and sector caps constraints to build a diversified portfolio that aligns best with the benchmark index (S&P 500 & TSX Composite).",
        href: "https://github.com/aryan29-dev/Robo-Advising-Challenge",
        tech: [
            "Python",
            "pandas",
            "NumPy",
            "yFinance",
            "Jupyter Notebook",
        ],
        note: "Portfolio Optimization Challenge @ UWaterloo",
    },

    {
        title: "Baller (Basketball Roster Manager) 🏀",
        description:
            "A Java-based basketball roster app that supports adding/removing players, sorting, and searching using ArrayLists. Built to practice core DSA logic with clean UI output.",
        href: "https://github.com/aryan29-dev/Baller",
        tech: ["Java", "ArrayLists", "OOP", "Algorithms"],
        note: "OOP And Algorithmic Design",
    },
    {
        title: "Mini Python Projects 🐍",
        description:
            "Built 4 small Python projects that demonstrate fundamental programming concepts such as control flow, data structures, randomness, user input handling, and basic algorithms.",
        href: "https://github.com/aryan29-dev/Mini-Projects-Python",
        tech: ["Python", "Data Structures", "Algorithms", "User Handling"],
    },
    {
        title: "Personal Website 🌐",
        description:
            "My portfolio website built with modern frontend tools, clean layout, and responsive design!",
        href: "https://github.com/aryan29-dev/personal-website",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        note: "This website!",
    },
];

export default function Projects() {
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

                <p className="mt-4 max-w-2xl text-lg text-black-700 leading-relaxed">
                    Here are a few projects I've worked on that showcase my skills and interests in finance and technology.
                </p>
            </div>

            <div className="grid gap-6">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className="rounded-3xl border border-zinc-200 bg-white/60 p-6 shadow-sm"
                    >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <div className="flex items-center gap-3">
                                    <h3 className="text-xl font-bold text-zinc-900">{p.title}</h3>
                                    {p.note ? (
                                        p.title === "Robo-Advising Portfolio Optimizer 📊" ? (
                                            <a
                                                href="https://uwaterloo.ca/computing-financial-management/news/cfm-101-case-competition-winners-fall-2025"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-full border border-zinc-300 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 hover:text-zinc-900 transition"
                                            >
                                                {p.note}
                                            </a>
                                        ) : (
                                            <span className="rounded-full border border-zinc-300 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700">
                                                {p.note}
                                            </span>
                                        )
                                    ) : null}
                                </div>

                                <p className="mt-3 max-w-3xl text-zinc-700 leading-relaxed">
                                    {p.description}
                                </p>
                            </div>

                            <a
                                href={p.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center gap-2 rounded-2xl border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <Github className="h-4 w-4" />
                                GitHub
                            </a>
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
                ))}
            </div>
        </section>
    );
}

