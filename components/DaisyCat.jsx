"use client";
import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

function useIsMounted() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

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

const CAT_GODMODE = `
  /\\_/\\
 ( 🌟.🌟 )
  > 👑 <
 /| ⚡ |\\
(_| 🌟 |_)
`;

const CAT_STATES = [
  { ascii: CAT_IDLE, mood: "OBSERVING", color: "text-lime" },
  { ascii: CAT_HAPPY, mood: "PURRING", color: "text-candyBlue" },
  { ascii: CAT_SLEEPY, mood: "NAPPING", color: "text-lavender" },
  { ascii: CAT_LOVE, mood: "LOVES YOU", color: "text-blush" },
];

export default function DaisyCat() {
  const mounted = useIsMounted();
  const [stateIndex, setStateIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [petCount, setPetCount] = useState(0);
  const [godModeUnlocked, setGodModeUnlocked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const catRef = useRef(null);
  const cardRef = useRef(null);

  const isGodMode = petCount >= 100 || godModeUnlocked;
  const currentState = isGodMode
    ? { ascii: CAT_GODMODE, mood: "⚡ GOD MODE ⚡", color: "text-lime animate-pulse" }
    : CAT_STATES[stateIndex];

  useEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      gsap.to(catRef.current, {
        y: -5,
        duration: isGodMode ? 1.2 : 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
    return () => ctx.revert();
  }, [mounted, isGodMode]);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      if (isGodMode) return;
      const scrollY = window.scrollY;
      const diff = Math.abs(scrollY - lastScrollY);
      if (diff > 400) {
        setStateIndex((prev) => (prev + 1) % CAT_STATES.length);
        lastScrollY = scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isGodMode]);

  const triggerGodModeBurst = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const handlePet = () => {
    const newCount = petCount + 1;
    setPetCount(newCount);

    if (newCount === 100 && !godModeUnlocked) {
      setGodModeUnlocked(true);
      triggerGodModeBurst();
    }

    if (!isGodMode) {
      setStateIndex((prev) => (prev + 1) % CAT_STATES.length);
    }

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { scale: isGodMode ? 1.15 : 0.9, rotate: isGodMode ? 8 : -3 },
        { scale: 1, rotate: 0, duration: 0.35, ease: "back.out(3)" }
      );
    }
  };

  if (!mounted) return null;

  const widget = !isOpen ? (
    <button
      onClick={() => setIsOpen(true)}
      className={`daisy-cat-widget fixed bottom-6 left-6 z-[9999] font-mono text-xs font-bold ${
        isGodMode ? "bg-lime text-onyx shadow-[0_0_15px_#c6ff34]" : "bg-blush text-onyx shadow-[4px_4px_0px_#000]"
      } px-3.5 py-2 rounded-xl border-2 border-onyx hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer flex items-center gap-2`}
    >
      {isGodMode ? "👑 Super Daisy (100 Pets!)" : "🌙 Wake Up Daisy"}
    </button>
  ) : (
    <div
      ref={catRef}
      className="daisy-cat-widget fixed bottom-6 left-6 z-[9999] select-none"
    >
      {showConfetti && (
        <div className="absolute -top-16 left-0 right-0 text-center font-mono text-xs font-black text-lime animate-bounce bg-onyx px-3 py-1.5 rounded-full border border-lime shadow-[0_0_20px_#c6ff34]">
          🎉 GOD MODE UNLOCKED! 100 PETS! ☕👑
        </div>
      )}

      <div
        ref={cardRef}
        onClick={handlePet}
        className={`relative bg-carbon border-2 ${
          isGodMode
            ? "border-lime shadow-[0_0_25px_rgba(198,255,52,0.4)]"
            : "border-blush shadow-[6px_6px_0px_#000]"
        } p-3.5 rounded-2xl text-vanilla cursor-pointer transition-colors group max-w-[220px]`}
      >
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

        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${isGodMode ? "bg-lime animate-ping" : "bg-blush animate-pulse"}`} />
            <span className={`font-mono text-[9px] uppercase tracking-widest font-bold ${isGodMode ? "text-lime" : "text-blush"}`}>
              DAISY 🐱 // {currentState.mood}
            </span>
          </div>
          {petCount > 0 && petCount < 100 && (
            <span className="font-mono text-[9px] text-candyBlue font-bold">
              {petCount}/100
            </span>
          )}
        </div>

        <pre className={`font-mono text-[11px] leading-tight select-none ${currentState.color} transition-colors`}>
          {currentState.ascii}
        </pre>

        <div className={`mt-2 pt-1 border-t border-cosmic font-mono text-[9px] text-center flex items-center justify-center gap-1 ${
          isGodMode ? "text-lime font-bold" : "text-lavender/60"
        }`}>
          {isGodMode
            ? `👑 GOD MODE ACTIVE! (${petCount}x PETS)`
            : petCount > 0
            ? `petted ${petCount}x 💛 (${100 - petCount} to God Mode)`
            : "click to pet daisy (100 = secret)"}
        </div>
      </div>
    </div>
  );

  // Portal straight to <body> so no parent's transform/overflow can ever
  // hijack position:fixed. This is the actual fix for the "not sticky" bug.
  return createPortal(widget, document.body);
}