import "./globals.css";

import { Titillium_Web } from "next/font/google";

const f1 = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-f1",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${f1.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


