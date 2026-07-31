"use client";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "WordPress & ACF", level: "Expert", color: "bg-lavender text-onyx" },
  { name: "Shopify & Liquid", level: "Expert", color: "bg-lightLime text-onyx" },
  { name: "PHP & Backend Logic", level: "Expert", color: "bg-blush text-onyx" },
  { name: "React & Next.js", level: "Expert", color: "bg-candyBlue text-onyx" },
  { name: "Webflow & Framer", level: "Expert", color: "bg-vanilla text-onyx" },
  { name: "REST APIs & Webhooks", level: "Expert", color: "bg-lime text-onyx" },
  { name: "JavaScript / GSAP", level: "Advanced", color: "bg-violet text-vanilla" },
  { name: "Tailwind & CSS", level: "Expert", color: "bg-navy text-vanilla" },
];

export default function SkillsDoodles() {
  return (
    <section className="p-8 md:p-16 bg-onyx border-b border-carbon relative overflow-hidden">
      {/* Acid Lime Pulse – static gradient mesh */}
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 70%, #022E21 0%, #C6FF34 20%, #CDFC8A 35%, #022E21 60%, #171717 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-lime uppercase tracking-widest">{"// "}Toolbox</span>
          <h2 className="text-4xl md:text-6xl font-black text-vanilla font-display uppercase mb-8">
            Skills & Stack
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.08, rotate: -2 }}
              className={`font-mono text-sm md:text-base font-bold px-5 py-3 rounded-xl border-2 border-onyx shadow-[4px_4px_0px_#171717] transition-transform cursor-default select-none ${skill.color}`}
            >
              {skill.name} <span className="opacity-60 text-xs ml-2">[{skill.level}]</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
