"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── Tool stack SVG icons ── */
const tools = [
  {
    name: "Google",
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 33.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 5.7 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.4-3.9z" />
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.5 18.8 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 5.7 29.2 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
        <path fill="#4CAF50" d="M24 44c5 0 9.7-1.6 13.3-4.4l-6.2-5.2C29.2 36 26.7 36.8 24 36.8c-5.1 0-9.5-3.2-11.2-7.8l-6.5 5C9.5 40.1 16.2 44 24 44z" />
        <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.7 39.5 44 34 44 24c0-1.3-.2-2.7-.4-3.9z" />
      </svg>
    ),
  },
  {
    name: "Canva",
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="#00C4CC" />
        <circle cx="24" cy="24" r="8" fill="white" />
        <circle cx="24" cy="24" r="3" fill="#00C4CC" />
      </svg>
    ),
  },
  {
    name: "Claude",
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="12" fill="#D97706" />
        <circle cx="24" cy="22" r="10" fill="white" />
        <circle cx="20" cy="20" r="2" fill="#D97706" />
        <circle cx="28" cy="20" r="2" fill="#D97706" />
        <path d="M20 26c2 2 6 2 8 0" stroke="#D97706" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Notion",
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="12" fill="#1A1A1A" />
        <path d="M14 12h14l6 6v18H14V12z" fill="white" stroke="#1A1A1A" strokeWidth="1" />
        <line x1="18" y1="20" x2="30" y2="20" stroke="#ccc" strokeWidth="2" />
        <line x1="18" y1="25" x2="28" y2="25" stroke="#ccc" strokeWidth="2" />
        <line x1="18" y1="30" x2="26" y2="30" stroke="#ccc" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section ref={ref} className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto glass rounded-3xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left — tool stack */}
          <div className="flex-1 p-8 md:p-12 bg-white/20">
            <h3 className="font-display text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6">
              Built with
            </h3>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center"
                  title={tool.name}
                >
                  {tool.icon}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — subscribe */}
          <div className="flex-1 p-8 md:p-12">
            <h3 className="font-display text-2xl font-bold mb-2">
              Stay in the loop
            </h3>
            <p className="text-text-secondary mb-6">
              No spam. Just stories, builds, and creative insights.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full bg-white/60 border border-white/80 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-orange/30 text-sm"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-brand-orange text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-orange/90 transition-colors text-sm disabled:opacity-60"
              >
                {status === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
            {status === "success" && (
              <p className="text-sageGreen text-sm mt-3">Welcome aboard!</p>
            )}
            {status === "error" && (
              <p className="text-brand-orange text-sm mt-3">
                Something went wrong. Try again?
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
