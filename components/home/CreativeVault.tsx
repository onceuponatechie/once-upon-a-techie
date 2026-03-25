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

export default function CreativeVault() {
  return (
    <section className="py-0">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="relative rounded-[3rem] overflow-hidden border border-white/30 shadow-2xl">
          <div className="bg-black rounded-[3rem] overflow-hidden h-[700px] md:h-[900px] lg:h-[1100px] relative">
            {/* Scrolling grid */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 p-4 pointer-events-none z-0">
              {/* Column 1 - scrolls UP (fast) */}
              <div className="overflow-hidden relative">
                <div className="animate-scroll-up-fast flex flex-col gap-4">
                  {[...col1Cards, ...col1Cards].map((card, i) => (
                    <Card key={`c1-${i}`} bg={card.bg} label={card.label} />
                  ))}
                </div>
              </div>

              {/* Column 2 - scrolls UP (medium) */}
              <div className="overflow-hidden relative">
                <div className="animate-scroll-up flex flex-col gap-4">
                  {[...col2Cards, ...col2Cards].map((card, i) => (
                    <Card key={`c2-${i}`} bg={card.bg} label={card.label} />
                  ))}
                </div>
              </div>

              {/* Column 3 - scrolls UP (slow) - hidden on mobile */}
              <div className="overflow-hidden relative hidden md:block">
                <div className="animate-scroll-up-slow flex flex-col gap-4">
                  {[...col3Cards, ...col3Cards].map((card, i) => (
                    <Card key={`c3-${i}`} bg={card.bg} label={card.label} />
                  ))}
                </div>
              </div>
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

            {/* Center CTA */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="flex flex-col items-center gap-3 pointer-events-auto">
                {/* Black pill label */}
                <span className="bg-text-primary text-white rounded-full px-4 py-2 text-sm font-sans whitespace-nowrap">
                  The Creative Vault
                </span>
                {/* Glassmorphic circle button */}
                <Link
                  href="/resources"
                  className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 group"
                >
                  <Folder size={36} className="text-white group-hover:text-text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
