import type { Config } from 'tailwindcss'
import { designTokens } from './app/tockens/designTokens';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: designTokens.colors,
      fontFamily: designTokens.fontFamily,
      borderRadius: designTokens.borderRadius
    },
  },
  plugins: [],
}
export default config
