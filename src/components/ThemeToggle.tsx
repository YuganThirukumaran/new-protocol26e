import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    console.log("Theme changed to:", newTheme); // Debug log
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 w-12 h-12 bg-gray-900/80 dark:bg-white/80 backdrop-blur-sm border-2 border-red-600/30 dark:border-red-500/50 hover:border-red-600 dark:hover:border-red-500 text-white dark:text-gray-900 flex items-center justify-center group transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
      )}
      <div className="absolute -inset-[2px] bg-red-600/0 dark:bg-red-500/0 group-hover:bg-red-600/20 dark:group-hover:bg-red-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </button>
  );
}

