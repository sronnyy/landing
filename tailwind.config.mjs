/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        elastic: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },

      backgroundImage: {
        'pattern-dots-slate-200/30': "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")"
      },

      transitionDuration: {
        600: "600ms",
      },

      container: {
        center: true,
        padding: {
          sm: "1rem",
          md: "0",
        },
      },

      fontFamily: {
        poppins: "Poppins",
        inter: ['var(--font-inter)'],
        playfair: ['var(--font-playfair)'],
        albert: "Albert Sans",
        blackH: "BlackH",
        boldH: "BoldH",
        mediumH: "MediumH",
        romanH: "RomanH",
        lightH: "LightH",
      },

      colors: {
        section: "#f8fcff",
        orange: "#FF6B00",
        offwhite: "#F7F7F7",
        tblack: "#0D0D0D",
        primary: "#040404",
        tepurple: "#725cff",
        teblue: "#279af1",
        teorange: "#ff9c32",
        tgreen: "#C8FE00",
        tpurple: "#4831d4",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [

    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "90%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
