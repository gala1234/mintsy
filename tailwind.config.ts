import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {},
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
