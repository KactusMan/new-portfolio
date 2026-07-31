"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Palette, Cpu, Sparkles } from "lucide-react";

const PALETTES = [
  {
    id: "cosmic-dark",
    name: "Cosmic Neon",
    gradient: "radial-gradient(circle at 30% 30%, #36255C 0%, #022E21 40%, #171717 100%)",
    accent: "#C6FF34",
  },
  {
    id: "acid-lime",
    name: "Acid Lime Pulse",
    gradient: "radial-gradient(circle at 70% 20%, #CDFC8A 0%, #23212C 50%, #020202 100%)",
    accent: "#82D5E5",
  },
  {
    id: "bubblegum-blush",
    name: "Bubblegum Vapor",
    gradient: "radial-gradient(circle at 40% 60%, #F2C4CE 0%, #36255C 45%, #062045 100%)",
    accent: "#F1FEC8",
  },
  {
    id: "midnight-teal",
    name: "Midnight Lavender",
    gradient: "radial-gradient(circle at 20% 80%, #D2C3F6 0%, #062045 50%, #020202 100%)",
    accent: "#CDFC8A",
  },
];

export default function GranientMeshCanvas() {
  const [activePalette, setActivePalette] = useState(PALETTES[0]);
  const meshRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(meshRef.current, {
        backgroundPosition: "200% 200%",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current || !meshRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width;
    const yRatio = (e.clientY - rect.top) / rect.height;

    gsap.to(meshRef.current, {
      backgroundPosition: `${xRatio * 150}% ${yRatio * 150}%`,
      duration: 1.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative p-8 md:p-16 bg-onyx border-b border-carbon overflow-hidden min-h-[400px] flex flex-col justify-between"
    >
      {/* Dynamic Animated Mesh Surface */}
      <div
        ref={meshRef}
        className="absolute inset-0 opacity-60 transition-all duration-1000 pointer-events-none"
        style={{
          background: activePalette.gradient,
          backgroundSize: "220% 220%",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-2">
          <Palette className="w-4 h-4 text-lime" />
          <span className="text-xs font-mono text-lime uppercase tracking-widest">{"// "}Granient Liquid Engine</span>
        </div>

        <h2 className="text-3xl md:text-6xl font-black font-display text-vanilla uppercase mb-4">
          Ambient Mesh Atmosphere
        </h2>
        <p className="text-lavender font-mono text-xs md:text-sm max-w-2xl leading-relaxed mb-8">
          Interactive gradient surface responding to cursor movement with custom color tokens.
        </p>

        {/* Palette Selector Buttons */}
        <div className="flex flex-wrap gap-4">
          {PALETTES.map((palette) => {
            const isActive = activePalette.id === palette.id;
            return (
              <button
                key={palette.id}
                onClick={() => setActivePalette(palette)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl font-mono text-xs font-bold transition-all duration-300 shadow-[4px_4px_0px_#020202] ${
                  isActive
                    ? "bg-lime text-onyx scale-105 border-2 border-onyx"
                    : "bg-carbon text-vanilla border border-lavender/20 hover:border-lime"
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full border border-onyx"
                  style={{ background: palette.accent }}
                />
                {palette.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full mt-12 pt-6 border-t border-carbon/50 flex justify-between items-center font-mono text-xs text-lavender/70">
        <span>GSAP Mesh Cursor Interpolation</span>
        <span className="text-lime">{activePalette.name} Active</span>
      </div>
    </section>
  );
}
