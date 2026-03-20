"use client";

import Link from "next/link";
import { Folder } from "lucide-react";

const col1Cards = [
  { bg: "#8B7355", label: "Resume Template" },
  { bg: "#9B59B6", label: "Design System Guide" },
  { bg: "#5D4E37", label: "Freelancer Kit" },
  { bg: "#7B68EE", label: "Content Calendar" },
  { bg: "#2D6A4F", label: "Brand Kit" },
  { bg: "#E8703A", label: "Pitch Deck" },
];

const col2Cards = [
  { bg: "#4A90D9", label: "E-commerce Template" },
  { bg: "#34495E", label: "Social Media Pack" },
  { bg: "#2C3E50", label: "Dev Starter Kit" },
  { bg: "#9B59B6", label: "Design System Guide" },
  { bg: "#8B7355", label: "Resume Template" },
  { bg: "#5D4E37", label: "Freelancer Kit" },
];

const col3Cards = [
  { bg: "#7B68EE", label: "Content Calendar" },
  { bg: "#2D6A4F", label: "Brand Kit" },
  { bg: "#E8703A", label: "Pitch Deck" },
  { bg: "#4A90D9", label: "E-commerce Template" },
  { bg: "#34495E", label: "Social Media Pack" },
  { bg: "#2C3E50", label: "Dev Starter Kit" },
];

function Card({ bg, label }: { bg: string; label: string }) {
  return (
    <div
      className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative flex-shrink-0"
      style={{ backgroundColor: bg }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <span className="text-white/90 text-xs font-sans">{label}</span>
      </div>
    </div>
  );
}

export default function CreativeVaultStrip() {
  return (
    <section className="py-0">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main container with white outer border */}
        <div className="relative rounded-3xl overflow-hidden border-[3px] border-white shadow-2xl">
          {/* Black background for gaps */}
          <div className="bg-black rounded-3xl overflow-hidden h-[600px] md:h-[800px] relative">
            {/* Scrolling grid - 2 cols mobile, 3 cols desktop */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-3 p-3">
              {/* Column 1 - scrolls UP (fast) */}
              <div className="overflow-hidden relative">
                <div className="animate-scroll-up-fast flex flex-col gap-3">
                  {[...col1Cards, ...col1Cards].map((card, i) => (
                    <Card key={`c1-${i}`} bg={card.bg} label={card.label} />
                  ))}
                </div>
              </div>

              {/* Column 2 - scrolls UP (slow) */}
              <div className="overflow-hidden relative">
                <div className="animate-scroll-up flex flex-col gap-3">
                  {[...col2Cards, ...col2Cards].map((card, i) => (
                    <Card key={`c2-${i}`} bg={card.bg} label={card.label} />
                  ))}
                </div>
              </div>

              {/* Column 3 - scrolls UP (slow) - hidden on mobile */}
              <div className="overflow-hidden relative hidden md:block">
                <div className="animate-scroll-up-slow flex flex-col gap-3">
                  {[...col3Cards, ...col3Cards].map((card, i) => (
                    <Card key={`c3-${i}`} bg={card.bg} label={card.label} />
                  ))}
                </div>
              </div>
            </div>

            {/* Top deeper overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/25 pointer-events-none" />

            {/* Center button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
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
      </div>
    </section>
  );
}
