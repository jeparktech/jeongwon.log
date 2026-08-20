// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-kr)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.zinc,
        gray: colors.zinc,
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc.700'),
            fontSize: '16px',
            lineHeight: '1.8',
            a: {
              color: theme('colors.zinc.900'),
              textDecorationColor: theme('colors.zinc.300'),
              textUnderlineOffset: '3px',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.zinc.600'),
                textDecorationColor: theme('colors.zinc.500'),
              },
              code: { color: theme('colors.zinc.700') },
            },
            'h1,h2': {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h2: {
              marginTop: '2.4em',
              paddingTop: '1.4em',
              borderTop: `1px solid ${theme('colors.zinc.200')}`,
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.zinc.800'),
              backgroundColor: theme('colors.zinc.100'),
              borderRadius: theme('borderRadius.md'),
              padding: '0.15em 0.4em',
              fontWeight: '500',
              fontSize: '0.875em',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            pre: {
              borderRadius: theme('borderRadius.xl'),
              border: `1px solid ${theme('colors.zinc.200')}`,
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              fontWeight: '400',
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '400',
              borderLeftColor: theme('colors.zinc.300'),
              color: theme('colors.zinc.600'),
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            hr: {
              borderColor: theme('colors.zinc.200'),
            },
            img: {
              borderRadius: theme('borderRadius.xl'),
            },
            thead: {
              borderBottomColor: theme('colors.zinc.300'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.zinc.200'),
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.zinc.300'),
            a: {
              color: theme('colors.zinc.100'),
              textDecorationColor: theme('colors.zinc.600'),
              '&:hover': {
                color: theme('colors.zinc.300'),
                textDecorationColor: theme('colors.zinc.400'),
              },
              code: { color: theme('colors.zinc.300') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.zinc.100'),
            },
            h2: {
              borderTopColor: theme('colors.zinc.800'),
            },
            code: {
              color: theme('colors.zinc.200'),
              backgroundColor: theme('colors.zinc.800'),
            },
            pre: {
              borderColor: theme('colors.zinc.800'),
            },
            blockquote: {
              borderLeftColor: theme('colors.zinc.700'),
              color: theme('colors.zinc.400'),
            },
            hr: {
              borderColor: theme('colors.zinc.800'),
            },
            thead: {
              borderBottomColor: theme('colors.zinc.700'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.zinc.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
