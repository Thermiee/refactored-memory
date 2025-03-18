// src/Routes.tsx
import { RouteObject } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import Login from "../Pages/Auth/Login";
import NotFound from "../Pages/Notfound";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../Pages/Dashboard";
import TaskList from "../Pages/Tasks";
import Users from "../Pages/Users";

export const AuthRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      {
        path: "auth",
        children: [{ path: "forgot-password", element: <ForgotPassword /> }],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const HomeRoutes = {
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "tasks",
        element: <TaskList />,
      },
      {
        path: "users",
        element: <Users />,
      }
    ],
  }

