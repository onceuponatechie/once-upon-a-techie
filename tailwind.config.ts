import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E8703A",
          lavender: "#B4A7D6",
          green: "#2D6A4F",
          blue: "#4A90D9",
          yellow: "#F5D060",
        },
        surface: {
          white: "#FFFFFF",
          cream: "#F5EFE6",
          warm: "#F5F0E8",
          light: "#F5F3EF",
          muted: "#E8E5DF",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#4A4A4A",
          tertiary: "#888888",
          inverse: "#FFFFFF",
        },
        dark: {
          bg: "#141414",
          card: "#1E1E1E",
          muted: "#2A2A2A",
        },
      },
      fontFamily: {
        serif: ["'DM Sans'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        16: "16px",
      },
      keyframes: {
        "scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "scroll-up": "scroll-up 30s linear infinite",
        "scroll-up-slow": "scroll-up 40s linear infinite",
        "scroll-up-fast": "scroll-up 25s linear infinite",
        "scroll-down": "scroll-down 35s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
