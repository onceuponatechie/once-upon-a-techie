"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  BookOpen,
  Coffee,
  Headphones,
  Sparkles,
  Gamepad2,
  Camera,
} from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const interests = [
  { icon: Palette, label: "Design Systems", color: "text-brand-orange" },
  { icon: Code2, label: "Creative Coding", color: "text-brand-blue" },
  { icon: BookOpen, label: "Non-fiction Books", color: "text-brand-green" },
  { icon: Coffee, label: "Specialty Coffee", color: "text-brand-yellow" },
  { icon: Headphones, label: "Lo-fi & Jazz", color: "text-brand-lavender" },
  { icon: Sparkles, label: "AI Experiments", color: "text-brand-orange" },
  { icon: Gamepad2, label: "Indie Games", color: "text-brand-blue" },
  { icon: Camera, label: "Street Photography", color: "text-brand-green" },
];

const currentlyItems = [
  { label: "Building", value: "A creative toolkit for indie makers" },
  { label: "Reading", value: "The Design of Everyday Things" },
  { label: "Learning", value: "Rust and systems programming" },
  { label: "Listening to", value: "Khruangbin on repeat" },
  { label: "Excited about", value: "Local-first software" },
];

const storyParagraphs = [
  "I have always been the person who can not stop tinkering. As a kid, I would take apart gadgets just to see how they worked. That curiosity never went away — it just evolved. Today, instead of taking apart radios, I am building products, designing interfaces, and writing stories about the creative process.",
  "My path was never linear. I started in graphic design, fell into front-end development, dabbled in product management, and eventually realized that what I actually do is connect dots between disciplines. I am not the deepest specialist in any one field, but I speak fluent Design, passable Engineering, and conversational Business.",
  "I believe the best products are built at the intersection of craft and empathy. Technology is just the medium — the real work is understanding people, their frustrations, and their aspirations. Every project I take on starts with a simple question: how can this make someone's day a little better?",
  "When I am not building, you will find me in a coffee shop with a book, experimenting with new tools, or going down a rabbit hole about some obscure topic that will somehow become relevant three months later. I document everything because I believe sharing the messy middle is more valuable than only showing the polished end result.",
];

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-24">
          {/* Blob Mask Image Placeholder */}
          <ScrollReveal direction="left">
            <div className="flex-shrink-0">
              <div
                className="w-64 h-72 bg-gradient-to-br from-brand-orange/20 via-brand-lavender/10 to-brand-blue/20 flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              >
                <div className="w-20 h-20 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                  <span className="font-serif text-2xl text-text-tertiary">
                    ?
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Name & Bio */}
          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <p className="font-serif italic text-brand-lavender text-sm mb-3">
                about
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-normal text-text-primary mb-4">
                Once Upon a <span className="font-serif italic">Techie</span>
              </h1>
              <p className="font-sans text-lg text-text-secondary leading-relaxed max-w-lg">
                Product storyteller and creative builder who turns ideas into
                experiences people love — through design, automation, and an
                unhealthy amount of curiosity.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-normal text-text-primary mb-10">
              The <span className="font-serif italic">Story</span>
            </h2>
          </ScrollReveal>

          {storyParagraphs.map((text, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <p className="font-sans text-base text-text-secondary leading-[1.85] mb-6">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Obsessed With */}
        <div className="mb-24">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-normal text-text-primary mb-3">
              Obsessed <span className="font-serif italic">With</span>
            </h2>
            <p className="font-sans text-sm text-text-tertiary mb-10">
              Things I never stop thinking or talking about.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {interests.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.label} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glassmorphism rounded-2xl p-5 flex flex-col items-center gap-3 text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <Icon size={24} className={item.color} />
                    <span className="font-sans text-sm text-text-secondary">
                      {item.label}
                    </span>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Currently */}
        <ScrollReveal>
          <div className="glassmorphism rounded-3xl p-8 md:p-12">
            <h2 className="font-serif text-2xl font-normal text-text-primary mb-8">
              <span className="font-serif italic">Currently</span>
            </h2>

            <div className="space-y-5">
              {currentlyItems.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.06}>
                  <div className="flex items-start gap-4">
                    <span className="font-sans text-xs font-medium uppercase tracking-wider text-text-tertiary w-28 flex-shrink-0 pt-1">
                      {item.label}
                    </span>
                    <span className="font-sans text-base text-text-primary">
                      {item.value}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </motion.section>
  );
}
