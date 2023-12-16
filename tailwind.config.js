/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "991px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs:{max:'375px'}
    },
  },
  plugins: [],
};
