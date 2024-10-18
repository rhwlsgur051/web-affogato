import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProfilePage } from "../pages/ProfilePage";
import { Layout } from "../layouts/layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <ProfilePage /> }],
  },
  { path: "*", element: <Navigate to="/" /> },
]);
