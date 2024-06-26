import React, { useEffect } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import lightTheme from "@styles/themes/light";
import darkTheme from "@styles/themes/dark";
import useToggleTheme from "@hooks/useToggleTheme";

const themes: Record<string, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
};

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { theme } = useToggleTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
