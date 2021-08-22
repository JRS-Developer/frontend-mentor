const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
            },
            fontSize: {
                body: "18px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
