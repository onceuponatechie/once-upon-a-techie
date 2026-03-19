"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Instagram, Mail, Send } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const subjects = [
  "Just saying hi",
  "Freelance project",
  "Full-time opportunity",
  "Collaboration idea",
  "Speaking / Podcast",
  "Something else",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Side */}
          <div>
            <ScrollReveal>
              <p className="font-serif italic text-text-tertiary text-sm mb-3">
                Contact
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-normal text-text-primary mb-6 leading-tight">
                Let&apos;s build an{" "}
                <span className="font-serif italic">Experience.</span>
              </h1>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-10 max-w-md">
                Whether you have a project in mind, want to collaborate, or
                just want to say hello — I would love to hear from you.
                Drop me a message and I will get back within 48 hours.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-wider text-text-tertiary mb-4">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-11 h-11 rounded-full bg-white border border-surface-muted/40 flex items-center justify-center text-text-secondary hover:bg-text-primary hover:text-white hover:border-text-primary transition-all duration-300"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side - Form */}
          <ScrollReveal delay={0.1} direction="right">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-surface-muted/40">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-5">
                    <Send size={24} className="text-brand-green" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-text-primary mb-2">
                    Message <span className="font-serif italic">Sent!</span>
                  </h3>
                  <p className="font-sans text-sm text-text-secondary">
                    Thanks for reaching out. I will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-sans text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-surface-cream border border-surface-muted/60 rounded-xl px-4 py-3 text-sm font-sans text-text-primary placeholder:text-text-tertiary outline-none focus:border-text-primary focus:ring-1 focus:ring-text-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-surface-cream border border-surface-muted/60 rounded-xl px-4 py-3 text-sm font-sans text-text-primary placeholder:text-text-tertiary outline-none focus:border-text-primary focus:ring-1 focus:ring-text-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      What is this about?
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-surface-cream border border-surface-muted/60 rounded-xl px-4 py-3 text-sm font-sans text-text-primary outline-none focus:border-text-primary focus:ring-1 focus:ring-text-primary/20 transition-all duration-300 appearance-none"
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-medium uppercase tracking-wider text-text-tertiary mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      className="w-full bg-surface-cream border border-surface-muted/60 rounded-xl px-4 py-3 text-sm font-sans text-text-primary placeholder:text-text-tertiary outline-none focus:border-text-primary focus:ring-1 focus:ring-text-primary/20 transition-all duration-300 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-xl bg-text-primary text-white py-3.5 text-sm font-sans font-medium hover:bg-text-primary/90 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={14} />
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </motion.section>
  );
}
