"use client";
import { useState } from "react";
import QuirkyModal from "./QuirkyModal";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    id: "turnup",
    role: "Senior CMS Developer",
    company: "Turn Up Technologies",
    period: "June 2025 - Present",
    badge: "bg-lime text-onyx",
    summary: "Moved up to Senior role by delivering custom, reliable CMS solutions far beyond platform defaults across WordPress, Shopify, Webflow, Framer, Wix, and Squarespace.",
    details: [
      "Engineered custom PHP, Liquid, and JavaScript platform-level APIs.",
      "Developed advanced WordPress systems with ACF, REST APIs, AJAX, and custom admin workflows.",
      "Created tailored Shopify features, optimized Liquid logic, and dynamic storefront components.",
      "Integrated third-party APIs and webhooks for real-time automation.",
    ]
  },
  {
    id: "techblent",
    role: "Senior CMS Developer (Lead)",
    company: "TechBlent",
    period: "2023 - May 2025",
    badge: "bg-candyBlue text-onyx",
    summary: "Led developer teams in building and optimizing CMS platforms for international clients while handling advanced custom code integrations.",
    details: [
      "Led a team in developing scalable CMS solutions across WordPress, Webflow, Shopify, and Framer.",
      "Applied hands-on expertise in PHP, Liquid, JS, and API integration.",
      "Ensured smooth, on-time project delivery aligned strictly with client specifications.",
    ]
  },
  {
    id: "lime",
    role: "Front End Developer",
    company: "Lime Software Logics",
    period: "2023 - 2023",
    badge: "bg-lavender text-onyx",
    summary: "Built responsive, dynamic UI components using React, Tailwind, and custom frontend integrations.",
    details: [
      "Implemented dynamic UI interactions and animations using React, Bootstrap, Tailwind, and PHP.",
      "Collaborated closely with QA/Design teams to enhance overall UI/UX consistency.",
    ]
  },
  {
    id: "saazsol",
    role: "Front End Developer",
    company: "Saazsol",
    period: "2022 - 2023",
    badge: "bg-blush text-onyx",
    summary: "Translated design specifications into clean React components and PHP-based frontend logic.",
    details: [
      "Built clean, component-driven UI modules in React.",
      "Worked on modern frontend libraries and early MERN-stack workflow optimizations.",
    ]
  }
];

export default function ExperienceSection() {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <section className="relative overflow-hidden border-b-2 border-onyx bg-lavender p-8 text-onyx md:p-16">

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <span className="text-xs font-mono text-violet uppercase tracking-widest">{"// "}Track Record</span>
            <h2 className="text-4xl md:text-6xl font-black text-onyx font-display uppercase tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="text-sm font-mono text-violet mt-2 md:mt-0">
            Click any card to inspect full technical scope ↗
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveModal(exp)}
              className="group cursor-pointer bg-carbon p-6 rounded-2xl border-2 border-transparent hover:border-lime transition-all duration-300 shadow-[6px_6px_0px_#020202] flex flex-col justify-between"
            >
              <div>
                <span className={`inline-block text-xs font-mono font-bold px-2.5 py-1 rounded-md mb-4 ${exp.badge}`}>
                  {exp.period}
                </span>
                <h3 className="text-lg font-bold text-vanilla group-hover:text-lime transition-colors">
                  {exp.role}
                </h3>
                <p className="text-xs font-mono text-lavender mb-3">{exp.company}</p>
                <p className="text-xs text-lavender/80 leading-relaxed line-clamp-3">{exp.summary}</p>
              </div>

              <div className="mt-6 text-xs font-mono text-lightLime underline group-hover:text-lime">
                Open details [ + ]
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeModal && (
        <QuirkyModal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          title={activeModal.role}
          badgeColor={activeModal.badge}
        >
          <h4 className="text-lg font-bold text-vanilla">{activeModal.company}</h4>
          <p className="text-xs font-mono text-lightLime mb-4">{activeModal.period}</p>
          <p className="text-sm leading-relaxed mb-4">{activeModal.summary}</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-lavender">
            {activeModal.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </QuirkyModal>
      )}
    </section>
  );
}
