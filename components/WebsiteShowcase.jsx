"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Eye, Plus } from "lucide-react";

// Replace the title, URL and tags below with your published client sites.
// The visual previews are deliberately code-made, so this section stays sharp
// until you decide to add real project screenshots to /public.
const SITES = [
  {
    number: "01",
    name: "Headless Commerce",
    type: "Shopify / Next.js",
    detail: "Fast storefronts that feel like brands, not templates.",
    tags: ["Storefront API", "Liquid", "Motion"],
    accent: "lime",
    url: "",
  },
  {
    number: "02",
    name: "Editorial Engine",
    type: "WordPress / ACF Pro",
    detail: "Flexible publishing systems for teams that need to move quickly.",
    tags: ["Custom Blocks", "REST API", "PHP"],
    accent: "blue",
    url: "",
  },
  {
    number: "03",
    name: "Launch Mode",
    type: "Webflow / GSAP",
    detail: "Campaign pages with enough personality to make a mark.",
    tags: ["ScrollTrigger", "CMS", "Custom JS"],
    accent: "blush",
    url: "",
  },
  {
    number: "04",
    name: "Digital Playground",
    type: "React / Next.js",
    detail: "Interactive web experiments with a useful core underneath.",
    tags: ["React", "Canvas", "UI Systems"],
    accent: "lavender",
    url: "",
  },
];

function Preview({ site }) {
  const colors = {
    lime: "bg-lime text-onyx",
    blue: "bg-candyBlue text-onyx",
    blush: "bg-blush text-onyx",
    lavender: "bg-lavender text-onyx",
  };

  return (
    <div className={`relative h-full min-h-72 overflow-hidden p-5 ${colors[site.accent]}`}>
      <div className="absolute inset-3 border border-onyx/40" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between font-mono text-[10px] font-bold tracking-[0.2em]">
          <span>{"RAYAN//WEB"}</span><span>{site.number}</span>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-20 bg-onyx/80" />
          <div className="h-2 w-full bg-onyx/80" />
          <div className="h-2 w-3/5 bg-onyx/80" />
        </div>
        <div className="flex items-end justify-between">
          <span className="font-display text-6xl leading-none">{site.number}</span>
          <span className="rounded-full border border-onyx/50 px-3 py-1 font-mono text-[10px]">OPEN FILE</span>
        </div>
      </div>
    </div>
  );
}

export default function WebsiteShowcase() {
  return (
    <section id="websites" className="relative overflow-hidden border-b border-carbon bg-vanilla px-6 py-16 text-onyx md:px-12 md:py-24">
      <div className="absolute -right-20 top-10 font-display text-[18rem] leading-none text-onyx/[0.035] md:text-[28rem]">WEB</div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-violet">{"// Selected sites"}</p>
            <h2 className="font-display text-6xl uppercase leading-[0.82] tracking-tight sm:text-7xl md:text-9xl">
              Websites<br /><span className="text-violet">with pulse.</span>
            </h2>
          </div>
          <p className="max-w-md font-body text-sm leading-relaxed text-onyx/70 md:justify-self-end md:text-base">
            A rotating shelf for the sites I&apos;ve built. Each tile is a compact case study—what it is, how it works, and where to see it live.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {SITES.map((site, index) => (
            <motion.article
              key={site.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -7 }}
              className={`group grid overflow-hidden border-2 border-onyx bg-onyx shadow-[7px_7px_0_#36255C] sm:grid-cols-[0.95fr_1.05fr] ${index % 2 ? "md:translate-y-12" : ""}`}
            >
              <Preview site={site} />
              <div className="flex min-h-72 flex-col justify-between p-6 text-vanilla sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-candyBlue">{site.type}</p>
                    <h3 className="mt-3 font-display text-4xl uppercase leading-[0.9]">{site.name}</h3>
                  </div>
                  <Eye className="h-5 w-5 shrink-0 text-lime transition-transform duration-300 group-hover:scale-125" />
                </div>
                <div>
                  <p className="max-w-xs text-sm leading-relaxed text-lavender">{site.detail}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {site.tags.map((tag) => <span key={tag} className="border border-lavender/30 px-2 py-1 font-mono text-[10px] text-lightLime">{tag}</span>)}
                  </div>
                </div>
                {site.url ? (
                  <a href={site.url} target="_blank" rel="noreferrer" className="mt-6 flex w-fit items-center gap-2 font-mono text-xs font-bold text-lime hover:text-candyBlue">
                    Visit live site <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="mt-6 flex w-fit items-center gap-2 font-mono text-xs text-lavender/70"><Code2 className="h-4 w-4" /> Add your live URL above</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t-2 border-onyx pt-5 sm:flex-row sm:items-center">
          <p className="font-mono text-xs uppercase tracking-wider">More launches are cooking. Probably with too much coffee.</p>
          <a href="#contact" className="flex items-center gap-2 rounded-full bg-onyx px-4 py-2 font-mono text-xs font-bold text-vanilla transition-colors hover:bg-violet"><Plus className="h-4 w-4 text-lime" /> Start a new one</a>
        </div>
      </div>
    </section>
  );
}
