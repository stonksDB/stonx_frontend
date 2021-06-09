import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { lato, latoThin, latoLight } from "./fonts.js";
import { useState } from "react";

// TODO: check how to implement different font weights
// FIXME: currently font weights are implemented but not working

const themeGeneral = {
  typography: {
    fontFamily: "'Lato', sans-serif",
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [lato],
      },
    },
  },

  mixins: {
    toolbar: {
      minHeight: 85,
    },
  },

  card: {
    height: "100%",
    padding: 15,
    borderRadius: 15,
  },

  input: {
    [`& fieldset`]: {
      borderRadius: "15px",
      borderColor: "white",
      transitionDuration: "100ms",
    },
    [`& input`]: {
      backgroundColor: "white",
      borderRadius: "15px",
    },
    borderRadius: "15px",
    width: "100%",
  },

  search: {
    [`& fieldset`]: {
      borderRadius: "15px 15px 5px 5px",
      borderColor: "white",
      transitionDuration: "100ms",
    },
    borderRadius: "15px 15px 5px 5px",
    width: "100%",
    backgroundColor: "white",
  },

  button: {
    width: "100%",
    display: "block",
    borderRadius: "15px",
    padding: 7,
    textAlign: "center",
  },
};

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2360FB",
    },
    secondary: {
      main: "#FAC032",
    },
    text: {
      primary: "#414D55",
      secondary: "#707070",
    },
    background: {
      default: "#F1F5F8",
      paper: "#FFFFFF",
    },
    success: {
      main: "#1B7E48",
    },
    error: {
      main: "#DB1A1A",
    },
  },
  ...themeGeneral,
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#799aff",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#ffffffd6",
    },
    error: {
      main: "#FF2937",
    },
    success: {
      main: "#209754",
    },
  },
  ...themeGeneral,
  search: {
    ...themeGeneral.search,
    backgroundColor: "#1d1d1d",
    [`& fieldset`]: {
      borderRadius: "15px 15px 5px 5px",
      borderColor: "#ffffff3b",
      transitionDuration: "100ms",
    },
  },
  input: {
    ...themeGeneral,
    [`& input`]: {
      backgroundColor: "#1d1d1d",
    },
  },
});
