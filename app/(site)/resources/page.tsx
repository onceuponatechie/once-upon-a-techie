"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const categories = ["All", "Templates", "UI Kits", "Guides", "Tools", "Freebies"];

const resources = [
  {
    id: 1,
    title: "Social Media Banner Pack",
    category: "Freebies",
    type: "Social Media Pack",
    link: "#",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=500&fit=crop&q=80",
    tall: true,
  },
  {
    id: 2,
    title: "Minimal Portfolio Starter",
    category: "Templates",
    type: "Website Template",
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80",
    tall: false,
  },
  {
    id: 3,
    title: "Brand Identity Kit",
    category: "UI Kits",
    type: "Brand Kit",
    link: "#",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=550&fit=crop&q=80",
    tall: true,
  },
  {
    id: 4,
    title: "The No-Code Automation Guide",
    category: "Guides",
    type: "Guide",
    link: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=280&fit=crop&q=80",
    tall: false,
  },
  {
    id: 5,
    title: "Content Calendar Template",
    category: "Templates",
    type: "Content Calendar",
    link: "#",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop&q=80",
    tall: false,
  },
  {
    id: 6,
    title: "Freelancer Starter Kit",
    category: "Freebies",
    type: "Freelancer Kit",
    link: "#",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=500&fit=crop&q=80",
    tall: true,
  },
  {
    id: 7,
    title: "Pitch Deck Template",
    category: "Templates",
    type: "Pitch Deck",
    link: "#",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop&q=80",
    tall: false,
  },
  {
    id: 8,
    title: "Color Palette Generator",
    category: "Tools",
    type: "Design Tool",
    link: "#",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=320&fit=crop&q=80",
    tall: false,
  },
  {
    id: 9,
    title: "Dashboard UI Kit",
    category: "UI Kits",
    type: "UI Kit",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=450&fit=crop&q=80",
    tall: true,
  },
  {
    id: 10,
    title: "SaaS Landing Page Kit",
    category: "Templates",
    type: "Landing Page Kit",
    link: "#",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&q=80",
    tall: false,
  },
  {
    id: 11,
    title: "Design-to-Dev Handoff Guide",
    category: "Guides",
    type: "Guide",
    link: "#",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=350&fit=crop&q=80",
    tall: false,
  },
  {
    id: 12,
    title: "Icon System Builder",
    category: "Tools",
    type: "Design Tool",
    link: "#",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=500&fit=crop&q=80",
    tall: true,
  },
];

function ResourceCard({ item }: { item: (typeof resources)[0] }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block break-inside-avoid mb-4 group"
    >
      <div className="rounded-2xl overflow-hidden relative">
        {/* Image */}
        <div
          className={`w-full bg-cover bg-center ${item.tall ? "h-[340px] md:h-[400px]" : "h-[220px] md:h-[260px]"}`}
          style={{ backgroundImage: `url('${item.image}')` }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

        {/* Type label overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-end justify-between">
            <div>
              <span
                className="inline-block text-[10px] font-sans font-medium uppercase tracking-wider text-white/80 rounded-full px-3 py-1 mb-2"
                style={{
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {item.type}
              </span>
              <h3 className="font-serif text-sm text-white drop-shadow-lg">
                {item.title}
              </h3>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight size={12} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function ResourcesPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? resources
      : resources.filter((r) => r.category === active);

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <p className="font-serif italic text-brand-orange text-sm mb-3">
            resources
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-text-primary mb-4">
            The Creative <span className="font-serif italic">Vault</span>
          </h1>
          <p className="font-sans text-text-secondary text-base max-w-xl mb-12">
            Templates, tools, and guides I have built or curated to help you
            ship faster and design better.
          </p>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative rounded-full px-5 py-2 text-sm font-sans transition-colors duration-300 ${
                  active === cat
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary bg-white/50 border border-white/40"
                }`}
              >
                {active === cat && (
                  <motion.div
                    layoutId="resource-pill"
                    className="absolute inset-0 bg-brand-orange rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Pinterest Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-4"
          >
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.04}>
                <ResourceCard item={item} />
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
