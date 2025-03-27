import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "minty-fresh": "#A8E6CF",
        "lavender-mist": "#D9CFFF",
        "sky-whisper": "#CBE9F8",
        "soft-coral": "#FFB8B1",
        "graphite-ink": "#333333",
        "deep-mint": "#7DCBB2",
        "light-cream": "#FFF8F0",
        "digital-lavender": "#E4D7F5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(0, 0, 0, 0.05)",
        elevated: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
