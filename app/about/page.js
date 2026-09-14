import Link from "next/link";
import Image from "next/image";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsDoodles from "@/components/SkillsDoodles";
import MobileNav from "@/components/MobileNav";
import { ArrowLeft, Terminal, Cpu, Coffee, CheckCircle2, ArrowUpRight, Sparkles, Code2 } from "lucide-react";

export const metadata = {
  title: "About Rayan Idrees | Senior CMS Architect & Frontend Specialist",
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
    images: [{ url: "/rayan-idrees.png", width: 800, height: 800, alt: "Rayan Idrees - Senior CMS Architect" }],
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
    "image": "https://rayanidrees.vercel.app/rayan-idrees.png",
    "jobTitle": "Senior CMS Architect & Frontend Specialist",
    "knowsAbout": ["WordPress", "Shopify", "React", "Next.js", "PHP", "Liquid", "GSAP"]
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="button-pop inline-flex items-center gap-2 font-mono text-xs font-bold text-onyx bg-lime px-4 py-2 rounded-xl border border-onyx hover:bg-candyBlue transition-all shadow-[4px_4px_0px_#020202]"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>

          <nav className="hidden sm:flex items-center gap-4 font-mono text-xs text-lavender">
            <Link href="/projects" className="hover:text-lime transition-colors">
              PROJECTS
            </Link>
            <span className="text-carbon">•</span>
            <Link href="/contact" className="hover:text-candyBlue transition-colors">
              CONTACT
            </Link>
            <span className="text-carbon">•</span>
            <Link href="/playground" className="hover:text-lime transition-colors">
              PLAYGROUND
            </Link>
          </nav>

          <MobileNav />
        </div>
      </header>

      {/* Hero Bio Banner */}
      <section className="border-b border-carbon bg-cosmic py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] gap-12 items-center">
            
            {/* Bio Column */}
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
              
              <div className="mt-6 space-y-4 font-body text-base sm:text-lg text-lavender/90 leading-relaxed max-w-2xl">
                <p>
                  I&apos;m Rayan Idrees (known online as <strong className="text-candyBlue">kactusman</strong>). Over the past 4+ years, I have specialized in turning heavy content management systems into sleek, high-speed platforms.
                </p>
                <p className="text-sm sm:text-base text-lavender/80">
                  Whether it&apos;s building a 56-dealership WordPress network with zero page-builder bloat or crafting a custom Liquid Shopify storefront with Next.js micro-cart physics, I build web engines that editors love using and clients love measuring.
                </p>
              </div>

              {/* Badges / Highlights */}
              <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-lime/30 bg-lime/10 text-lime font-bold">
                  <Sparkles className="w-3.5 h-3.5" /> 4+ Years Enterprise XP
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-candyBlue/30 bg-candyBlue/10 text-candyBlue font-bold">
                  <Code2 className="w-3.5 h-3.5" /> WP • Shopify • Next.js
                </span>
              </div>
            </div>

            {/* Profile Picture & Spec Card Showcase */}
            <div className="space-y-6">
              {/* Photo Frame Card */}
              <div className="relative group bg-carbon p-3.5 rounded-2xl border-2 border-candyBlue shadow-[8px_8px_0px_#23212C] transition-transform duration-300 hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-cosmic bg-onyx">
                  <Image
                    src="/rayan-idrees.png"
                    alt="Rayan Idrees — Senior CMS Architect & Frontend Specialist"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-3 left-3 right-3 bg-onyx/90 backdrop-blur-md px-3 py-2 rounded-lg border border-candyBlue/40 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-lime font-bold tracking-wider uppercase">
                      PIXELATED VISION
                    </span>
                    <span className="font-mono text-[10px] text-candyBlue font-bold tracking-wider uppercase">
                      INFINITE PRECISION
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between px-1 font-mono text-xs">
                  <span className="text-vanilla font-bold">Rayan Idrees</span>
                  <span className="text-candyBlue text-[11px]">@kactusman</span>
                </div>
              </div>

              {/* System Profile Spec */}
              <div className="bg-carbon border-2 border-carbon rounded-2xl p-5 shadow-[6px_6px_0px_#23212C] font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-cosmic pb-2.5">
                  <span className="text-lime font-bold">SYSTEM_PROFILE.json</span>
                  <span className="text-lavender/50 text-[10px]">v4.2</span>
                </div>
                <div className="space-y-2 text-lavender/90 text-[11px]">
                  <div className="flex justify-between"><span className="text-lavender/60">Location:</span><span className="text-vanilla">Global / Remote</span></div>
                  <div className="flex justify-between"><span className="text-lavender/60">Core Expertise:</span><span className="text-lime font-bold">CMS Architecture</span></div>
                  <div className="flex justify-between"><span className="text-lavender/60">Secondary Stack:</span><span className="text-candyBlue">React / Next.js / GSAP</span></div>
                  <div className="flex justify-between"><span className="text-lavender/60">Favorite Tech:</span><span className="text-blush">WordPress ACF + Liquid</span></div>
                  <div className="flex justify-between"><span className="text-lavender/60">Superpower:</span><span className="text-lightLime">Zero-Bloat Custom PHP</span></div>
                  <div className="flex justify-between"><span className="text-lavender/60">Companion:</span><span className="text-blush">Daisy 🐱</span></div>
                </div>
                <div className="pt-2.5 border-t border-cosmic text-center text-lightLime text-[11px]">
                  ⚡ Available for Select Enterprise Contracts
                </div>
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
                Content managers shouldn&apos;t break site layouts. I structure ACF Flexible Content blocks and Shopify sections with defensive controls so non-technical teams can manage content effortlessly.
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
              Let&apos;s talk about your CMS, storefront, or web application requirements.
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
