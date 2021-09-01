const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "dark-blue": "hsl(209, 23%, 22%)", // Dark Mode Elements
                "very-dark-blue": "hsl(207, 26%, 17%)", // Dark Mode Background
                "very-dark-blue-alt": "hsl(200, 15%, 8%)", //Light mode text
                "dark-gray": "hsl(0, 0%, 52%)", // Light mode inputs
                "light-gray": "hsl(0, 0%, 98%)", // Light mode background
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
