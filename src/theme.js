import { createMuiTheme } from "@material-ui/core/styles";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#336CFB",
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
});

export default lightTheme;
