import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[500] bg-black/10 backdrop-blur-sm flex justify-center items-center px-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white text-black w-full h-[600px] max-w-md rounded-lg p-6 relative shadow-xl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-700 hover:text-black"
        >
          &times;
        </button>

        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded ${isLogin ? "bg-rose-500 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded ${!isLogin ? "bg-rose-500 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <div className="text-center">or</div>
              <div className="flex flex-col space-y-2">
                <button className="w-full border rounded py-2 hover:bg-gray-100">
                  Continue with Google
                </button>
                <button className="w-full border rounded py-2 hover:bg-gray-100">
                  Continue with Email
                </button>
              </div>
              <div className="mt-32">
                <button
                  type="submit"
                  className="w-full bg-rose-500  hover:bg-rose-600 text-white rounded py-2"
                >
                  Login
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <div className="flex items-center border border-gray-300 rounded p-2 focus-within:ring-2 focus-within:ring-rose-400">
                <span className="text-gray-500 px-2 border-r border-gray-300 select-none">+91</span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 px-2 outline-none bg-transparent"
                />
              </div>
              <div className="mt-25">
                <button
                  type="submit"
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded py-2"
                >
                  Register
                </button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Login;
