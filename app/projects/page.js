import Link from "next/link";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import ProjectShowcase from "@/components/ProjectShowcase";
import { ArrowLeft, Sparkles, FolderGit2, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Featured Projects & Client Case Studies",
  description:
    "Explore Rayan Idrees's engineering portfolio — enterprise WordPress architectures, liquid Shopify storefronts, Next.js web applications, and GSAP scroll experiences.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Featured Projects & Client Case Studies | Rayan Idrees",
    description:
      "Enterprise WordPress architectures, liquid Shopify storefronts, Next.js web applications, and GSAP scroll experiences.",
    url: "https://rayanidrees.vercel.app/projects",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Featured Projects & Case Studies - Rayan Idrees",
  "description": "Selected CMS architectures, headless storefronts, and frontend builds by Rayan Idrees.",
  "url": "https://rayanidrees.vercel.app/projects",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Rayan Idrees Portfolio",
    "url": "https://rayanidrees.vercel.app"
  }
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-onyx text-vanilla selection:bg-lime selection:text-onyx relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Navigation */}
      <header className="border-b border-carbon bg-cosmic py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="button-pop inline-flex items-center gap-2 font-mono text-xs font-bold text-onyx bg-lime px-4 py-2 rounded-xl border border-onyx hover:bg-candyBlue transition-all shadow-[4px_4px_0px_#020202]"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>

          <nav className="flex items-center gap-4 font-mono text-xs text-lavender">
            <Link href="/about" className="hover:text-lime transition-colors">
              ABOUT
            </Link>
            <span className="text-carbon">•</span>
            <Link href="/contact" className="hover:text-candyBlue transition-colors">
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section className="border-b border-carbon bg-cosmic py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <FolderGit2 className="w-5 h-5 text-lime" />
            <span className="font-mono text-xs font-bold text-lime uppercase tracking-widest">
              {"// "}ENGINEERING ARCHIVE
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-display uppercase tracking-tight text-vanilla">
            SELECTED <span className="text-lime">WORKS</span> & <br />
            <span className="text-candyBlue">CMS BUILDS</span>
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base md:text-lg text-lavender/90 leading-relaxed">
            A comprehensive catalog of enterprise WordPress platforms, custom Liquid Shopify theme systems, Next.js web applications, and high-impact web interactions.
          </p>
        </div>
      </section>

      {/* Live Client Sites Showcase */}
      <WebsiteShowcase />

      {/* Bespoke CMS Engineering Deep Dive */}
      <ProjectShowcase />

      {/* Call to Action Footer */}
      <section className="bg-lime text-onyx py-12 border-t-2 border-onyx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight">
              HAVE A CMS PROJECT IN MIND?
            </h2>
            <p className="font-mono text-xs sm:text-sm font-bold text-onyx/80 mt-1">
              From custom Shopify storefronts to high-performance WordPress systems.
            </p>
          </div>
          <Link
            href="/contact"
            className="button-pop font-mono text-xs font-black uppercase bg-onyx text-vanilla px-6 py-3.5 rounded-full border-2 border-onyx shadow-[4px_4px_0px_#020202] hover:bg-cosmic transition-all inline-flex items-center gap-2"
          >
            START A PROJECT <ArrowUpRight className="w-4 h-4 text-lime" />
          </Link>
        </div>
      </section>
    </main>
  );
}
