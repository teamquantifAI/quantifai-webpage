/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── QuantifAI "Scientific Modern" palette (from DESIGN.md) ──
        // Warm surfaces
        cream: '#fdfbf7',          // background — warmest base
        surface: '#fff8f2',
        'surface-dim': '#e3d9c8',
        'surface-low': '#fef2e1',
        'surface-container': '#f8ecdc',
        'surface-high': '#f2e7d6',
        'surface-highest': '#ece1d1',
        // Text / ink
        ink: '#201b11',            // on-surface
        'ink-soft': '#4e4637',     // on-surface-variant
        // Lines
        outline: '#807665',
        'outline-soft': '#d4c5ab',
        // Intellectual Amber
        brand: '#ffbf00',          // primary-container — high-visibility CTA
        'brand-deep': '#5c4300',   // primary — amber text on light
        'brand-ink': '#6d5000',    // on-primary-container
        'brand-dim': '#ecc165',    // inverse-primary
        'brand-fixed': '#ffdfa0',
        // Functional slates
        'slate-q': '#565e74',
        'slate-q-container': '#d7dff9',
        // Inverse (dark) surfaces
        inverse: '#363025',
        'inverse-on': '#fbefde',
        // Status
        'error-q': '#ba1a1a',
        'error-soft': '#ffdad6',
        'on-error': '#93000a',

        // ── Legacy shadcn tokens (kept for compatibility) ──
        primary: {
          DEFAULT: '#ffbf00',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        // Hanken Grotesk → headlines, Inter → body, JetBrains Mono → technical
        display: ['var(--font-hanken)', 'Hanken Grotesk', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      maxWidth: {
        layout: '1536px',
      },
      boxShadow: {
        // "Amber Glow" — primary actions + verified status cards
        glow: '0 4px 14px 0 rgba(255, 191, 0, 0.39)',
        'glow-lg': '0 10px 30px 0 rgba(255, 191, 0, 0.30)',
        // Standard soft, diffused elevation
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 12px 40px rgba(0, 0, 0, 0.07)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-warm': 'linear-gradient(rgba(128,118,101,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(128,118,101,0.07) 1px, transparent 1px)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '4rem',
          '2xl': '4rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
