/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: '375px',
  				sm: '425px',
  				md: '768px',
				lg: '1024px',
  				xl: '1280px',
			},
			fontFamily: {
				/* Adobe Fonts (xtg2fqq) + Google fallback */
				zcool: ['"zcool-qingke-huangyou"', '"ZCOOL QingKe HuangYou"', 'sans-serif'],
				// Pure Avant Garde – no Chakra in this stack so it looks different
				avant: ['"itc-avant-garde-gothic-pro"', 'system-ui', 'sans-serif'],
				chakra: ['"chakra-petch"', '"Chakra Petch"', 'system-ui', 'sans-serif'],
				patrick: ['"patrick-hand-sc"', '"Patrick Hand SC"', 'cursive'],
				gochi: ['"Gochi Hand"', 'cursive'],
				itc: ['"ITC Avant Garde Gothic Pro"', 'sans-serif'],
			},
			colors: {
				'lime': '#A7FF20',
				'dark': '#1A1A1A',
				'cyan': '#00D4FF',
				'magenta': '#FF2D92',
				'ragebite-yellow': '#CAE00D',
			},
		},
	},
	plugins: [],
};
