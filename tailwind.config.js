module.exports = {
mode: 'jit',
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        natural: "#131524",
        primary: "#237195",
        secondary: "#2B2D39",
        textSecondary: "#8F9097"
      },
      minHeight: {
        24: '96px',
      },
      height: {
        128: "30rem",
      },
    },
  },
  plugins: [
      require('daisyui'),
    ],
}