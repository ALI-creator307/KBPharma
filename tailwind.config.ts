import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1F6B3E",
          dark: "#0F3D28",
          darker: "#0A2E1D",
          light: "#2F8A54",
          50: "#EAF6EE",
          100: "#D3EEDC",
        },
        gold: {
          DEFAULT: "#F2A93B",
          dark: "#E0951F",
        },
        ink: {
          DEFAULT: "#16241C",
          soft: "#4B5A52",
        },
        offwhite: "#FAFAF7",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(15, 61, 40, 0.15)",
        soft: "0 4px 20px rgba(15, 61, 40, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
