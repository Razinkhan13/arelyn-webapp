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
          rose: '#C0215B',
          blush: '#FFF0F5',
          gold: '#C9A96E',
          dark: '#1A1412',
          cream: '#FBF7F2',
          sage: '#2D7A4F',
        },
        // Payment provider brand colors – kept at their official values,
        // intentionally separate from the ARELYN brand palette above.
        bkash: '#E2136E',
        nagad: '#F05829',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
