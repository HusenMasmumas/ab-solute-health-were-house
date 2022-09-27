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
        darkblue : "#01438F",
        green : "#77C48B",
        lightblue : "#4E8FCC",
        lightsky: "#F3F9FF",
        lightgray: "#DCDCDE",
        gray: "#C8D6E3",
        darkgray: '#646772',
        bgcolor: '#F5F5F5',
        bgheader:"#01438F"
       
      },
    },
    screens: {
      md: "768px", //Tablet min-width
      lg: "1024px", //Laptop
      xl: "1440px", //Desktop
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
