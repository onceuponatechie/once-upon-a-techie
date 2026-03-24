"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyWidget() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-[90] w-72"
        >
          <div className="glass rounded-3xl p-4 shadow-lg relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/60 hover:bg-white/80 flex items-center justify-center text-text-secondary text-xs transition-colors"
              aria-label="Close widget"
            >
              ✕
            </button>

            {/* Media area */}
            <div className="w-full aspect-video rounded-2xl bg-surface-muted mb-3 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-lavender/20" />
              <div className="absolute bottom-2 left-2">
                <span className="bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  New
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button className="flex-1 text-sm font-medium text-text-primary hover:text-brand-orange transition-colors text-left">
                Take a peek
              </button>
              <button className="w-9 h-9 rounded-full bg-white/60 hover:bg-white/80 flex items-center justify-center transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="8" width="18" height="14" rx="2" />
                  <path d="M12 8V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4" />
                  <path d="M18 8V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                  <line x1="12" y1="8" x2="12" y2="22" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
