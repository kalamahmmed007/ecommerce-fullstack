import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <button
            onClick={toggleTheme}
            className="rounded bg-gray-200 p-2 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
};

export default ThemeToggle;
