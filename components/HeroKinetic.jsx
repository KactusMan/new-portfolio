"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const RAYAN_IDREES_ASCII = `
RRRR   AAA  Y   Y  AAA  N   N
R   R A   A  Y Y  A   A NN  N
RRRR  AAAAA   Y   AAAAA N N N
R R   A   A   Y   A   A N  NN
R  RR A   A   Y   A   A N   N

IIIII DDDD  RRRR  EEEEE EEEEE SSSS
  I   D   D R   R E     E     S
  I   D   D RRRR  EEEE  EEEE   SSS
  I   D   D R R   E     E         S
IIIII DDDD  R  RR EEEEE EEEEE SSSS`;

export default function HeroKinetic() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", { xPercent: -50, repeat: -1, duration: 14, ease: "none" });
      gsap.fromTo(
        ".hero-line",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-cosmic text-vanilla overflow-hidden flex flex-col border-b border-carbon">
      <Navbar />

      {/* Main Boxed Hero Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 md:pt-8 md:pb-12 flex flex-col">

        {/* Hero Grid Content */}
        <div className="relative z-10 my-4 md:my-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-start lg:gap-12">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black uppercase tracking-tight leading-none text-vanilla">
              <span className="hero-line block">SENIOR</span>
              <span className="hero-line block text-lime">CMS & FRONTEND</span>
              <span className="hero-line block">ARCHITECT.</span>
            </h1>
            <p className="hero-line mt-6 text-base md:text-lg text-lavender max-w-2xl font-body leading-relaxed">
              I build high-performance web platforms: headless storefronts, custom WordPress engines, liquid Shopify systems, and Next.js applications.
            </p>
            <div className="hero-line mt-7 flex flex-wrap gap-3 items-center">
              <a href="#websites" className="button-pop inline-flex items-center gap-3 rounded-full border-2 border-onyx bg-lime px-5 py-3 font-mono text-xs font-bold text-onyx hover:bg-candyBlue transition-colors shadow-[4px_4px_0px_#000]">
                SEE SITE ARCHIVE <ArrowDownRight className="h-4 w-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-lavender/30 bg-carbon px-5 py-3 font-mono text-xs font-bold text-vanilla hover:border-lime transition-colors">
                GET IN TOUCH
              </Link>
            </div>
          </div>

          {/* Terminal Box - Polished & Mobile Responsive */}
          <div className="hero-line w-full lg:justify-self-end lg:pt-2">
            <div className="relative overflow-hidden bg-carbon border-2 border-carbon rounded-2xl shadow-[8px_8px_0px_#23212C]">
              <div className="relative flex items-center justify-between px-4 py-2.5 bg-cosmic border-b border-carbon">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blush border border-onyx" />
                  <span className="w-3 h-3 rounded-full bg-vanilla border border-onyx" />
                  <span className="w-3 h-3 rounded-full bg-lightLime border border-onyx" />
                </div>
                <span className="font-mono text-[10px] text-lavender/80">rayan@portfolio ~ $</span>
              </div>
              <div className="relative p-4 font-mono text-xs space-y-3">
                <div>
                  <span className="text-lavender/60">$ whoami</span>
                  <pre className="text-lime leading-none mt-2.5 text-[8px] sm:text-[10px] md:text-[11px] font-mono font-bold select-none overflow-x-auto scrollbar-none tracking-tighter">
                    {RAYAN_IDREES_ASCII}
                  </pre>
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-lavender/20 bg-onyx/70 p-3">
                  <div className="space-y-2">
                    <div className="h-1.5 w-28 rounded-full bg-lavender/20 overflow-hidden">
                      <div className="h-full w-2/3 bg-candyBlue animate-pulse" />
                    </div>
                    <div className="h-1.5 w-20 rounded-full bg-lime/20 overflow-hidden">
                      <div className="h-full w-4/5 bg-lime" />
                    </div>
                  </div>
                  <pre className="font-mono text-[9px] sm:text-[10px] leading-tight text-blush select-none">{` /\\_/\\
( o.o )
 > ^ <`}</pre>
                </div>
                <div className="pt-2 border-t border-cosmic space-y-1.5 text-[11px]">
                  <div className="flex justify-between"><span className="text-lavender/70">alias:</span><span className="text-candyBlue font-bold">kactusman</span></div>
                  <div className="flex justify-between"><span className="text-lavender/70">role:</span><span className="text-candyBlue">Senior CMS Developer</span></div>
                  <div className="flex justify-between"><span className="text-lavender/70">xp:</span><span className="text-lime font-bold">4+ years</span></div>
                  <div className="flex justify-between"><span className="text-lavender/70">stack:</span><span className="text-blush">WP • Shopify • Next.js • GSAP</span></div>
                  <div className="flex justify-between"><span className="text-lavender/70">fuel:</span><span className="text-vanilla">☕ coffee (infinite)</span></div>
                  <div className="flex justify-between"><span className="text-lavender/70">cat:</span><span className="text-blush">daisy 🐱 (supervising)</span></div>
                </div>
                <div className="pt-2 border-t border-cosmic text-[11px]"><span className="text-lime animate-pulse">█</span><span className="text-lavender/50 ml-1">ready for next project...</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Banner - Full Width Green Outer Wrapper */}
      <div className="w-full bg-lime text-onyx py-3.5 border-t-2 border-b-2 border-onyx shadow-[0_4px_20px_rgba(198,255,52,0.3)]">
        <div className="marquee-track flex whitespace-nowrap font-display text-lg md:text-2xl font-black tracking-wider uppercase select-none">
          <span className="mx-6">⚡ WORDPRESS REST API & ACF PRO • HEADLESS SHOPIFY & LIQUID • NEXT.JS APP ROUTER • GSAP MOTION PHYSICS • WEBFLOW CUSTOM CODE • </span>
          <span className="mx-6">⚡ WORDPRESS REST API & ACF PRO • HEADLESS SHOPIFY & LIQUID • NEXT.JS APP ROUTER • GSAP MOTION PHYSICS • WEBFLOW CUSTOM CODE • </span>
        </div>
      </div>
    </section>
  );
}
