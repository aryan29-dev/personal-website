"use client";

export default function Footer() {
    return (
        <footer className="border-t border-stone-100 py-10 mt-16">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1">
                    <p className="text-sm font-semibold text-stone-800">Aryan Singh</p>
                    <p className="text-xs text-stone-500">© 2026 Aryan Singh. All rights reserved.</p>
                </div>
                <div className="flex gap-6 text-xs font-medium text-stone-400">
                    <a href="mailto:a923sing@uwaterloo.ca" className="hover:text-stone-900 transition">Email</a>
                    <a href="https://www.linkedin.com/in/aryan-singh29/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition">LinkedIn</a>
                    <a href="https://github.com/aryan29-dev" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
