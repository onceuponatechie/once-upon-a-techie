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
  screenshots: [
    { id: 1, label: "Dashboard Overview" },
    { id: 2, label: "Project Detail View" },
    { id: 3, label: "Team Analytics" },
    { id: 4, label: "Mobile Responsive" },
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
        {/* Back link */}
        <ScrollReveal>
          <Link
            href="/builds"
            className="inline-flex items-center gap-2 text-sm font-sans text-text-tertiary hover:text-text-primary transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to Ship Log
          </Link>
        </ScrollReveal>

        {/* Hero Section */}
        <ScrollReveal>
          <div className="glassmorphism rounded-3xl overflow-hidden mb-16">
            {/* Screenshot Placeholder */}
            <div className="bg-gradient-to-br from-brand-orange/10 via-brand-lavender/5 to-brand-blue/10 h-64 md:h-96 flex items-center justify-center">
              <div className="w-24 h-24 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/30" />
              </div>
            </div>

            <div className="p-8 md:p-12">
              <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-brand-orange">
                {buildData.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl font-normal text-text-primary mt-3 mb-4">
                {buildData.title}
              </h1>
              <p className="font-sans text-text-secondary text-base leading-relaxed max-w-2xl mb-6">
                {buildData.description}
              </p>
              <a
                href={buildData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange text-white px-6 py-3 text-sm font-sans font-medium hover:bg-brand-orange/90 transition-colors"
              >
                Live Demo
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Tools */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <h2 className="font-serif text-xl font-normal text-text-primary mb-5">
              Tools & <span className="font-serif italic">Stack</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {buildData.tools.map((tool) => (
                <span
                  key={tool}
                  className="glassmorphism rounded-full px-5 py-2.5 text-sm font-sans text-text-secondary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Body Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-serif text-lg font-normal text-text-primary mb-3">
                The <span className="font-serif italic">Challenge</span>
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {buildData.challenge}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="font-serif text-lg font-normal text-text-primary mb-3">
                The <span className="font-serif italic">Approach</span>
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {buildData.approach}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div>
              <h3 className="font-serif text-lg font-normal text-text-primary mb-3">
                The <span className="font-serif italic">Outcome</span>
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {buildData.outcome}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Screenshot Gallery */}
        <ScrollReveal>
          <h2 className="font-serif text-xl font-normal text-text-primary mb-6">
            Screenshot <span className="font-serif italic">Gallery</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
          {buildData.screenshots.map((shot, i) => (
            <ScrollReveal key={shot.id} delay={i * 0.08}>
              <div className="glassmorphism rounded-2xl overflow-hidden group">
                <div className="bg-gradient-to-br from-surface-light to-surface-muted h-48 flex items-center justify-center">
                  <p className="font-sans text-sm text-text-tertiary">
                    {shot.label}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Next / Prev Navigation */}
        <ScrollReveal>
          <div className="border-t border-surface-muted pt-10 flex items-center justify-between">
            <Link
              href={`/builds/${buildData.prevBuild.slug}`}
              className="group flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform duration-300"
              />
              <div>
                <p className="text-[11px] font-sans uppercase tracking-wider text-text-tertiary mb-1">
                  Previous
                </p>
                <p className="font-serif text-base font-normal">
                  {buildData.prevBuild.title}
                </p>
              </div>
            </Link>

            <Link
              href={`/builds/${buildData.nextBuild.slug}`}
              className="group flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors text-right"
            >
              <div>
                <p className="text-[11px] font-sans uppercase tracking-wider text-text-tertiary mb-1">
                  Next
                </p>
                <p className="font-serif text-base font-normal">
                  {buildData.nextBuild.title}
                </p>
              </div>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </motion.article>
  );
}
