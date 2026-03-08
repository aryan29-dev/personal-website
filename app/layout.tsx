import "./globals.css";

import { Titillium_Web } from "next/font/google";

import type { Metadata } from "next";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aryan Singh | Portfolio",
  description: "Personal Portfolio of Aryan Singh",
  icons: {
    icon: "/favicon.ico",
  },
};


const f1 = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-f1",
});
import CursorGlow from "@/components/Cursor";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${f1.variable} antialiased`}>
        <CursorGlow />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}


