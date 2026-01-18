import {
    SiPython,
    SiC,
    SiCplusplus,
    SiJavascript,
    SiTypescript,
    SiMysql,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiFastapi,
    SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function About() {
    return (
        <section
            id="about"
            className="py-24 border-t border-zinc-200"
        >
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <div className="inline-flex items-center gap-3">
                        <span className="inline-block h-2 w-10 rounded-full bg-zinc-900" />
                        <h2
                            className="font-black uppercase tracking-[0.28em] text-zinc-900 text-3xl sm:text-4xl"
                            style={{
                                fontFamily:
                                    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial',
                            }}
                        >
                            ABOUT
                        </h2>
                    </div>

                    <p className="mt-4 max-w-2xl text-lg text-black-700 leading-relaxed">
                        I’m Aryan, a first-year Computing & Financial Management student at the University of Waterloo (Co-op).
                        I enjoy building projects at the intersection of finance and technology, where data and code
                        come together to solve real problems.
                    </p>

                    <p className="mt-3 max-w-2xl text-lg text-black-700 leading-relaxed">
                        My interest in FinTech started early - I was introduced to programming in middle school,
                        where I discovered my passion for coding and technology. As my skills grew, I began exploring
                        finance-related projects online, which naturally led me into the world of FinTech.
                    </p>

                    <p className="mt-3 max-w-2xl text-lg text-black-700 leading-relaxed">
                        Currently, I’m focused on learning new technologies and building data-driven tools that will
                        shape the future of financial technology.
                    </p>
                </div>

                <div className="flex flex-col gap-6 w-full sm:w-105">
                    <div className="flex flex-wrap gap-3 mt-1 animate-fade-in transition-all duration-300">
                        <div className="rounded-2xl border border-zinc-300 bg-white/70 px-4 py-2 shadow-sm">
                            <div className="text-xs font-black uppercase tracking-widest text-zinc-500">ROLE</div>
                            <div className="text-sm font-semibold text-zinc-900">CFM Student</div>
                        </div>

                        <div className="rounded-2xl border border-zinc-300 bg-white/70 px-4 py-2 shadow-sm">
                            <div className="text-xs font-black uppercase tracking-widest text-zinc-500">FOCUS</div>
                            <div className="text-sm font-semibold text-zinc-900">Projects + Growth</div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-zinc-200 bg-white/60 p-7 shadow-sm">
                        <h3 className="text-sm font-black uppercase tracking-[0.22em] text-zinc-900">
                            QUICK FACTS:
                        </h3>
                        <ul className="mt-3 space-y-3 text-zinc-700">
                            <li className="flex items-center gap-3">
                                <span className="text-lg">🏀⚾️</span>
                                <span>Basketball and baseball enthusiast!</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-lg">📊</span>
                                <span>Currently building at the intersection of finance & technology!</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-lg">📈</span>
                                <span>Follows markets & investing trends!</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sm:col-span-2 rounded-3xl border border-zinc-200 bg-white/60 p-6 shadow-sm gap-6 mt-8">
                <h3 className="text-lg font-black uppercase tracking-[0.22em] text-zinc-900">
                    LANGUAGES & FRAMEWORKS I ENJOY BUILDING WITH!
                </h3>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-mono tracking-tight">
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
                    ].map(({ name, url, icons }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 rounded-xl border border-zinc-200/80 bg-white/80
                            px-4 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm transition
                            hover:-translate-y-0.5 hover:shadow-md hover:bg-white hover:border-zinc-400">
                            {icons.map((Icon, idx) => (
                                <Icon key={idx} className="text-lg text-zinc-700" />
                            ))}
                            <span>{name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

