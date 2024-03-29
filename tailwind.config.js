const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      rotate: {
        270: "270deg",
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/images/Somos-o-Einstein-Floripa.jpg')",
        "aboutbg-pattern": "url('/images/bgabout.jpg')",
        "about-pattern": "url('/images/sobre-nos.jpg')",
        "home-pattern": "url('/images/home.jpg')",
        "jogo": "url('/images/o-jogo.png')",
      }),
      borderRadius: {
        lg: "10px",
      },
      colors: {
        blue: {
          DEFAULT: "#0185C3",
          50: "#ceebf1",
          100: "#0E29D6",
          200: "#0C25BE",
          300: "#2F6AA7",
          400: "#163b61",
          500: "#4c7ec0",
          600: "#06125F",
          700: "#0095B6",
          800: "#030930",
          900: "#011e30",
        },
        "light-blue": {
          DEFAULT: "#E7EAFD",
          50: "#E7EAFD",
          100: "#CFD5FC",
          200: "#B7C0FA",
          300: "#9FABF8",
          400: "#8797F7",
          500: "#6F82F5",
          600: "#576DF3",
          700: "#3F58F1",
          800: "#2743F0",
          900: "#0F2EEE",
        },
        pink: {
          DEFAULT: "#FD40FE",
          50: "#FD40FE",
          100: "#E43AE5",
          200: "#CA33CB",
          300: "#B12DB2",
          400: "#982698",
          500: "#7F207F",
          600: "#651A66",
          700: "#4C134C",
          800: "#330D33",
          900: "#190619",
        },
        "light-pink": {
          DEFAULT: "#FFECFF",
          50: "#FFECFF",
          100: "#FFD9FF",
          200: "#FEC6FF",
          300: "#FEB3FF",
          400: "#FEA0FF",
          500: "#FE8CFE",
          600: "#FE79FE",
          700: "#FD66FE",
          800: "#FD53FE",
          900: "#FD40FE",
        },
        red: {
          DEFAULT: "#FFF1F0",
          50: "#FFF1F0",
          100: "#FFCCC7",
          200: "#FFA39E",
          300: "#FF7875",
          400: "#FF4D4F",
          500: "#F5222D",
          600: "#CF1322",
          700: "#A8071A",
          800: "#820014",
          900: "#5C0011",
        },
        orange: {
          DEFAULT: "#FFF7E6",
          50: "#FFF7E6",
          100: "#FFE7BA",
          200: "#FFD591",
          300: "#FFC069",
          400: "#FFA940",
          500: "#FA8C16",
          600: "#D46B08",
          700: "#AD4E00",
          800: "#873800",
          900: "#612500",
        },
        green: {
          DEFAULT: "#DBF4A7",
          50: "#F6FFED",
          100: "#D9F7BE",
          200: "#B7EB8F",
          300: "#95DE64",
          400: "#73D13D",
          500: "#52C41A",
          600: "#389E0D",
          700: "#237804",
          800: "#135200",
          900: "#092B00",
        },
        yellow: {
          DEFAULT: "#FEEA78",
        },
        gray: {
          DEFAULT: "#FAFAFA",
          50: "#F5F5F5",
          100: "#F0F0F0",
          200: "#D9D9D9",
          300: "#BFBFBF",
          400: "#8C8C8C",
          500: "#595959",
          600: "#434343",
          700: "#262626",
          800: "#1F1F1F",
          900: "#141414",
        },
        purple: {
          DEFAULT: "#563f67",
          50: "#DCC1EA",
          100: "#494d93",
          150: "#B796CF",
          700: "#002535",
          800: "#522583",
        },
        magenta: "#7622A8",
        "secondary-black": "#0B0A15",
        black: "#0A0A06",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
