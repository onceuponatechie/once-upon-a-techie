"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const buildData = {
  title: "Creative Suite Dashboard",
  category: "Web App",
  description:
    "A real-time analytics dashboard designed for creative teams. Track project progress, asset usage, and team collaboration metrics all in one place.",
  liveUrl: "#",
  tools: ["Next.js", "Tailwind CSS", "Supabase", "Chart.js", "Framer Motion", "Vercel"],
  challenge:
    "Creative teams lacked a unified view of their project health. Existing tools were either too technical or too simplistic, leaving a gap for something that is both beautiful and functional.",
  approach:
    "I started with user interviews to understand what metrics matter most. The UI was designed mobile-first with a focus on glanceable data cards. Real-time updates are powered by Supabase subscriptions, and every interaction has a thoughtful animation layer.",
  outcome:
    "The dashboard reduced the time teams spent in status meetings by 40%. It is currently used by 3 creative agencies and has processed over 10,000 project updates since launch.",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80",
  screenshots: [
    { id: 1, label: "Dashboard Overview", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80" },
    { id: 2, label: "Project Detail View", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80" },
    { id: 3, label: "Team Analytics", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop&q=80" },
    { id: 4, label: "Mobile Responsive", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=80" },
  ],
  prevBuild: { slug: "invoice-generator", title: "Invoice Generator" },
  nextBuild: { slug: "habit-tracker-mobile", title: "Habit Tracker" },
};

export default function BuildCaseStudyPage() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-28 pb-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <Link
            href="/builds"
            className="inline-flex items-center gap-2 text-sm font-sans text-text-tertiary hover:text-text-primary transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to Ship Log
          </Link>
        </ScrollReveal>

        {/* Hero — image with overlay content, matching builds listing card style */}
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden relative min-h-[360px] md:min-h-[480px] mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${buildData.heroImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
              <div>
                <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-white/70">
                  {buildData.category}
                </span>
              </div>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {buildData.title}
                </h1>
                <p className="font-sans text-base text-white/70 leading-relaxed max-w-2xl mb-6">
                  {buildData.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <a
                    href={buildData.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-sans font-medium text-text-primary transition-colors hover:brightness-95"
                    style={{ backgroundColor: "#c8e636" }}
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>
                </div>
                {/* Tech pills — glassmorphism matching builds listing */}
                <div className="flex flex-wrap gap-2">
                  {buildData.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-sans text-white/80 rounded-full px-3 py-1 border border-white/20"
                      style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Body — warm card backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <ScrollReveal delay={0.1} direction="left">
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#fafaf7" }}>
              <h3 className="font-serif text-lg font-bold text-text-primary mb-3">
                The Challenge
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {buildData.challenge}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#fafaf7" }}>
              <h3 className="font-serif text-lg font-bold text-text-primary mb-3">
                The Approach
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {buildData.approach}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="right">
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#fafaf7" }}>
              <h3 className="font-serif text-lg font-bold text-text-primary mb-3">
                The Outcome
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {buildData.outcome}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Screenshot Gallery */}
        <ScrollReveal>
          <h2 className="font-serif text-xl font-bold text-text-primary mb-6">
            Screenshot Gallery
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
          {buildData.screenshots.map((shot, i) => (
            <ScrollReveal key={shot.id} delay={i * 0.08}>
              <div className="rounded-2xl overflow-hidden relative min-h-[200px] group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${shot.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <span className="font-sans text-sm text-white">{shot.label}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Next / Prev */}
        <ScrollReveal>
          <div className="border-t border-surface-muted pt-10 flex items-center justify-between">
            <Link
              href={`/builds/${buildData.prevBuild.slug}`}
              className="group flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <div>
                <p className="text-[11px] font-sans uppercase tracking-wider text-text-tertiary mb-1">Previous</p>
                <p className="font-serif text-base font-bold">{buildData.prevBuild.title}</p>
              </div>
            </Link>
            <Link
              href={`/builds/${buildData.nextBuild.slug}`}
              className="group flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors text-right"
            >
              <div>
                <p className="text-[11px] font-sans uppercase tracking-wider text-text-tertiary mb-1">Next</p>
                <p className="font-serif text-base font-bold">{buildData.nextBuild.title}</p>
              </div>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </motion.article>
  );
}
