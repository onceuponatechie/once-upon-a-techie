"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

const projects = [
  {
    slug: "cohort",
    title: "Cohort",
    description:
      "A collaborative education platform designed to bring learners and mentors together through cohort-based courses and real-time engagement tools.",
    tools: ["Next.js", "Supabase", "Tailwind"],
    bg: "#1a1a4e",
    gradient: "from-[#1a1a4e] to-[#2d2d7a]",
  },
  {
    slug: "nithub-hackathon",
    title: "Nithub Hackathon Build",
    description:
      "A rapid-fire hackathon project built in 48 hours that won the UI/UX award — a smart task delegation tool for distributed teams.",
    tools: ["Bolt", "React", "OpenAI"],
    bg: "#2D6A4F",
    gradient: "from-[#2D6A4F] to-[#3d8a6f]",
  },
  {
    slug: "ai-prompt-generator",
    title: "AI Prompt Generator",
    description:
      "An intelligent prompt engineering tool that helps creators and developers craft highly effective prompts for AI models.",
    tools: ["Python", "GPT-4", "Streamlit"],
    bg: "#7a6520",
    gradient: "from-[#7a6520] to-[#a08830]",
  },
];

export default function ProjectsCarousel() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % projects.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const project = projects[active];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-text-primary">
            The <span className="italic">Builds</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-gray-900 group">
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

            {/* Content overlay */}
            <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-between">
              {/* Tool pills */}
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

              {/* Bottom content */}
              <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    className="flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
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

                {/* Thumbnail cards */}
                <div className="flex gap-4">
                  {projects.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`w-48 h-32 rounded-xl overflow-hidden border p-3 transition-all duration-300 flex flex-col items-center justify-center text-center backdrop-blur-md ${
                        i === active
                          ? "border-white bg-white/20 shadow-xl scale-105"
                          : "border-white/20 bg-white/10 opacity-60 hover:opacity-80"
                      }`}
                    >
                      <span className="text-white text-xs font-sans font-medium leading-tight">
                        {p.slug
                          .split("-")
                          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                          .join(" ")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
