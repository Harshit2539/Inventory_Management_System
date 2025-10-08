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
    Users
  } from "lucide-react";
  import { useNavigate } from "react-router-dom";
  import Layout from "../components/Layout"; 

  const Home = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
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
      },
    ]);

    // Card data with navigation paths
    const cardData = [
      {
        id: 1,
        title: "MRS",
        value: "4",
        change: "+12%",
        isPositive: true,
        icon: <Building className="w-5 h-5" />,
        color: "bg-blue-500",
        path: "/create_mrs"
      },
      {
        id: 2,
        title: "Material Issue",
        value: "5",
        change: "+5%",
        isPositive: true,
        icon: <Package className="w-5 h-5" />,
        color: "bg-green-500",
        path: "/issue"
      },
      {
        id: 3,
        title: "Stock",
        value: "3",
        change: "-3%",
        isPositive: false,
        icon: <FileText className="w-5 h-5" />,
        color: "bg-amber-500",
        path: "/stock-display"
      },
      {
        id: 4,
        title: "Notify/Order",
        value: "2",
        change: "+23%",
        isPositive: true,
        icon: <Bell className="w-5 h-5" />,
        color: "bg-purple-500",
        path: "/message"
      },
      {
        id: 5,
        title: "Users",
        value: "3",
        change: "+23%",
        isPositive: true,
        icon: <Plus className="w-5 h-5" />,
        color: "bg-purple-500",
        path: "/Users"
      },
    ];

    // Static data for charts
    const monthlyData = [
      { month: "Jan", value: 65 },
      { month: "Feb", value: 78 },
      { month: "Mar", value: 90 },
      { month: "Apr", value: 81 },
      { month: "May", value: 56 },
      { month: "Jun", value: 55 },
      { month: "Jul", value: 40 },
      { month: "Aug", value: 65 },
      { month: "Sep", value: 85 },
      { month: "Oct", value: 92 },
      { month: "Nov", value: 108 },
      { month: "Dec", value: 95 }
    ];

    const categoryData = [
      { category: "Electrical", value: 35, color: "bg-blue-500" },
      { category: "Mechanical", value: 25, color: "bg-green-500" },
      { category: "Plumbing", value: 20, color: "bg-amber-500" },
      { category: "IT Equipment", value: 15, color: "bg-purple-500" },
      { category: "Other", value: 5, color: "bg-gray-500" }
    ];

    const statusData = [
      { status: "Completed", value: 65, color: "bg-green-500" },
      { status: "In Progress", value: 20, color: "bg-blue-500" },
      { status: "Pending", value: 10, color: "bg-amber-500" },
      { status: "Rejected", value: 5, color: "bg-red-500" }
    ];

    // Function to handle card click
    const handleCardClick = (path) => {
      navigate(path);
    };

    // Bar Chart Component
    const BarChart = ({ data, title, height = 200 }) => {
      const maxValue = Math.max(...data.map(item => item.value));
      
      return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
          <div className="flex items-end justify-between h-48 gap-2">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="text-xs text-gray-500 mb-1">{item.month}</div>
                <div
                  className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                />
                <div className="text-xs text-gray-600 mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      );
    };

    // Pie Chart Component
    const PieChart = ({ data, title }) => {
      const total = data.reduce((sum, item) => sum + item.value, 0);
      let accumulated = 0;
      
      return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              {data.map((item, index) => {
                const percentage = (item.value / total) * 100;
                const rotation = (accumulated / total) * 360;
                accumulated += item.value;
                
                return (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full rounded-full ${item.color} clip-path-[polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)]`}
                    style={{
                      clipPath: `conic-gradient(from ${rotation}deg, transparent 0%, transparent ${percentage}%, ${item.color} ${percentage}%)`,
                      opacity: 0.7
                    }}
                  />
                );
              })}
            </div>
            <div className="ml-6 space-y-2">
              {data.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${item.color} mr-2`} />
                  <span className="text-sm text-gray-600">
                    {item.category || item.status}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    // Simple Line Chart Component
    const LineChart = ({ data, title }) => {
      const maxValue = Math.max(...data.map(item => item.value));
      const points = data.map((item, index) => {
        const x = (index / (data.length - 1)) * 100;
        const y = 100 - (item.value / maxValue) * 100;
        return `${x},${y}`;
      }).join(' ');
      
      return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
          <div className="h-48 relative">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                points={points}
              />
              {data.map((item, index) => {
                const x = (index / (data.length - 1)) * 100;
                const y = 100 - (item.value / maxValue) * 100;
                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="2"
                    fill="#3b82f6"
                    className="hover:r-3 transition-all"
                  />
                );
              })}
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
              {data.map((item, index) => (
                <div key={index}>{item.month}</div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    return (
      <Layout>
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-lg sm:text-3xl font-semibold text-gray-900 mb-1">
              Dashboard
            </h1>
            {/* <p className="text-sm text-gray-600">Overview of your inventory management system</p> */}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.path)}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:border-blue-300 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {card.title}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {card.value}
                  </h3>
                  <p className={`text-xs mt-1 ${card.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {card.isPositive ? <ArrowUp className="inline w-3 h-3" /> : <ArrowDown className="inline w-3 h-3" />}
                    {card.change} from last month
                  </p>
                </div>
                <div
                  className={`p-3 rounded-full ${card.color} bg-opacity-10 text-${card.color.split('-')[1]}-500 group-hover:bg-opacity-20 transition-all`}
                >
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <BarChart data={monthlyData} title="Monthly Requests Overview" />
          <PieChart data={categoryData} title="Requests by Category" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <LineChart data={monthlyData} title="Monthly Trend" />
          <PieChart data={statusData} title="Request Status Distribution" />
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: "New MRS created", user: "Vinit Yadav", time: "2 hours ago", color: "bg-blue-100 text-blue-800" },
              { action: "Material issued", user: "Sarah Johnson", time: "5 hours ago", color: "bg-green-100 text-green-800" },
              { action: "Stock updated", user: "Michael Chen", time: "1 day ago", color: "bg-amber-100 text-amber-800" },
              { action: "New notification", user: "System", time: "2 days ago", color: "bg-purple-100 text-purple-800" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${activity.color} mr-3`}>
                    {activity.action.split(' ')[0]}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">By {activity.user}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  };

  export default Home;