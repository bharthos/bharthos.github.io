/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#0F172A",
        light: "#E6EBF1",
        accent: {
          DEFAULT: "#10B981",
          hover: "#059669",
        },
        background: {
      DEFAULT: "#F1F5F9",       // light background (light mode)
      dark: "#0B1120",          // dark background (dark mode)
    },
    foreground: {
      DEFAULT: "#000000",       // light text (light mode)
      dark: "#FFFFFF",          // white text (dark mode)
    },
    card: {
      DEFAULT: "#FFFFFF",       // cards/light containers
      dark: "#1E293B",          // dark cards
    },
      },  
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
