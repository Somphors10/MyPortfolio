/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#faf8ff",
          dark: "#0c0a12",
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(168, 85, 247, 0.45)",
        "glow-sm": "0 0 24px -8px rgba(217, 70, 239, 0.35)",
        card: "0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 12px 24px -4px rgba(91, 33, 182, 0.08)",
        "card-dark": "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 20px 40px -12px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
}
