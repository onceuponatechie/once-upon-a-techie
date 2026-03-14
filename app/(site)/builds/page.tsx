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
    description: "A real-time analytics dashboard for creative teams to track project progress, asset usage, and team collaboration metrics.",
    category: "Web App",
    tools: ["Next.js", "Tailwind", "Supabase", "Chart.js"],
    color: "bg-brand-orange",
  },
  {
    slug: "habit-tracker-mobile",
    title: "Habit Tracker",
    description: "A beautiful habit tracking app with streak counting, mood journaling, and weekly insights to build lasting routines.",
    category: "Mobile",
    tools: ["React Native", "Expo", "Firebase", "Reanimated"],
    color: "bg-brand-lavender",
  },
  {
    slug: "ship-fast-saas",
    title: "ShipFast Boilerplate",
    description: "A production-ready SaaS starter kit with authentication, payments, emails, and a polished landing page out of the box.",
    category: "SaaS",
    tools: ["Next.js", "Stripe", "Prisma", "Resend"],
    color: "bg-brand-green",
  },
  {
    slug: "color-contrast-checker",
    title: "Contrast Checker",
    description: "An accessibility-first color contrast tool that suggests WCAG-compliant alternatives when your palette falls short.",
    category: "Tool",
    tools: ["React", "TypeScript", "Radix UI"],
    color: "bg-brand-blue",
  },
  {
    slug: "portfolio-cms",
    title: "Portfolio CMS",
    description: "A headless CMS-powered portfolio system with live preview, SEO optimization, and one-click deployment.",
    category: "Web App",
    tools: ["Next.js", "Sanity", "Vercel", "Framer Motion"],
    color: "bg-brand-yellow",
  },
  {
    slug: "invoice-generator",
    title: "Invoice Generator",
    description: "Generate professional invoices in seconds. Supports multiple currencies, tax calculations, and PDF export.",
    category: "SaaS",
    tools: ["Next.js", "Puppeteer", "Tailwind", "Zustand"],
    color: "bg-brand-orange",
  },
];

export default function BuildsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? builds : builds.filter((b) => b.category === active);

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
            Things I have designed, built, and shipped. From weekend
            experiments to full-blown products.
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
                    : "text-text-secondary hover:text-text-primary bg-surface-light"
                }`}
              >
                {active === type && (
                  <motion.div
                    layoutId="build-pill"
                    className="absolute inset-0 bg-brand-orange rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{type}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Build Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((build, i) => (
              <ScrollReveal key={build.slug} delay={i * 0.06}>
                <Link href={`/builds/${build.slug}`} className="group block">
                  <div className="glassmorphism rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Thumbnail Placeholder */}
                    <div className={`${build.color}/10 h-44 flex items-center justify-center`}>
                      <div className={`w-16 h-16 ${build.color}/20 rounded-2xl flex items-center justify-center`}>
                        <div className={`w-8 h-8 ${build.color} rounded-lg opacity-60`} />
                      </div>
                    </div>

                    <div className="p-5">
                      {/* Category */}
                      <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-text-tertiary">
                        {build.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-serif text-lg font-normal text-text-primary mt-2 mb-2 group-hover:text-brand-orange transition-colors duration-300 flex items-center gap-2">
                        {build.title}
                        <ArrowUpRight
                          size={16}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                        {build.description}
                      </p>

                      {/* Tool Pills */}
                      <div className="flex flex-wrap gap-2">
                        {build.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[11px] font-sans text-text-tertiary bg-surface-light rounded-full px-3 py-1"
                          >
                            {tool}
                          </span>
                        ))}
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
