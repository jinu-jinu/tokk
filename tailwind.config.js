/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url(/images/noise.png)",
      },
      // transformOrigin: {

      // }
    },
    fontFamily: {
      Prompt: ["Prompt", "sans-serif"],
      Noto: ["Noto Sans KR", "sans-serif"],
      LOTTERIACHAB: ["LOTTERIACHAB", "sans-serif"],
    },
  },
  plugins: [],
};
