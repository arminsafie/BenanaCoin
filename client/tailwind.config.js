/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/App.jsx"],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tw-bootstrap-grid-optimizer"),
  ],
};
