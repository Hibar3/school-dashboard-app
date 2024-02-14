import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: {
          100: "#0a4ff0"
        },
        // Add more colors as needed
        secondary: "#dddfe6",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Courier", "monospace"],
      },
      backgroundImage: {},
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
