import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#232A3C',
        medium: '#293245'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
  darkMode: 'class'
};
export default config;
