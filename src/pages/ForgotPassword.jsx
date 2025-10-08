import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [userId, setUserId] = useState("");
  const [isFocused, setIsFocused] = useState({ userId: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the password reset logic
    // For now, we'll just show the success message
    setIsSubmitted(true);
  };

  const handleFocus = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: false }));
  };

  const backToLogin = () => {
    navigate("/");
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
            <img src="/logo_login.png" alt="BSES Logo" className="h-12 sm:h-15" />
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

            {/* Right Side - Forgot Password Form */}
            <div className="w-full lg:w-1/3 p-6 sm:p-8 bg-white">
              <div className="h-full flex flex-col justify-center">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Forgot Password
                  </h2>
                  
                  {!isSubmitted ? (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Enter your User ID and we'll send you instructions to reset your password.
                      </p>
                      
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

                      {/* Submit Button */}
                      <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 shadow-lg rounded-lg transition-colors duration-200"
                      >
                        Reset Password
                      </button>

                      {/* Back to Login Link */}
                      <div className="text-center pt-4">
                        <button
                          onClick={backToLogin}
                          className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                          Back to Login
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 text-center">
                      <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">Check Your Email</h3>
                      <p className="text-sm text-gray-600">
                        We've sent password reset instructions to your email address.
                      </p>
                      <button
                        onClick={backToLogin}
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 shadow-lg rounded-lg transition-colors duration-200"
                      >
                        Return to Login
                      </button>
                    </div>
                  )}
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

export default ForgotPassword;