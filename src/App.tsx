import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/home";
import { useEffect, useState } from "react";
import { healthCheck } from "./api/axios";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const init = async () => {
    await healthCheck();
    setShowHeader(true);
  };

  useEffect(() => {
    init();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "*", element: <Navigate to="/" /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
