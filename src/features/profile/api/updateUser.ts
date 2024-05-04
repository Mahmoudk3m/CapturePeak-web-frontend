import { axiosClient } from "@/lib/axiosClient";
import { queryClient } from "@/lib/queryClient";
import useUserStore from "@/stores/userStore";
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const updateUser = async (data: { user: SettingsTypes.User }): Promise<SettingsTypes.UpdateUser> => {
  return await axiosClient.put("/update", data);
};

export const useUpdateUser = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  return useMutation({
    mutationFn: updateUser,
    mutationKey: "updateUser",
    onSuccess: (data) => {
      Cookies.set("token", data.token);
      setUser(data);
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    }
  });
};
