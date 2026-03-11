import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          rose: '#E2136E',
          blush: '#FFF0F5',
          gold: '#C9A96E',
          dark: '#1A1A2E',
          cream: '#FAF7F2',
          sage: '#2D7A4F',
        },
        bkash: '#E2136E',
        nagad: '#F05829',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
