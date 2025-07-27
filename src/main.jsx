import { StrictMode } from "react";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navbar } from "./pages/Navbar.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { DocsPage } from "./pages/DocsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
