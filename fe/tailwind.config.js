/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                igColor: "#2980b9",
            },
            fontFamily: {
                Pacifico: ['"Pacifico"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
