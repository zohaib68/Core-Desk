"use client";

import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") as "light" | "dark" | null;
        const initial = saved || "light";

        document.documentElement.setAttribute("data-theme", initial);
        setTheme(initial);
    }, []);

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const next = e.target.checked ? "dark" : "light";

        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    };

    return (
        <label className="swap swap-rotate">

            {/* this checkbox controls the state */}
            <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={handleToggle}
            />

            {/* sun icon (light mode) */}
            <svg
                className="swap-on w-6 h-6 fill-current text-secondary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M5.64 17l-.71.71a1 1 0 101.41 1.41l.71-.71A1 1 0 005.64 17zM12 18a6 6 0 100-12 6 6 0 000 12zM12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM12 20a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
            </svg>

            {/* moon icon (dark mode) */}
            <svg
                className="swap-off w-6 h-6 fill-current text-secondary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
        </label>
    );
};