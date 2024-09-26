/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        paleLavender: 'hsla(266, 39%, 88%, 1)',
        textColor: 'hsla(210, 20%, 98%, 1)',
        textBlack: 'hsla(220, 4%, 15%, 1)',
        lineColor: 'hsla(0, 6%, 29%, 1)',
        yellow: 'hsla(54, 91%, 48%, 1)',
        purpleBg: 'hsla(288, 76%, 23%, 1)',
        formBg: 'hsla(0, 5%, 43%, 1)',
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        customImage: "url(../assets/bgrectangle.png')",
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/Capture1.PNG')",
        'about-hero': "url('./src/assets/aboutHero.png')",
      },
    },
  },
  plugins: [],
}

