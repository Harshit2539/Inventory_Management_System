import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Home,
  UserPlus,
  CheckCircle,
  LogOut,
  ChevronDown,
  X,
  Menu,
  Plus,
  Bell,
  Settings,
  Users,
  File,
  Info,
} from "lucide-react";

const Sidebar = ({ activeRoute, setActiveRoute }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [ 
    { id: "dashboard", label: "Home", icon: Home, route: "/dashboard" },
    { id: "Users", label: "Users", icon: Users, route: "/Users" },
    // { id: "create-user", label: "Create User", icon: UserPlus, route: "/create-user" },
    { id: "approve", label: "Approve", icon: CheckCircle, route: "/approve" },
    { id: "MRS", label: "MRS", icon: File, route: "/create_mrs" },
    { id: "Material", label: "Material Issue", icon: Settings, route: "/issue" },
    { id: "Stock", label: "Stocks", icon: Info, route: "/stock-display" },
    { id: "Notif", label: "Notify/Order", icon: Bell, route: "/message" },
  ];

  const handlelogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-grey border-b shadow-sm sticky top-0 z-40">
        <button onClick={() => setIsMobileOpen(true)}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">BSES Portal</h1>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-blue-900 border-r border-gray-200 shadow-lg flex flex-col z-50 transform transition-transform duration-300
            ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
            ${isCollapsed ? "w-20" : "w-64"} 
            md:translate-x-0`}
      >
        {/* Close Button (Mobile) */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setIsMobileOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Header */}
        <div className="p-2 border-b border-gray-200 flex items-center space-x-4 justify-center">
          {/* Logo */}
          <div className="w-36 h-16 flex items-center justify-center">
            <img
              src="/logo_login.png"
              alt="BSES Logo"
              className="w-36 h-16 object-contain drop-shadow-md"
            />
          </div>

          {/* Text */}
          {/* {!isCollapsed && (
              <div className="flex flex-col justify-center">
                <h2 className="text-lg font-semibold text-gray-900">BSES Portal</h2>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Admin Dashboard
                </p>
              </div>
            )} */}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.id}>
              <Link
                to={item.route}
                onClick={() => {
                  setActiveRoute(item.id);
                  setIsMobileOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  activeRoute === item.id
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-white hover:bg-gray-50 hover:text-gray-600"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    activeRoute === item.id
                      ? "text-blue-600"
                      : "text-gray-400 group-hover:text-gray-600"
                  }`}
                />
                {!isCollapsed && (
                  <>
                    <span className="font-medium flex-1 text-left">
                      {item.label}
                    </span>
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </>
                )}
              </Link>

              {/* Submenu */}
              {item.submenu && !isCollapsed && activeRoute === item.id && (
                <div className="mt-2 ml-6 space-y-1">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.id}
                      to={subItem.route}
                      onClick={() => setActiveRoute(subItem.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span>{subItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* User Profile + Logout */}
        <div className="p-2 border-t border-gray-200">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
            <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              A
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-white">System Administrator</p>
              </div>
            )}
          </div>

          <button
            onClick={handlelogout}
            className="flex items-center gap-3 w-full px-4 py-2 mt-3 rounded-xl text-green-400 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && (
              <span className="font-medium text-sm">Sign Out</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
