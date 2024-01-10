import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "blue_footer": "#64BDC2",
      "blue" : "background: #7A5CFA",
    },
  },
  plugins: [],
}
export default config
