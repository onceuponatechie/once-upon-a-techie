"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      "Absolutely. I'm always open to collaborations — especially if they involve interesting problems, creative storytelling, or building something new.",
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
    <div className="w-full border-b border-gray-200 py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-sans text-sm md:text-base text-text-primary pr-4">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl text-gray-400 flex-shrink-0 leading-none"
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
            <p className="font-sans text-sm text-gray-500 leading-relaxed pt-3 pb-1">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary">
            I Get{" "}
            <span className="italic text-lightGreen">Asked</span>{" "}
            These
          </h2>
        </ScrollReveal>

        <div className="w-full">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
