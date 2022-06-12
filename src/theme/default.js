import { createTheme } from "@material-ui/core";
import dana from "../font/dana.css"

let theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      light: "#ff6161",
      main: "#ff6161",
      dark: "#ff6161",
      contrastText: "#fff",
    },
  },
  shape: {
    borderRadius: 30
  },
  typography: {
      fontFamily:"dana", 
  },
  
});

export {theme} ;