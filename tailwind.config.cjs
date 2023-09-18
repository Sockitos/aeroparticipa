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
		extend: {
			typography: {
				DEFAULT: {
					css: [
						{
							color: '#000',
							maxWidth: '56rem',
							fontSize: '1.125rem',
							lineHeight: '1.375',
							a: {
								color: '#1C43DF',
								textUnderlineOffset: '0.125rem',
							},
							p: {
							},
							h3: {
								marginTop: '3rem',
								fontSize: '1.5rem',
								lineHeight: '2rem',
								fontWeight: '700',
							},
							h4: {
								fontSize: '1.25rem',
								lineHeight: '1.75rem',
								fontWeight: '700',
							},
							li: {
								marginTop: 0,
							},
							'ol > li::marker': {
								fontWeight: '700',
								color: '#1C43DF',
							},
							'> ol > li': {
								marginTop: 0,
								marginBottom: '0.25rem',
							},
							'> ol > li > *:first-child': {
								marginTop: 0,
								marginBottom: '0.5rem',
							},
							'> ol > li > *:last-child': {
								marginTop: 0,
								marginBottom: 0,
							},
							'> ul > li': {
								marginTop: 0,
								marginBottom: '0.25rem',
							},
							'ul > li::marker': {
								fontWeight: '700',
								color: '#1C43DF',
							},
							'> ul > li > *:first-child': {
								marginTop: 0,
								marginBottom: '0.5rem',
							},
							'> ul > li > *:last-child': {
								marginTop: 0,
								marginBottom: 0,
							},
						},
					],
				},
			},
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
	]
};

module.exports = config;
