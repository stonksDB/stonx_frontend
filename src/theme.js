import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { lato, latoThin, latoLight } from "./fonts.js";

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
    backgroundColor: "white",
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
      //backgroundColor: "white", TODO: Find why this also changes the input color
    },
    borderRadius: "15px 15px 5px 5px",
    width: "100%",
  },

  button: {
    width: "100%",
    display: "block",
    borderRadius: "15px",
    padding: 7,
    textAlign: "center",
  },

  //Graph styles
  grid: {
    line: {
      strokeDasharray: "6 6",
    },
  },
  crosshair: {
    line: {
      stroke: "#7ba0fc",
    },
  },
};

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#336CFB",
    },
    secondary: {
      main: "#FAC032",
    },
    text: {
      primary: "#414D55",
      secondary: "#8e8e8e",
    },
    background: {
      default: "#F1F5F8",
    },
    success: {
      main: "#219653",
    },
    error: {
      main: "#EB5757",
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
    },
    text: {
      primary: "#ffffffd6",
    },
    error: {
      main: "#ba000d",
    },
    success: {
      main: "#219653",
    },
  },
  ...themeGeneral,
  card: {
    ...themeGeneral.card,
    backgroundColor: "#1d1d1d",
  },
  search: {
    ...themeGeneral.search,
    backgroundColor: "#1d1d1d",
    [`& fieldset`]: {
      borderRadius: "15px 15px 5px 5px",
      borderColor: "#ffffff3b",
      transitionDuration: "100ms",
    },
  },
});
