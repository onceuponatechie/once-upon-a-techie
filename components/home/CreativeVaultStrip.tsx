"use client";

import Link from "next/link";
import { Folder } from "lucide-react";

const cards = [
  { w: "w-[200px]", h: "h-[250px]", bg: "#2D6A4F", label: "Brand Guide" },
  { w: "w-[280px]", h: "h-[350px]", bg: "#4A90D9", label: "Dashboard UI" },
  { w: "w-[200px]", h: "h-[300px]", bg: "#B4A7D6", label: "Mobile App" },
  { w: "w-[320px]", h: "h-[420px]", bg: "#E8703A", label: "E-Commerce" },
  { w: "w-[240px]", h: "h-[280px]", bg: "#F5D060", label: "Landing Page" },
  { w: "w-[200px]", h: "h-[250px]", bg: "#1A1A1A", label: "Portfolio" },
  { w: "w-[280px]", h: "h-[350px]", bg: "#2D6A4F", label: "SaaS Tool" },
  { w: "w-[200px]", h: "h-[300px]", bg: "#4A90D9", label: "Blog Design" },
  { w: "w-[320px]", h: "h-[420px]", bg: "#B4A7D6", label: "Automation" },
  { w: "w-[240px]", h: "h-[280px]", bg: "#E8703A", label: "Template" },
];

const categories = [
  { label: "Templates", color: "bg-brand-orange" },
  { label: "UI Kits", color: "bg-brand-blue" },
  { label: "Guides", color: "bg-brand-green" },
  { label: "Tools", color: "bg-brand-lavender" },
  { label: "Freebies", color: "bg-brand-yellow" },
];

export default function CreativeVaultStrip() {
  const allCards = [...cards, ...cards];

  return (
    <section className="bg-surface-cream py-0">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main container */}
        <div className="relative rounded-3xl overflow-hidden h-[700px] md:h-[1100px] gradient-border">
          <div className="absolute inset-[1.5px] rounded-3xl overflow-hidden bg-surface-cream">
            {/* Scrolling cards */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="animate-scroll-up flex flex-wrap gap-4 p-4 justify-center content-start">
                {allCards.map((card, i) => (
                  <div
                    key={i}
                    className={`${card.w} ${card.h} rounded-2xl shadow-md flex items-end p-4 flex-shrink-0`}
                    style={{ backgroundColor: card.bg }}
                  >
                    <span className="text-white text-sm font-sans font-medium bg-black/20 rounded-lg px-3 py-1.5">
                      {card.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Black overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/25 pointer-events-none" />

            {/* Center button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center gap-3 pointer-events-auto">
                {/* Tooltip */}
                <span className="bg-text-primary text-white rounded-full px-4 py-2 text-sm font-sans whitespace-nowrap">
                  The creative vault
                </span>
                {/* Circle button */}
                <Link
                  href="/resources"
                  className="w-[120px] h-[120px] rounded-full bg-white/60 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-xl hover:bg-white hover:scale-105 transition-all duration-300"
                >
                  <Folder size={32} className="text-text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map((cat) => (
            <span
              key={cat.label}
              className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm text-sm font-sans text-text-secondary"
            >
              <span className={`w-2 h-2 rounded-full ${cat.color}`} />
              {cat.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
