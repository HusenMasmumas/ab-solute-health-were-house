module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#123265",
          dark: "#0e2b5c",
        },
        secondary: {
          DEFAULT: "#3b8de2",
          light: "#f7f9ff",
        },
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
