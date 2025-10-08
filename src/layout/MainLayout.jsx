// src/layout/MainLayout.jsx
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1  w-full bg-gray-100 min-h-screen">
        <Outlet /> {/* child routes will load here */}
      </div>
    </div>
  );
};

export default MainLayout;
