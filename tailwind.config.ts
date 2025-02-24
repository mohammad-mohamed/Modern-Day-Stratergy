import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        aeonik: ['var(--font-aeonik)', ...fontFamily.sans],
        bickham: ['var(--font-bickham)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
