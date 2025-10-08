// src/pages/StockInventoryMenu.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const StockInventoryMenu = () => {
  const navigate = useNavigate();

  const handlestock = () => {
    navigate("/stock-display");
  };

  const createMRS = () => {
    navigate("/create_mrs");
  };
  const issue = () => {
    navigate("/issue");
  };
  const message = () => {
    navigate("/message");
  };
  return (
    <div className="ml-72 p-6">
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-6">
        {/* Header Section */}
        <div className="w-full max-w-8xl bg-white p-6 rounded-xl shadow-lg border border-orange-100 mb-8">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              BSES - Stock & Inventory System
            </h1>
            <p className="text-gray-600 mt-1">Material Management Portal</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="flex items-center mb-2 md:mb-0">
              <div className="bg-orange-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-700">NEERAJ KUMAR</span>
            </div>

            <div className="flex items-center mb-2 md:mb-0">
              <div className="bg-orange-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-700">41016363</span>
            </div>

            <div className="flex items-center">
              <div className="bg-orange-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-700">8470945770</span>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Create MRS */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Create MRS
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Create Material Requisition Slips for inventory requests
            </p>
            <button
              onClick={createMRS}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-md"
            >
              Access MRS Creation
            </button>
          </div>

          {/* Issuance Material */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Issuance Material
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Process material issuance and track distribution
            </p>
            <button
              onClick={issue}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-md"
            >
              Access Material Issuance
            </button>
          </div>

          {/* Stock Display */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Stock Display
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              View current inventory levels and stock availability
            </p>
            <button
              onClick={handlestock}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md"
            >
              View Stock Levels
            </button>
          </div>

          {/* Create Notif/Order */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Create Notification/Order
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Generate notifications and purchase orders
            </p>
            <button
              onClick={message}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-md"
            >
              Create Notification
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>BSES Material Management System • Version 2.1</p>
        </div>
      </div>
    </div>
  );
};

export default StockInventoryMenu;
