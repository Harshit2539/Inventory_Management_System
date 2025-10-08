import React, { useState } from "react";
import {
  Search,
  Edit3,
  Filter,
  Download,
  Plus,
  Mail,
  Phone,
  Building,
  Shield,
  BarChart3,
  Package,
  Bell,
  FileText,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  ChevronRight,
  MoreVertical,
  UserPlus,
  RefreshCw,
  Eye,
  Trash2,
  ChevronLeft,
  ChevronDown,
  UserCheck,
  UserX
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout"; 

const Users = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [activeFilters, setActiveFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showFilters, setShowFilters] = useState(false);
  const [showUserActions, setShowUserActions] = useState(null);
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    {
      id: 1,
      srNo: 1,
      userId: "41001461",
      userName: "Vinit Yadav",
      mobile: "8090409868",
      email: "Vinit.Yadav@bses.com",
      division: "BIDC",
      dept: "IT",
      role: "Admin",
      active: true,
      avatar: "VY",
      lastLogin: "2023-12-15T10:30:00",
    },
    {
      id: 2,
      srNo: 2,
      userId: "41001462",
      userName: "Sarah Johnson",
      mobile: "9390409845",
      email: "sarah.johnson@bses.com",
      division: "BIDC",
      dept: "Finance",
      role: "Manager",
      active: false,
      avatar: "SJ",
      lastLogin: "2023-12-10T14:22:00",
    },
    {
      id: 3,
      srNo: 3,
      userId: "41001463",
      userName: "Michael Chen",
      mobile: "8390409811",
      email: "michael.chen@bses.com",
      division: "BIDC",
      dept: "Operations",
      role: "User",
      active: true,
      avatar: "MC",
      lastLogin: "2023-12-18T09:15:00",
    },
    {
      id: 4,
      srNo: 4,
      userId: "41001464",
      userName: "Priya Sharma",
      mobile: "7890123456",
      email: "priya.sharma@bses.com",
      division: "Operations",
      dept: "Logistics",
      role: "User",
      active: true,
      avatar: "PS",
      lastLogin: "2023-12-17T16:45:00",
    },
    {
      id: 5,
      srNo: 5,
      userId: "41001465",
      userName: "Rajesh Kumar",
      mobile: "8901234567",
      email: "rajesh.kumar@bses.com",
      division: "Finance",
      dept: "Accounts",
      role: "Manager",
      active: true,
      avatar: "RK",
      lastLogin: "2023-12-16T11:20:00",
    },
  ]);

  // Filter and sort users
  const filteredUsers = users
    .filter(user => {
      const matchesSearch = user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.userId.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilters = Object.entries(activeFilters).every(([key, value]) => {
        if (!value) return true;
        return user[key] === value;
      });
      
      return matchesSearch && matchesFilters;
    })
    .sort((a, b) => {
      if (!sortConfig.key) return 0;
      
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(currentUsers.map(user => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const toggleActive = (id) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const updateUser = (user) => {
    navigate("/change-user", { state: { user } });
  };

  const addUser = () => navigate("/create-user");

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value === 'all' ? null : value
    }));
    setCurrentPage(1);
  };

  const exportUsers = () => {
    // Simulate export functionality
    alert(`Exporting ${selectedUsers.length} users`);
  };

  const deleteUsers = () => {
    if (selectedUsers.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedUsers.length} user(s)?`)) {
      setUsers(prev => prev.filter(user => !selectedUsers.includes(user.id)));
      setSelectedUsers([]);
    }
  };

  const getUniqueValues = (key) => {
    return [...new Set(users.map(user => user[key]))];
  };

  const formatLastLogin = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <Layout>
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">User Management</h2>
          {/* <p className="text-gray-600 mt-1">Manage system users and permissions</p> */}
        </div>
        
        <div className="flex flex-wrap gap-3">
          <button
            onClick={addUser}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            Add User
          </button>
          
          {selectedUsers.length > 0 && (
            <>
              <button
                onClick={exportUsers}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={deleteUsers}
                className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </>
          )}
        </div>
      </div>

      {/* Filters and Search Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users by name, email, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          
          <div className="flex gap-3 w-full lg:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              <Filter className="w-4 h-4" />
              Filters
              {Object.values(activeFilters).filter(Boolean).length > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {Object.values(activeFilters).filter(Boolean).length}
                </span>
              )}
            </button>
            
            <button
              onClick={() => {
                setActiveFilters({});
                setSearchTerm("");
                setSortConfig({ key: null, direction: 'ascending' });
              }}
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              <RefreshCw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                onChange={(e) => handleFilterChange('active', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="all">All Status</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <select
                onChange={(e) => handleFilterChange('role', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="all">All Roles</option>
                {getUniqueValues('role').map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <select
                onChange={(e) => handleFilterChange('dept', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="all">All Departments</option>
                {getUniqueValues('dept').map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === currentUsers.length && currentUsers.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                {[
                  { key: 'srNo', label: 'SR NO' },
                  { key: 'userId', label: 'USER ID' },
                  { key: 'userName', label: 'USER NAME' },
                  { key: 'mobile', label: 'MOBILE' },
                  { key: 'email', label: 'EMAIL' },
                  { key: 'division', label: 'DIVISION' },
                  { key: 'dept', label: 'DEPT' },
                  { key: 'role', label: 'ROLE' },
                  { key: 'active', label: 'STATUS' },
                  { key: 'lastLogin', label: 'LAST LOGIN' }
                ].map(({ key, label }) => (
                  <th
                    key={key}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => handleSort(key)}
                  >
                    <div className="flex items-center gap-1">
                      {label}
                      {sortConfig.key === key && (
                        <ChevronDown className={`w-3 h-3 transition-transform ${sortConfig.direction === 'descending' ? 'rotate-180' : ''}`} />
                      )}
                    </div>
                  </th>
                ))}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{user.srNo}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 font-mono">{user.userId}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-medium text-sm">
                        {user.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.userName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{user.mobile}</td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${user.email}`}
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3" />
                      {user.email}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{user.division}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{user.dept}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.role === "Admin"
                          ? "bg-purple-100 text-purple-800"
                          : user.role === "Manager"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleActive(user.id)}
                        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                          user.active ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                            user.active ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                      <span className="ml-2 text-xs text-gray-600">
                        {user.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {formatLastLogin(user.lastLogin)}
                  </td>
                  <td className="px-4 py-3">
                    <div className="relative">
                      <button
                        onClick={() => setShowUserActions(showUserActions === user.id ? null : user.id)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      
                      {showUserActions === user.id && (
                        <div className="absolute right-0 z-10 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1">
                          <button
                            onClick={() => updateUser(user)}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Edit3 className="w-4 h-4" />
                            Edit User
                          </button>
                          <button
                            onClick={() => toggleActive(user.id)}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {user.active ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                            {user.active ? 'Deactivate' : 'Activate'}
                          </button>
                          <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <Eye className="w-4 h-4" />
                            View Details
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">No users found</div>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveFilters({});
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredUsers.length > 0 && (
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredUsers.length)}</span> of{' '}
                <span className="font-medium">{filteredUsers.length}</span> users
              </div>
              
              <div className="flex items-center gap-2">
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                >
                  <option value="5">5 per page</option>
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = currentPage <= 3 ? i + 1 : 
                               currentPage >= totalPages - 2 ? totalPages - 4 + i : 
                               currentPage - 2 + i;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 rounded-md text-sm ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Users;