"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme from what was set by the blocking script
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      // Read from what the blocking script already set
      const currentTheme = document.documentElement.getAttribute(
        "data-theme"
      ) as Theme | null;
      if (currentTheme === "dark" || currentTheme === "light") {
        return currentTheme;
      }
      // Fallback (shouldn't happen if script runs correctly)
      return "light";
    }
    return "light";
  });
  const [mounted] = useState(() => {
    // Only set mounted to true on client
    return typeof window !== "undefined";
  });

  useEffect(() => {
    if (!mounted) return;

    // Apply theme to document immediately
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Also update body background to prevent flash
    document.body.style.backgroundColor = "var(--bg-primary)";
  }, [theme, mounted]);

  // Apply theme on mount to prevent flash
  useEffect(() => {
    if (typeof window === "undefined") return;

    const applyTheme = () => {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme === "dark" || savedTheme === "light") {
        document.documentElement.setAttribute("data-theme", savedTheme);
        document.body.style.backgroundColor = "var(--bg-primary)";
      }
    };

    applyTheme();

    // Also apply on navigation
    const handleRouteChange = () => {
      applyTheme();
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
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
