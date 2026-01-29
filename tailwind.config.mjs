/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // MBA Brand Colors - Modern Interpretation
        brand: {
          50: '#FDF5F6',
          100: '#FAEAEC',
          200: '#F4D0D4',
          300: '#E9A3AB',
          400: '#E97C7F',   // Apricot (official MBA)
          500: '#CC403F',   // Flush Mahogany (official MBA)
          600: '#8B2635',   // Deep Burgundy - Primary
          700: '#5C1A23',   // Rich Maroon
          800: '#920A0E',   // Totem Pole (official MBA)
          900: '#3D0F13',
          950: '#1F0709',
        },
        // Primary uses the burgundy shade
        primary: {
          50: '#FDF5F6',
          100: '#FAEAEC',
          200: '#F4D0D4',
          300: '#E9A3AB',
          400: '#E97C7F',
          500: '#CC403F',
          600: '#8B2635',
          700: '#5C1A23',
          800: '#3D0F13',
          900: '#1F0709',
        },
        // Accent - Warm coral/peach tones
        accent: {
          DEFAULT: '#8B2635',
          light: '#CC403F',
          dark: '#5C1A23',
          coral: '#E97C7F',
          peach: '#F4A5A8',
        },
        // Warm neutrals for backgrounds
        neutral: {
          warm: '#FAF9F7',
          stone: '#F5F3F0',
          sand: '#EBE7E2',
        },
        // Text colors
        slate: {
          light: '#6B6560',
          DEFAULT: '#4A4744',
          dark: '#2D2926',
        },
        // CTA specific colors
        cta: {
          call: '#4A7C59',      // Sage green for phone CTAs
          'call-hover': '#3D6649',
          text: '#8B2635',      // Brand color for text CTAs
          'text-hover': '#5C1A23',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(139, 38, 53, 0.1)',
        'medium': '0 4px 16px -4px rgba(139, 38, 53, 0.15)',
        'glow': '0 0 20px rgba(204, 64, 63, 0.2)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #8B2635 0%, #CC403F 100%)',
        'warm-gradient': 'linear-gradient(135deg, #FAF9F7 0%, #F5F3F0 100%)',
      },
    },
  },
  plugins: [],
};
