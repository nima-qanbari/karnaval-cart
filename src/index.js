import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme/default";
import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(  <ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
);

