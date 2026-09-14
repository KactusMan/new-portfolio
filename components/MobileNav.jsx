"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowDownRight, Coffee, Send, FileText, Code2, Home, User, Mail, FolderGit2 } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "About", href: "/about", icon: User },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Playground", href: "/playground", icon: Code2 },
  ];

  return (
    <>
      {/* Mobile Hamburger Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-candyBlue bg-cosmic text-lime shadow-[3px_3px_0px_#82D5E5] transition-transform active:scale-95 sm:hidden"
        aria-label="Toggle Navigation Menu"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col items-center justify-center w-5 h-5 gap-1">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-5 h-0.5 bg-lime rounded-full block origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-5 h-0.5 bg-candyBlue rounded-full block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-5 h-0.5 bg-lime rounded-full block origin-center"
          />
        </div>
      </button>

      {/* Animated Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-onyx/90 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 sm:hidden"
          >
            {/* Background Accent Gradients */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lime/10 blur-3xl pointer-events-none rounded-full" />
            <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-candyBlue/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-carbon">
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold text-lime tracking-widest uppercase">
                    Rayan Idrees
                  </span>
                  <span className="font-mono text-[10px] text-lavender/70">
                    Senior CMS Architect
                  </span>
                </div>
                <span className="bg-tealGreen/40 text-lightLime text-[10px] font-mono px-2.5 py-1 rounded-full border border-lightLime/20 flex items-center gap-1">
                  <Coffee className="w-3 h-3 text-lime animate-bounce" /> 4+ YRS EXP
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between p-3.5 rounded-xl border transition-all font-mono text-sm font-bold uppercase tracking-wider ${
                          isActive
                            ? "bg-lime text-onyx border-onyx shadow-[4px_4px_0px_#000]"
                            : "bg-carbon/80 text-vanilla border-cosmic hover:border-lime hover:text-lime"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isActive ? "text-onyx" : "text-candyBlue"}`} />
                          <span>{link.name}</span>
                        </div>
                        <ArrowDownRight className={`w-4 h-4 ${isActive ? "text-onyx" : "text-lavender/40"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Info & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="relative z-10 pt-6 border-t border-carbon space-y-3"
            >
              <a
                href="mailto:Rayanidrees4@gmail.com"
                className="button-pop flex items-center justify-center gap-2 w-full py-3 bg-candyBlue text-onyx font-mono text-xs font-bold rounded-xl border border-onyx shadow-[3px_3px_0px_#000]"
              >
                <Send className="w-4 h-4" /> Rayanidrees4@gmail.com
              </a>
              <div className="flex items-center justify-between text-[11px] font-mono text-lavender/60 pt-2">
                <span>alias: @kactusman</span>
                <span>stack: WP • Shopify • Next.js</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
