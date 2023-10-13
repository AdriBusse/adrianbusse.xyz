const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    backgroundImage:{
      'hero-background1': "linear-gradient(0deg, rgba(22,22,22,0.8) 33%, rgba(60,67,164,0) 100%), url('/images/heroBackground/heroBackground1.webp')",
      'landmarkBackground': "linear-gradient(0deg, rgba(60,67,164,0.8) 0%, rgba(22,22,22,0.8) 100%), url('/images/background/landmark81.webp')",

    },
  },
  plugins: [nextui()],
};
