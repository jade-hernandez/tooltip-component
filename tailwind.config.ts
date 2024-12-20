import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        lg: "1440px" // Desktop
        // => @media (min-width: 1440px) { ... }
      },
      colors: {},
      backgroundImage: {
        "gradient-main": "linear-gradient(145deg, #F9FAFB 21%, #D2D6DB 72%)"
      }
    }
  },
  plugins: []
} satisfies Config;
