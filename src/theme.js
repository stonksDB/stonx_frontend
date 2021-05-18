import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { lato, latoThin, latoLight } from "./fonts.js";

// TODO: check how to implement different font weights
// FIXME: currently font weights are implemented but not working

const lightTheme = createMuiTheme({
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

  typography: {
    fontFamily: "'Lato', sans-serif",
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [lato, latoLight, latoThin],
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
    },
    borderRadius: "15px",
    backgroundColor: "white",
    width: "100%",
  },

  search: {
    [`& fieldset`]: {
      borderRadius: "15px 15px 5px 5px",
      borderColor: "white",
    },
    borderRadius: "15px 15px 5px 5px",
    backgroundColor: "white",
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
});

export default responsiveFontSizes(lightTheme);
