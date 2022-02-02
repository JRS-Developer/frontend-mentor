module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ["p-moderate-blue"]: "hsl(238, 40%, 52%)",
        ["p-soft-red"]: "hsl(358, 79%, 66%)",
        ["p-light-gray"]: "hsl(239, 57%, 85%)",
        ["p-pale-red"]: "hsl(357, 100%, 86%)",
        ["n-dark-blue"]: "hsl(212, 24%, 26%)",
        ["n-gray-blue"]: "hsl(211, 10%, 45%)",
        ["n-light-gray"]: "hsl(223, 19%, 93%)",
        ["n-v-light-gray"]: "hsl(228, 33%, 97%)",
      },
    },
  },
  plugins: [],
};
