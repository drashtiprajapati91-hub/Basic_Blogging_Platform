/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",   // Indigo
        secondary: "#9333EA", // Purple
        accent: "#14B8A6",    // Teal
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
