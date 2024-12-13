/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: "Inter",
      },
      colors: {
        wingman: {
          primary: "rgba(var(--wingmanprimary))",
          secondary: "rgba(var(--wingmansecondary))",
          textcolor: "rgba(var(--wingmantextcolor))",
          productcard: "rgba(var(--wingmanproductcard))",
          setPrimary: "#fefef4",
          setSecondary: "#114d47",
        },
      },
    },
  },
  plugins: [],
};
