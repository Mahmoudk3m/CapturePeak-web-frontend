import { Link, NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import useUserStore from "@/stores/userStore";
import Logout from "../components/Logout";

export default function Header() {
  const location = useLocation();

  const { user } = useUserStore();
  const isLoggedIn = !!user?.token;

  const isNavbarHidden = location.pathname === "/login" || location.pathname === "/register";

  const isProfileImageHidden =
    location.pathname === `/profile/${user?.username}` ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <header className="w-full mb-8">
      <div className="container">
        <div className="flex justify-between flex-col sm:flex-row items-center">
          <div className="flex flex-row items-center gap-2 relative">
            <Link to="/" className="block w-24 h-24 bg-gray-50 rounded-full">
              <img src="/logo.png" alt="Capture Peak's Logo" />
            </Link>
            <div className="flex-col hidden sm:flex">
              <h1 className="text-gradient font-bold text-xl">Capture Peak</h1>
              <small className="text-gray-400">A simple and clean media sharing platform</small>
            </div>
          </div>
          <div className="flex flex-row items-center gap-6">
            {!isNavbarHidden && !isLoggedIn && <Navbar />}
            {isLoggedIn && !isProfileImageHidden && (
              <NavLink to={`/profile/${user.username}`} className="bg-primary-50 p-2 rounded-full">
                <img
                  src={user.image || "https://static.productionready.io/images/smiley-cyrus.jpg"}
                  alt={user.username}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </NavLink>
            )}
            {isLoggedIn && <Logout />}
          </div>
        </div>
      </div>
    </header>
  );
}
