import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FEFDF5",
        ocean: "#0A3D62",
        "ocean-light": "#1B6CA8",
        coral: "#FF6B6B",
        "coral-dark": "#E85555",
        sand: "#F4D03F",
        "sand-dark": "#D4B82F",
        forest: "#2D6A4F",
        "forest-light": "#40916C",
        charcoal: "#2B2B2B",
        // Keep old aliases for backward compat during transition
        water: "#0A3D62",
        "water-light": "#1B6CA8",
        sunset: "#FF6B6B",
        "sunset-dark": "#E85555",
      },
    },
  },
  plugins: [],
};
export default config;
