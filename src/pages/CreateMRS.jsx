// src/pages/StockInventory.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMRS = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const data = [
    {
      order: "800000049023",
      description: "DCPG ST LTG PM ORDER : MCD SLM",
      planner: "HTM",
      date: "05.03.2025",
    },
    {
      order: "800000049024",
      description: "DCPN ST LTG PM ORDER : MCD REV",
      planner: "HTM",
      date: "05.03.2025",
    },
  ];

  const filtered = data.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  const handlePMOrder = () => {
    navigate("/cart")
  }

  return (
    <div className="ml-72 p-6">
      <div className="w-full max-w-8xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 border-b border-gray-200">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              BSES - Stock & Inventory System
            </h1>
            <p className="text-gray-600 mt-1">
              Maintenance Requisition System
            </p>
          </div>

          
          
        </div>

        {/* Sub Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
          <h2 className="text-center text-white text-xl font-semibold">
          MRS
          </h2>
          {/* <p className="text-center text-blue-100 text-sm mt-1">
            Maintenance Requisition Slip Creation
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
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64 transition-all"
                  placeholder="Enter search term (e.g. MCD)"
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
          {/* Table Header - Fixed to 5 columns */}
          <div className="grid grid-cols-5 bg-blue-50 text-sm font-semibold text-gray-700">
            <div className="p-4 border-r border-gray-200">PM Order</div>
            <div className="p-4 border-r border-gray-200">Description</div>
            <div className="p-4 border-r border-gray-200">Planner Group</div>
            <div className="p-4 border-r border-gray-200">Date</div>
            <div className="p-4">Action</div>
          </div>

          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-5 text-sm transition-colors hover:bg-gray-50 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
              >
                <div className="p-4 border-r border-gray-200 font-medium text-blue-700">
                  {item.order}
                </div>
                <div className="p-4 border-r border-gray-200">
                  {item.description}
                </div>
                <div className="p-4 border-r border-gray-200">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {item.planner}
                  </span>
                </div>
                <div className="p-4 border-r border-gray-200 font-medium text-gray-700">
                  {item.date}
                </div>
                <div className="p-4 flex items-center">
                  <button
                    onClick={handlePMOrder}
                    className="flex items-center justify-center w-10 h-10  hover:bg-blue-700 text-white rounded-full shadow-md transition-all duration-200 hover:scale-105"
                    title="View"
                  >
                    👁️
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500 col-span-5">
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

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            BSES Material Management System • {filtered.length} orders
            displayed
          </p>
        </div>
        {/* <div className="flex justify-end px-20 py-12">
          <button
            
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
          >
            Next →
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CreateMRS;