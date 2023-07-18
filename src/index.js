import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { AuthContextProvider } from "./contexts/authContext/AuthContext";
import { ThemeProvider } from "@material-tailwind/react";
ReactDOM.render(
  <AuthContextProvider>
    <ContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ContextProvider>
  </AuthContextProvider>,

  document.getElementById("root")
);
