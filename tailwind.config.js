const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#F2ffff",
        // secondary: "#101820FF",
        tertiary: "#422057FF",
        themeWhite: "#F2ffff",
        backdrop: "#0000007d",
        transparent: "rgba(255, 255, 255, 0)",
        transparentD: "#000000a8",
        transparentD2: "#000000c8",
      },
      fontFamily: {
        alice: ["Alice", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",

      tab: {
        raw: "(min-height: 350px)",
      },
      tablet: {
        raw: "(min-height: 550px)",
      },
      desktop: {
        raw: "(min-height: 800px)",
      },

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};

// "theme-color": "#0a9396",
