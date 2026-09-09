"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ExternalLink, Link2, Mail, Send, Terminal, X } from "lucide-react";

const initialForm = { name: "", email: "", message: "", company: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState("idle");
  const [notice, setNotice] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setState("sending");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Transmission failed. Please try again.");

      setForm(initialForm);
      setState("sent");
      setNotice("Signal received. I’ll get back to you shortly.");
      confetti({ particleCount: 90, spread: 65, origin: { y: 0.76 }, colors: ["#C6FF34", "#82D5E5", "#D2C3F6", "#CDFC8A"] });
    } catch (error) {
      setState("error");
      setNotice(error.message);
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-carbon py-16 md:py-24 text-vanilla border-t border-carbon">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="mb-3 flex items-center gap-2"><Terminal className="h-4 w-4 text-lime" /><span className="font-mono text-xs uppercase tracking-widest text-lime">{"// Direct channel"}</span></div>
            <h2 className="font-display text-5xl uppercase leading-[0.86] md:text-7xl">Start a<br /><span className="text-lime">good thing.</span></h2>
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-lavender">Got a storefront, CMS, or frontend puzzle that needs both good judgement and a little personality? Send a signal.</p>
            <p className="mt-7 font-mono text-xs text-candyBlue">Karachi, Pakistan · Rayanidrees4@gmail.com</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://github.com/kactusman" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-lavender/30 bg-onyx px-3 py-2 font-mono text-xs text-vanilla transition-colors hover:border-lime hover:text-lime"><ExternalLink className="h-4 w-4" /> GitHub / kactusman</a>
              <a href="https://www.linkedin.com/in/rayan-idrees-435a56219/" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-lavender/30 bg-onyx px-3 py-2 font-mono text-xs text-vanilla transition-colors hover:border-candyBlue hover:text-candyBlue"><Link2 className="h-4 w-4" /> LinkedIn</a>
            </div>
          </div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={submit} className="relative border-2 border-lavender/30 bg-onyx/90 p-5 shadow-[7px_7px_0_#36255C] md:p-7">
            <div className="mb-6 flex items-center justify-between border-b border-cosmic pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-lavender"><span>kactusman/contact.exe</span><span className="flex items-center gap-1.5 text-lightLime"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" /> open channel</span></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="font-mono text-xs text-lavender">Your name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full border-b border-lavender/30 bg-transparent px-0 py-3 text-sm text-vanilla outline-none transition-colors placeholder:text-lavender/30 focus:border-lime" placeholder="What should I call you?" /></label>
              <label className="font-mono text-xs text-lavender">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full border-b border-lavender/30 bg-transparent px-0 py-3 text-sm text-vanilla outline-none transition-colors placeholder:text-lavender/30 focus:border-lime" placeholder="you@company.com" /></label>
            </div>
            <label className="mt-5 block font-mono text-xs text-lavender">The brief<textarea required rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full resize-none border border-lavender/30 bg-carbon p-3 text-sm text-vanilla outline-none transition-colors placeholder:text-lavender/30 focus:border-lime" placeholder="A few words about the project, timeline, and what you need." /></label>
            <label className="sr-only">Company<input tabIndex="-1" autoComplete="off" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></label>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-wider text-lavender/60">No mailing-list nonsense. Just a direct reply.</p>
              <button disabled={state === "sending"} className="button-pop flex items-center gap-2 border border-onyx bg-lime px-4 py-3 font-mono text-xs font-bold text-onyx disabled:cursor-wait disabled:opacity-70"><Send className="h-4 w-4" /> {state === "sending" ? "SENDING..." : "SEND A SIGNAL"}</button>
            </div>
            <AnimatePresence>
              {notice && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={`mt-5 flex items-start gap-2 border p-3 font-mono text-xs ${state === "sent" ? "border-lime/50 bg-tealGreen text-lightLime" : "border-blush/50 bg-blush/10 text-blush"}`} role="status"><span>{state === "sent" ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}</span>{notice}</motion.div>}
            </AnimatePresence>
          </motion.form>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-cosmic pt-6 font-mono text-xs text-lavender/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Rayan Idrees </span>
          <span className="text-lime">[STATUS: OPEN TO INTERESTING WORK]</span>
        </div>
      </div>
    </footer>
  );
}
