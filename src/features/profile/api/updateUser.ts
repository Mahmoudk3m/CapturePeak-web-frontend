import { axiosClient } from "@/lib/axiosClient";
import useUserStore from "@/stores/userStore";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const updateUser = async (data: { user: SettingsTypes.User }): Promise<SettingsTypes.UpdateUser> => {
  return await axiosClient.put("/update", data);
};

export const useUpdateUser = () => {
  const navigate = useNavigate();
  const { setUser, user } = useUserStore();
  console.log(user, "user store");

  return useMutation({
    onSuccess: (data) => {
      console.log(data, "data from update user");
      setUser(data);
      navigate(`/profile/${data.username}`);
    },
    mutationFn: updateUser
  });
};
