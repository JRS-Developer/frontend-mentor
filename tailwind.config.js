const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Spartan", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "hsl(180, 29%, 50%)",
                "light-g-cyan-bg": "hsl(180, 52%, 96%)",
                "light-g-cyan-tablets": "hsl(180, 31%, 95%)",
                "dark-g-cyan": "hsl(180, 8%, 52%)",
                "very-dark-g-cyan": "hsl(180, 14%, 20%)",
            },
            fontSize: {
                body: "18px",
            },
            borderWidth: {
                5: "5px",
                6: "6px",
            },
            boxShadow: {
                green: "0px 5px 20px 0px hsla(180, 29%, 50%,0.5)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
