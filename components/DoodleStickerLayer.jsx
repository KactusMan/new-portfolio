"use client";
import { useState } from "react";
import { Smile, Sparkles, Zap, Stamp, Trash2 } from "lucide-react";

const STICKERS = [
  { text: "(⌐■_■)", bg: "bg-lime text-onyx" },
  { text: "SENIOR CMS ARCHITECT", bg: "bg-candyBlue text-onyx" },
  { text: "⚡ GSAP ANIMATED", bg: "bg-lavender text-onyx" },
  { text: "WP + SHOPIFY + REACT", bg: "bg-blush text-onyx" },
  { text: "ᕦ(ò_ó)ᕤ FULL-STACK", bg: "bg-lightLime text-onyx" },
  { text: "COFFEE & CODE ☕", bg: "bg-cosmic text-vanilla" },
];

export default function DoodleStickerLayer() {
  const [placedStickers, setPlacedStickers] = useState([]);
  const [selectedSticker, setSelectedSticker] = useState(STICKERS[0]);

  const handleCanvasClick = (e) => {
    // Only place if clicked inside canvas bounds
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSticker = {
      id: Date.now(),
      x,
      y,
      rotation: Math.floor(Math.random() * 24) - 12,
      ...selectedSticker,
    };

    setPlacedStickers((prev) => [...prev.slice(-15), newSticker]); // Keep max 15
  };

  const clearStickers = () => setPlacedStickers([]);

  return (
    <section className="p-8 md:p-16 bg-cosmic border-b border-carbon relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <span className="text-xs font-mono text-lime uppercase tracking-widest">{"// "}Interactive Playground</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-vanilla uppercase">
              ASCII Stamp & Doodle Canvas
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={clearStickers}
              className="flex items-center gap-1.5 font-mono text-xs text-blush bg-onyx px-3 py-2 rounded-xl border border-blush/30 hover:border-blush transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear Canvas
            </button>
          </div>
        </div>

        {/* Sticker Palette Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6 bg-carbon p-4 rounded-xl border border-carbon">
          <span className="text-xs font-mono text-lavender mr-2 flex items-center gap-1">
            <Stamp className="w-3.5 h-3.5 text-lime" /> Select Stamp:
          </span>
          {STICKERS.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedSticker(st)}
              className={`font-mono text-xs font-bold px-3 py-1.5 rounded-lg border border-onyx transition-all ${st.bg} ${
                selectedSticker.text === st.text ? "scale-110 shadow-[3px_3px_0px_#020202] ring-2 ring-lime" : "opacity-80 hover:opacity-100"
              }`}
            >
              {st.text}
            </button>
          ))}
        </div>

        {/* Interactive Stamping Area */}
        <div
          onClick={handleCanvasClick}
          className="relative w-full h-[320px] md:h-[400px] bg-onyx border-2 border-dashed border-lavender/30 rounded-2xl cursor-crosshair overflow-hidden flex items-center justify-center select-none"
        >
          {placedStickers.length === 0 && (
            <div className="text-center font-mono text-lavender/40 pointer-events-none p-4">
              <Sparkles className="w-8 h-8 mx-auto mb-2 text-lime opacity-50" />
              <p className="text-sm">CLICK ANYWHERE ON THIS BOARD TO STAMP YOUR CUSTOM DOODLES!</p>
            </div>
          )}

          {placedStickers.map((s) => (
            <div
              key={s.id}
              className={`absolute font-mono text-xs md:text-sm font-bold px-3 py-1.5 rounded-xl border border-onyx shadow-[4px_4px_0px_#020202] pointer-events-none transition-transform ${s.bg}`}
              style={{
                left: `${s.x}px`,
                top: `${s.y}px`,
                transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
              }}
            >
              {s.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
