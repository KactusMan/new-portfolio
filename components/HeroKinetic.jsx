"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Coffee, Sparkles, ExternalLink, ArrowDownRight } from "lucide-react";

const ASCII_EMOJIS = ["(⌐■_■)", "(° o °)", "(◔_◔)", "╦(ò_ó)╤", "(⚙_⚙)", "(⌐‿⌐)"];

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
  const svgSquiggleRef = useRef(null);
  const [asciiState, setAsciiState] = useState("(⌐■_■)");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", { xPercent: -50, repeat: -1, duration: 14, ease: "none" });
      if (svgSquiggleRef.current) {
        gsap.to(svgSquiggleRef.current, { strokeDashoffset: -40, duration: 3, repeat: -1, ease: "none" });
      }
      gsap.fromTo(
        ".hero-line",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[92vh] bg-onyx text-vanilla overflow-hidden flex flex-col justify-between p-6 md:p-12 border-b border-carbon crt-scanlines">
      <div className="absolute inset-0 opacity-60 pointer-events-none" style={{ background: "radial-gradient(ellipse at 14% 18%, #36255C 0%, transparent 35%), radial-gradient(ellipse at 88% 72%, #022E21 0%, transparent 38%), linear-gradient(135deg, #062045 0%, #171717 56%, #020202 100%)" }} />

      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <button onClick={() => setAsciiState(ASCII_EMOJIS[Math.floor(Math.random() * ASCII_EMOJIS.length)])} className="font-mono text-lime text-lg md:text-2xl bg-cosmic border border-candyBlue px-3.5 py-1.5 rounded-xl transition-transform cursor-pointer shadow-[4px_4px_0px_#82D5E5] hover-glitch hover:scale-110 active:scale-95" title="Click to toggle ASCII mood!">
            {asciiState}
          </button>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-vanilla font-mono font-bold">Rayan Idrees</span>
            <span className="text-[10px] font-mono text-lavender/80">Senior CMS Architect & Frontend Specialist</span>
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs flex-wrap">
          <a href="#websites" className="hidden items-center gap-1.5 border border-lavender/40 px-3 py-1.5 text-lavender transition-colors hover:border-lime hover:text-lime md:flex">WORK <ArrowDownRight className="h-3.5 w-3.5" /></a>
          <a href="#contact" className="hidden border border-lavender/40 px-3 py-1.5 text-lavender transition-colors hover:border-candyBlue hover:text-candyBlue md:block">CONTACT</a>
          <span className="bg-tealGreen text-lightLime px-3 py-1.5 rounded-full border border-lightLime/20 flex items-center gap-1.5"><Coffee className="w-3.5 h-3.5 text-lime animate-bounce" /> 4+ YEARS IN THE TRENCHES (CMS & FRONTEND)</span>
          <span className="bg-cosmic text-candyBlue px-3 py-1.5 rounded-full border border-candyBlue/30">RUNNING ON COFFEE & CLEAN CODE ☕</span>
          <Link href="/playground" className="flex items-center gap-1.5 bg-lime text-onyx font-bold px-3.5 py-1.5 rounded-full border border-onyx hover:bg-candyBlue hover:scale-105 transition-all shadow-[3px_3px_0px_#020202]"><Sparkles className="w-3.5 h-3.5" /> PLAYGROUND <ExternalLink className="w-3 h-3" /></Link>
        </div>
      </div>

      <div className="relative z-10 my-6 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black uppercase tracking-tight leading-none text-vanilla">
            <span className="hero-line block">SENIOR</span>
            <span className="hero-line block relative text-lime group cursor-pointer">CMS & FRONTEND
              <svg className="absolute left-0 bottom-[-6px] w-full h-[14px] text-candyBlue overflow-visible pointer-events-none" viewBox="0 0 300 20" preserveAspectRatio="none"><path ref={svgSquiggleRef} d="M0 10 Q 15 2, 30 10 T 60 10 T 90 10 T 120 10 T 150 10 T 180 10 T 210 10 T 240 10 T 270 10 T 300 10" fill="none" stroke="currentColor" strokeWidth="3.5" strokeDasharray="12 6" className="transition-all group-hover:text-lime" /></svg>
            </span>
            <span className="hero-line block">ARCHITECT.</span>
          </h1>
          <p className="hero-line mt-6 text-base md:text-lg text-lavender max-w-2xl font-body leading-relaxed">I build useful web systems with a little bit of mischief: headless storefronts, custom WordPress engines, liquid Shopify systems, and React/Next.js applications.</p>
          <a href="#websites" className="hero-line mt-7 inline-flex items-center gap-3 rounded-full bg-lime px-5 py-3 font-mono text-xs font-bold text-onyx shadow-[4px_4px_0px_#82D5E5] transition-transform hover:-translate-y-1">SEE THE SITE ARCHIVE <ArrowDownRight className="h-4 w-4" /></a>
        </div>

        <div className="hero-line flex-shrink-0 w-full lg:w-[440px]">
          <div className="relative overflow-hidden bg-carbon border-2 border-carbon rounded-2xl shadow-[8px_8px_0px_#23212C]">
            <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-lavender/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-lime/10 blur-3xl pointer-events-none" />
            <div className="relative flex items-center gap-2 px-4 py-2.5 bg-cosmic border-b border-carbon"><span className="w-3 h-3 rounded-full bg-blush border border-onyx" /><span className="w-3 h-3 rounded-full bg-vanilla border border-onyx" /><span className="w-3 h-3 rounded-full bg-lightLime border border-onyx" /><span className="ml-2 font-mono text-[10px] text-lavender/80">rayan@portfolio ~ $</span></div>
            <div className="relative p-4 font-mono text-xs space-y-3">
              <div><span className="text-lavender/60">$ whoami</span><pre className="text-lime leading-tight mt-1 text-[10px] sm:text-[11px] select-none overflow-x-auto">{RAYAN_IDREES_ASCII}</pre></div>
              <div className="grid grid-cols-[1fr_auto] items-end gap-3 rounded-xl border border-lavender/20 bg-onyx/70 p-3">
                <div className="space-y-2"><div className="h-1.5 w-28 rounded-full bg-lavender/20 overflow-hidden"><div className="h-full w-2/3 bg-candyBlue animate-pulse" /></div><div className="h-1.5 w-20 rounded-full bg-lime/20 overflow-hidden"><div className="h-full w-4/5 bg-lime" /></div></div>
                <pre className="font-mono text-[10px] leading-none text-blush select-none">{` /\\_/\\
( o.o )
 > ^ <`}</pre>
              </div>
              <div className="pt-2 border-t border-cosmic space-y-1.5">
                <div className="flex justify-between"><span className="text-lavender/70">role:</span><span className="text-candyBlue">Senior CMS Developer</span></div>
                <div className="flex justify-between"><span className="text-lavender/70">xp:</span><span className="text-lime">4+ years</span></div>
                <div className="flex justify-between"><span className="text-lavender/70">stack:</span><span className="text-blush">WP • Shopify • Next.js • GSAP</span></div>
                <div className="flex justify-between"><span className="text-lavender/70">fuel:</span><span className="text-vanilla">☕ coffee (infinite)</span></div>
                <div className="flex justify-between"><span className="text-lavender/70">cat:</span><span className="text-blush">daisy 🐱 (supervising)</span></div>
              </div>
              <div className="pt-2 border-t border-cosmic"><span className="text-lime animate-pulse">█</span><span className="text-lavender/50 ml-1">ready for next project...</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden bg-lime text-onyx py-3 border-y-2 border-onyx shadow-[0_4px_20px_rgba(198,255,52,0.3)]"><div className="marquee-track flex whitespace-nowrap font-display text-lg md:text-2xl font-black tracking-wider uppercase select-none"><span className="mx-6">⚡ WORDPRESS REST API & ACF PRO • HEADLESS SHOPIFY & LIQUID • NEXT.JS APP ROUTER • GSAP MOTION PHYSICS • WEBFLOW CUSTOM CODE • </span><span className="mx-6">⚡ WORDPRESS REST API & ACF PRO • HEADLESS SHOPIFY & LIQUID • NEXT.JS APP ROUTER • GSAP MOTION PHYSICS • WEBFLOW CUSTOM CODE • </span></div></div>
    </section>
  );
}
