import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/global.css";
import App from "@routes/App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Sandbox from "@routes/Sandbox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sandbox",
        element: <Sandbox />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
