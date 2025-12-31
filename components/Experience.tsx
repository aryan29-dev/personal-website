const bulletDot = "mt-2 h-2 w-2 rounded-full bg-zinc-900 shrink-0";
const bulletText = "m-0 text-zinc-700 leading-relaxed";
const bulletStrong = "font-semibold text-zinc-900";

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-28 border-t border-zinc-200"
        >
            <div className="mb-12">
                <div className="inline-flex items-center gap-3">
                    <span className="inline-block h-2 w-10 rounded-full bg-zinc-900" />
                    <h2
                        className="font-black uppercase tracking-[0.28em] text-zinc-900 text-3xl sm:text-4xl"
                        style={{
                            fontFamily:
                                "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial",
                        }}
                    >
                        EXPERIENCE
                    </h2>
                </div>

                <p className="mt-4 max-w-2xl text-lg text-black-700">
                    Here are the experiences I’ve gained and the skills I’ve developed through part-time jobs, academics, and projects as I continue to grow my career!
                </p>
            </div>

            <div className="space-y-14 max-w-4xl">
                {/* ROLE 1 */}
                <div className="flex items-start justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-semibold text-zinc-900">
                            Food & Beverage Service Associate · Canada's Wonderland
                        </h3>

                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Processed high-volume financial transactions using{" "}
                                    <strong className={bulletStrong}>Oracle POS</strong> systems, demonstrating{" "}
                                    <strong className={bulletStrong}>attention to detail</strong> and{" "}
                                    <strong className={bulletStrong}>financial accountability</strong>.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Took <strong className={bulletStrong}>initiative</strong> during peak hours by managing unit operations and
                                    effectively acting as a <strong className={bulletStrong}>team lead</strong> to ensure service continuity.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Demonstrated <strong className={bulletStrong}>leadership</strong> and{" "}
                                    <strong className={bulletStrong}>self-management</strong> by independently coordinating associate responsibilities in a fast-paced environment.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <span className="text-sm font-semibold text-zinc-500 whitespace-nowrap">
                        Mar. 2023 - Aug. 2025
                    </span>
                </div>

                <div className="border-t border-zinc-200" />

                {/* ROLE 2 */}
                <div className="flex items-start justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-semibold text-zinc-900">
                            International Service Project · Shelter Them Poverty Relief | Brampton Christian School
                        </h3>

                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Collaborated within a <strong className={bulletStrong}>cross-functional team</strong> to plan and execute a
                                    community infrastructure project, emphasizing <strong className={bulletStrong}>coordination</strong> and
                                    <strong className={bulletStrong}> communication</strong>.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Organized and facilitated <strong className={bulletStrong}>team-building activities</strong> to strengthen
                                    engagement with local community members while adapting to
                                    <strong className={bulletStrong}> cultural and language barriers</strong>.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Applied <strong className={bulletStrong}>structured planning</strong> and
                                    <strong className={bulletStrong}> resource coordination</strong> to support the execution of a fully
                                    functional cow shelter in collaboration with
                                    <strong className={bulletStrong}> Shelter Them</strong>.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Planned and executed <strong className={bulletStrong}>fundraising</strong> and
                                    <strong className={bulletStrong}> resource allocation</strong> initiatives while working within
                                    <strong className={bulletStrong}> budgetary</strong> and
                                    <strong className={bulletStrong}> logistical constraints</strong>.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <span className="text-sm font-semibold text-zinc-500 whitespace-nowrap">
                        Mar. 2024
                    </span>
                </div>
            </div>
        </section>
    );
}

