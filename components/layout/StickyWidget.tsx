"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import GiftBox from "@/components/icons/GiftBox";

export default function StickyWidget() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("widget-dismissed") === "true") {
      setDismissed(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
    sessionStorage.setItem("widget-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="fixed bottom-6 right-6 z-50 w-[140px]"
        >
          <div className="relative bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl p-2">
            {/* Close */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Close"
            >
              <X size={10} />
            </button>

            {/* NEW badge */}
            <span className="absolute -top-2 -left-1 bg-brandOrange text-white text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-md">
              NEW
            </span>

            {/* Thumbnail placeholder */}
            <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-brandOrange/20 to-lavender/30 mb-2 flex items-center justify-center">
              <GiftBox className="w-6 h-6" />
            </div>

            {/* Title */}
            <p className="text-[10px] font-sans font-medium text-text-primary leading-tight mb-1">
              Free Resource Pack
            </p>

            {/* CTA */}
            <div className="flex items-center gap-1">
              <Link
                href="/resources"
                className="text-[10px] font-sans font-medium text-brandOrange hover:underline"
              >
                Take a peek
              </Link>
              <GiftBox className="w-3 h-3 text-brandOrange" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
