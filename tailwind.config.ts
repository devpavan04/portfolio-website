import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './(app|components)/**/*.{ts,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#fdfefe',
        'dark-bg': '#191a1a',
        'light-text': '#252423',
        'dark-text': '#dddfb5',
        'light-accent': '#45548d',
        'dark-accent': '#499e5e',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        'geist-mono': ['var(--font-geist-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-animate')],
};

export default config;
