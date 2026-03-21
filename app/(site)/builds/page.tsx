"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const types = ["All", "Web App", "Mobile", "SaaS", "Tool"];

const builds = [
  {
    slug: "creative-suite-dashboard",
    title: "Creative Suite Dashboard",
    description: "A real-time analytics dashboard for creative teams to track project progress and collaboration metrics.",
    category: "Web App",
    tools: ["Next.js", "Tailwind", "Supabase", "Chart.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop&q=80",
  },
  {
    slug: "habit-tracker-mobile",
    title: "Habit Tracker",
    description: "A beautiful habit tracking app with streak counting, mood journaling, and weekly insights.",
    category: "Mobile",
    tools: ["React Native", "Expo", "Firebase"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=500&fit=crop&q=80",
  },
  {
    slug: "ship-fast-saas",
    title: "ShipFast Boilerplate",
    description: "A production-ready SaaS starter kit with auth, payments, emails, and a polished landing page.",
    category: "SaaS",
    tools: ["Next.js", "Stripe", "Prisma"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop&q=80",
  },
  {
    slug: "color-contrast-checker",
    title: "Contrast Checker",
    description: "An accessibility-first color contrast tool that suggests WCAG-compliant alternatives.",
    category: "Tool",
    tools: ["React", "TypeScript", "Radix UI"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=700&h=500&fit=crop&q=80",
  },
  {
    slug: "portfolio-cms",
    title: "Portfolio CMS",
    description: "A headless CMS-powered portfolio system with live preview, SEO optimization, and one-click deployment.",
    category: "Web App",
    tools: ["Next.js", "Sanity", "Vercel"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&h=500&fit=crop&q=80",
  },
  {
    slug: "invoice-generator",
    title: "Invoice Generator",
    description: "Generate professional invoices in seconds. Supports multiple currencies and PDF export.",
    category: "SaaS",
    tools: ["Next.js", "Puppeteer", "Tailwind"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=500&fit=crop&q=80",
  },
];

export default function BuildsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? builds : builds.filter((b) => b.category === active);

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <p className="font-serif italic text-brand-blue text-sm mb-3">
            builds
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-text-primary mb-4">
            The Ship <span className="font-serif italic">Log</span>
          </h1>
          <p className="font-sans text-text-secondary text-base max-w-xl mb-12">
            Things I have designed, built, and shipped. From weekend experiments
            to full-blown products.
          </p>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-14">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActive(type)}
                className={`relative rounded-full px-5 py-2 text-sm font-sans transition-colors duration-300 ${
                  active === type
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary bg-white/50 border border-white/40"
                }`}
              >
                {active === type && (
                  <motion.div
                    layoutId="build-pill"
                    className="absolute inset-0 bg-brand-orange rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{type}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Build Cards Grid - 2 columns */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((build, i) => (
              <ScrollReveal key={build.slug} delay={i * 0.06}>
                <Link href={`/builds/${build.slug}`} className="group block">
                  <div className="rounded-2xl overflow-hidden relative min-h-[320px] md:min-h-[380px]">
                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('${build.image}')`,
                      }}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

                    {/* Content inside image */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                      {/* Top: category + arrow */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-white/70">
                          {build.category}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowUpRight size={14} className="text-white" />
                        </div>
                      </div>

                      {/* Bottom: title, description, tech pills */}
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                          {build.title}
                        </h3>
                        <p className="font-sans text-sm text-white/60 leading-relaxed mb-4 max-w-sm">
                          {build.description}
                        </p>
                        {/* Glassmorphism tech pills */}
                        <div className="flex flex-wrap gap-2">
                          {build.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-[11px] font-sans text-white/80 rounded-full px-3 py-1 border border-white/20"
                              style={{
                                background: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(8px)",
                              }}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
