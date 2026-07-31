"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Terminal, Zap, Sparkles, X } from "lucide-react";

const MASCOT_STATES = [
  { ascii: "(⌐■_■)", label: "WORKAHOLIC MODE", status: "PROCESSING CMS ENGINES" },
  { ascii: "(⚙_⚙)", label: "GSAP PHYSICS", status: "CALCULATING INERTIA" },
  { ascii: "(° o °)", label: "HEADLESS COMMERCE", status: "GRAPHQL STOREFRONT API" },
  { ascii: "(҂◡_◡)", label: "NIGHT OWL CODE", status: "COMPILING PHP & LIQUID" },
  { ascii: "ᕦ(ò_ó)ᕤ", label: "FULL-STACK POWER", status: "REACT + NEXT.JS + CMS" },
];

export default function AsciiMascot() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const mascotRef = useRef(null);
  const cardRef = useRef(null);

  const currentState = MASCOT_STATES[index];

  useEffect(() => {
    // Subtle levitation loop
    const ctx = gsap.context(() => {
      gsap.to(mascotRef.current, {
        y: -6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    // Pop animation on click
    gsap.fromTo(
      cardRef.current,
      { scale: 0.85, rotate: -5 },
      { scale: 1, rotate: 0, duration: 0.35, ease: "back.out(2)" }
    );
    setIndex((prev) => (prev + 1) % MASCOT_STATES.length);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 font-mono text-xs font-bold bg-lime text-onyx px-3.5 py-2 rounded-xl border border-onyx shadow-[4px_4px_0px_#020202] hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 cursor-pointer"
      >
        <Terminal className="w-4 h-4" /> Summon ASCII Companion
      </button>
    );
  }

  return (
    <div
      ref={mascotRef}
      className="fixed bottom-6 right-6 z-50 select-none cursor-pointer"
      onClick={handleClick}
    >
      <div
        ref={cardRef}
        className="relative bg-carbon border-2 border-lime p-4 rounded-2xl shadow-[6px_6px_0px_#020202] text-vanilla max-w-xs transition-colors hover:border-candyBlue"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
          className="absolute -top-2 -right-2 bg-blush text-onyx p-1 rounded-full border border-onyx hover:bg-lime transition-colors"
          title="Minimize ASCII Mascot"
        >
          <X className="w-3 h-3" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-lime animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-lightLime font-bold">
            ASCII PET // SYSTEM ACTIVE
          </span>
        </div>

        <div className="my-2 bg-onyx p-3 rounded-xl border border-carbon text-center">
          <span className="font-mono text-3xl font-black text-lime inline-block hover:scale-110 transition-transform">
            {currentState.ascii}
          </span>
        </div>

        <div className="font-mono text-xs text-center">
          <div className="font-bold text-candyBlue">{currentState.label}</div>
          <div className="text-[10px] text-lavender/70 mt-0.5">{currentState.status}</div>
        </div>

        <div className="mt-3 pt-2 border-t border-cosmic text-[9px] font-mono text-lavender/50 text-center flex items-center justify-center gap-1">
          <Sparkles className="w-3 h-3 text-lime" /> Click ASCII pet to shift mode
        </div>
      </div>
    </div>
  );
}
