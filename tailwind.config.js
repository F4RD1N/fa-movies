module.exports = {
mode: 'jit',
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        natural: "#0C0D16",
        primary: "#262942",
        secondary: "#262626",
        textSecondary: "#8F9097"
      },
      minHeight: {
        24: '96px',
      },
      height: {
        128: "30rem",
        136: "36rem",
      },
    },
  },
  plugins: [
      require('daisyui'),
    ],
}