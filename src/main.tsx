import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/global.css";
import App from "@routes/App";
import { createBrowserRouter, Params, RouterProvider } from "react-router-dom";
import Sandbox from "@routes/Sandbox";
import Play from "@routes/Play";
import Create from "@routes/Create";
import Join from "@routes/Join";

const create = async ({ request }: { request: Request }) => {
  console.log("Create Game");
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sandbox",
        element: <Sandbox />,
      },
      {
        path: "/play",
        element: <Play />,
      },
      {
        path: "/create",
        element: <Create />,
        action: create,
      },
      {
        path: "/join",
        element: <Join />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
