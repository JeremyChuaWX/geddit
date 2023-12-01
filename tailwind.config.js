/** @type {import('tailwindcss').Config} */
export default {
    content: ["./templates/**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
