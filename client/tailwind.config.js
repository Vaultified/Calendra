module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/react-big-calendar/lib/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Customize
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
