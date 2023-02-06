import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/admin";
import Post from "../pages/admin/Post";
function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <>Error Here</>,
    },
    {
      path: "post",
      element: <Post />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRouter;
