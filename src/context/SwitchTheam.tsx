import React from "react";

interface SwitchThemeProps {
  initialTheme: string;
  children: React.ReactNode;
}
const getInitialTheme = () => {
  // if (typeof window !== "undefined" && window.localStorage) {
  //   const storedPrefs = window.localStorage.getItem("color-theme");
  //   if (typeof storedPrefs === "string") {
  //     return storedPrefs;
  //   }

  //   const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
  //   if (userMedia.matches) {
  //     return "dark";
  //   }
  // }

  return "light";
};

export const ThemeContext = React.createContext({});

export const ThemeProvider = ({ initialTheme, children }: SwitchThemeProps) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);
    localStorage.setItem("color-theme", rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  function SetDark() {
    setTheme("dark");
    rawSetTheme("dark");
  }

  function SetLight() {
    setTheme("light");
    rawSetTheme("light");
  }

  function getTheme() {
    return theme;
  }

  const toggleTheme = {
    setTheme: {
      SetDark,
      SetLight,
    },
    getTheme,
  };

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={toggleTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
