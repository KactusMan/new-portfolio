"use client";
import { useState } from "react";
import QuirkyModal from "./QuirkyModal";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Layers, Cpu, CheckCircle } from "lucide-react";

const PROJECTS = [
  {
    id: "headless-shopify",
    title: "Headless Shopify Storefront",
    category: "Shopify + Next.js + Liquid",
    badge: "bg-lime text-onyx",
    tagline: "Ultra-fast headless commerce with custom GraphQL Storefront API integrations and custom Liquid components.",
    archHighlights: [
      "Next.js App Router with Shopify Storefront API via GraphQL",
      "Bespoke Liquid section fallbacks for client CMS editing",
      "GSAP smooth micro-cart and product drawer animations",
    ],
    codeSnippet: `// Shopify Storefront GraphQL Query
const GET_PRODUCTS = \`
  query getProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          handle
          variants(first: 1) {
            edges { node { price { amount currencyCode } } }
          }
        }
      }
    }
  }
\`;`,
  },
  {
    id: "wordpress-acf-pro",
    title: "Enterprise WordPress Engine",
    category: "WordPress + ACF Pro + PHP",
    badge: "bg-candyBlue text-onyx",
    tagline: "Custom WordPress theme system built with Advanced Custom Fields Pro, REST APIs, and tailored AJAX workflows.",
    archHighlights: [
      "Custom PHP theme architecture avoiding bloated page builders",
      "Dynamic ACF Flexible Content blocks with automated JSON field syncing",
      "High-speed REST API endpoints for seamless frontend hydration",
    ],
    codeSnippet: `// Custom WP REST API Endpoint
add_action('rest_api_init', function () {
  register_rest_route('rayan/v1', '/portfolio-data', array(
    'methods' => 'GET',
    'callback' => 'get_rayan_custom_cms_data',
    'permission_callback' => '__return_true'
  ));
});`,
  },
  {
    id: "webflow-gsap-hub",
    title: "Bespoke Webflow & GSAP Site",
    category: "Webflow + GSAP + Custom JS",
    badge: "bg-lavender text-onyx",
    tagline: "High-impact Webflow site infused with custom GSAP scroll triggers, kinetic SVG paths, and custom Webflow CMS logic.",
    archHighlights: [
      "Custom JavaScript injection extending Webflow CMS limits",
      "GSAP ScrollTrigger timeline orchestration for immersive story scrolling",
      "Bespoke responsive layout math across mobile & desktop viewports",
    ],
    codeSnippet: `// GSAP ScrollTrigger Webflow Injection
gsap.registerPlugin(ScrollTrigger);

gsap.to(".webflow-hero-card", {
  scrollTrigger: {
    trigger: ".webflow-hero-card",
    start: "top center",
    scrub: 1
  },
  scale: 1.05,
  rotation: 3
});`,
  },
];

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="relative p-8 md:p-16 bg-onyx border-b border-carbon overflow-hidden">
      {/* Static Ambient Gradient Mesh Background (No movement drift) */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 80%, #36255C 0%, #022E21 40%, #062045 80%, #171717 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <span className="text-xs font-mono text-candyBlue uppercase tracking-widest">{"// "}Featured Work</span>
            <h2 className="text-4xl md:text-6xl font-black text-vanilla font-display uppercase tracking-tight">
              Bespoke CMS Builds
            </h2>
          </div>
          <p className="text-xs font-mono text-lavender mt-2 md:mt-0">
            Click any project card to open technical scope & live code snippets ↗
          </p>
        </motion.div>

        {/* Project Cards Grid with Framer Motion Stagger & Tilt */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveProject(proj)}
              className="group cursor-pointer bg-carbon p-6 rounded-2xl border-2 border-carbon hover:border-lime transition-all duration-300 shadow-[8px_8px_0px_#23212C] flex flex-col justify-between"
            >
              <div>
                <span className={`inline-block text-xs font-mono font-bold px-3 py-1 rounded-md mb-4 ${proj.badge}`}>
                  {proj.category}
                </span>
                <h3 className="text-xl font-black text-vanilla font-display group-hover:text-lime transition-colors mb-3">
                  {proj.title}
                </h3>
                <p className="text-xs font-body text-lavender/80 leading-relaxed mb-6">
                  {proj.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-cosmic flex items-center justify-between font-mono text-xs text-lightLime group-hover:text-lime">
                <span>Inspect Technical Scope</span>
                <span>[ + ]</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Retro Popup Window for Active Project */}
      {activeProject && (
        <QuirkyModal
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          title={activeProject.title}
          badgeColor={activeProject.badge}
        >
          <div className="space-y-6">
            <div>
              <span className={`inline-block text-xs font-mono font-bold px-2.5 py-1 rounded mb-2 ${activeProject.badge}`}>
                {activeProject.category}
              </span>
              <p className="text-sm font-body text-lavender leading-relaxed">{activeProject.tagline}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-lime uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Architecture Highlights
              </h4>
              <ul className="space-y-2 text-xs font-mono text-vanilla">
                {activeProject.archHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-cosmic p-2.5 rounded-lg border border-carbon">
                    <CheckCircle className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono text-candyBlue uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" /> Code Snippet
              </h4>
              <pre className="bg-onyx p-4 rounded-xl border border-carbon text-xs font-mono text-lime overflow-x-auto">
                <code>{activeProject.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </QuirkyModal>
      )}
    </section>
  );
}
