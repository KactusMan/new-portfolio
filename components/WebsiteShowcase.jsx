"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";

// Colors extracted directly from each site's visual identity
const SITES = [
  {
    number: "01",
    name: "Steele Auto Group",
    type: "WordPress · Headless PHP · ACF",
    detail:
      "Enterprise automotive group spanning 56 dealerships. Custom ACF flexible content, bespoke PHP architecture, and zero page-builder overhead under the hood.",
    tags: ["WordPress", "ACF Pro", "Custom PHP", "Headless"],
    url: "https://steeleauto.com",
    img: "/projects/steeleauto.jpg",
    year: "2024",
    scope: "Full-stack WP build",
    // Navy + bright blue from steeleauto hero
    colors: {
      bg: "#0d1b3e",
      accent: "#4169e1",
      accentLight: "#6b8ff5",
      glow: "rgba(65,105,225,0.3)",
      chrome: "#1a2d5a",
      dot: "#4169e1",
    },
  },
  {
    number: "02",
    name: "Spazietto",
    type: "WordPress · Elementor · ACF · Figma",
    detail:
      "Italian-inspired bespoke cabinetry brand. Designed in Figma end-to-end, built with Elementor as layout engine and custom PHP plugins for everything beyond its limits.",
    tags: ["Figma", "Elementor", "ACF", "Custom PHP Plugins"],
    url: "https://spazietto.com",
    img: "/projects/spazietto.jpg",
    year: "2024",
    scope: "Design + Development",
    // Warm cream + walnut brown from spazietto
    colors: {
      bg: "#2a1a0e",
      accent: "#c9956a",
      accentLight: "#e0b88a",
      glow: "rgba(201,149,106,0.3)",
      chrome: "#3d2510",
      dot: "#c9956a",
    },
  },
  {
    number: "03",
    name: "Digi Consulting Group",
    type: "Next.js · React · Three.js · Tailwind",
    detail:
      "Expertise-driven digital transformation firm. Next.js App Router, Three.js 3D hero, Tailwind design system — built and deployed from scratch.",
    tags: ["Next.js", "Three.js", "React", "Tailwind CSS"],
    url: "https://digiconsultinggroup.com",
    img: "/projects/digiconsulting.jpg",
    year: "2025",
    scope: "Full-stack Next.js",
    // Fiery orange from the 3D geometric hero
    colors: {
      bg: "#1a0800",
      accent: "#f97316",
      accentLight: "#fb923c",
      glow: "rgba(249,115,22,0.32)",
      chrome: "#2d1200",
      dot: "#f97316",
    },
  },
  {
    number: "04",
    name: "Pulse Drink",
    type: "Framer",
    detail:
      "High-energy DTC beverage brand. Kinetic scroll animations, bold display typography, and 3D product renders — all in Framer with zero custom code.",
    tags: ["Framer", "Motion Design", "DTC", "Product Brand"],
    url: "https://pulsedrink.com",
    img: "/projects/pulse.jpg",
    year: "2025",
    scope: "Framer Design + Build",
    // Electric purple from pulse hero
    colors: {
      bg: "#0d0018",
      accent: "#a855f7",
      accentLight: "#c084fc",
      glow: "rgba(168,85,247,0.35)",
      chrome: "#1a0030",
      dot: "#a855f7",
    },
  },
];

