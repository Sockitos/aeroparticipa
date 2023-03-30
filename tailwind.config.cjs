const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			'background': '#EFEDEA',
			'grey': '#E2DFDC',
			'grey-dark': '#9E958D',
			'blue': '#0b3b9b',
			'blue-accent': '#1C43DF',
			'blue-light': '#65a8df',
			'blue-dark': '#073682',
			'blue-darker': '#151C5E',
			'black': '#000',
			'white': '#fff',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '4rem',
				md: '4rem',
				xl: '5rem',
			},
			screens: {
				sm: '96rem',
			},
		},
		fontFamily: {
			sans: ['Sofia Sans', 'sans-serif'],
		},
		backgroundImage: {
			'plane': "url('/images/plane.jpeg')",
			'popup': "url('/images/popup.png')",
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
