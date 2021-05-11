import { createMuiTheme, responsiveFontSizes  } from "@material-ui/core/styles";

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
      secondary: "#636D73",
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

  button: {
    width: "100%",
    display: "block",
    borderRadius: "15px",
    padding: 7,
  },

  //Graph styles
  grid: {
    line: {
      strokeDasharray: "6 6"
    }
  },
  crosshair: {
    line: {
      stroke: "#7ba0fc",
    },
  },
});

export default responsiveFontSizes(lightTheme);
