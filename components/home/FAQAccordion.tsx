"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

const faqs = [
  {
    question: "What kind of work do you do?",
    answer:
      "I work on product design, web development, automation tools, and creative builds. If it involves turning an idea into something people can use and love, I'm interested.",
  },
  {
    question: "Are you available for freelance work?",
    answer:
      "It depends on the project and timeline. Reach out through the contact page and let's see if we're a good fit for each other.",
  },
  {
    question: "What tools do you use?",
    answer:
      "My toolkit includes Figma, Next.js, Python, Tailwind CSS, Framer Motion, Sanity CMS, and a healthy dose of AI tools. I pick what works best for each project.",
  },
  {
    question: "Do you offer free resources?",
    answer:
      "Yes! Check out The Creative Vault for templates, guides, and tools. Some are free, some are premium — all are made with love.",
  },
  {
    question: "Can I collaborate with you on content?",
    answer:
      "Absolutely. I'm always open to collaborations — especially if they involve interesting problems, creative storytelling, or building something that hasn't existed before.",
  },
  {
    question: "How can I stay updated?",
    answer:
      "Subscribe to the newsletter in the footer, or follow me on social media. I share new builds, articles, and resources regularly.",
  },
];

function FAQPill({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between rounded-full px-6 py-4 transition-all duration-300 border-2 border-white/60"
        style={{
          background: "rgba(255,255,255,0.5)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <span className="font-sans text-sm md:text-base text-text-primary text-left pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="w-9 h-9 rounded-full bg-text-primary flex items-center justify-center flex-shrink-0"
        >
          <ChevronDown size={16} className="text-white" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-text-secondary leading-relaxed px-6 pt-3 pb-2">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal className="text-center mb-4">
          <p className="font-serif italic text-text-tertiary text-base">
            Got Questions?
          </p>
        </ScrollReveal>
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary">
            Your <span className="italic">questions,</span> answered
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQPill
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA card */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="bg-dark-bg rounded-2xl p-8 text-center">
            <h3 className="font-serif text-xl text-white mb-3">
              Still have questions?
            </h3>
            <p className="font-sans text-sm text-white/60 mb-6">
              Let&apos;s chat. I&apos;d love to hear about your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-brand-orange text-white px-6 py-3 text-sm font-sans font-medium hover:bg-brand-orange/90 transition-colors"
            >
              Get in Touch →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
