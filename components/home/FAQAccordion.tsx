"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "I work on product design, web development, automation tools, and creative builds. If it involves turning an idea into something people can use and love, I'm interested.",
  },
  {
    question: "How does your process work?",
    answer:
      "It starts with discovery — understanding your problem and audience. Then I design solutions, build prototypes, and iterate until we've got something amazing.",
  },
  {
    question: "Do you offer free resources?",
    answer:
      "Yes! Check out The Creative Vault for templates, guides, and tools. Some are free, some are premium — all are made with love.",
  },
  {
    question: "Can I collaborate with you?",
    answer:
      "Absolutely. I'm always open to collaborations — especially if they involve interesting problems, creative storytelling, or building something that hasn't existed before.",
  },
  {
    question: "What tools do you use?",
    answer:
      "My toolkit includes Figma, Next.js, Python, Tailwind CSS, Framer Motion, Sanity CMS, and a healthy dose of AI tools. I pick what works best for each project.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "Head over to the contact page and fill out the form, or shoot me a DM on any social platform. I typically respond within 24 hours.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-surface-muted last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-base text-text-primary pr-4">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl text-text-tertiary flex-shrink-0"
        >
          +
        </motion.span>
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
            <p className="font-sans text-sm text-text-secondary leading-relaxed pb-5">
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

        <ScrollReveal>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-surface-muted/40">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </ScrollReveal>

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
