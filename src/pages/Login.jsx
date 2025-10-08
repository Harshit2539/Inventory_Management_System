import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState({
    userId: false,
    password: false,
  });

  const navigate = useNavigate();
  const dashboard = () => {
    navigate("/dashboard");
  };

  const handleFocus = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div
        className="bg-grey-400 shadow-lg"
        style={{ backgroundColor: "#f0f2f5" }}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          <div className="flex items-center">
            <img src="/1.png" alt="BSES Logo" className="h-12   sm:h-15" />
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg">
              <span className="text-xs sm:text-sm font-medium">Sign Up</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-7xl shadow-lg rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Rewards Section */}
            <div className="w-full lg:w-2/3 p-8 sm:p-12 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <img src="/inv.jpg" alt="BSES Logo" className="h-16 sm:h-25" />
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                      Inventory Management System
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-4">
                  <h2 className="text-lg sm:text-2xl font-bold text-blue-900">
                    BSES Rajdhani Power Ltd.
                  </h2>
                  <h3 className="text-base sm:text-xl text-blue-600 font-semibold">
                    BSES Yamuna Power Ltd.
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/3 p-6 sm:p-8 bg-white">
              <div className="h-full flex flex-col justify-center">
                <div className="mb-8">
                  <div className="space-y-4">
                    {/* User Id Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        User Id
                      </label>
                      <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        onFocus={() => handleFocus("userId")}
                        onBlur={() => handleBlur("userId")}
                        placeholder="Enter Your User Id"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Password Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => handleFocus("password")}
                        onBlur={() => handleBlur("password")}
                        placeholder="Enter Your password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Login Button */}
                    <button
                      onClick={dashboard}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 shadow-lg rounded-lg transition-colors duration-200"
                    >
                      Login
                    </button>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 pt-4">
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                      >
                        Keep me logged In
                      </a>
                      <a
                        href="/forgot-password"
                        className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Side */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
