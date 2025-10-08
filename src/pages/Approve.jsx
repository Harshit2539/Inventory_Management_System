import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

const Approve = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all"); // all, pending, approved
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  // Simulate API data loading
  useEffect(() => {
    setIsLoading(true);
    // Simulate API call delay
    const timer = setTimeout(() => {
      setUsers([
        {
          id: 1,
          userId: "41001461",
          name: "Vinit Yadav",
          mobile: "9390459888",
          email: "vinit.yadav",
          division: "BIDC",
          hod: "",
          mobile2: "",
          dept: "IT",
          zone: "",
          role: "Admin",
          approved: false,
          registrationDate: "2023-05-15",
        },
        {
          id: 2,
          userId: "41002345",
          name: "Neeraj Gupta",
          mobile: "0390459800",
          email: "neeraj.p.k",
          division: "BIDC",
          hod: "",
          mobile2: "",
          dept: "IT",
          zone: "",
          role: "Admin",
          approved: false,
          registrationDate: "2023-05-16",
        },
        {
          id: 3,
          userId: "22331234",
          name: "Manisha K",
          mobile: "1490409849",
          email: "manisha.k",
          division: "BIDC",
          hod: "",
          mobile2: "",
          dept: "IT",
          zone: "",
          role: "Admin",
          approved: false,
          registrationDate: "2023-05-17",
        },
      ]);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Show notification and auto-hide
  const showNotificationMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleApprove = (id) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, approved: true } : user))
    );
    const userName = users.find(user => user.id === id).name;
    showNotificationMessage(`Approved user: ${userName}`);
  };

  const handleBulkApprove = () => {
    if (selectedUsers.length === 0) return;
    
    setUsers(
      users.map((user) => 
        selectedUsers.includes(user.id) ? { ...user, approved: true } : user
      )
    );
    showNotificationMessage(`Approved ${selectedUsers.length} users`);
    setSelectedUsers([]);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const pendingUserIds = filteredUsers
        .filter(user => !user.approved)
        .map(user => user.id);
      setSelectedUsers(pendingUserIds);
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate API refresh
    setTimeout(() => {
      setIsLoading(false);
      showNotificationMessage("User list refreshed");
    }, 800);
  };

  const handleExport = () => {
    // In a real app, this would generate a CSV/Excel file
    showNotificationMessage("Export functionality would be implemented here");
  };

  // Filter and search users
  const filteredUsers = users
    .filter(user => {
      if (filter === "pending") return !user.approved;
      if (filter === "approved") return user.approved;
      return true;
    })
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.userId.includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const pendingCount = users.filter(user => !user.approved).length;

  return (
    <Layout>
       {/* <div className="ml-72 p-6"> */}
      {/* <div className="w-full max-w-8xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"></div> */}
      <div className="min-h-screen bg-gray-50 p-6">
        {/* <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"> */}
          {/* Header Section */}
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="font-bold text-3xl text-gray-800">Approve Users</h1>
              {/* <p className="text-gray-500 mt-1">
                Review and approve pending user registrations
              </p> */}
            </div>
            
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button 
                onClick={handleExport}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Export
              </button>
              <button 
                onClick={handleRefresh}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Refresh
              </button>
            </div>
          </div>

          {/* Stats and Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-blue-800">Total Users</h3>
                  <p className="text-2xl font-bold text-gray-800">{users.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <div className="flex items-center">
                <div className="rounded-full bg-amber-100 p-3 mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-amber-800">Pending Approval</h3>
                  <p className="text-2xl font-bold text-gray-800">{pendingCount}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <div className="flex items-center">
                <div className="rounded-full bg-green-100 p-3 mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-green-800">Approved Users</h3>
                  <p className="text-2xl font-bold text-gray-800">{users.length - pendingCount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  filter === "all" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Users
              </button>
              <button
                onClick={() => setFilter("pending")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  filter === "pending" 
                    ? "bg-amber-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Pending Approval
              </button>
              <button
                onClick={() => setFilter("approved")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  filter === "approved" 
                    ? "bg-green-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Approved
              </button>
            </div>
            
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          {/* Bulk Actions */}
          {filter === "pending" && pendingCount > 0 && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedUsers.length > 0 && selectedUsers.length === filteredUsers.filter(u => !u.approved).length}
                  onChange={handleSelectAll}
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {selectedUsers.length > 0 
                    ? `Selected ${selectedUsers.length} users` 
                    : "Select all pending users"}
                </span>
              </div>
              
              {selectedUsers.length > 0 && (
                <button
                  onClick={handleBulkApprove}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Approve Selected ({selectedUsers.length})
                </button>
              )}
            </div>
          )}

          {/* Users Table */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            {isLoading ? (
              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                  <svg className="w-6 h-6 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">Loading users</h3>
                <p className="text-gray-500">Please wait while we fetch the user data</p>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No users found</h3>
                <p className="text-gray-500">
                  {searchTerm 
                    ? `No users match your search for "${searchTerm}"` 
                    : "There are no users to display with the current filters"}
                </p>
                {(searchTerm || filter !== "all") && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setFilter("all");
                    }}
                    className="mt-4 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      {filter === "pending" && (
                        <th className="px-4 py-3 text-center font-medium w-12">
                          <input
                            type="checkbox"
                            checked={selectedUsers.length > 0 && selectedUsers.length === filteredUsers.filter(u => !u.approved).length}
                            onChange={handleSelectAll}
                            className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                        </th>
                      )}
                      <th className="px-4 py-3 text-left font-medium">Sr No</th>
                      <th className="px-4 py-3 text-left font-medium">User ID</th>
                      <th className="px-4 py-3 text-left font-medium">User Name</th>
                      <th className="px-4 py-3 text-left font-medium">Mobile</th>
                      <th className="px-4 py-3 text-left font-medium">Email ID</th>
                      <th className="px-4 py-3 text-left font-medium">Division</th>
                      <th className="px-4 py-3 text-left font-medium">Dept</th>
                      <th className="px-4 py-3 text-left font-medium">Role</th>
                      <th className="px-4 py-3 text-center font-medium">Status</th>
                      <th className="px-4 py-3 text-center font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredUsers.map((user, index) => (
                      <tr
                        key={user.id}
                        className={user.approved ? "bg-green-50" : "hover:bg-gray-50"}
                      >
                        {filter === "pending" && (
                          <td className="px-4 py-3 text-center">
                            {!user.approved && (
                              <input
                                type="checkbox"
                                checked={selectedUsers.includes(user.id)}
                                onChange={() => handleSelectUser(user.id)}
                                className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                              />
                            )}
                          </td>
                        )}
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3 font-medium text-gray-900">
                          {user.userId}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <span className="text-blue-800 font-medium">
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{user.name}</div>
                              <div className="text-xs text-gray-500">Registered: {user.registrationDate}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-col">
                            <span>{user.mobile}</span>
                            {user.mobile2 && (
                              <span className="text-xs text-gray-500">{user.mobile2}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <a
                            href={`mailto:${user.email}@relianceada.com`}
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                          >
                            {user.email}@relianceada.com
                          </a>
                        </td>
                        <td className="px-4 py-3">{user.division}</td>
                        <td className="px-4 py-3">{user.dept}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {user.role}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          {user.approved ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                              Approved
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-amber-400" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                              Pending
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {user.approved ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Approved
                            </span>
                          ) : (
                            <button
                              onClick={() => handleApprove(user.id)}
                              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              Approve
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Footer Stats */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500 mb-4 sm:mb-0">
              Showing {filteredUsers.length} of {users.length} users •{" "}
              {pendingCount} pending approval
            </p>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setFilter("pending")}
                className="px-4 py-2 text-sm font-medium text-amber-700 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors"
              >
                View Pending ({pendingCount})
              </button>
            </div>
          </div>
        {/* </div> */}

        {/* Notification Toast */}
        {showNotification && (
          <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg flex items-center animate-fadeIn">
            <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{notificationMessage}</span>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </Layout>
  );
};

export default Approve;