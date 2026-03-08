import { useFadeIn } from "./useFadeIn";
const bulletDot = "mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0";
const bulletText = "m-0 text-stone-700 leading-relaxed text-[15px] sm:text-base";
const bulletStrong = "font-semibold text-stone-700";

export default function Experience() {
    const fade = useFadeIn();
    return (
        <section id="experience" ref={fade.ref} className={`py-16 border-t border-stone-200 fade-up ${fade.visible ? "visible" : ""}`}>
            <p className="text-xs font-bold text-stone-500 tracking-[0.2em] uppercase mb-5">Experience</p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight mb-3">
                Work and Leadership.
            </h2>
            <p className="max-w-2xl text-base text-stone-700 leading-relaxed mb-8">
                A summary of my professional experiences and the skills I have developed
                through part-time work, academics, and projects.
            </p>

            <div className="space-y-12 max-w-4xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                            <img src="/canadas-wonderland.png" alt="Canada's Wonderland" className="h-6 w-6 rounded-md object-contain opacity-80" />
                            <h3 className="text-base font-semibold text-stone-800">
                                Food and Beverage Service Associate
                            </h3>
                        </div>
                        <p className="text-sm font-medium text-stone-500 mb-4">Canada's Wonderland</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Executed <strong className={bulletStrong}>300+ high-volume financial transactions</strong> per shift using Oracle POS systems, maintaining 95-99% transaction accuracy and audit-level accountability during peak operating hours.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Supervised and coordinated day-to-day operations across <strong className={bulletStrong}>5-10 associates per shift</strong> during peak periods, providing task delegation and resolving real-time operational issues.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Optimized front-line workflows by prioritizing associate responsibilities and adapting processes in real time, supporting efficient service for <strong className={bulletStrong}>hundreds of guests per shift</strong>.</p>
                            </li>
                        </ul>
                    </div>
                    <span className="text-xs font-medium text-stone-500 sm:whitespace-nowrap">Mar. 2023 — Aug. 2025</span>
                </div>

                <div className="border-t border-stone-100" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                            <img src="/shelter-them.png" alt="Shelter Them" className="h-6 w-6 rounded-md object-contain opacity-80" />
                            <h3 className="text-base font-semibold text-stone-800">
                                International Service Project (Global Development)
                            </h3>
                        </div>
                        <p className="text-sm font-medium text-stone-500 mb-4">Shelter Them Poverty Relief (NGO) | Brampton Christian School</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Planned and executed fundraising initiatives, raising <strong className={bulletStrong}>$2,000+</strong> and coordinating budget allocation to ensure on-time completion under constrained funding.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Collaborated within a cross-functional team of <strong className={bulletStrong}>15+ members</strong> to plan and execute a community infrastructure project, meeting all deadlines despite fixed timelines.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Managed resources, materials, and on-site execution during construction of a fully operational cow shelter, ensuring completion within a <strong className={bulletStrong}>2-week timeline</strong>.</p>
                            </li>
                        </ul>
                    </div>
                    <span className="text-xs font-medium text-stone-500 sm:whitespace-nowrap">Mar. 2024</span>
                </div>
            </div>
        </section>
    );
}
