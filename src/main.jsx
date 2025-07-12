import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLogin from "./pages/user/Login.jsx";
import UserRegister from "./pages/user/Register.jsx";
import SellerLogin from "./pages/seller/Login.jsx";
import SellerRegister from "./pages/seller/Register.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/register",
    element: <UserRegister />,
  },
  {
    path: "/seller/login",
    element: <SellerLogin />,
  },
  {
    path: "/seller/register",
    element: <SellerRegister />,
  },
  {
    path: "*",
    element: <NotFoundPage/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

