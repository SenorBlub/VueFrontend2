/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  darkMode: ["class", "[data-theme='dark']"], // Enables dark mode via class or attribute
  theme: {
    extend: {
      colors: {
        text: {
          primary: "var(--text-primary)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          tertiary: "var(--accent-tertiary)",
        },
        background: {
          primary: "var(--background-primary)",
          secondary: "var(--background-secondary)",
        },
        status: {
          danger: "var(--danger)",
          caution: "var(--caution)",
          alert: "var(--alert)",
          success: "var(--success)",
        },
      },
    },
  },
  plugins: [],
};
