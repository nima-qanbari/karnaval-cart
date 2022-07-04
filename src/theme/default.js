import { createTheme } from "@material-ui/core";
import dana from "../font/dana.css";

let theme = createTheme({
  direction: "rtl",

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: "#ff6161",
      main: "#ff6161",
      dark: "#ff6161",
      contrastText: "#fff"
    },
  },
  shape: {
    borderRadius: 30,
  },
  typography: {
    fontFamily: dana,
  },
  overrides: {
    MuiPaper: {
      root: {
        overflow: "hidden",
      }
    }
  }
});

export { theme };
