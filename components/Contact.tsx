import { Mail, Linkedin, Github, FileText } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-16 border-t border-stone-200">
            <p className="text-xs font-bold text-stone-500 tracking-[0.2em] uppercase mb-5">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight mb-8">
                Open to Opportunities.
            </h2>

            <div className="grid gap-12 sm:grid-cols-2 items-center">
                <div className="space-y-6">
                    <a href="mailto:a923sing@uwaterloo.ca" className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-stone-800 transition hover:border-stone-400 hover:bg-white">
                        <Mail className="h-5 w-5 text-stone-400 shrink-0" />
                        <span className="text-sm font-medium text-stone-800">a923sing@uwaterloo.ca</span>
                    </a>
                    <a href="https://www.linkedin.com/in/aryan-singh29/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-stone-800 transition hover:border-stone-400 hover:bg-white">
                        <Linkedin className="h-5 w-5 text-stone-400 shrink-0" />
                        <span className="text-sm font-medium text-stone-800">aryan-singh29</span>
                    </a>
                    <a href="/Aryan_Singh_S26_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-stone-800 transition hover:border-stone-400 hover:bg-white">
                        <FileText className="h-5 w-5 text-stone-400 shrink-0" />
                        <span className="text-sm font-medium text-stone-800">Resume</span>
                    </a>
                    <a href="https://github.com/aryan29-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-stone-800 transition hover:border-stone-400 hover:bg-white">
                        <Github className="h-5 w-5 text-stone-400 shrink-0" />
                        <span className="text-sm font-medium text-stone-800">aryan29-dev</span>
                    </a>
                </div>

                <div className="flex justify-center sm:justify-end items-start">
                    <div className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm w-full max-w-md">
                        <img src="/profile.jpeg" alt="Aryan Singh" className="w-full aspect-square rounded-2xl object-cover object-[50%_15%]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
