import { useNavigate } from "react-router-dom";
import { axiosClient } from "@/lib/axiosClient";
import { useMutation } from "react-query";
import Cookies from "js-cookie";
import useUserStore from "@/stores/userStore";

const userRegister = async (data: AuthTypes.Payload): Promise<AuthTypes.User> => {
  return await axiosClient.post("/register", data);
};

export const useUserRegister = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  return useMutation({
    mutationKey: "userRegister",
    onSuccess: (data) => {
      Cookies.set("token", data.token);
      setUser(data);
      navigate("/");
    },
    onError: (error) => {
      console.error("Registration error:", error);
    },
    mutationFn: userRegister
  });
};
