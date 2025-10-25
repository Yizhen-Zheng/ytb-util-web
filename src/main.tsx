import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "@/AppLayout";
import Dashboard from "@/pages/Dashboard";
import ProjectView from "@/pages/ProjectView";
import NodeInfoModal from "@/pages/NodeInfoModal";

import "@/styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "project/:projectId",
        Component: ProjectView,
        children: [{ path: "nodes/:nodeId", Component: NodeInfoModal }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
