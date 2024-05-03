import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "@/Shared/Layout/AppLayout";
import CommonRoutes from "./CommonRoutes";
import useUserStore from "@/stores/userStore";
import ProtectedRoutes from "./ProtectedRoutes";

export default function AppRouter() {
  const { user } = useUserStore();
  const isAuth = !!user?.token;
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [...(isAuth ? ProtectedRoutes : []), ...CommonRoutes]
    }
  ]);

  return <RouterProvider router={router} />;
}
