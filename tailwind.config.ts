import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "1rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1264px",
      },
    },
    screens: {
      '2xl': {
        'max': '1440px'
      },

      'xl': {
        'max': '1280px'
      },

      'lg': {
        'max': '1024px'
      },

      'md': {
        'max': '768px'
      },

      'sm': {
        'max': '640px'
      },
    },
    extend: {
      colors: {
        "main-color": "#37BC8C",
        "bg-green": "#4BD0A0",
        "hover-green": "#5FE4B4",
        "main-blue": "#106EE8",
      },
    },
  },
  plugins: []
};
export default config;
