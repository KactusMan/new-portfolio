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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://rayanidrees.vercel.app/#person",
      "name": "Rayan Idrees",
      "alternateName": "kactusman",
      "jobTitle": "Senior CMS Architect & Frontend Specialist",
      "url": "https://rayanidrees.vercel.app",
      "email": "Rayanidrees4@gmail.com",
      "sameAs": [
        "https://github.com/kactusman"
      ],
      "knowsAbout": [
        "WordPress Development",
        "Shopify Development",
        "Headless Commerce",
        "React",
        "Next.js",
        "PHP",
        "Liquid",
        "GSAP Animations",
        "Webflow Custom Code"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://rayanidrees.vercel.app/#website",
      "url": "https://rayanidrees.vercel.app",
      "name": "Rayan Idrees | Portfolio",
      "description": "Portfolio of Rayan Idrees — Senior CMS Architect & Full-Stack Frontend Specialist.",
      "publisher": {
        "@id": "https://rayanidrees.vercel.app/#person"
      }
    }
  ]
};

export const metadata = {
  metadataBase: new URL("https://rayanidrees.vercel.app"),
  title: {
    default: "Rayan Idrees | Senior CMS Architect & Frontend Specialist",
    template: "%s | Rayan Idrees",
  },
  description:
    "Portfolio of Rayan Idrees (kactusman) — Senior CMS Architect & Frontend Specialist with 4+ years of experience building Headless Shopify, WordPress ACF Pro engines, Next.js web apps, and custom GSAP interfaces.",
  keywords: [
    "Rayan Idrees",
    "kactusman",
    "Senior CMS Developer",
    "Frontend Specialist",
    "WordPress Developer",
    "Shopify Liquid Developer",
    "Next.js Developer",
    "Headless Commerce",
    "ACF Pro Specialist",
    "GSAP Developer",
  ],
  authors: [{ name: "Rayan Idrees", url: "https://rayanidrees.vercel.app" }],
  creator: "Rayan Idrees",
  publisher: "Rayan Idrees",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rayan Idrees | Senior CMS Architect & Frontend Specialist",
    description:
      "Bespoke CMS builds, headless Shopify storefronts, custom WordPress engines, and Next.js web applications with motion physics.",
    url: "https://rayanidrees.vercel.app",
    siteName: "Rayan Idrees Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan Idrees | Senior CMS Architect & Frontend Specialist",
    description:
      "Bespoke CMS builds, headless Shopify storefronts, custom WordPress engines, and Next.js web applications.",
    creator: "@kactusman",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-body bg-onyx text-vanilla antialiased selection:bg-lime selection:text-onyx"
        suppressHydrationWarning
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <DaisyCat />
      </body>
    </html>
  );
}
