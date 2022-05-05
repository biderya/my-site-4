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
      },
      backgroundImage: {
        'cart-image': "url('/feature-card-bg.webp')",
        'footer-image':"url('/footer-mask.webp')",
      }
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
