import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "@/Shared/Layout/AppLayout";
import CommonRoutes from "./CommonRoutes";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [...CommonRoutes]
    }
  ]);

  return <RouterProvider router={router} />;
}
