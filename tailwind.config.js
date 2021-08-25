const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    mode: "jit",
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "hsl(180, 66%, 49%)",
                "primary-alt": "hsl(257, 27%, 26%)",
                secondary: "hsl(0, 87%, 67%)",
                gray: {
                    default: "hsl(0, 0%, 75%)",
                    violet: "hsl(257, 7%, 63%)",
                },
                "dark-blue": "hsl(255, 11%, 22%)",
                "dark-violet": "hsl(260, 8%, 14%)",
                "light-blue": "#9BE3E2",
            },
            fontSize: {
                body: "18px",
                "7x": "4rem",
            },
            lineHeight: {
                "super-tight": "1.1",
            },
            maxWidth: {
                "1/4": "25%",

                "1/2": "50%",

                "3/4": "75%",
            },
            gridTemplateColumns: {
                "1-auto": "1fr auto",
            },
            outline: {
                primary: ["3px solid hsl(180, 66%, 49%)"],
                error: ["3px solid  hsl(0, 87%, 67%)"]
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
