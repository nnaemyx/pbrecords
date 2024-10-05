import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '480px',
  		md: '800px',
  		lg: '1000px',
  		xl: '1280px'
  	},
  	extend: {
  		fontFamily: {
  			aeonik: ['var(--font-aeonik-mono)'],
  			helvtica: ['var(--font-helva-sans)'],
  			spaceGrotesk: ['var(--font-space-grotesk)']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
