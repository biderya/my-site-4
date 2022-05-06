const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmGray: {
          50: "#FAFFFC",
        },
        nuur5_color: "#1A2A55",
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
      },
      backgroundImage: {
        "cart-image": "url('/feature-card-bg.webp')",
        "footer-image": "url('/footer-mask.webp')",
        beetle: "url('/photo-1549317661-bd32c8ce0db2.jpg')",
        fiat: "url('/photo-1557358070-ef6ae6f84629.jpg')",
        van: "url('/photo-1489824904134-891ab64532f1.jpg')",
        mini: "url('/photo-1503650923300-dd2f6a007eaf.jpg')",
      },
    },

    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      margin: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      center: true,
    },
  },
  plugins: [],
};
