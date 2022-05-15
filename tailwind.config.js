module.exports = {
mode: 'jit',
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        natural: "#0C0D16",
        primary: "#1E5C79",
        secondary: "#262626",
        textSecondary: "#8F9097"
      },
      minHeight: {
        24: '96px',
      },
      height: {
        128: "30rem",
        136: "33rem",
      },
    },
  },
  plugins: [
      require('daisyui'),
    ],
}