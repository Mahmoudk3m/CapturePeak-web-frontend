import { useState } from "react";
import { motion } from "framer-motion";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Auth() {
  const [currentForm, setCurrentForm] = useState("login");

  return (
    <main className="w-full flex-auto h-screen">
      <div className="container ">
        <div className="flex flex-col justify-center pt-32">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <motion.div
              className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
              animate={{ y: currentForm == "login" ? 0 : 10 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold capitalize">{currentForm}</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  {currentForm == "login" && (
                    <motion.div
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <LoginForm handleButtonPress={() => setCurrentForm("register")} />
                    </motion.div>
                  )}
                  {currentForm == "register" && (
                    <motion.div
                      initial={{ y: -60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    >
                      <RegisterForm handleButtonPress={() => setCurrentForm("login")} />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
