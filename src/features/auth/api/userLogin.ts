import { useNavigate } from "react-router-dom";
import { axiosClient } from "@/lib/axiosClient";
import { useMutation } from "react-query";
import Cookies from "js-cookie";
import useUserStore from "@/stores/userStore";

const userLogin = async (data: AuthTypes.Payload): Promise<AuthTypes.User> => {
  return await axiosClient.post("/login", data);
};

export const useUserLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  return useMutation({
    mutationKey: "userLogin",
    onSuccess: (data) => {
      Cookies.set("token", data.token);
      setUser(data);
      navigate("/");
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
    mutationFn: userLogin
  });
};
