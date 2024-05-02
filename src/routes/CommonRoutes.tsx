import { Home } from "@/features/home";
import { Auth } from "@/features/auth";

const CommonRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: "/auth",
    element: <Auth />
  },
  {
    path: "*",
    element: <div>Not Found</div>
  }
];

export default CommonRoutes;
