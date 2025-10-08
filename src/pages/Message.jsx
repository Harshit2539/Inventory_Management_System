// src/pages/CreateOrder.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Message = () => {
  const [searchNotif, setSearchNotif] = useState("");
  const [searchType, setSearchType] = useState("");

  const navigate = useNavigate()

  const handleNotification = () => {
    navigate('/notification')
  }

  const data = [
    {
      notif: "501469293",
      sysStatus: "OSNO",
      desc: "RMU/HT Panel faulty",
      date: "29.01.2025",
      order: "",
    },
    {
      notif: "501460372",
      sysStatus: "OSNO",
      desc: "RMU/HT Panel faulty",
      date: "22.12.2024",
      order: "",
    },
    {
      notif: "501465223",
      sysStatus: "OSNO",
      desc: "RMU/HT Panel faulty",
      date: "06.01.2025",
      order: "",
    },
  ];

  return (
    <div className="ml-72 p-6">
      {/* <div className="flex justify-center min-h-screen bg-gray-100 p-6"> */}
        <div className="w-full max-w-8xl border border-gray-300 bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
            <h1 className="text-center font-bold text-xl mb-2">
              BSES - Stock & Inventory
            </h1>
            {/* <div className="flex justify-between items-center text-sm">
              <div>
                <span className="font-semibold">Emp Name:</span> NEERAJ KUMAR
              </div>
              <div>
                <span className="font-semibold">Emp No.:</span> 41016363
              </div>
              <div>
                <span className="font-semibold">Mobile:</span> 8470945770
              </div>
              <div>
                <span className="font-semibold">Date:</span> 05.03.2025
              </div>
            </div> */}
          </div>

          {/* Page Title */}
          <div className="bg-blue-100 border-b border-gray-300 text-center py-3 font-semibold text-blue-800 text-lg">
             Notify/Order
          </div>

          {/* Search Section */}
          <div className="p-4 border-b border-gray-300 bg-gray-50">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search Notification
                </label>
                <div className="flex rounded-md shadow-sm">
                  <input
                    type="text"
                    value={searchNotif}
                    onChange={(e) => setSearchNotif(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Notification number"
                  />
                  <button className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    <svg
                      className="h-4 w-4"
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
                  </button>
                </div>
              </div>
              {/* <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search Type
                </label>
                <div className="flex rounded-md shadow-sm">
                  <input
                    type="text"
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="RMU/HT"
                  />
                  <button className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    <svg
                      className="h-4 w-4"
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
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b border-gray-300">
                    Notification
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b border-gray-300">
                    System Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b border-gray-300">
                    Description
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b border-gray-300">
                   Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider border-b border-gray-300">
                    view Order
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.notif}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {item.sysStatus}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {item.desc}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {item.date}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                     <button
                    onClick={handleNotification}
                    className="flex items-center justify-center w-10 h-10  hover:bg-blue-700 text-white rounded-full shadow-md transition-all duration-200 hover:scale-105"
                    title="View"
                  >
                    👁️
                  </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Form Section */}
          {/* <div className="p-6 space-y-6"> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notification
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                  value="501469293"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                  value="RMU/HT Panel faulty"
                  readOnly
                />
              </div>
            </div> */}

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Equipment
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                value="DL-11SWGABSF679985"
                readOnly
              />
            </div> */}

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maintenance Type
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                  value="PM01"
                  readOnly
                />
                <p className="mt-1 text-xs text-gray-500">RMU Faulty</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order Type
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                  value="RC1"
                  readOnly
                />
                <p className="mt-1 text-xs text-gray-500">Maintenance Order</p>
              </div>
            </div> */}

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Order Description
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value="RMU HT Panel Fault"
              />
            </div> */}

            {/* <div className="flex justify-center pt-4">
              <button onClick={handleNotification} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              View More
              </button>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    // </div>
  );
};

export default Message;
