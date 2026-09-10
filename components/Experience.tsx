import { useFadeIn } from "./useFadeIn";

const bulletDot = "mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-stone-500 dark:bg-stone-500 shrink-0";
const bulletText = "m-0 text-stone-700 dark:text-stone-300 leading-relaxed text-[15px] sm:text-base";
const bulletStrong = "font-semibold text-stone-900 dark:text-stone-100";
const roleTitle = "text-base font-semibold text-stone-800 dark:text-stone-100";
const orgName = "text-sm font-medium text-stone-500 dark:text-stone-400 mb-4";
const dateText = "text-xs font-medium text-stone-500 dark:text-stone-400 sm:whitespace-nowrap";
const logo = "h-6 w-6 rounded-md object-contain opacity-80";
const divider = "border-t border-stone-100 dark:border-white/5";

export default function Experience() {
    const fade = useFadeIn();
    return (
        <section
            id="experience"
            ref={fade.ref}
            className={`py-16 border-t border-stone-200 dark:border-white/8 fade-up ${fade.visible ? "visible" : ""}`}
        >
            <p className="text-xs font-bold text-stone-500 dark:text-stone-400 tracking-[0.2em] uppercase mb-5">
                Experience
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-950 dark:text-white tracking-tight leading-tight mb-3">
                Work and Leadership.
            </h2>
            <p className="max-w-2xl text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
                Roles across internal audit, data analysis, and international development.
            </p>

            <div className="space-y-12 max-w-4xl">

                {/* CNE */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                            <img src="/cne.png" alt="Canadian National Exhibition" className={logo} />
                            <h3 className={roleTitle}>Internal Auditor</h3>
                        </div>
                        <p className={orgName}>Canadian National Exhibition</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Audited <strong className={bulletStrong}>20+ concession operations</strong> over an 18-day exhibition, verifying vendor-reported sales against on-site observation.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Reconciled seller statements against audit records in Excel, escalating <strong className={bulletStrong}>10+ reporting exceptions</strong> to the Internal Audit lead.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Detected <strong className={bulletStrong}>25+ cash discrepancies</strong> at gates and rides, classifying concession operators across four audit risk tiers by exposure.</p>
                            </li>
                        </ul>
                    </div>
                    <span className={dateText}>Aug. — Sep. 2026</span>
                </div>

                <div className={divider} />

                {/* Focus on Nature */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                            <img src="/focus-on-nature.png" alt="Focus on Nature" className={logo} />
                            <h3 className={roleTitle}>Data Analyst</h3>
                        </div>
                        <p className={orgName}>Focus on Nature</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Built a multi-tab Excel dashboard scoring and ranking <strong className={bulletStrong}>2,891 Ontario schools</strong> and 103 organizations by socioeconomic need.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Modeled a weighted socioeconomic score comparing school-level low-income and parental education rates against provincial levels of <strong className={bulletStrong}>9.25%</strong> and 4.61%, using dual-key INDEX/MATCH array formulas and PivotTables.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Verified <strong className={bulletStrong}>135 school records</strong> against public sources, correcting errors that would have misdirected charity outreach.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Presented findings for <strong className={bulletStrong}>9 Ontario regions</strong> to the Board of Directors, prioritizing outreach for program planning.</p>
                            </li>
                        </ul>
                    </div>
                    <span className={dateText}>May — Aug. 2026</span>
                </div>

                <div className={divider} />

                {/* Shelter Them */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                            <img src="/shelter-them.png" alt="Shelter Them Poverty Relief" className={logo} />
                            <h3 className={roleTitle}>International Service Project</h3>
                        </div>
                        <p className={orgName}>Shelter Them Poverty Relief | Brampton Christian School</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Raised <strong className={bulletStrong}>$2,000+</strong> through student-led fundraising and managed budget allocation across the full project timeline.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Collaborated with a <strong className={bulletStrong}>15+ member team</strong> to plan and deliver a community infrastructure project on time and under budget.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>Managed resources, materials, and on-site execution during construction of a fully operational cow shelter within a <strong className={bulletStrong}>2-week timeline</strong>.</p>
                            </li>
                        </ul>
                    </div>
                    <span className={dateText}>Mar. 2024</span>
                </div>

                <div className={divider} />

            </div>
        </section>
    );
}
