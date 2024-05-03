import { Link, NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import useUserStore from "@/stores/userStore";

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
    <header className="w-full ">
      <div className="container">
        <div>
          <div className="flex justify-between flex-col sm:flex-row gap-4 items-center">
            <div className="flex flex-row items-center gap-2 relative">
              <Link to="/" className="block w-24 h-24 bg-gray-50 rounded-full">
                <img src="/logo.png" alt="Capture Peak's Logo" />
              </Link>
              <div className="flex-col hidden sm:flex">
                <h1 className="text-gradient font-bold text-xl">Capture Peak</h1>
                <small className="text-gray-400">A simple and clean media sharing platform</small>
              </div>
            </div>
            {!isNavbarHidden && !isLoggedIn && <Navbar />}
            {isLoggedIn && !isProfileImageHidden && (
              <NavLink to={`/profile/${user.username}`} className="bg-primary-50 p-2 rounded-full">
                <img
                  src={user.image || "https://static.productionready.io/images/smiley-cyrus.jpg"}
                  alt={user.username}
                  className="w-10 h-10 md:w-10 md:h-10 rounded-full object-cover"
                />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
