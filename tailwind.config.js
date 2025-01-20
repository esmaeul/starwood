/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '300ms', // Change the default duration to 300ms
      },
      screens: {
        sm: "640px",   // Small devices (phones)
        md: "768px",   // Medium devices (tablets)
        lg: "1024px",  // Large devices (laptops)
        xl: "1280px",  // Extra-large devices (desktops)
        "2xl": "1536px", // 2X-large devices (large desktops)
      },
      colors: {
        globalColor0: "#867034",
        globalColor1: "#303a50",
        globalColor2: "#02050a",
        globalColor3: "#494b51",
        globalColor4: "#d1cabe",
        globalColor5: "#ffffff",
        globalColor6: "#655839",
        globalColor7: "#4b4f58",
        globalColor8: "#f6f7f8",
        facbookColor: "#3b5998",
        youtubeColor: "#ff0000",
        instaColor: "#e1306c",
        twitterColor: "#1DA1F2", // Updated to today's X background color
      },
    },
  },
  plugins: [],
}