"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const categories = ["All", "Templates", "UI Kits", "Guides", "Tools", "Freebies"];

const resources = [
  {
    id: 1,
    title: "Minimal Portfolio Starter",
    description: "A clean, minimal portfolio template built with Next.js and Tailwind CSS. Perfect for designers and developers.",
    category: "Templates",
    link: "#",
  },
  {
    id: 2,
    title: "Dashboard UI Kit",
    description: "50+ beautifully crafted dashboard components with dark and light mode variants.",
    category: "UI Kits",
    link: "#",
  },
  {
    id: 3,
    title: "The No-Code Automation Guide",
    description: "A comprehensive guide to automating your workflows with Zapier, Make, and n8n. Save hours every week.",
    category: "Guides",
    link: "#",
  },
  {
    id: 4,
    title: "Color Palette Generator",
    description: "An AI-powered tool that generates accessible color palettes from a single brand color.",
    category: "Tools",
    link: "#",
  },
  {
    id: 5,
    title: "Social Media Banner Pack",
    description: "120 ready-to-use social media banners for Twitter, LinkedIn, and Instagram. Fully editable in Figma.",
    category: "Freebies",
    link: "#",
  },
  {
    id: 6,
    title: "SaaS Landing Page Kit",
    description: "Conversion-optimized landing page sections with Framer Motion animations built in.",
    category: "Templates",
    link: "#",
  },
  {
    id: 7,
    title: "Icon System Builder",
    description: "A Figma plugin that helps you create consistent icon systems from scratch in minutes.",
    category: "Tools",
    link: "#",
  },
  {
    id: 8,
    title: "Design-to-Dev Handoff Guide",
    description: "Bridge the gap between design and development. Token naming, spacing systems, and component specs.",
    category: "Guides",
    link: "#",
  },
];

export default function ResourcesPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? resources : resources.filter((r) => r.category === active);

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
                    : "text-text-secondary hover:text-text-primary bg-surface-light"
                }`}
              >
                {active === cat && (
                  <motion.div
                    layoutId="resource-pill"
                    className="absolute inset-0 bg-brand-orange rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <div className="break-inside-avoid glassmorphism rounded-2xl p-6 group hover:shadow-lg transition-shadow duration-300">
                  {/* Category Badge */}
                  <span className="inline-block text-[11px] font-sans font-medium uppercase tracking-wider text-brand-green bg-brand-green/10 rounded-full px-3 py-1 mb-4">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-normal text-text-primary mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Gumroad Link */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-brand-orange hover:gap-2.5 transition-all duration-300"
                  >
                    Get it on Gumroad
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
