import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aryan Singh | Sports Portfolio",
  description: "One-page portfolio with a baseball/basketball vibe.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        <div className="sports-texture absolute inset-0 opacity-40" />
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
      </body>
    </html>
  );
}
