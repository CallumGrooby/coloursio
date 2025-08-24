import { StrictMode } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/playground" replace />,
      },
      {
        path: "/playground",
        element: <HomePage />,
      },
      {
        path: "/contrast-checker",
        element: <ColorContrast />,
      },
      {
        path: "/docs",
        element: <DocsPage />,
        children: [
          { path: "/docs/how-it-works", element: <HowItWorks /> },
          { path: "/docs/about-us", element: <AboutUs /> },
          { path: "/docs/examples", element: <HowItWorks /> },
        ],
      },
    ],
  },
]);

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Navbar } from "./pages/Navbar.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { DocsPage } from "./pages/DocsPage.jsx";
import { HowItWorks } from "./pages/DocsPages/HowItWorks.jsx";
import { AboutUs } from "./pages/DocsPages/AboutUs.jsx";
import { ColorContrast } from "./pages/ColorContrast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
