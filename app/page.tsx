"use client";

import Navbar from "../components/Navbar";
import TypedName from "@/components/TypedName";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-6xl px-4 sm:px-6">
                <section className="pt-20 pb-32">
                    <div className="mx-auto w-full max-w-5xl px-0">
                        <p className="text-sm font-medium text-stone-400 dark:text-stone-500 tracking-widest uppercase mb-6">
                            Welcome to my portfolio.
                        </p>
                        <h1 className="font-black text-stone-950 dark:text-white tracking-tight leading-none text-[clamp(3rem,7vw,6rem)]">
                            <TypedName text="Aryan Singh" />
                        </h1>
                        <p className="mt-3 text-[clamp(1rem,2vw,1.35rem)] text-stone-700 dark:text-stone-300 font-normal max-w-xl leading-relaxed">
                            Second-year student in Computing and Financial Management (Co-op) at the{" "}
                            <a href="https://uwaterloo.ca" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-stone-300 hover:decoration-stone-600 dark:decoration-stone-600 dark:hover:decoration-stone-300 transition">
                                University of Waterloo
                            </a>
                            . Working at the intersection of finance and data.
                        </p>
                        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
                            <div className="rounded-2xl bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-5 py-4">
                                <p className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-1">Program</p>
                                <p className="text-base font-semibold text-stone-800 dark:text-stone-100">Computing and Financial Management</p>
                            </div>
                            <div className="rounded-2xl bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-5 py-4">
                                <p className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-1">Graduating</p>
                                <p className="text-base font-semibold text-stone-800 dark:text-stone-100">Expected Apr. 2030</p>
                            </div>
                            <div className="rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-400/30 px-5 py-4 col-span-2 sm:col-span-1">
                                <p className="text-xs text-indigo-700 dark:text-indigo-300 uppercase tracking-widest mb-1">Status</p>
                                <p className="text-base font-semibold text-indigo-700 dark:text-indigo-300">Seeking Co-op · Winter 2027</p>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-row gap-2">
                            <a href="/Aryan_Singh_Resume_W27.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full bg-stone-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-200 transition whitespace-nowrap">
                                Resume
                            </a>
                            <a href="https://github.com/aryan29-dev" target="_blank" rel="noopener noreferrer" className="rounded-full border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 px-4 py-2 text-sm font-semibold text-stone-800 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-white/10 transition whitespace-nowrap">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/aryan-singh29/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 px-4 py-2 text-sm font-semibold text-stone-800 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-white/10 transition whitespace-nowrap">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </section>
                <About />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
