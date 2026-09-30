import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        green: '#4ADE80',
        'green-dark': '#16A34A',
        amber: '#FB923C',
        'off-white': '#F0EDE8',
        dark: '#0D0D0D',
        light: '#F5F4F0',
      },
    },
  },
  plugins: [],
}

export default config
