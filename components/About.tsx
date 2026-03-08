import { useFadeIn } from "./useFadeIn";
import {
    SiPython, SiC, SiCplusplus, SiJavascript, SiTypescript, SiMysql,
    SiReact, SiNextdotjs, SiNodedotjs, SiFastapi, SiTailwindcss,
    SiPandas, SiNumpy, SiScikitlearn,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const iconColors: Record<string, string> = {
    Python: "text-[#3776AB]", Java: "text-[#007396]", C: "text-[#A8B9CC]",
    "C++": "text-[#00599C]", JavaScript: "text-[#F7DF1E]", TypeScript: "text-[#3178C6]",
    "SQL (MySQL)": "text-[#4479A1]", React: "text-[#61DAFB]", "Next.js": "text-black",
    "Node.js": "text-[#339933]", FastAPI: "text-[#009688]", "Tailwind CSS": "text-[#38BDF8]",
    pandas: "text-[#150458]", NumPy: "text-[#013243]", "scikit-learn": "text-[#F7931E]",
    yfinance: "text-[#1f6feb]",
};

export default function About() {
    const s1 = useFadeIn();
    const s2 = useFadeIn();
    const s3 = useFadeIn();
    return (
        <section id="about" ref={s1.ref} className={`py-16 border-t border-stone-200 fade-up ${s1.visible ? "visible" : ""}`}>
            <p className="text-xs font-bold text-stone-500 tracking-[0.2em] uppercase mb-5">About</p>
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h2 className="text-4xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight mb-6">
                        Building at the intersection of finance and technology.
                    </h2>
                    <p className="max-w-2xl text-base text-stone-700 leading-relaxed">
                        Hi! I am Aryan, a first-year Computing and Financial Management student at the University of Waterloo (Co-op).
                        On my free time, I enjoy building projects at the intersection of finance and technology.
                    </p>
                    <p className="mt-3 max-w-2xl text-base text-stone-700 leading-relaxed">
                        My interest in FinTech started early — introduced to HTML and CSS in middle school, I discovered my passion for coding.
                        As my skills grew, I began exploring finance, which naturally led me into FinTech.
                    </p>
                    <p className="mt-3 max-w-2xl text-base text-stone-700 leading-relaxed">
                        Currently focused on learning new technologies and building data-driven tools. When not coding or studying, you can find me watching basketball or baseball!
                    </p>
                </div>

                <div className="flex flex-col gap-4 w-full sm:w-72 shrink-0">
                    <div className="rounded-2xl bg-stone-50 border border-stone-200 px-5 py-4">
                        <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">Role</p>
                        <p className="text-sm font-semibold text-stone-800">Computing and Financial Management (Co-op)</p>
                    </div>
                    <div className="rounded-2xl bg-stone-50 border border-stone-200 px-5 py-4">
                        <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">Focus</p>
                        <p className="text-sm font-semibold text-stone-800">FinTech Development and Quantitative Finance</p>
                    </div>
                    <div className="rounded-2xl bg-stone-50 border border-stone-200 px-5 py-5">
                        <p className="text-xs text-stone-500 uppercase tracking-widest mb-3">Quick Facts</p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-center gap-2"><span>🏀⚾</span><span>NBA and MLB fan — Raptors and Blue Jays</span></li>
                            <li className="flex items-center gap-2"><span>💻</span><span>Building FinTech tools at the intersection of markets and code</span></li>
                            <li className="flex items-center gap-2"><span>📈</span><span>Actively follows equity markets, ETFs, and macro trends</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 mt-10">
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-6">Languages, Frameworks and Tools</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {[
                        { name: "Python", url: "https://www.python.org/", icons: [SiPython] },
                        { name: "Java", url: "https://www.oracle.com/ca-en/java/", icons: [FaJava] },
                        { name: "C", url: "https://en.cppreference.com/w/c/language.html", icons: [SiC] },
                        { name: "C++", url: "https://isocpp.org/", icons: [SiCplusplus] },
                        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icons: [SiJavascript] },
                        { name: "TypeScript", url: "https://www.typescriptlang.org/", icons: [SiTypescript] },
                        { name: "SQL (MySQL)", url: "https://www.mysql.com/", icons: [SiMysql] },
                        { name: "React", url: "https://react.dev/", icons: [SiReact] },
                        { name: "Next.js", url: "https://nextjs.org/", icons: [SiNextdotjs] },
                        { name: "Node.js", url: "https://nodejs.org/", icons: [SiNodedotjs] },
                        { name: "FastAPI", url: "https://fastapi.tiangolo.com/", icons: [SiFastapi] },
                        { name: "Tailwind CSS", url: "https://tailwindcss.com/", icons: [SiTailwindcss] },
                        { name: "pandas", url: "https://pandas.pydata.org/", icons: [SiPandas] },
                        { name: "NumPy", url: "https://numpy.org/", icons: [SiNumpy] },
                        { name: "scikit-learn", url: "https://scikit-learn.org/", icons: [SiScikitlearn] },
                        { name: "yfinance", url: "https://pypi.org/project/yfinance/", image: "/yfinance.png" },
                    ].map(({ name, url, icons, image }) => (

                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-5 py-4 text-sm font-semibold text-stone-900 transition hover:border-stone-400 hover:shadow-sm"
                        >
                            {icons && icons.map((Icon, idx) => (
                                <Icon key={idx} className={`text-base ${iconColors[name] ?? "text-stone-500"}`} />
                            ))}
                            {image && <img src={image} alt={name} className="h-4 w-4 object-contain" />}
                            <span>{name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
