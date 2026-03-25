"use client";

import { useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const toolIcons = [
  { name: "Google", path: "M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" },
  { name: "Notion", path: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.26 2.07c-.42-.326-.98-.7-2.054-.607L3.433 2.56c-.466.046-.56.28-.374.466l1.4 1.182zM5.251 7.617v13.916c0 .746.373 1.027 1.213.98l14.523-.84c.84-.046.933-.56.933-1.166V6.824c0-.606-.233-.933-.746-.886l-15.177.84c-.56.046-.746.327-.746.84zM17.97 8.503c.094.42 0 .84-.42.886l-.7.14v10.264c-.607.327-1.166.514-1.633.514-.746 0-.933-.233-1.493-.933l-4.573-7.185v6.952l1.446.327s0 .84-1.166.84l-3.219.186c-.094-.187 0-.654.327-.746l.84-.233V9.854L5.958 9.76c-.093-.42.14-1.026.793-1.073l3.453-.233 4.759 7.278v-6.44l-1.213-.14c-.093-.467.233-.84.653-.886l3.546-.14v-.623z" },
  { name: "Claude", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-1 1-1-1V8l1-1 1 1v9zm4 0l-1 1-1-1V6l1-1 1 1v11z" },
  { name: "Canva", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.37.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" },
];

export default function Newsletter() {
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
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0_4px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row gap-12 lg:gap-20">
            {/* Left column */}
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-3">
                Subscribe to the{" "}
                <span className="italic text-brandOrange">Desk</span>
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-8">
                Join a growing space of creators, builders, and storytellers.
              </p>

              {/* Tool stack */}
              <p className="text-xs font-sans text-gray-400 mb-3">
                Obsessed with these tools:
              </p>
              <div className="flex gap-4">
                {toolIcons.map((tool) => (
                  <div
                    key={tool.name}
                    className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    title={tool.name}
                  >
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d={tool.path} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="flex-1">
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                Get updates on new builds, stories, resources, and the occasional behind-the-scenes peek at what I&apos;m working on.
              </p>

              <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-full bg-gray-50 border border-gray-200 px-5 py-3 text-sm font-sans outline-none focus:border-cursorBlue transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-cursorBlue text-white px-6 py-3 text-sm font-sans font-medium hover:bg-brandOrange transition-colors flex-shrink-0 disabled:opacity-50"
                >
                  {status === "loading" ? "..." : "Subscribe"}
                </button>
              </form>

              {status === "success" && (
                <p className="text-xs font-sans text-green-600">Welcome aboard!</p>
              )}
              {status === "error" && (
                <p className="text-xs font-sans text-red-500">Something went wrong. Try again.</p>
              )}

              <p className="text-[10px] font-sans text-gray-300 mt-2">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
