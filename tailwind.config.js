/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Direct classes like bg-primary, text-accent, bg-background, etc.
        primary: {
          DEFAULT: "#1F3A28",
          dark: "#15271B",
          light: "#2D5239",
        },
        accent: {
          DEFAULT: "#8BA838",
          light: "#A4C24F",
          bg: "#F0F4E6",
        },
        background: {
          DEFAULT: "#FDF8F0",
          cream: "#FDF8F0",
        },
        cream: "#FDF8F0",
        card: "#FFFFFF",
        textMain: "#1B291E",
        textSecondary: "#4A5568",
        textMuted: "#718096",
        borderCustom: "#E2E8F0",
        badge: "#EBF2E4",
        star: "#F59E0B",
        // Healthify namespace back-compatibility
        healthify: {
          primary: "#1F3A28",
          "primary-dark": "#15271B",
          "primary-light": "#2D5239",
          accent: "#8BA838",
          "accent-light": "#A4C24F",
          "accent-bg": "#F0F4E6",
          cream: "#FDF8F0",
          card: "#FFFFFF",
          text: "#1B291E",
          muted: "#718096",
          border: "#E2E8F0",
          badge: "#EBF2E4",
        },
      },
      fontFamily: {
        sans: ["System", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
