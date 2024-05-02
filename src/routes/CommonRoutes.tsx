import { Home } from "@/features/home";
import { Register, Login } from "@/features/auth";

const CommonRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },

  {
    path: "*",
    element: <div>Not Found</div>
  }
];

export default CommonRoutes;
