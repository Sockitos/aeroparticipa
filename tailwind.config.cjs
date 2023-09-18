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
							'--tw-prose-body': '#000',
							'--tw-prose-headings': '#000',
							'--tw-prose-lead': '#000',
							'--tw-prose-links': '#1C43DF',
							'--tw-prose-bold': '#000',
							'--tw-prose-counters': '#1C43DF',
							'--tw-prose-bullets': '#1C43DF',
							'--tw-prose-hr': '#000',
							'--tw-prose-quotes': '#000',
							'--tw-prose-quote-borders': '#000',
							'--tw-prose-captions': '#000',
							'--tw-prose-kbd': '#000',
							'--tw-prose-kbd-shadows': '#000',
							'--tw-prose-code': '#000',
							'--tw-prose-pre-code': '#000',
							'--tw-prose-pre-bg': '#000',
							'--tw-prose-th-borders': '#000',
							'--tw-prose-td-borders': '#000',
							maxWidth: '56rem',
							fontSize: '1.125rem',
							lineHeight: '1.375',
							a: {
								textUnderlineOffset: '0.125rem',
							},
							p: {
							},
							h3: {
								marginTop: '3rem',
								marginBottom: '1.25rem',
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
