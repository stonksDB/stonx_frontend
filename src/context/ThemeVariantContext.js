import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { darkTheme, lightTheme } from "../theme";

export const ThemeVariantProvider = (props) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    theme===lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  return (
    <ThemeVariantContext.Provider value={toggleTheme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </ThemeVariantContext.Provider>
  );
};

export const ThemeVariantContext = React.createContext((theme) => {});
