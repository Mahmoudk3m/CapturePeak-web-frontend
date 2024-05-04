import { queryClient } from "@/lib/queryClient";
import useUserStore from "@/stores/userStore";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    Cookies.remove("token");
    queryClient.invalidateQueries({ queryKey: ["posts"] });
    navigate("/");
  };
  return (
    <button
      onClick={handleLogout}
      className="relative inline-flex items-center justify-center h-12 px-6 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
    >
      <span className="absolute inset-0 flex items-center justify-center text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
        Logout
      </span>
      <span className="relative invisible">Logout</span>
    </button>
  );
}
