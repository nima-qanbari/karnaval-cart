import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme/default";
import moment from "moment-jalaali";
import { create } from 'jss';
import rtl from "jss-rtl"
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
moment.loadPersian({ dialect: "persian-modern" });
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StylesProvider jss={jss}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StylesProvider>
);

