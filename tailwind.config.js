/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        darkblue: "#124a94",
        blue: "#0091f7",
        green: "#018f55",
        sidebar: "#fbfaff",
        "sidebar-font": "#545a6d",
        violet: "#5156be",
        input: "#f3f3f9",
      },
      backgroundImage: {
        pattern1: "url('./src/assets/pattern-1.png')",
        pattern5: "url('./src/assets/pattern-5.png')",
        pattern6: "url('./src/assets/pattern-6.png')",
        pattern7: "url('./src/assets/pattern-7.png')",
        img1: "url('./src/assets/1.jpg')",
        teamIcon: "url('./src/assets/team-icon.png')",
      },
    },
  },
  plugins: [],
};
