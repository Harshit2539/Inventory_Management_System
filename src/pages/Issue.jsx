// src/pages/IssueMaterial.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IssueMaterial = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handlePMtable = () => {
    navigate('/PMOrder-Table')
  }

  const data = [
    {
      order: "100001249763",
      description: "LT cable faulty near SubStation A blk",
      date: "05.03.2025",
      mrs: "2964558",
    },
    {
      order: "100001249802",
      description: "Relay Repaired at PRIYANKA CAMP.",
      date: "05.03.2025",
      mrs: "2964621",
    },
    {
      order: "100001249929",
      description: "HT CBL FLT Desh Raj Dhaba to kudedan",
      date: "05.03.2025",
      mrs: "2965052",
    },
  ];

  const filtered = data.filter((item) =>
    item.order.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Search functionality would be triggered here
    }
  };

  return (
    <div className="ml-72 p-6">
      {/* <div className="flex justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6"> */}
      <div className="w-full max-w-8xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 border-b border-gray-200">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              BSES - Stock & Inventory System
            </h1>
            <p className="text-gray-600 mt-1">Material Issuance Portal</p>
          </div>

   
        </div>

        {/* Sub Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
          <h2 className="text-center text-white text-xl font-semibold">
            Issue Material
          </h2>
          {/* <p className="text-center text-blue-100 text-sm mt-1">
            Process material issuance for maintenance orders
          </p> */}
        </div>

        {/* Search */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <label className="text-sm font-medium text-gray-700 mr-3">
                Search PM Order:
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64 transition-all"
                  placeholder="Enter PM Order number (e.g. 10000)"
                />
              </div>
            </div>
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search Orders
              </button> */}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-5 bg-blue-50 text-sm font-semibold text-gray-700">
            <div className="p-4 border-r border-gray-200">PM Order</div>
            <div className="p-4 border-r border-gray-200">
              PM Order Description
            </div>
            <div className="p-4 border-r border-gray-200">Date</div>
            <div className="p-4 border-r border-gray-200">MRS</div>
            <div className="p-4 border-r border-gray-200">Action</div>
          </div>

          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-5 text-sm transition-colors hover:bg-blue-50 cursor-pointer ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                onClick={() => console.log("Order selected:", item.order)}
              >
                <div className="p-4 border-r border-gray-200 font-medium text-blue-700">
                  {item.order}
                </div>
                <div className="p-4 border-r border-gray-200">
                  {item.description}
                </div>
                <div className="p-4 border-r border-gray-200 font-medium text-gray-700">
                  {item.date}
                </div>
                <div className="p-4 border-r border-gray-200 font-medium text-green-700">
                  {item.mrs}
                </div>
                 <div className="p-4 flex font-medium text-green-700 items-center">
                  <button
                    onClick={handlePMtable}
                    className="flex items-center justify-center w-10 h-10  hover:bg-blue-700 text-white rounded-full shadow-md transition-all duration-200 hover:scale-105"
                    title="View"
                  >
                    👁️
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-gray-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>No orders found matching your search criteria</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {filtered.length > 0 && (
          <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-300 transition-colors">
              Export Data
            </button>
            <button onClick={handlePMtable} className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-colors">
              Process Issuance
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            BSES Material Management System • {filtered.length} orders
            displayed
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default IssueMaterial;