function BrowserChrome({ url, colors, hovered }) {
  const domain = url.replace("https://", "").replace(/\/$/, "");
  return (
    <div
      className="flex items-center gap-2 px-3 py-2.5 shrink-0"
      style={{ backgroundColor: colors.chrome }}
    >
      {/* Traffic lights */}
      <div className="flex items-center gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <motion.div
          className="h-2.5 w-2.5 rounded-full"
          animate={{ backgroundColor: hovered ? colors.accent : "#28c840" }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {/* URL bar */}
      <motion.div
        className="flex flex-1 items-center gap-1.5 rounded px-2 py-1 font-mono text-[10px] tracking-wide"
        animate={{
          backgroundColor: hovered ? `${colors.accent}18` : "rgba(255,255,255,0.06)",
          color: hovered ? colors.accentLight : "rgba(255,255,255,0.5)",
          borderColor: hovered ? `${colors.accent}50` : "rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.3 }}
        style={{ border: "1px solid" }}
      >
        <motion.span
          animate={{ color: hovered ? colors.accent : "rgba(255,255,255,0.25)" }}
          transition={{ duration: 0.3 }}
        >
          ⚿
        </motion.span>
        {domain}
      </motion.div>
      {/* External link icon */}
      <motion.a
        href={url}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        animate={{ color: hovered ? colors.accentLight : "rgba(255,255,255,0.2)" }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        className="shrink-0"
      >
        <ArrowUpRight className="h-3.5 w-3.5" />
      </motion.a>
    </div>
  );
}

function SiteCard({ site, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden"
      style={{
        boxShadow: hovered
          ? `0 0 0 1.5px ${site.colors.accent}, 0 20px 60px ${site.colors.glow}`
          : "0 0 0 1px rgba(255,255,255,0.08)",
        transition: "box-shadow 0.4s ease",
        backgroundColor: "#0d0d0d",
      }}
    >
      {/* Browser chrome header */}
      <BrowserChrome url={site.url} colors={site.colors} hovered={hovered} />

      {/* Screenshot — the star of the card */}
      <div className="relative overflow-hidden" style={{ height: "280px" }}>
        {/* Site-colored ambient behind the image */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${site.colors.bg} 0%, #000 100%)`,
          }}
        />

        {/* The actual screenshot */}
        <motion.div
          className="absolute inset-0 z-10"
          animate={{
            scale: hovered ? 1.04 : 1,
            y: hovered ? -8 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: "top center" }}
        >
          <Image
            src={site.img}
            alt={`${site.name} homepage`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
            priority={index < 2}
          />
        </motion.div>

        {/* Gradient vignette at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 h-28"
          style={{
            background: "linear-gradient(to top, #0d0d0d 0%, transparent 100%)",
          }}
        />

        {/* Colored overlay tint on hover */}
        <motion.div
          className="absolute inset-0 z-20 mix-blend-color"
          animate={{ opacity: hovered ? 0.12 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: site.colors.accent }}
        />

        {/* Scan-line texture */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-30"
          animate={{ opacity: hovered ? 0.04 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
          }}
        />

        {/* Number badge — top right */}
        <div className="absolute right-4 top-4 z-30">
          <motion.span
            animate={{
              color: hovered ? site.colors.accent : "rgba(255,255,255,0.35)",
              borderColor: hovered ? `${site.colors.accent}80` : "rgba(255,255,255,0.12)",
              backgroundColor: hovered ? `${site.colors.bg}cc` : "rgba(0,0,0,0.5)",
            }}
            transition={{ duration: 0.3 }}
            className="block border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm"
          >
            {site.number}
          </motion.span>
        </div>

        {/* Hover: "Visit site" cta - bottom left of image */}
        <AnimatePresence>
          {hovered && (
            <motion.a
              href={site.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-6 left-5 z-30 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest backdrop-blur-sm"
              style={{
                color: site.colors.accent,
                textShadow: `0 0 20px ${site.colors.glow}`,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: site.colors.accent }}
              />
              View live site
              <ArrowUpRight className="h-3 w-3" />
            </motion.a>
          )}
        </AnimatePresence>
      </div>

      {/* Card info panel */}
      <div className="flex flex-col flex-1 p-6 pt-5">
        {/* Stack label */}
        <motion.p
          className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2"
          animate={{ color: hovered ? site.colors.accentLight : "rgba(255,255,255,0.3)" }}
          transition={{ duration: 0.3 }}
        >
          {site.type}
        </motion.p>

        {/* Project name */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <motion.h3
            className="font-display text-2xl uppercase leading-tight"
            animate={{ color: hovered ? "#ffffff" : "rgba(255,255,255,0.85)" }}
            transition={{ duration: 0.3 }}
          >
            {site.name}
          </motion.h3>
          <motion.div
            animate={{
              rotate: hovered ? 45 : 0,
              color: hovered ? site.colors.accent : "rgba(255,255,255,0.2)",
            }}
            transition={{ duration: 0.3 }}
            className="mt-0.5 shrink-0"
          >
            <ArrowUpRight className="h-5 w-5" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/40 mb-5 flex-1">
          {site.detail}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {site.tags.map((tag) => (
            <motion.span
              key={tag}
              animate={{
                borderColor: hovered ? `${site.colors.accent}60` : "rgba(255,255,255,0.1)",
                color: hovered ? site.colors.accentLight : "rgba(255,255,255,0.35)",
                backgroundColor: hovered ? `${site.colors.bg}80` : "transparent",
              }}
              transition={{ duration: 0.3 }}
              className="border px-2 py-1 font-mono text-[10px]"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Footer row */}
        <motion.div
          className="flex items-center justify-between border-t pt-4"
          animate={{ borderColor: hovered ? `${site.colors.accent}30` : "rgba(255,255,255,0.06)" }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/25">
            {site.scope} · {site.year}
          </span>
          <motion.a
            href={site.url}
            target="_blank"
            rel="noreferrer"
            animate={{ color: hovered ? site.colors.accent : "rgba(255,255,255,0.25)" }}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
            className="font-mono text-[10px] uppercase tracking-wider"
          >
            {site.url.replace("https://", "")} ↗
          </motion.a>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function WebsiteShowcase() {
  return (
    <section
      id="websites"
      className="relative overflow-hidden border-b border-carbon bg-vanilla px-6 py-16 text-onyx md:px-12 md:py-24"
    >
      {/* Giant background text */}
      <div className="pointer-events-none absolute -right-20 top-10 select-none font-display text-[18rem] leading-none text-onyx/[0.035] md:text-[28rem]">
        WEB
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[1.25fr_0.75fr] md:items-end"
        >
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-violet">
              {"// Selected sites"}
            </p>
            <h2 className="font-display text-6xl uppercase leading-[0.82] tracking-tight sm:text-7xl md:text-9xl">
              Websites
              <br />
              <span className="text-violet">with pulse.</span>
            </h2>
          </div>
          <p className="max-w-md font-body text-sm leading-relaxed text-onyx/60 md:justify-self-end md:text-base">
            Four real launches. Hover any card to see the site's colours come
            alive — then jump straight to the live URL.
          </p>
        </motion.div>

        {/* 2-col staggered grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {SITES.map((site, index) => (
            <div
              key={site.number}
              style={{ marginTop: index % 2 === 1 ? "3.5rem" : 0 }}
            >
              <SiteCard site={site} index={index} />
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 flex flex-col items-start justify-between gap-4 border-t-2 border-onyx pt-5 sm:flex-row sm:items-center"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-onyx/50">
            More launches are cooking. Probably with too much coffee.
          </p>
          <a
            href="#contact"
            className="button-pop flex items-center gap-2 border border-onyx bg-onyx px-4 py-2 font-mono text-xs font-bold text-vanilla"
          >
            <Plus className="h-4 w-4 text-lime" />
            Start a new one
          </a>
        </motion.div>
      </div>
    </section>
  );
}
