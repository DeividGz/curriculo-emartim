/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emartim: {
          primary: "#002c59",
          secondary: "#069370",
          text: "#545559",
          blue: {
            dark: "#0b4680",
            medium: "#0d4f8b",
            light: "#105a97",
          },
          section: {
            gray: "#f4f4f4",
          },
        },
      },
      backgroundImage: {
        "header-sm": "url('assets/header-sm.svg')",
        "header-md": "url('assets/header-md.svg')",
        "header-lg": "url('assets/header-lg.svg')",
        "header-xl": "url('assets/header-xl.svg')",
        "header-2xl": "url('assets/header-2xl.svg')",
      },
    },
  },
  plugins: [],
};
