import Link from "next/link";
import Navbar from "@/components/Navbar";
import DaisyCat from "@/components/DaisyCat";
import { ArrowLeft, Compass, Terminal, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist on Rayan Idrees's portfolio.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-onyx text-vanilla selection:bg-lime selection:text-onyx flex flex-col justify-between relative overflow-x-hidden">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blush/30 bg-blush/10 font-mono text-xs font-bold text-blush">
            <ShieldAlert className="w-4 h-4 animate-pulse" /> ERROR 404: ROUTE_NOT_FOUND
          </div>

          {/* Giant Kinetic Heading */}
          <div className="space-y-2">
            <h1 className="font-display text-7xl sm:text-9xl md:text-[12rem] font-black uppercase tracking-tight leading-none text-lime">
              404
            </h1>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-vanilla">
              SYSTEM SIGNAL LOST.
            </h2>
          </div>

          <p className="font-body text-base sm:text-lg text-lavender max-w-xl mx-auto leading-relaxed">
            The endpoint you tried to reach does not exist or has been refactored out of existence. Daisy the cat inspected the logs and found zero traces.
          </p>

          {/* Terminal snippet */}
          <div className="max-w-md mx-auto bg-carbon border-2 border-carbon rounded-2xl p-4 text-left font-mono text-xs space-y-2 shadow-[8px_8px_0px_#23212C]">
            <div className="flex items-center justify-between border-b border-cosmic pb-2 text-lavender/60 text-[10px]">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-lime" /> system.log
              </span>
              <span>HTTP 404</span>
            </div>
            <div className="text-blush">$ GET /unknown-path --status</div>
            <div className="text-lavender/70">&gt; 404 Not Found: resource unreachable</div>
            <div className="text-lime">&gt; suggestion: return to safety at /</div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="button-pop inline-flex items-center gap-2 rounded-full border-2 border-onyx bg-lime px-6 py-3 font-mono text-xs font-bold text-onyx hover:bg-candyBlue transition-all shadow-[4px_4px_0px_#000]"
            >
              <ArrowLeft className="w-4 h-4" /> RETURN TO HOME BASE
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-lavender/30 bg-carbon px-6 py-3 font-mono text-xs font-bold text-vanilla hover:border-lime transition-all"
            >
              <Compass className="w-4 h-4 text-candyBlue" /> VIEW ARCHIVED PROJECTS
            </Link>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-carbon py-6 text-center font-mono text-xs text-lavender/50">
        Rayan Idrees Portfolio · 404 Handler
      </footer>

      <DaisyCat />
    </main>
  );
}
