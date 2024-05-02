import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AuthLayout({ children, currentForm }: { children: ReactNode; currentForm: string }) {
  return (
    <main className="w-full flex-auto h-screen">
      <div className="container ">
        <div className="flex flex-col justify-center pt-32">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <motion.div
              className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
              initial={{ y: currentForm === "login" ? 60 : -60, opacity: 0 }}
              animate={{ y: currentForm === "login" ? 0 : 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                type: currentForm === "register" ? "spring" : "tween",
                stiffness: currentForm === "register" ? 100 : undefined
              }}
            >
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold capitalize">{currentForm}</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <motion.div
                    initial={{ y: currentForm === "login" ? 60 : -60, opacity: 0 }}
                    animate={{ y: currentForm === "login" ? 0 : 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {children}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
