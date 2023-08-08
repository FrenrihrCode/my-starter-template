/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      primary: 'rgba(var(--color-primary), <alpha-value>)',
      secondary: 'rgba(var(--color-secondary), <alpha-value>)',
    },
  },
  plugins: [],
};
