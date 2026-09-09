import Link from "next/link";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsDoodles from "@/components/SkillsDoodles";
import { ArrowLeft, Terminal, Cpu, Coffee, CheckCircle2, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About Rayan Idrees | Senior CMS Architect",
  description:
    "Learn about Rayan Idrees (kactusman) — Senior CMS Architect & Full-Stack Frontend Specialist with 4+ years of experience engineering custom WordPress, Shopify, and Next.js platforms.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Rayan Idrees | Senior CMS Architect",
    description:
      "Senior CMS Architect & Full-Stack Frontend Specialist with 4+ years of experience engineering custom WordPress, Shopify, and Next.js platforms.",
    url: "https://rayanidrees.vercel.app/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Rayan Idrees",
  "description": "Background, technical experience, and platform expertise of Rayan Idrees.",
  "url": "https://rayanidrees.vercel.app/about",
  "mainEntity": {
    "@type": "Person",
    "name": "Rayan Idrees",
    "jobTitle": "Senior CMS Architect & Frontend Specialist",
    "knowsAbout": ["WordPress", "Shopify", "React", "Next.js", "PHP", "Liquid"]
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-onyx text-vanilla selection:bg-lime selection:text-onyx relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Header */}
      <header className="border-b border-carbon bg-cosmic py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="button-pop inline-flex items-center gap-2 font-mono text-xs font-bold text-onyx bg-lime px-4 py-2 rounded-xl border border-onyx hover:bg-candyBlue transition-all shadow-[4px_4px_0px_#020202]"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>

          <nav className="flex items-center gap-4 font-mono text-xs text-lavender">
            <Link href="/projects" className="hover:text-lime transition-colors">
              PROJECTS
            </Link>
            <span className="text-carbon">•</span>
            <Link href="/contact" className="hover:text-candyBlue transition-colors">
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Bio Banner */}
      <section className="border-b border-carbon bg-cosmic py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-5 h-5 text-candyBlue" />
                <span className="font-mono text-xs font-bold text-candyBlue uppercase tracking-widest">
                  {"// "}BACKGROUND & PHILOSOPHY
                </span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-black font-display uppercase tracking-tight text-vanilla">
                ARCHITECTING <span className="text-lime">CMS ENGINES</span> WITH PURPOSE.
              </h1>
              <p className="mt-6 text-base sm:text-lg text-lavender/90 font-body leading-relaxed max-w-2xl">
                I'm Rayan Idrees (known online as <strong className="text-candyBlue">kactusman</strong>). Over the past 4+ years, I have specialized in turning heavy content management systems into sleek, high-speed platforms.
              </p>
              <p className="mt-4 text-sm sm:text-base text-lavender/80 font-body leading-relaxed max-w-2xl">
                Whether it's building a 56-dealership WordPress network with zero page-builder bloat or crafting a custom Liquid Shopify storefront with Next.js micro-cart physics, I build web engines that editors love using and clients love measuring.
              </p>
            </div>

            {/* Terminal Card Spec */}
            <div className="bg-carbon border-2 border-carbon rounded-2xl p-6 shadow-[8px_8px_0px_#23212C] font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-cosmic pb-3">
                <span className="text-lime font-bold">SYSTEM_PROFILE.json</span>
                <span className="text-lavender/50 text-[10px]">v4.2</span>
              </div>
              <div className="space-y-2 text-lavender/90">
                <div className="flex justify-between"><span className="text-lavender/60">Location:</span><span className="text-vanilla">Global / Remote</span></div>
                <div className="flex justify-between"><span className="text-lavender/60">Core Expertise:</span><span className="text-lime font-bold">CMS Architecture</span></div>
                <div className="flex justify-between"><span className="text-lavender/60">Secondary Stack:</span><span className="text-candyBlue">React / Next.js / GSAP</span></div>
                <div className="flex justify-between"><span className="text-lavender/60">Favorite Tech:</span><span className="text-blush">WordPress ACF + Liquid</span></div>
                <div className="flex justify-between"><span className="text-lavender/60">Superpower:</span><span className="text-lightLime">Zero-Bloat Custom PHP</span></div>
                <div className="flex justify-between"><span className="text-lavender/60">Companion:</span><span className="text-blush">Daisy 🐱</span></div>
              </div>
              <div className="pt-3 border-t border-cosmic text-center text-lightLime">
                ⚡ Available for Select Enterprise Contracts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-16 bg-onyx border-b border-carbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight mb-10 text-vanilla">
            MY <span className="text-lime">ENGINEERING</span> PRINCIPLES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-carbon p-6 rounded-2xl border border-cosmic space-y-3">
              <Cpu className="w-8 h-8 text-lime" />
              <h3 className="text-xl font-bold font-display text-vanilla uppercase">1. Zero-Bloat Architecture</h3>
              <p className="text-xs font-body text-lavender/80 leading-relaxed">
                Page builders add thousands of redundant DOM nodes. I write clean custom PHP and Liquid templates versioned in Git so sites load instantly and rank higher.
              </p>
            </div>
            <div className="bg-carbon p-6 rounded-2xl border border-cosmic space-y-3">
              <CheckCircle2 className="w-8 h-8 text-candyBlue" />
              <h3 className="text-xl font-bold font-display text-vanilla uppercase">2. Editor-First CMS Controls</h3>
              <p className="text-xs font-body text-lavender/80 leading-relaxed">
                Content managers shouldn't break site layouts. I structure ACF Flexible Content blocks and Shopify sections with defensive controls so non-technical teams can manage content effortlessly.
              </p>
            </div>
            <div className="bg-carbon p-6 rounded-2xl border border-cosmic space-y-3">
              <Coffee className="w-8 h-8 text-blush" />
              <h3 className="text-xl font-bold font-display text-vanilla uppercase">3. Kinetic Micro-Interactions</h3>
              <p className="text-xs font-body text-lavender/80 leading-relaxed">
                Websites should feel alive. I inject targeted GSAP timelines, responsive layout physics, and subtle micro-interactions that surprise users and build brand memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <SkillsDoodles />

      {/* Work Experience */}
      <ExperienceSection />

      {/* CTA Footer */}
      <section className="bg-candyBlue text-onyx py-12 border-t-2 border-onyx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight">
              READY TO BUILD SOMETHING GREAT?
            </h2>
            <p className="font-mono text-xs sm:text-sm font-bold text-onyx/80 mt-1">
              Let's talk about your CMS, storefront, or web application requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="button-pop font-mono text-xs font-black uppercase bg-onyx text-vanilla px-6 py-3.5 rounded-full border-2 border-onyx shadow-[4px_4px_0px_#020202] hover:bg-cosmic transition-all inline-flex items-center gap-2"
          >
            GET IN TOUCH <ArrowUpRight className="w-4 h-4 text-lime" />
          </Link>
        </div>
      </section>
    </main>
  );
}
