import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // ✅ HeroUI
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // ✅ Quran Theme Colors
        primary: "#10B981",
        primaryDark: "#059669",

        bgMain: "#020617",
        bgCard: "#0F172A",
        bgSidebar: "#020617",

        borderColor: "#1E293B",

        textPrimary: "#E2E8F0",
        textSecondary: "#94A3B8",
      },

      fontFamily: {
        // ✅ Default UI font
        sans: ["var(--font-sans)", "system-ui"],

        // ✅ Arabic Fonts
        arabic: ["var(--font-arabic-amiri)"],
        arabicAlt: ["var(--font-arabic-noto)"],
      },

      fontSize: {
        // optional scaling system
        "ayah-sm": "18px",
        "ayah-md": "24px",
        "ayah-lg": "32px",
      },

      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.3)",
      },

      backgroundImage: {
        // gradient like your screenshot
        "quran-gradient":
          "linear-gradient(to right, #0F172A, #020617)",
      },
    },
  },

  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#020617",
            foreground: "#E2E8F0",

            primary: {
              DEFAULT: "#10B981",
              foreground: "#000000",
            },

            content1: "#0F172A",
            content2: "#020617",

            divider: "#1E293B",
          },
        },
      },
    }),
  ],
};

export default config;