module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'soft-black': '#181818',
      'soft-grey': '#EEECEC' 
    },
    container: {
      center: true,
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1280px"
      }
    },
  },
  plugins: [],
}
