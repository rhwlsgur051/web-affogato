import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/home";
import { Layout } from "./layouts/layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
    { path: "*", element: <Navigate to="/" /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
