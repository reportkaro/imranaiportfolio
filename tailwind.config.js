/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        'subtle-bg': 'var(--subtle-bg)',
        'card-bg': 'var(--card-bg)',
        'card-border': 'var(--card-border)',
        'card-shadow': 'var(--card-shadow)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        'geist-sans': ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            a: {
              color: 'var(--accent)',
              '&:hover': {
                color: 'var(--accent)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} 