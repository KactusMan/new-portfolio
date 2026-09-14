"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee, ArrowLeft } from "lucide-react";
import MobileNav from "@/components/MobileNav";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const links = [
    { name: "PROJECTS", href: "/projects" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="w-full border-b border-carbon bg-cosmic py-4 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left Side: Brand & Title */}
        <div className="flex items-center gap-3">
          {!isHome && (
            <Link
              href="/"
              className="button-pop inline-flex items-center gap-1.5 font-mono text-xs font-bold text-onyx bg-lime px-3 py-1.5 rounded-xl border border-onyx hover:bg-candyBlue transition-all shadow-[2px_2px_0px_#000]"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> HOME
            </Link>
          )}

          <Link href="/" className="flex flex-col group">
            <span className="text-xs uppercase tracking-widest text-vanilla font-mono font-bold group-hover:text-lime transition-colors">
              Rayan Idrees <span className="ml-1 text-candyBlue">a.k.a. kactusman</span>
            </span>
            <span className="text-[10px] font-mono text-lavender/80 hidden sm:inline">
              Senior CMS Architect & Frontend Specialist
            </span>
          </Link>
        </div>

        {/* Right Side: Desktop Nav Links & Status Badge */}
        <div className="hidden sm:flex items-center gap-2.5 font-mono text-xs flex-wrap">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full border transition-all ${
                  isActive
                    ? "border-onyx bg-lime font-bold text-onyx shadow-[2px_2px_0px_#000]"
                    : "border-lavender/40 text-lavender hover:border-lime hover:text-lime"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <span className="bg-tealGreen text-lightLime px-3 py-1.5 rounded-full border border-lightLime/20 flex items-center gap-1.5">
            <Coffee className="w-3.5 h-3.5 text-lime animate-bounce" /> 4+ YEARS EXPERT
          </span>
        </div>

        {/* Mobile Navigation Trigger */}
        <MobileNav />
      </div>
    </header>
  );
}
