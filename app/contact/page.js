import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import { Mail, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Contact Rayan Idrees | Hire Senior CMS Architect",
  description:
    "Get in touch with Rayan Idrees (kactusman) for custom WordPress development, Shopify storefront architecture, Next.js web applications, or full-stack CMS consultation.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Rayan Idrees | Senior CMS Architect",
    description:
      "Direct channel for project inquiries, custom CMS builds, Shopify storefront architecture, and Next.js contracts.",
    url: "https://rayanidrees.vercel.app/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Rayan Idrees",
  "description": "Get in touch with Rayan Idrees for CMS architecture and frontend development project inquiries.",
  "url": "https://rayanidrees.vercel.app/contact",
  "mainEntity": {
    "@type": "Person",
    "name": "Rayan Idrees",
    "email": "Rayanidrees4@gmail.com"
  }
};

const FAQS = [
  {
    q: "What types of CMS projects do you specialize in?",
    a: "I specialize in enterprise custom WordPress builds (using ACF Pro and custom PHP without page builders), Shopify Liquid & Headless storefronts, Next.js applications, and Webflow/Framer implementations with custom JS."
  },
  {
    q: "How fast can we kick off a project?",
    a: "Depending on active contract commitments, I typically initiate new projects within 1–2 weeks following specification alignment and scope sign-off."
  },
  {
    q: "Do you handle custom plugin and API development?",
    a: "Yes. I write custom PHP plugins for WordPress, custom Liquid section handlers for Shopify, REST API endpoints, and third-party webhook integrations."
  },
  {
    q: "Are you available for ongoing contract maintenance?",
    a: "Yes, I offer ongoing SLA support, core web vitals optimization, and incremental feature developments for existing platforms."
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-onyx text-vanilla selection:bg-lime selection:text-onyx relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Header Banner */}
      <section className="border-b border-carbon bg-cosmic py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-lime" />
            <span className="font-mono text-xs font-bold text-lime uppercase tracking-widest">
              {"// "}DIRECT INQUIRIES
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-display uppercase tracking-tight text-vanilla">
            LET&apos;S BUILD <br />
            <span className="text-lime">SOMETHING</span> <span className="text-candyBlue">EPIC.</span>
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base md:text-lg text-lavender/90 leading-relaxed">
            Have a project in mind, need a CMS consultation, or want to revamp an existing platform? Send a message below and I&apos;ll get back to you within 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs text-lavender">
            <div className="bg-carbon px-3.5 py-2 rounded-xl border border-cosmic flex items-center gap-2">
              <Clock className="w-4 h-4 text-lime" />
              <span>Response Time: &lt; 24 Hours</span>
            </div>
            <div className="bg-carbon px-3.5 py-2 rounded-xl border border-cosmic flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-candyBlue" />
              <span>Status: Available for Enterprise Contracts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form Component */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-onyx border-t border-carbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-candyBlue" />
            <span className="font-mono text-xs font-bold text-candyBlue uppercase tracking-widest">
              {"// "}FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight mb-10 text-vanilla">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((item, idx) => (
              <div key={idx} className="bg-carbon p-6 rounded-2xl border border-cosmic space-y-2">
                <h3 className="font-bold text-base text-lime font-display uppercase">
                  {item.q}
                </h3>
                <p className="text-xs font-body text-lavender/80 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
