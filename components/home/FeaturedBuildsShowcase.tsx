"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

const projects = [
  {
    slug: "cohort",
    category: "EdTech Platform",
    title: "Cohort",
    subtitle: "Collaborative EdTe...",
    description:
      "A collaborative education platform designed to bring learners and mentors together through cohort-based courses and real-time engagement tools.",
    tools: ["Next.js", "Supabase", "Tailwind"],
    bg: "#1a1a4e",
    gradient: "from-[#1a1a4e] to-[#2d2d7a]",
  },
  {
    slug: "nithub-hackathon",
    category: "Hackathon Project",
    title: "Nithub\nHackathon\nBuild",
    subtitle: "48-Hour Award Winner",
    description:
      "A rapid-fire hackathon project built in 48 hours that won the UI/UX award at the Nithub Innovation Summit — a smart task delegation tool for distributed teams.",
    tools: ["Bolt", "React", "OpenAI"],
    bg: "#2D6A4F",
    gradient: "from-[#2D6A4F] to-[#3d8a6f]",
  },
  {
    slug: "ai-prompt-generator",
    category: "AI Tool",
    title: "AI Prompt\nGenerator",
    subtitle: "Prompt Engineerin...",
    description:
      "An intelligent prompt engineering tool that helps creators and developers craft highly effective prompts for AI models.",
    tools: ["Python", "GPT-4", "Streamlit"],
    bg: "#7a6520",
    gradient: "from-[#7a6520] to-[#a08830]",
  },
];

export default function FeaturedBuildsShowcase() {
  const [active, setActive] = useState(1);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % projects.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const project = projects[active];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="text-center mb-4">
          <p className="font-serif italic text-text-tertiary text-base">
            The Builds
          </p>
        </ScrollReveal>
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary">
            What Are We <span className="italic">Building?</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden border-[3px] border-white shadow-2xl">
            <div className="rounded-3xl overflow-hidden relative">
              {/* Background with crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-10 min-h-[420px] md:min-h-[500px] flex flex-col justify-between">
                {/* Top - tool pills */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-sans border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Bottom section */}
                <div className="flex flex-row items-end justify-between gap-6">
                  {/* Left info */}
                  <div className="flex-1">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4 whitespace-pre-line leading-[1.05]">
                          {project.title}
                        </h3>
                        <p className="font-sans text-white/70 text-sm max-w-md mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <Link
                          href={`/builds/${project.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-white text-text-primary px-6 py-3 font-sans text-sm font-medium hover:bg-white/90 transition-colors"
                        >
                          View Case Study
                          <span className="text-xs">↗</span>
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right thumbnails - 4:3 ratio (half height) */}
                  <div className="flex gap-2">
                    {projects.map((p, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`w-[90px] h-[68px] md:w-[110px] md:h-[82px] rounded-lg overflow-hidden border-2 transition-all duration-300 flex flex-col items-center justify-center px-2 text-center ${
                          i === active
                            ? "border-white shadow-xl scale-105"
                            : "border-white/20 opacity-60 hover:opacity-80"
                        }`}
                        style={{
                          background: `linear-gradient(135deg, ${p.bg}, ${p.bg}cc)`,
                        }}
                      >
                        <span className="text-white text-[10px] md:text-xs font-sans font-medium leading-tight">
                          {p.slug
                            .split("-")
                            .map(
                              (w) => w.charAt(0).toUpperCase() + w.slice(1)
                            )
                            .join(" ")}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={18} />
              </button>

              {/* Counter dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "bg-white w-6"
                        : "bg-white/40 w-2"
                    }`}
                  />
                ))}
              </div>

              {/* Expand icon */}
              <div className="absolute top-6 right-6 z-20">
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
