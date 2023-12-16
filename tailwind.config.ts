import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bg: '#040C18',
      footer: '#031B34',
      blog: '#042c54',
      text: '#81AFDD',
      subText: '#FF8A71'
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '100', transform: 'scale(1)'},
        },
        fadeOut: {
          '0%': { opacity: '100', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.5)'},
        },
        wiggle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.99)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        fadeOut: 'fadeIn 0.5s ease-out forwards',
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
