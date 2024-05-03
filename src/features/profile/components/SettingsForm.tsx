import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../schemas/profile";
import { useForm } from "react-hook-form";
import useUserStore from "@/stores/userStore";
import { useState } from "react";
import { useUpdateUser } from "../api/updateUser";

export default function SettingsForm() {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(profileSchema) });
  const { user } = useUserStore();

  const [image, setImage] = useState();

  const { mutate } = useUpdateUser();

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data: SettingsTypes.User) => {
    if (image) {
      const base64 = await convertFileToBase64(image);
      data.image = base64;
    }

    if (!image) {
      data.image = user?.image || "";
    }

    mutate({ user: data });
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))} className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
      <div className="p-2 md:p-4">
        <div className="grid max-w-2xl mx-auto mt-8">
          <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
            <img
              className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300"
              src={user?.image || "https://static.productionready.io/images/smiley-cyrus.jpg"}
              alt="Bordered avatar"
            />

            <div className="flex flex-col space-y-5 sm:ml-8">
              <input
                type="file"
                className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-primary-500 rounded-lg border border-indigo-200 hover:bg-primary-700 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                {...register("image", {
                  onChange(e) {
                    setImage(e.target.files[0]);
                  }
                })}
              />
            </div>
          </div>
          <div className="items-center mt-8 sm:mt-14 text-primary-500">
            <div className="mb-2 sm:mb-6">
              <label className="block mb-2 text-sm font-medium text-indigo-900">Username</label>
              <input
                type="text"
                id="username"
                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                placeholder="Username"
                defaultValue={user?.username}
                {...register("username")}
              />
            </div>
            <div className="mb-2 sm:mb-6">
              <label className="block mb-2 text-sm font-medium text-indigo-900">Password</label>
              <input
                type="password"
                id="password"
                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                placeholder="12345678"
                {...register("password")}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
