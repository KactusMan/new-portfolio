"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

export default function QuirkyModal({ isOpen, onClose, title, children, badgeColor = "bg-candyBlue" }) {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.2, display: "flex" });
      gsap.fromTo(
        cardRef.current,
        { scale: 0.8, rotate: -4, y: 30, opacity: 0 },
        { scale: 1, rotate: 0, y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    } else {
      gsap.to(cardRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.to(overlayRef.current, { opacity: 0, display: "none" });
        },
      });
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 hidden items-center justify-center bg-onyx/80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-carbon border-4 border-lime rounded-2xl p-6 shadow-[10px_10px_0px_#36255C] text-vanilla"
      >
        <div className="flex justify-between items-center pb-4 mb-4 border-b border-cosmic">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-blush border border-onyx" />
            <span className="w-3.5 h-3.5 rounded-full bg-vanilla border border-onyx" />
            <span className="w-3.5 h-3.5 rounded-full bg-lightLime border border-onyx" />
            <span className={`ml-3 px-2 py-0.5 font-mono text-xs font-bold text-onyx rounded ${badgeColor}`}>
              {title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1 font-mono text-xs font-bold text-onyx bg-blush px-3 py-1 rounded-lg border border-onyx hover:bg-lime transition-colors"
          >
            ESC <X className="w-3 h-3" />
          </button>
        </div>

        <div className="font-body text-lavender space-y-4">{children}</div>
      </div>
    </div>
  );
}