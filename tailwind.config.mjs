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

        // Blue/purple theme Colors
        "pale-blue": "#D9F0FF",
        "sky-blue": "#A3D5FF",
        "medium-blue": "#83C9F4",
        "medium-purple": "#6F73D2",
        "grey-purple": "#7681B3",

        // Neutrals
        "cool-white": "#F8FAFC",
        "charcoal": "#2A2E37",

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
