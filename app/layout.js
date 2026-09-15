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
      "@id": "https://rayan-idrees.vercel.app/#person",
      "name": "Rayan Idrees",
      "alternateName": "kactusman",
      "jobTitle": "Senior CMS Architect & Frontend Specialist",
      "url": "https://rayan-idrees.vercel.app",
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
      "@id": "https://rayan-idrees.vercel.app/#website",
      "url": "https://rayan-idrees.vercel.app",
      "name": "Rayan Idrees | Portfolio",
      "description": "Portfolio of Rayan Idrees — Senior CMS Architect & Full-Stack Frontend Specialist.",
      "publisher": {
        "@id": "https://rayan-idrees.vercel.app/#person"
      }
    }
  ]
};

export const metadata = {
  metadataBase: new URL("https://rayan-idrees.vercel.app"),
  title: {
    default: "Rayan Idrees | Senior CMS Architect & Frontend Specialist",
    template: "%s | Rayan Idrees",
  },
  description:
    "Rayan Idrees (kactusman) is a Senior CMS Architect building custom WordPress, Shopify, and Next.js platforms with purposeful GSAP motion.",
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
  authors: [{ name: "Rayan Idrees", url: "https://rayan-idrees.vercel.app" }],
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
  verification: {
    google: "PpjZqvWVsLkmOpkh_S7Y2A75EMpjXIfnb8yCc813M-8",
  },
  openGraph: {
    title: "Rayan Idrees | Senior CMS Architect & Frontend Specialist",
    description:
      "Bespoke CMS builds, headless Shopify storefronts, custom WordPress engines, and Next.js web applications with motion physics.",
    url: "https://rayan-idrees.vercel.app",
    siteName: "Rayan Idrees Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/rayan-idrees-social-card-v2.png",
        width: 1200,
        height: 630,
        alt: "Rayan Idrees — Senior CMS Architect and Frontend Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan Idrees | Senior CMS Architect & Frontend Specialist",
    description:
      "Bespoke CMS builds, headless Shopify storefronts, custom WordPress engines, and Next.js web applications.",
    creator: "@kactusman",
    images: ["/rayan-idrees-social-card-v2.png"],
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
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta
          property="og:image:secure_url"
          content="https://rayan-idrees.vercel.app/rayan-idrees-social-card-v2.png"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P872836D');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M8D0THYY51"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-M8D0THYY51');`,
          }}
        />
        {/* End Google Analytics */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-body bg-onyx text-vanilla antialiased selection:bg-lime selection:text-onyx"
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P872836D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <DaisyCat />
      </body>
    </html>
  );
}
