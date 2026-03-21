"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Bookmark, Camera } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const tabs = [
  { id: "notes", label: "Book Notes", icon: FileText },
  { id: "articles", label: "Saved Articles", icon: Bookmark },
  { id: "stories", label: "Visual Stories", icon: Camera },
];

const notesData = [
  {
    id: 1,
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=500&fit=crop&q=80",
    tall: true,
  },
  {
    id: 2,
    title: "Don't Make Me Think",
    author: "Steve Krug",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=300&fit=crop&q=80",
    tall: false,
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=450&fit=crop&q=80",
    tall: true,
  },
  {
    id: 4,
    title: "Zero to One",
    author: "Peter Thiel",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=320&fit=crop&q=80",
    tall: false,
  },
  {
    id: 5,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&q=80",
    tall: false,
  },
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop&q=80",
    tall: true,
  },
  {
    id: 7,
    title: "Show Your Work",
    author: "Austin Kleon",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=350&fit=crop&q=80",
    tall: false,
  },
  {
    id: 8,
    title: "Hooked",
    author: "Nir Eyal",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=450&fit=crop&q=80",
    tall: true,
  },
];

const articlesData = [
  {
    id: 9,
    title: "Why Design Systems Fail",
    source: "Smashing Magazine",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=320&fit=crop&q=80",
    tall: false,
  },
  {
    id: 10,
    title: "The Future of AI in Design",
    source: "UX Collective",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=500&fit=crop&q=80",
    tall: true,
  },
  {
    id: 11,
    title: "Building in Public: A Guide",
    source: "IndieHackers",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=350&fit=crop&q=80",
    tall: false,
  },
  {
    id: 12,
    title: "CSS Container Queries Changed Everything",
    source: "CSS Tricks",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&q=80",
    tall: false,
  },
  {
    id: 13,
    title: "The Psychology of Color in UX",
    source: "Nielsen Norman",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=480&fit=crop&q=80",
    tall: true,
  },
  {
    id: 14,
    title: "How to Write Better Copy",
    source: "Copyhackers",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop&q=80",
    tall: false,
  },
];

const storiesData = [
  {
    id: 15,
    title: "Tokyo Design Week",
    subtitle: "Visual journey through Tokyo",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=500&fit=crop&q=80",
    tall: true,
  },
  {
    id: 16,
    title: "My Workspace Evolution",
    subtitle: "Remote work setup journey",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=320&fit=crop&q=80",
    tall: false,
  },
  {
    id: 17,
    title: "Sketchbook Pages",
    subtitle: "Daily sketching practice",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop&q=80",
    tall: false,
  },
  {
    id: 18,
    title: "Conference Moments",
    subtitle: "Design & tech conferences",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=480&fit=crop&q=80",
    tall: true,
  },
  {
    id: 19,
    title: "Coffee & Code",
    subtitle: "Favorite cafes to work from",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=350&fit=crop&q=80",
    tall: false,
  },
  {
    id: 20,
    title: "Lagos Creative Scene",
    subtitle: "Art and tech in Lagos",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=500&fit=crop&q=80",
    tall: true,
  },
];

type PinItem = {
  id: number;
  title: string;
  image: string;
  tall: boolean;
  author?: string;
  source?: string;
  subtitle?: string;
};

function PinCard({ item, type }: { item: PinItem; type: string }) {
  return (
    <div className="break-inside-avoid mb-4 group">
      <div className="rounded-2xl overflow-hidden relative cursor-pointer">
        {/* Image */}
        <div
          className={`w-full bg-cover bg-center ${item.tall ? "h-[300px] md:h-[380px]" : "h-[200px] md:h-[240px]"}`}
          style={{ backgroundImage: `url('${item.image}')` }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div
            className="rounded-xl px-3 py-2"
            style={{
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(8px)",
            }}
          >
            <h3 className="font-serif text-sm text-white leading-snug">
              {item.title}
            </h3>
            {type === "notes" && item.author && (
              <p className="text-[11px] font-sans text-white/60 mt-0.5">
                {item.author}
              </p>
            )}
            {type === "articles" && item.source && (
              <p className="text-[11px] font-sans text-white/60 mt-0.5">
                {item.source}
              </p>
            )}
            {type === "stories" && item.subtitle && (
              <p className="text-[11px] font-sans text-white/60 mt-0.5">
                {item.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReadersCornerPage() {
  const [activeTab, setActiveTab] = useState("notes");

  const getData = (): PinItem[] => {
    if (activeTab === "notes") return notesData;
    if (activeTab === "articles") return articlesData;
    return storiesData;
  };

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <p className="font-serif italic text-text-tertiary text-sm mb-3">
            Reader&apos;s Corner
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
                      : "text-text-secondary hover:text-text-primary bg-white/50 border border-white/40"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="reader-tab"
                      className="absolute inset-0 bg-text-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <Icon size={15} className="relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Pinterest Masonry Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-4"
          >
            {getData().map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.04}>
                <PinCard item={item} type={activeTab} />
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
