// tailwind.config.js

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [require("daisyui")],

    daisyui: {
        themes: [
            {
                light: {
                    /* Brand */
                    primary: "#5b5bd6",              // richer indigo (less default-looking)
                    "primary-content": "#ffffff",

                    secondary: "#0ea5a4",            // modern teal
                    "secondary-content": "#ffffff",

                    accent: "#f97316",               // vibrant orange (adds energy)
                    "accent-content": "#ffffff",

                    /* Base (more depth than plain gray) */
                    "base-100": "#F8F8F8",           // very soft background
                    "base-200": "#E8E8E8",           // subtle layer separation
                    "base-300": "#D3D3D3",

                    "base-content": "#0f172a",       // deep slate (great readability)

                    /* Neutral */
                    neutral: "#1e293b",
                    "neutral-content": "#f8fafc",

                    /* Feedback colors (slightly richer) */
                    info: "#0284c7",
                    "info-content": "#ffffff",

                    success: "#16a34a",
                    "success-content": "#ffffff",

                    warning: "#f59e0b",
                    "warning-content": "#78350f",

                    error: "#dc2626",
                    "error-content": "#ffffff",
                }
            },
            {
                dark: {
                    primary: "#818cf8",
                    "primary-content": "#1e1b4b",

                    secondary: "#2dd4bf",
                    "secondary-content": "#042f2e",

                    accent: "#fbbf24",
                    "accent-content": "#78350f",

                    neutral: "#020617",
                    "neutral-content": "#e5e7eb",

                    "base-100": "#0f172a",
                    "base-200": "#111827",
                    "base-300": "#1f2937",
                    "base-content": "#e5e7eb",

                    info: "#38bdf8",
                    "info-content": "#082f49",

                    success: "#4ade80",
                    "success-content": "#022c22",

                    warning: "#facc15",
                    "warning-content": "#422006",

                    error: "#f87171",
                    "error-content": "#450a0a",
                },
            },
        ],
    },
};