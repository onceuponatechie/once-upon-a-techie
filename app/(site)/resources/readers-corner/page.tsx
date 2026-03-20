"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Bookmark, Camera, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const tabs = [
  { id: "notes", label: "Book Notes", icon: FileText },
  { id: "articles", label: "Saved Articles", icon: Bookmark },
  { id: "stories", label: "Visual Stories", icon: Camera },
];

type NoteItem = {
  id: number;
  title: string;
  author: string;
  excerpt: string;
  color: string;
  imageUrl: string;
  notes: string[];
};

type ArticleItem = {
  id: number;
  title: string;
  source: string;
  excerpt: string;
  color: string;
};

type StoryItem = {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  imageUrl: string;
};

const notesData: NoteItem[] = [
  {
    id: 1,
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    excerpt: "Nothing is original. Everything is a remix. The key is to curate what inspires you.",
    color: "#F5D060",
    imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&q=80",
    notes: [
      "Don't wait until you know who you are to get started.",
      "Write the book you want to read.",
      "Creativity is subtraction — choose what to leave out.",
      "The best way to find your voice is to use it.",
    ],
  },
  {
    id: 2,
    title: "Don't Make Me Think",
    author: "Steve Krug",
    excerpt: "Usability is about people and how they understand things, not about technology.",
    color: "#E8703A",
    imageUrl: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=300&q=80",
    notes: [
      "If something requires a large investment of time or effort, it's less likely to be used.",
      "Get rid of half the words on each page, then get rid of half of what's left.",
      "The most important thing you can do is test — one user early is better than fifty near the end.",
    ],
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    excerpt: "Professional activities performed in a state of distraction-free concentration.",
    color: "#B4A7D6",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&q=80",
    notes: [
      "Clarity about what matters provides clarity about what does not.",
      "The ability to perform deep work is becoming increasingly rare and increasingly valuable.",
      "If you don't produce, you won't thrive — no matter how skilled or talented you are.",
    ],
  },
  {
    id: 4,
    title: "Zero to One",
    author: "Peter Thiel",
    excerpt: "Every moment in business happens only once. The next Bill Gates will not build an OS.",
    color: "#2D6A4F",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&q=80",
    notes: [
      "The most contrarian thing of all is not to oppose the crowd but to think for yourself.",
      "Brilliant thinking is rare, but courage is in even shorter supply than genius.",
      "A startup messed up at its foundation cannot be fixed.",
    ],
  },
  {
    id: 5,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    excerpt: "Exploring how good design is actually about good communication between object and user.",
    color: "#4A90D9",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&q=80",
    notes: [
      "Design is really an act of communication.",
      "When things go wrong, people tend to blame themselves — good design prevents that.",
      "Two of the most important characteristics of good design are discoverability and understanding.",
    ],
  },
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    excerpt: "Small changes, remarkable results. The compound effect of tiny improvements.",
    color: "#E8703A",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&q=80",
    notes: [
      "You do not rise to the level of your goals. You fall to the level of your systems.",
      "Every action you take is a vote for the type of person you wish to become.",
      "Habits are the compound interest of self-improvement.",
    ],
  },
];

const articlesData: ArticleItem[] = [
  {
    id: 7,
    title: "Why Design Systems Fail",
    source: "Smashing Magazine",
    excerpt: "An in-depth look at what makes design systems succeed or crumble in large organizations.",
    color: "#4A90D9",
  },
  {
    id: 8,
    title: "The Future of AI in Design",
    source: "UX Collective",
    excerpt: "How artificial intelligence is reshaping the way we approach design problems.",
    color: "#E8703A",
  },
  {
    id: 9,
    title: "Building in Public: A Guide",
    source: "IndieHackers",
    excerpt: "The benefits and strategies for sharing your journey while building products.",
    color: "#F5D060",
  },
  {
    id: 10,
    title: "CSS Container Queries Changed Everything",
    source: "CSS Tricks",
    excerpt: "Container queries are the most significant CSS feature in a decade.",
    color: "#B4A7D6",
  },
];

