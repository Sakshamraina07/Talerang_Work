/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#D32F2F", // Brand Red
                secondary: "#1E3A8A", // Dark Blue
                dark: "#0F172A", // Slate 900
                light: "#F3F4F6", // Gray 100
                muted: "#64748B", // Slate 500
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1400px",
                },
            },
        },
    },
    plugins: [],
}
