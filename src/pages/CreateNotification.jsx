import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Message = () => {
  const [searchNotif, setSearchNotif] = useState("");
  const [selectedNotification, setSelectedNotification] = useState(null);

  const navigate = useNavigate();

  const data = [
    {
      notif: "501469293",
      sysStatus: "OSNO",
      desc: "RMU/HT Panel faulty",
      date: "29.01.2025",
      order: "",
      equipment: "DL-11SWGABSF679985",
      maintenanceType: "PM01",
      orderType: "RC1",
      orderDesc: "RMU HT Panel Fault",
      priority: "High",
      location: "Nehru Place Substation",
      reportedBy: "Rajesh Kumar",
      reportedTime: "14:37:11"
    },
    {
      notif: "501460372",
      sysStatus: "OSNO",
      desc: "Transformer Overheating",
      date: "22.12.2024",
      order: "",
      equipment: "DL-11SWGABTR452341",
      maintenanceType: "CM02",
      orderType: "RC2",
      orderDesc: "Transformer Cooling System Fault",
      priority: "Medium",
      location: "Najafgarh Grid Station",
      reportedBy: "Mohan Singh",
      reportedTime: "10:15:22"
    },
    {
      notif: "501465223",
      sysStatus: "OSNO",
      desc: "Circuit Breaker Malfunction",
      date: "06.01.2025",
      order: "",
      equipment: "DL-11SWGACB783412",
      maintenanceType: "EM03",
      orderType: "RC3",
      orderDesc: "Circuit Breaker Stuck",
      priority: "Critical",
      location: "Sarita Vihar Substation",
      reportedBy: "Vikram Patel",
      reportedTime: "16:45:33"
    },
  ];

  const handleViewNotification = (notification) => {
    setSelectedNotification(notification);
  };

  const handleBackToList = () => {
    setSelectedNotification(null);
  };

  // If a notification is selected, show the detailed view
  if (selectedNotification) {
    return (
      <div className="ml-72 p-6">
        <div className="w-full max-w-8xl border border-gray-300 bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
            <h1 className="text-center font-bold text-xl mb-2">
              BSES - Notification Details
            </h1>
          </div>

          {/* Back Button */}
          <div className="bg-gray-100 p-3 border-b border-gray-300">
            <button 
              onClick={handleBackToList}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Notifications
            </button>
          </div>

          {/* Notification Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Notification Information</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Notification Number:</span>
                    <span className="font-semibold">{selectedNotification.notif}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">System Status:</span>
                    <span className="font-semibold">{selectedNotification.sysStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Date:</span>
                    <span className="font-semibold">{selectedNotification.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Time:</span>
                    <span className="font-semibold">{selectedNotification.reportedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Priority:</span>
                    <span className={`font-semibold ${
                      selectedNotification.priority === 'Critical' ? 'text-red-600' : 
                      selectedNotification.priority === 'High' ? 'text-orange-600' : 'text-yellow-600'
                    }`}>
                      {selectedNotification.priority}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Equipment Details</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Equipment ID:</span>
                    <span className="font-semibold">{selectedNotification.equipment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Location:</span>
                    <span className="font-semibold">{selectedNotification.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Maintenance Type:</span>
                    <span className="font-semibold">{selectedNotification.maintenanceType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Order Type:</span>
                    <span className="font-semibold">{selectedNotification.orderType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Reported By:</span>
                    <span className="font-semibold">{selectedNotification.reportedBy}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Issue Description</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700">{selectedNotification.desc}</p>
              </div>
            </div>

            {/* Order Description Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Order Description</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700">{selectedNotification.orderDesc}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
                Print Report
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default view - notification list
  return (
    <div className="ml-72 p-6">
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
          Notifi/Order
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
                  View Details
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
                    onClick={() => handleViewNotification(item)}
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all duration-200 hover:scale-105"
                    title="View Details"
                  >
                    👁️
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Message;