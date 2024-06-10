import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  
      <BrowserRouter>
        <HelmetProvider>
        <ThemeContext>
          <App />
          </ThemeContext>
        </HelmetProvider>
      </BrowserRouter>
  
  </React.StrictMode>
);
serviceWorkerRegistration.register();
