import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { darkTheme, lightTheme } from "../theme";
import { SnackbarProvider } from "notistack";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayjsUtils from '@date-io/dayjs';

export const ThemeVariantProvider = (props) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    theme===lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  return (
    <ThemeVariantContext.Provider value={toggleTheme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <MuiPickersUtilsProvider utils={DayjsUtils}>
            {props.children}
          </MuiPickersUtilsProvider>
        </SnackbarProvider>
      </MuiThemeProvider>
    </ThemeVariantContext.Provider>
  );
};

export const ThemeVariantContext = React.createContext((theme) => {});
