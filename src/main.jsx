import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navbar } from "./components/pages/Navbar.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import { HomePage } from "./components/pages/HomePage.jsx";
import { DocsPage } from "./components/pages/DocsPage.jsx";
import { Typography } from "./components/sections/typography/Typography.jsx";
import { LandingPage } from "./components/sections/Website/LandingPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            index: true, // This makes it the default route
            element: <Typography />,
          },
          {
            path: "typography",
            element: <Typography />,
          },
          {
            path: "landingpage",
            element: <LandingPage />,
          },
        ],
      },
      {
        path: "/docs",
        element: <DocsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
