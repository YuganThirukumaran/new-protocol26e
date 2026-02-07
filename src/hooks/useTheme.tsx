import React, { createContext, useContext, useEffect, useState } from "react";

type ReactNode = React.ReactNode;

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first, then default to light mode (for daylight video)
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored) return stored;
    }
    return "light"; // Default to light mode for daylight video
  });

  useEffect(() => {
    const root = document.documentElement;
    // Apply theme immediately
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
    
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Apply theme on mount to prevent flash
  useEffect(() => {
    const root = document.documentElement;
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") as Theme | null : null;
    const initialTheme = stored || "light";
    
    if (initialTheme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

