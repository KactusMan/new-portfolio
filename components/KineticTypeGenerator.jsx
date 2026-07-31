"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Sliders, Sparkles, RefreshCw } from "lucide-react";

export default function KineticTypeGenerator() {
  const [text, setText] = useState("RAYAN IDREES • CMS ARCHITECT • GSAP KINETIC ENGINE");
  const [speed, setSpeed] = useState(1.2);
  const [amplitude, setAmplitude] = useState(25);
  const [frequency, setFrequency] = useState(0.05);
  const [isGlitchActive, setIsGlitchActive] = useState(false);
  const containerRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      lettersRef.current.forEach((el, index) => {
        if (!el) return;
        gsap.to(el, {
          y: () => Math.sin(index * frequency * 10) * amplitude,
          rotate: () => Math.cos(index * frequency * 5) * (amplitude * 0.4),
          scale: () => 1 + Math.sin(index * frequency * 8) * 0.15,
          duration: 2 / speed,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.04,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text, speed, amplitude, frequency]);

  const presetTexts = [
    "RAYAN IDREES • SENIOR CMS DEVELOPER",
    "WORDPRESS • SHOPIFY • WEBFLOW • NEXT.JS",
    "HEADLESS CMS • LIQUID • PHP • GSAP ENGINE",
    "[STATUS: WORKAHOLIC MODE 24/7] (⌐■_■)",
  ];

  return (
    <section className="p-8 md:p-16 bg-onyx border-b border-carbon relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-candyBlue uppercase tracking-widest">{"// "}SpaceType Kinetic Engine</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-vanilla uppercase">
              Kinetic Type Distortion
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {presetTexts.map((preset, i) => (
              <button
                key={i}
                onClick={() => setText(preset)}
                className="text-xs font-mono bg-cosmic text-lavender border border-lavender/20 px-3 py-1.5 rounded-lg hover:border-lime hover:text-lime transition-all"
              >
                Preset 0{i + 1}
              </button>
            ))}

            <button
              onClick={() => setIsGlitchActive(!isGlitchActive)}
              className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg border transition-all ${
                isGlitchActive ? "bg-blush text-onyx border-onyx" : "bg-carbon text-vanilla border-lavender/20"
              }`}
            >
              CRT Glitch {isGlitchActive ? "[ON]" : "[OFF]"}
            </button>
          </div>
        </div>

        {/* Live Kinetic Canvas Display */}
        <div
          ref={containerRef}
          className={`w-full min-h-[180px] md:min-h-[240px] bg-carbon rounded-2xl border-2 border-carbon p-6 md:p-12 flex items-center justify-center overflow-hidden shadow-[8px_8px_0px_#23212C] relative ${
            isGlitchActive ? "crt-scanlines" : ""
          }`}
        >
          <div className="flex flex-wrap justify-center items-center gap-1 md:gap-2 max-w-5xl text-center select-none">
            {text.split("").map((char, index) => (
              <span
                key={`${char}-${index}`}
                ref={(el) => (lettersRef.current[index] = el)}
                className={`inline-block font-display font-black text-2xl md:text-5xl text-lime transition-colors hover:text-candyBlue ${
                  isGlitchActive ? "hover-glitch" : ""
                }`}
                style={{ minWidth: char === " " ? "0.8rem" : "auto" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>

        {/* Control Sliders Panel */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 bg-cosmic p-6 rounded-2xl border border-carbon">
          <div className="md:col-span-2">
            <label className="block text-xs font-mono text-lavender uppercase mb-2">Custom Text Input</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value.toUpperCase())}
              className="w-full bg-onyx text-lime font-mono text-sm px-4 py-2.5 rounded-xl border border-carbon focus:border-candyBlue focus:outline-none"
              placeholder="TYPE YOUR TEXT..."
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono text-lavender mb-2">
              <span>Wave Amplitude</span>
              <span className="text-lime">{amplitude}px</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              value={amplitude}
              onChange={(e) => setAmplitude(Number(e.target.value))}
              className="w-full accent-lime cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono text-lavender mb-2">
              <span>Wave Speed</span>
              <span className="text-candyBlue">{speed}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full accent-candyBlue cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
