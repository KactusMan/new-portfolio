"use client";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "WordPress & ACF", level: "Expert", color: "bg-lavender text-onyx" },
  { name: "Shopify & Liquid", level: "Expert", color: "bg-lightLime text-onyx" },
  { name: "PHP & Backend Logic", level: "Expert", color: "bg-blush text-onyx" },
  { name: "React & Next.js", level: "Expert", color: "bg-candyBlue text-onyx" },
  { name: "Webflow & Framer", level: "Expert", color: "bg-vanilla text-onyx" },
  { name: "Wix Classic Editor", level: "Expert", color: "bg-candyBlue text-onyx" },
  { name: "Wix Studio & Harmony", level: "Advanced", color: "bg-blush text-onyx" },
  { name: "Squarespace", level: "Advanced", color: "bg-lavender text-onyx" },
  { name: "Custom CMS Architecture", level: "Expert", color: "bg-lime text-onyx" },
  { name: "REST APIs & Webhooks", level: "Expert", color: "bg-lime text-onyx" },
  { name: "JavaScript / GSAP", level: "Advanced", color: "bg-violet text-vanilla" },
  { name: "Tailwind & CSS", level: "Expert", color: "bg-navy text-vanilla" },
];

export default function SkillsDoodles() {
  return (
    <section className="bg-onyx border-b border-carbon relative overflow-hidden py-16 md:py-24">
      {/* Ambient gradient mesh - single static layer, not stacked */}
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(198,255,52,.18), transparent 35%), radial-gradient(circle at 85% 70%, rgba(130,213,229,.12), transparent 30%), radial-gradient(circle at 50% 100%, rgba(210,195,246,.10), transparent 40%), linear-gradient(180deg,#171717,#020202)"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.08, rotate: -2 }}
              className={`font-mono text-sm md:text-base font-bold px-5 py-3 rounded-xl border-2 border-onyx shadow-[4px_4px_0px_#000] transition-transform cursor-default select-none ${skill.color}`}
            >
              {skill.name} <span className="opacity-60 text-xs ml-2">[{skill.level}]</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}