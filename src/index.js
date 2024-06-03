import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import HTML from "./pages/Html";
import CSS from "./pages/Css";
import JAVA from "./pages/Javascript";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h2>SOORY........</h2>,
  },
  {
    path: "/Html",
    element: <HTML />,
    errorElement: <h2>SOORY........</h2>,
  },
  {
    path: "/Css",
    element: <CSS />,
    errorElement: <h2>SOORY........</h2>,
  },
  {
    path: "/Javascript",
    element: <JAVA />,
    errorElement: <h2>SOORY........</h2>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
