/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        abril: ['Abril Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        letter: '#515151',
        principal: '#43B6C5',
        second: '#1B418C',
        third: '#334155',
        fourth: '#43FFD2',
        fifth: '#00FFFF',
        sixth: '#092C4C',
      },
    },
  },
  plugins: [],
}
