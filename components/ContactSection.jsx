"use client";
import { useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ExternalLink, Link2, Mail, Sparkles, Terminal } from "lucide-react";

export default function ContactSection() {
  const bgMeshRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgMeshRef.current, {
        backgroundPosition: "200% 200%",
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#C6FF34", "#82D5E5", "#D2C3F6", "#CDFC8A"],
    });
  };

  return (
    <footer id="contact" className="p-8 md:p-16 bg-carbon text-vanilla relative crt-scanlines overflow-hidden">
      {/* Ambient Gradient Mesh Background */}
      <div
        ref={bgMeshRef}
        className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-1000"
        style={{
          background: "radial-gradient(circle at 20% 80%, #36255C 0%, #022E21 40%, #062045 80%, #171717 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-4 h-4 text-lime" />
            <span className="font-mono text-xs text-lime uppercase tracking-widest">{"// "}Direct Channel</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-display uppercase text-vanilla mb-2">
            Initiate Contact.
          </h2>
          <p className="font-mono text-xs md:text-sm text-lavender">
            Karachi, Pakistan • rayanidrees4@gmail.com
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerConfetti}
            className="flex items-center gap-2 font-mono text-xs font-bold bg-lime text-onyx px-4 py-3 rounded-xl border border-onyx shadow-[4px_4px_0px_#82D5E5] transition-transform cursor-pointer"
          >
            <Sparkles className="w-4 h-4" /> Trigger Confetti High-Five
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/kactusman"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-cosmic rounded-xl border border-lavender/20 font-mono text-xs text-vanilla hover:text-lime hover:border-lime transition-all shadow-[4px_4px_0px_#020202]"
          >
            <ExternalLink className="w-4 h-4" /> GitHub / kactusman
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/rayan-idrees-435a56219/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-cosmic rounded-xl border border-lavender/20 font-mono text-xs text-vanilla hover:text-candyBlue hover:border-candyBlue transition-all shadow-[4px_4px_0px_#020202]"
          >
            <Link2 className="w-4 h-4" /> LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:rayanidrees4@gmail.com"
            className="p-3 bg-cosmic rounded-xl border border-lavender/20 text-vanilla hover:text-blush hover:border-blush transition-all shadow-[4px_4px_0px_#020202]"
            title="Send Email"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      <div className="relative z-10 mt-12 pt-6 border-t border-cosmic text-center font-mono text-xs text-lavender/50 flex flex-col sm:flex-row justify-between items-center gap-2 max-w-6xl mx-auto">
        <span>© 2026 Rayan Idrees. Built with Next.js, Tailwind v4, & GSAP Motion Engine.</span>
        <span className="text-lime font-bold">[STATUS: OPERATIONAL AS LONG AS COFFEE IS IN THE CUP ☕]</span>
      </div>
    </footer>
  );
}
