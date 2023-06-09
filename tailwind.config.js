/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /bg-(primary|secondary|error|info|warning|success)-(100|400|500|700)/ },
    { pattern: /text-(primary|secondary|error|info|warning|success)-(100|400|500|700)/ },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'rgb(243, 232, 215)',
          400: 'rgb(199, 191, 166)',
          500: 'rgb(213, 200, 176)',
          700: 'rgb(168, 149, 119)',
        },
        secondary: {
          100: 'rgb(77, 72, 64)',
          400: 'rgb(55, 50, 43)',
          500: 'rgb(40, 37, 33)',
          700: 'rgb(28, 26, 24)',
        },
        error: {
          100: 'rgb(254 226 226)',
          400: 'rgb(248 113 113)',
          500: 'rgb(239 68 68)',
          700: 'rgb(185 28 28)',
        },
        success: {
          100: 'rgb(209 250 229)',
          400: 'rgb(52 211 153)',
          500: 'rgb(16 185 129)',
          700: 'rgb(4 120 87)',
        },
        info: {
          100: 'rgb(224 242 254)',
          400: 'rgb(56 189 248)',
          500: 'rgb(14 165 233)',
          700: 'rgb(3 105 161)',
        },
        warning: {
          100: 'rgb(254 243 199)',
          400: 'rgb(251 191 36)',
          500: 'rgb(245 158 11)',
          700: 'rgb(180 83 9)',
        },
      }
    },
  },
  plugins: [],
}

