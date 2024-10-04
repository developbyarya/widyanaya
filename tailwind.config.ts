import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#003459",
        secondary: "#02C39A",
        purple: "#8E2ECE",
      },
      textColor: {
        primary: "#061E30",
        gold: "#B29800",
      },
    },
  },
  plugins: [flowbite.plugin(),],
};
export default config;
