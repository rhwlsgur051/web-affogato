import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage } from "../pages/home";
import { Layout } from "../layouts/layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  { path: "*", element: <Navigate to="/" /> },
]);
