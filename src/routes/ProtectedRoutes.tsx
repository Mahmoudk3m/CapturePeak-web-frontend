import { Profile } from "@/features/profile";

const ProtectedRoutes = [
  {
    path: "/profile/:username",
    element: <Profile />
  }
];

export default ProtectedRoutes;
