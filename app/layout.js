import { Bebas_Neue, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import DaisyCat from "@/components/DaisyCat";
import "./globals.css";

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Rayan Idrees | Senior CMS & Frontend Developer",
  description: "Portfolio of Rayan Idrees — Senior CMS Developer & Full-Stack Frontend Specialist.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body className="font-body bg-onyx text-vanilla antialiased selection:bg-lime selection:text-onyx">
        {children}
        <DaisyCat />
      </body>
    </html>
  );
}
