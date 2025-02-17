/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Vibrant Colors
        "vibrant-navy": "#0A1045",
        "vibrant-cyan": "#00C2D1",
        "vibrant-yellow": "#F9E900",
        "vibrant-orange": "#F6AF65",
        "vibrant-magenta": "#ED33B9",

        // Neutral Colors
        "neutral-dark-gray": "#1F2937",
        "neutral-light-gray": "#F5F5F5",
        "neutral-medium-gray": "#6B7280",
      },
      fontFamily: {
        inter: "var(--font-inter), sans-serif",
        merriweather: "var(--font-merriweather), sans-serif",
        quicksand: "var(--font-quicksand), sans-serif",
        poppins: "var(--font-poppins), sans-serif",
      },
    },
  },
  plugins: [],
};
