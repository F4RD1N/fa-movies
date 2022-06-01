module.exports = {
mode: 'jit',
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        natural: "#0C0D16",
        primary: "rgb(35,69,183)",
        secondary: "#262626",
        textSecondary: "#8F9097"
      },
      minHeight: {
        24: '96px',
      },
      height: {
        128: "30rem",
        136: "36rem",
        140: "40rem",
        'header': '92vh',
        'half': '67vh',
      },
      screens: {
      'lg': '834px',
      'xs': {'max': '320px'}
    }
    },
  },
  plugins: [
      
    ],
}