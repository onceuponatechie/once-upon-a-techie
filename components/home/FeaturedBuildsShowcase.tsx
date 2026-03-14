"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

const projects = [
  {
    category: "Web App",
    title: "My Piggy Bank",
    description:
      "A personal finance dashboard that helps track portfolio strength, stock history, and investment controls.",
    tools: ["React", "Node.js", "Chart.js"],
    bg: "#2D6A4F",
  },
  {
    category: "Mobile App",
    title: "Hobby Point",
    description:
      "A community platform for hobby enthusiasts to discover, share, and learn new activities.",
    tools: ["React Native", "Firebase", "Figma"],
    bg: "#4A90D9",
  },
  {
    category: "SaaS Platform",
    title: "Journey Builder",
    description:
      "An onboarding and certification platform to help teams level up and track skill progress.",
    tools: ["Next.js", "Supabase", "Tailwind"],
    bg: "#B4A7D6",
  },
];

export default function FeaturedBuildsShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const project = projects[active];

  return (
    <section className="bg-surface-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden gradient-border">
            <div className="absolute inset-[1.5px] rounded-3xl overflow-hidden">
              {/* Background */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  style={{ backgroundColor: project.bg }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row items-end justify-between">
                {/* Left info */}
                <div className="flex-1 mb-8 md:mb-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-white/60 text-sm font-sans uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
                        {project.title}
                      </h3>
                      <p className="font-sans text-white/70 text-sm max-w-md mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-sans border border-white/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right thumbnails */}
                <div className="flex gap-3">
                  {projects.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`w-[90px] h-[130px] md:w-[120px] md:h-[170px] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        i === active
                          ? "border-white shadow-xl scale-105"
                          : "border-white/20 opacity-60 hover:opacity-80"
                      }`}
                      style={{ backgroundColor: p.bg }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white/80 text-xs font-sans text-center px-2">
                          {p.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Counter + Expand */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
                <span className="text-white/50 text-sm font-sans">
                  {String(active + 1).padStart(2, "0")}/
                  {String(projects.length).padStart(2, "0")}
                </span>
                <Link
                  href="/builds"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors"
                >
                  <Expand size={16} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
