const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        "roboto-mono": ["var(--font-roboto-mono)", ...fontFamily.mono],
      },
      colors: {
        theme: {
          900: "#18181b",
          800: "#27272a",
          700: "#3f3f46",
          600: "#52525b",
          500: "#71717a",
          400: "#a1a1aa",
          300: "#d4d4d8",
          200: "#e4e4e7",
          100: "#f4f4f5",
          50: "#fafafa",
        },
        accent: {
          1: "#94d1be",
          "1-dark": "#62bb9f",
          2: "#e0f2fe",
          3: "#0369a1",
          "discord-blue": "#738ADB",
          "discord-dark": "#4967d0",
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    // @ts-ignore
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};

module.exports = config;
