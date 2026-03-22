"use client";

import Link from "next/link";
import { Folder } from "lucide-react";

const col1Cards = [
  { image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=400&fit=crop&q=80", label: "Resume Template" },
  { image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=400&fit=crop&q=80", label: "Design System Guide" },
  { image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=300&h=400&fit=crop&q=80", label: "Freelancer Kit" },
  { image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=400&fit=crop&q=80", label: "Content Calendar" },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=400&fit=crop&q=80", label: "Brand Kit" },
  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop&q=80", label: "Pitch Deck" },
];

const col2Cards = [
  { image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=400&fit=crop&q=80", label: "E-commerce Template" },
  { image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=400&fit=crop&q=80", label: "Social Media Pack" },
  { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=400&fit=crop&q=80", label: "Dev Starter Kit" },
  { image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=300&h=400&fit=crop&q=80", label: "Design System Guide" },
  { image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=400&fit=crop&q=80", label: "Resume Template" },
  { image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=300&h=400&fit=crop&q=80", label: "Freelancer Kit" },
];

const col3Cards = [
  { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=400&fit=crop&q=80", label: "Content Calendar" },
  { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=400&fit=crop&q=80", label: "Brand Kit" },
  { image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=400&fit=crop&q=80", label: "Pitch Deck" },
  { image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&h=400&fit=crop&q=80", label: "E-commerce Template" },
  { image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=400&fit=crop&q=80", label: "Social Media Pack" },
  { image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=400&fit=crop&q=80", label: "Dev Starter Kit" },
];

function Card({ image, label }: { image: string; label: string }) {
  return (
    <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative flex-shrink-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
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
        {/* Main container with milky glassy border */}
        <div
          className="relative rounded-3xl overflow-hidden border-2 border-white/70"
          style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          {/* Milky glassy background for gaps */}
          <div
            className="rounded-3xl overflow-hidden h-[600px] md:h-[800px] relative"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.55) 0%, rgba(250,248,244,0.5) 100%)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Scrolling grid - 2 cols mobile, 3 cols desktop */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-3 p-3">
              {/* Column 1 - scrolls UP (fast) */}
              <div className="overflow-hidden relative">
                <div className="animate-scroll-up-fast flex flex-col gap-3">
                  {[...col1Cards, ...col1Cards].map((card, i) => (
                    <Card key={`c1-${i}`} image={card.image} label={card.label} />
                  ))}
                </div>
              </div>

              {/* Column 2 - scrolls UP (slow) */}
              <div className="overflow-hidden relative">
                <div className="animate-scroll-up flex flex-col gap-3">
                  {[...col2Cards, ...col2Cards].map((card, i) => (
                    <Card key={`c2-${i}`} image={card.image} label={card.label} />
                  ))}
                </div>
              </div>

              {/* Column 3 - scrolls UP (slow) - hidden on mobile */}
              <div className="overflow-hidden relative hidden md:block">
                <div className="animate-scroll-up-slow flex flex-col gap-3">
                  {[...col3Cards, ...col3Cards].map((card, i) => (
                    <Card key={`c3-${i}`} image={card.image} label={card.label} />
                  ))}
                </div>
              </div>
            </div>

            {/* Top overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFE6]/30 via-transparent to-[#F5EFE6]/30 pointer-events-none" />

            {/* 25% black overlay — sits above cards but below center button */}
            <div className="absolute inset-0 bg-black/25 pointer-events-none z-[5]" />

            {/* Center button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="flex flex-col items-center gap-3 pointer-events-auto">
                <span className="bg-text-primary text-white rounded-full px-4 py-2 text-sm font-sans whitespace-nowrap">
                  The creative vault
                </span>
                <Link
                  href="/resources"
                  className="w-[120px] h-[120px] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 border-2 border-white/70"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.7) 0%, rgba(250,248,244,0.6) 100%)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
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
