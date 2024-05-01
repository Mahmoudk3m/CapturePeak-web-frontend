import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sm:flex">
      <div className="flex gap-4">
        <NavLink to="/login" className="btn-gradient text-lg font-bold">
          Login
        </NavLink>
        <NavLink to="/register" className="btn-gradient text-lg font-bold">
          Register
        </NavLink>
      </div>
    </nav>
  );
}
