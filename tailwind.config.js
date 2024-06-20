/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}",
    "./login/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary : "#125B50",
        secondary : {
          DEFAULT: "#FF6363"
        },
        black: {
          DEFAULT: "#212121"
        },
        silver: {
          DEFAULT: "#FAF5E4"
        }
      },
      fontFamily: {
        cbnreg : ["Cabin-Regular", "sans-serif"],
        cbnbold: ["Cabin-Bold", "sans-serif"],
        cbsemi: ["Cabin-SemiBold", "sans-serif"],
        cbmed: ["Cabin-Medium", "sans-serif"],
        fredreg: ["Fredoka-Regular", "sans-serif"],
        fredbold: ["Fredoka-Bold", "sans-serif"],
        fredsemi: ["Fredoka-SemiBold", "sans-serif"],
        fredlight: ["Fredoka-Light", "sans-serif"],
      }
    },
  },
  plugins: [],
}