const storiesData: StoryItem[] = [
  {
    id: 11,
    title: "Tokyo Design Week",
    subtitle: "A visual journey through Tokyo's most inspiring design spaces and exhibitions.",
    color: "#2D6A4F",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
  },
  {
    id: 12,
    title: "My Workspace Evolution",
    subtitle: "How my workspace changed over the past two years of remote work.",
    color: "#4A90D9",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    id: 13,
    title: "Sketchbook Pages",
    subtitle: "Raw pages from my daily sketching practice. Imperfect and proud of it.",
    color: "#E8703A",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
  },
  {
    id: 14,
    title: "Conference Moments",
    subtitle: "Best moments from design and tech conferences this year, captured on film.",
    color: "#F5D060",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
];

/* Book note card with click-to-reveal notes */
function BookNoteCard({ item }: { item: NoteItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-surface-muted/40 group hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: `url('${item.imageUrl}')` }}
      >
        <div className="w-full h-full" style={{ background: `linear-gradient(180deg, transparent 40%, ${item.color}30 100%)` }} />
      </div>
      <div className="p-5">
        <p className="text-[11px] font-sans font-medium uppercase tracking-wider text-text-tertiary mb-2">
          {item.author}
        </p>
        <h3 className="font-serif text-lg text-text-primary mb-2 group-hover:text-brand-orange transition-colors">
          {item.title}
        </h3>
        <p className="font-sans text-sm text-text-secondary leading-relaxed">
          {item.excerpt}
        </p>
        <button className="mt-3 flex items-center gap-1 text-xs font-sans font-medium text-brand-orange">
          {expanded ? "Hide notes" : "View my notes"}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} />
          </motion.span>
        </button>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-surface-muted/40 pt-4">
              <ul className="space-y-2">
                {item.notes.map((note, i) => (
                  <li key={i} className="flex gap-2 text-sm font-sans text-text-secondary leading-relaxed">
                    <span className="text-brand-orange mt-0.5 flex-shrink-0">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Article row - clean list item, no card */
function ArticleRow({ item }: { item: ArticleItem }) {
  return (
    <div className="group py-5 border-b border-surface-muted/40 last:border-0 flex items-start gap-4">
      <div
        className="w-1 h-12 rounded-full flex-shrink-0 mt-1"
        style={{ backgroundColor: item.color }}
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-text-tertiary">
            {item.source}
          </span>
        </div>
        <h3 className="font-serif text-base text-text-primary mb-1 group-hover:text-brand-orange transition-colors">
          {item.title}
        </h3>
        <p className="font-sans text-sm text-text-secondary leading-relaxed">
          {item.excerpt}
        </p>
      </div>
    </div>
  );
}

/* Visual story card - image with text overlay */
function StoryCard({ item }: { item: StoryItem }) {
  return (
    <div className="rounded-2xl overflow-hidden relative min-h-[280px] group cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${item.imageUrl}')` }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: `${item.color}40` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-serif text-xl text-white mb-2">
          {item.title}
        </h3>
        <p className="font-sans text-sm text-white/70 leading-relaxed">
          {item.subtitle}
        </p>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default function ReadersCornerPage() {
  const [activeTab, setActiveTab] = useState("notes");

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
                      : "text-text-secondary hover:text-text-primary bg-white border border-surface-muted/40"
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

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {/* Book Notes: cards with click-to-reveal */}
            {activeTab === "notes" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {notesData.map((item, i) => (
                  <ScrollReveal key={item.id} delay={i * 0.06}>
                    <BookNoteCard item={item} />
                  </ScrollReveal>
                ))}
              </div>
            )}

            {/* Articles: clean list, no cards */}
            {activeTab === "articles" && (
              <div className="max-w-3xl">
                {articlesData.map((item, i) => (
                  <ScrollReveal key={item.id} delay={i * 0.06}>
                    <ArticleRow item={item} />
                  </ScrollReveal>
                ))}
              </div>
            )}

            {/* Visual Stories: visual cards with image and text overlay */}
            {activeTab === "stories" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {storiesData.map((item, i) => (
                  <ScrollReveal key={item.id} delay={i * 0.06}>
                    <StoryCard item={item} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
