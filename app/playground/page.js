import Link from "next/link";
import GranientMeshCanvas from "@/components/GranientMeshCanvas";
import KineticTypeGenerator from "@/components/KineticTypeGenerator";
import DoodleStickerLayer from "@/components/DoodleStickerLayer";
import AsciiMascot from "@/components/AsciiMascot";
import { ArrowLeft, Sparkles, Terminal } from "lucide-react";

export const metadata = {
  title: "Playground | Rayan Idrees",
  description: "Interactive experimental sandbox featuring SpaceType kinetic generator and ASCII stamp canvas.",
};

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-onyx text-vanilla selection:bg-lime selection:text-onyx crt-scanlines relative">
      {/* Playground Navigation Header */}
      <header className="p-6 md:p-8 bg-cosmic border-b border-carbon flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs font-bold text-onyx bg-lime px-4 py-2 rounded-xl border border-onyx hover:bg-candyBlue transition-all shadow-[4px_4px_0px_#020202]"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Main Site
          </Link>

          <div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-candyBlue" />
              <span className="font-mono text-xs text-candyBlue uppercase tracking-widest">{"// "}Experimental Sandbox</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black font-display uppercase text-vanilla">
              Interactive Playground
            </h1>
          </div>
        </div>

        <div className="font-mono text-xs text-lavender/80 bg-onyx px-3 py-1.5 rounded-lg border border-carbon">
          [MODE: UNRESTRICTED CREATIVE ENGINE] ☕
        </div>
      </header>

      {/* Ambient Mesh Atmosphere */}
      <GranientMeshCanvas />

      {/* Kinetic Type Distortion Engine */}
      <KineticTypeGenerator />

      {/* Interactive ASCII Stamp & Doodle Canvas */}
      <DoodleStickerLayer />

      {/* Floating ASCII Companion Mascot */}
      <AsciiMascot />
    </main>
  );
}
