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
        },
        butterYellow: "#FDE68A",
        lavender: "#e9d5ff",
        lightGreen: "#d5ffd8",
        cursorBlue: "#5dcdf1",
        sageGreen: "#8DA399",
        lightCream: "#FAFAF7",
        lightOatmeal: "#F5EFE6",
        text: {
          primary: "#1A1A1A",
          secondary: "#4A4A4A",
          tertiary: "#888888",
          inverse: "#FFFFFF",
        },
        surface: {
          muted: "#E8E5DF",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
      },
      keyframes: {
        "ticker-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "ticker-down": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "ticker-up-slow": "ticker-up 30s linear infinite",
        "ticker-up-mid": "ticker-up 25s linear infinite",
        "ticker-up-fast": "ticker-up 28s linear infinite",
        "ticker-down-slow": "ticker-down 30s linear infinite",
        "gradient-shift": "gradient-shift 4s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
