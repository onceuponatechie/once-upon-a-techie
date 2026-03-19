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

type BookItem = {
  id: number;
  title: string;
  author: string;
  excerpt: string;
  color: string;
  imageUrl: string;
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
};

const readingData: BookItem[] = [
  {
    id: 1,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    excerpt: "Exploring how good design is actually about good communication between object and user.",
    color: "#E8703A",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&q=80",
  },
  {
    id: 2,
    title: "Show Your Work!",
    author: "Austin Kleon",
    excerpt: "A manifesto for sharing your creative process with the world.",
    color: "#B4A7D6",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80",
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    excerpt: "Small changes, remarkable results. Currently on chapter 12.",
    color: "#2D6A4F",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&q=80",
  },
  {
    id: 4,
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    excerpt: "Design tips for developers who want to make things look polished.",
    color: "#4A90D9",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=80",
  },
];

const notesData: BookItem[] = [
  {
    id: 5,
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    excerpt: "Nothing is original. Everything is a remix. The key is to curate what inspires you.",
    color: "#F5D060",
    imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&q=80",
  },
  {
    id: 6,
    title: "Don't Make Me Think",
    author: "Steve Krug",
    excerpt: "Usability is about people and how they understand things, not about technology.",
    color: "#E8703A",
    imageUrl: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=300&q=80",
  },
  {
    id: 7,
    title: "Deep Work",
    author: "Cal Newport",
    excerpt: "Professional activities performed in a state of distraction-free concentration.",
    color: "#B4A7D6",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&q=80",
  },
  {
    id: 8,
    title: "Zero to One",
    author: "Peter Thiel",
    excerpt: "Every moment in business happens only once. The next Bill Gates will not build an OS.",
    color: "#2D6A4F",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&q=80",
  },
];

const articlesData: ArticleItem[] = [
  {
    id: 9,
    title: "Why Design Systems Fail",
    source: "Smashing Magazine",
    excerpt: "An in-depth look at what makes design systems succeed or crumble in large organizations.",
    color: "#4A90D9",
  },
  {
    id: 10,
    title: "The Future of AI in Design",
    source: "UX Collective",
    excerpt: "How artificial intelligence is reshaping the way we approach design problems.",
    color: "#E8703A",
  },
  {
    id: 11,
    title: "Building in Public: A Guide",
    source: "IndieHackers",
    excerpt: "The benefits and strategies for sharing your journey while building products.",
    color: "#F5D060",
  },
  {
    id: 12,
    title: "CSS Container Queries Changed Everything",
    source: "CSS Tricks",
    excerpt: "Container queries are the most significant CSS feature in a decade.",
    color: "#B4A7D6",
  },
];

const storiesData: StoryItem[] = [
  {
    id: 13,
    title: "Tokyo Design Week",
    subtitle: "A visual journey through Tokyo's most inspiring design spaces and exhibitions.",
    color: "#2D6A4F",
  },
  {
    id: 14,
    title: "My Workspace Evolution",
    subtitle: "How my workspace changed over the past two years of remote work.",
    color: "#4A90D9",
  },
  {
    id: 15,
    title: "Sketchbook Pages",
    subtitle: "Raw pages from my daily sketching practice. Imperfect and proud of it.",
    color: "#E8703A",
  },
  {
    id: 16,
    title: "Conference Moments",
    subtitle: "Best moments from design and tech conferences this year, captured on film.",
    color: "#F5D060",
  },
];

/* Book card with image */
function BookCard({ item }: { item: BookItem }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-surface-muted/40 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
      </div>
    </div>
  );
}

/* Article row - no card, just clean list item */
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

/* Visual story card - image-style with text overlay */
function StoryCard({ item }: { item: StoryItem }) {
  return (
    <div
      className="rounded-2xl overflow-hidden relative min-h-[280px] group cursor-pointer"
      style={{ backgroundColor: item.color }}
    >
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
  const [activeTab, setActiveTab] = useState("reading");

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
            {/* Reading & Notes: cards with images */}
            {(activeTab === "reading" || activeTab === "notes") && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {(activeTab === "reading" ? readingData : notesData).map((item, i) => (
                  <ScrollReveal key={item.id} delay={i * 0.06}>
                    <BookCard item={item} />
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

            {/* Visual Stories: visual cards with text overlay */}
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
