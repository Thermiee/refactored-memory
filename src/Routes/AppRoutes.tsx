// src/Routes.tsx
import { RouteObject } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import Login from "../Pages/Auth/Login";
import NotFound from "../Pages/Notfound";

export const AuthRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> }, 
      { path: "auth", children: [
        { path: "forgot-password", element: <ForgotPassword /> },
      ]},
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];