import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProfilePage } from "../pages/ProfilePage";
import { Layout } from "../layouts/Layout";
import { FeedListPage } from "../pages/feeds/List";
import { FeedCreatePage } from "../pages/feeds/Create";
import { LoginPage } from "../pages/auth/Login";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <ProfilePage /> },
      { path: "login", element: <LoginPage /> },
      {
        path: "feeds",
        children: [
          { path: "", element: <FeedListPage /> },
          { path: "create", element: <FeedCreatePage /> },
        ],
      },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
]);
