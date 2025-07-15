// import type { Config } from 'tailwindcss'

// const config = {
//   darkMode: ['class'],
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
//   ],
//   prefix: '',
//   theme: {
//     container: {
//       center: true,
//       padding: '2rem',
//       screens: {
//         '2xl': '1400px',
//       },
//     },
//     extend: {
//       fontFamily: {
//         manrope: ["Manrope", "sans-serif"],
//         uncut: ["uncutSans", "sans-serif"],
//       },
//       colors: {
//         cream: '#F5F5F5',
//         gravel: '#4E4E4E',
//         iridium: '#3F3F3F',
//         primary: '#391ef3',
//         peach: '#FFE0BD',
//         platinum: '#E6E6E6',
//         ghost: '#CDCDCD',
//         grandis: '#FFC989',
//         porcelain: '#F1F1F1',
//         ironside: '#636363',
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',

//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))',
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))',
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))',
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       keyframes: {
//         'accordion-down': {
//           from: { height: '0' },
//           to: { height: 'var(--radix-accordion-content-height)' },
//         },
//         'accordion-up': {
//           from: { height: 'var(--radix-accordion-content-height)' },
//           to: { height: '0' },
//         },
//         'caret-blink': {
//           '0%,70%,100%': { opacity: '1' },
//           '20%,50%': { opacity: '0' },
//         },
//         'open-sidebar': {
//           from: { width: '60px' },
//           to: { width: '300px' },
//         },
//         'close-sidebar': {
//           from: { width: '300px' },
//           to: { width: '60px' },
//         },
//         'fade-in': {
//           from: { opacity: '0' },
//           to: { opacity: '1' },
//         },
//         orbit: {
//           "0%": {
//             transform:
//               "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
//           },
//           "100%": {
//             transform:
//               "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
//           },
//         },
//         ripple: {
//           "0%, 100%": {
//             transform: "translate(-50%, -50%) scale(1)",
//           },
//           "50%": {
//             transform: "translate(-50%, -50%) scale(0.9)",
//           },
//         },
//         blob: {
//           "0%": {
//             transform: "translate(-50%, -50%) rotate(0deg) scale(1)",
//           },
//           "33%": {
//             transform: "translate(-50%, -50%) rotate(120deg) scale(1.1)",
//           },
//           "66%": {
//             transform: "translate(-50%, -50%) rotate(240deg) scale(0.9)",
//           },
//           "100%": {
//             transform: "translate(-50%, -50%) rotate(360deg) scale(1)",
//           },
//         },
//         "image-glow": {
//           "0%": {
//             opacity: "0",
//             "animation-timing-function": "cubic-bezier(.74, .25, .76, 1)",
//           },
//           "10%": {
//             opacity: "0.5",
//             "animation-timing-function": "cubic-bezier(.12, .01, .08, .99)",
//           },
//           "100%": {
//             opacity: "1",
//           },
//         },
//         marquee: {
//           from: { transform: "translateX(0)" },
//           to: { transform: "translateX(calc(-100% - var(--gap)))" },
//         },
//         "marquee-vertical": {
//           from: { transform: "translateY(0)" },
//           to: { transform: "translateY(calc(-100% - var(--gap)))" },
//         },
//       },
//       spacing: {
//         "1/8": "12.5%",
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         grid: "grid 15s linear infinite",
//         marquee: "marquee var(--duration) linear infinite",
//         "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
//         loading: "loading 0.6s linear infinite",
//         flip: "flip 6s infinite steps(2, end)",
//         rotate: "rotate 3s linear infinite both",
//         orbit: "orbit calc(var(--duration)*1s) linear infinite",
//         ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
//         blob: "blob 7s infinite",
//         "image-glow": "image-glow 6s ease-out 0.6s forwards",
//       },
//     },
//   },
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   plugins: [require('tailwindcss-animate')],
// } satisfies Config

// export default config