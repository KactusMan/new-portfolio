"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const CAT_IDLE = `
  /\\_/\\
 ( o.o )
  > ^ <
 /|   |\\
(_|   |_)
`;

const CAT_HAPPY = `
  /\\_/\\
 ( ^.^ )
  > ^ <
 /|   |\\
(_|   |_)
`;

const CAT_SLEEPY = `
  /\\_/\\
 ( -.- )
  > ^ <
  |   |
 (_   _)
`;

const CAT_LOVE = `
  /\\_/\\
 ( ♥.♥ )
  > ^ <
 /|   |\\
(_|   |_)
`;

const CAT_STATES = [
  { ascii: CAT_IDLE, mood: "OBSERVING", color: "text-lime" },
  { ascii: CAT_HAPPY, mood: "PURRING", color: "text-candyBlue" },
  { ascii: CAT_SLEEPY, mood: "NAPPING", color: "text-lavender" },
  { ascii: CAT_LOVE, mood: "LOVES YOU", color: "text-blush" },
];

export default function DaisyCat() {
  const [stateIndex, setStateIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [petCount, setPetCount] = useState(0);
  const catRef = useRef(null);
  const cardRef = useRef(null);

  const currentState = CAT_STATES[stateIndex];

  useEffect(() => {
    // Gentle breathing / levitation animation
    const ctx = gsap.context(() => {
      gsap.to(catRef.current, {
        y: -5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  // Cycle Daisy's mood on scroll
  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const diff = Math.abs(scrollY - lastScrollY);
      if (diff > 400) {
        setStateIndex((prev) => (prev + 1) % CAT_STATES.length);
        lastScrollY = scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePet = () => {
    setPetCount((prev) => prev + 1);
    // Cycle mood
    setStateIndex((prev) => (prev + 1) % CAT_STATES.length);
    // Pop animation
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.9, rotate: -3 },
        { scale: 1, rotate: 0, duration: 0.3, ease: "back.out(2.5)" }
      );
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 font-mono text-xs font-bold bg-blush text-onyx px-3 py-2 rounded-xl border border-onyx shadow-[4px_4px_0px_#020202] hover:scale-105 active:scale-95 transition-transform cursor-pointer flex items-center gap-2"
      >
        🐱 Wake Up Daisy
      </button>
    );
  }

  return (
    <div
      ref={catRef}
      className="fixed bottom-6 left-6 z-50 select-none"
    >
      <div
        ref={cardRef}
        onClick={handlePet}
        className="relative bg-carbon border-2 border-blush p-3 rounded-2xl shadow-[6px_6px_0px_#020202] text-vanilla cursor-pointer hover:border-lime transition-colors group"
      >
        {/* Dismiss X */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
          className="absolute -top-2 -right-2 bg-blush text-onyx p-1 rounded-full border border-onyx hover:bg-lime transition-colors text-[10px] font-bold w-5 h-5 flex items-center justify-center"
          title="Let Daisy nap"
        >
          ×
        </button>

        {/* Daisy's Status LED */}
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-blush animate-pulse" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-blush font-bold">
            DAISY 🐱 // {currentState.mood}
          </span>
        </div>

        {/* ASCII Cat Art */}
        <pre className={`font-mono text-[11px] leading-tight select-none ${currentState.color} transition-colors`}>
          {currentState.ascii}
        </pre>

        {/* Pet counter */}
        <div className="mt-1 pt-1 border-t border-cosmic font-mono text-[9px] text-lavender/60 text-center flex items-center justify-center gap-1">
          {petCount > 0 ? `petted ${petCount}x 💛` : "click to pet daisy"}
        </div>
      </div>
    </div>
  );
}
