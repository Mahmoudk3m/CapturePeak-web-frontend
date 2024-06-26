import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import loginSchema from "../schemas/login";
import ErrorMessage from "@/Shared/components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../api/userLogin";
import EyeOn from "@/assets/icons/EyeOn";
import EyeOff from "@/assets/icons/EyeOff";
import { useState } from "react";

export default function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginSchema) });

  const { mutate, isError } = useUserLogin();

  const onSubmit = (data: AuthTypes.Payload) => {
    const formattedData = {
      ...data,
      username: data.username.toLowerCase()
    };

    mutate(formattedData);
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
    >
      <div className="relative">
        <input
          id="username"
          type="text"
          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
          placeholder="Username"
          {...register("username")}
        />
        <label
          htmlFor="username"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Username
        </label>
        {errors.username?.message && <ErrorMessage message={errors.username.message} />}
      </div>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
          placeholder="Password"
          {...register("password")}
        />
        <label
          htmlFor="password"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Password
        </label>
        {showPassword ? (
          <div className="absolute right-0 top-2 cursor-pointer p-2 z-10" onClick={togglePassword}>
            <EyeOn />
          </div>
        ) : (
          <div className="absolute right-0 top-2 cursor-pointer p-2 z-10" onClick={togglePassword}>
            <EyeOff />
          </div>
        )}

        {errors.password?.message && <ErrorMessage message={errors.password.message} />}
        {isError && <ErrorMessage message="Wrong username or password" />}
      </div>
      <div className="relative">
        <button className="bg-primary-500 text-white rounded-md px-2 py-1">Submit</button>
      </div>
      <div className="relative">
        <button onClick={() => navigate("/register")} className="text-primary-500">
          Don't Have An Account ?
        </button>
      </div>
    </form>
  );
}
