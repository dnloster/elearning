/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    important: "#root",
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
    options: {
        safelist: [
            "swal2-*", // Add all SweetAlert2 classes here
        ],
    },
};

