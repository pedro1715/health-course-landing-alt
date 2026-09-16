/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sky:    '#E8EEF8',
        navy:   '#0D0E1C',
        'navy-deep': '#070814',
        'navy-soft': '#1A1B2E',
        'navy-blue': '#15317E',
        yellow: '#F5C430',
        'yellow-light': '#FFFBEA',
        sand:   '#FAF4EC',
        'sand-dark': '#EBD8B8',
        'card-bg': '#F0F3FA',
        muted:  '#8B90A0',
        'muted-dark': '#5A5F72',
        green:  '#4CAF7D',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans:    ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif:   ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        card:  '0 2px 16px rgba(13,14,28,0.06)',
        float: '0 8px 32px rgba(13,14,28,0.12)',
        deep:  '0 20px 60px rgba(13,14,28,0.18)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};

