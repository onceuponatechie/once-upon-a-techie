"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FileText, Bookmark, Camera } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const tabs = [
  { id: "reading", label: "Currently Reading", icon: BookOpen },
  { id: "notes", label: "Book Notes", icon: FileText },
  { id: "articles", label: "Saved Articles", icon: Bookmark },
  { id: "stories", label: "Visual Stories", icon: Camera },
];

type CardItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  tall?: boolean;
};

const data: Record<string, CardItem[]> = {
  reading: [
    {
      id: 1,
      title: "The Design of Everyday Things",
      subtitle: "Don Norman",
      description: "Exploring how good design is actually about good communication between object and user.",
      accent: "bg-brand-orange",
      tall: true,
    },
    {
      id: 2,
      title: "Show Your Work!",
      subtitle: "Austin Kleon",
      description: "A manifesto for sharing your creative process with the world.",
      accent: "bg-brand-lavender",
    },
    {
      id: 3,
      title: "Atomic Habits",
      subtitle: "James Clear",
      description: "Small changes, remarkable results. Currently on chapter 12.",
      accent: "bg-brand-green",
    },
    {
      id: 4,
      title: "Refactoring UI",
      subtitle: "Adam Wathan & Steve Schoger",
      description: "Design tips for developers who want to make things look polished.",
      accent: "bg-brand-blue",
      tall: true,
    },
  ],
  notes: [
    {
      id: 5,
      title: "Steal Like an Artist",
      subtitle: "Austin Kleon",
      description: "Nothing is original. Everything is a remix. The key is to curate what inspires you.",
      accent: "bg-brand-yellow",
      tall: true,
    },
    {
      id: 6,
      title: "Don't Make Me Think",
      subtitle: "Steve Krug",
      description: "Usability is about people and how they understand things, not about technology.",
      accent: "bg-brand-orange",
    },
    {
      id: 7,
      title: "Deep Work",
      subtitle: "Cal Newport",
      description: "Professional activities performed in a state of distraction-free concentration.",
      accent: "bg-brand-lavender",
    },
    {
      id: 8,
      title: "Zero to One",
      subtitle: "Peter Thiel",
      description: "Every moment in business happens only once. The next Bill Gates will not build an OS.",
      accent: "bg-brand-green",
      tall: true,
    },
  ],
  articles: [
    {
      id: 9,
      title: "Why Design Systems Fail",
      subtitle: "Smashing Magazine",
      description: "An in-depth look at what makes design systems succeed or crumble in large organizations.",
      accent: "bg-brand-blue",
    },
    {
      id: 10,
      title: "The Future of AI in Design",
      subtitle: "UX Collective",
      description: "How artificial intelligence is reshaping the way we approach design problems.",
      accent: "bg-brand-orange",
      tall: true,
    },
    {
      id: 11,
      title: "Building in Public: A Guide",
      subtitle: "IndieHackers",
      description: "The benefits and strategies for sharing your journey while building products.",
      accent: "bg-brand-yellow",
    },
    {
      id: 12,
      title: "CSS Container Queries Changed Everything",
      subtitle: "CSS Tricks",
      description: "Container queries are the most significant CSS feature in a decade.",
      accent: "bg-brand-lavender",
      tall: true,
    },
  ],
  stories: [
    {
      id: 13,
      title: "Tokyo Design Week",
      subtitle: "Photo Essay",
      description: "A visual journey through Tokyo's most inspiring design spaces and exhibitions.",
      accent: "bg-brand-green",
      tall: true,
    },
    {
      id: 14,
      title: "My Workspace Evolution",
      subtitle: "Setup Tour",
      description: "How my workspace changed over the past two years of remote work.",
      accent: "bg-brand-blue",
    },
    {
      id: 15,
      title: "Sketchbook Pages",
      subtitle: "Illustration",
      description: "Raw pages from my daily sketching practice. Imperfect and proud of it.",
      accent: "bg-brand-orange",
    },
    {
      id: 16,
      title: "Conference Moments",
      subtitle: "Event Recap",
      description: "Best moments from design and tech conferences this year, captured on film.",
      accent: "bg-brand-yellow",
      tall: true,
    },
  ],
};

export default function ReadersCornerPage() {
  const [activeTab, setActiveTab] = useState("reading");

  const items = data[activeTab] || [];

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <p className="font-serif italic text-brand-lavender text-sm mb-3">
            reader&apos;s corner
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-text-primary mb-4">
            What I&apos;m <span className="font-serif italic">Reading</span>
          </h1>
          <p className="font-sans text-text-secondary text-base max-w-xl mb-12">
            Books, articles, and visual stories that shape how I think, build,
            and create.
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-14">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-sans transition-colors duration-300 ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-text-secondary hover:text-text-primary bg-surface-light"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="reader-tab"
                      className="absolute inset-0 bg-text-primary rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon size={15} className="relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Pinterest-style Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {items.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.06}>
                <div
                  className={`break-inside-avoid rounded-2xl overflow-hidden group transition-shadow duration-300 hover:shadow-xl ${
                    item.tall ? "min-h-[320px]" : "min-h-[220px]"
                  }`}
                >
                  {/* Colored top bar */}
                  <div className={`${item.accent} h-2 w-full`} />

                  <div className="glassmorphism border-t-0 rounded-t-none rounded-b-2xl p-6 h-full">
                    {/* Subtitle / Source */}
                    <p className="text-[11px] font-sans font-medium uppercase tracking-wider text-text-tertiary mb-3">
                      {item.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-normal text-text-primary mb-3 group-hover:text-brand-orange transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative element */}
                    <div className="mt-5 flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <div
                          key={j}
                          className={`h-1 rounded-full ${
                            j < 3 ? item.accent : "bg-surface-muted"
                          }`}
                          style={{ width: j === 0 ? 24 : j === 1 ? 16 : j === 2 ? 8 : 8 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
