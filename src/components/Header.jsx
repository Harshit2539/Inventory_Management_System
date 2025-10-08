import { Search } from "lucide-react";

const Header = () => {
  return (
    
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 gap-4">
          <div></div>
        {/* Title */}
        <div className="flex justify-between space-x-3">

          <div>
            <h1 className="text-lg sm:text-3xl justify-center font-semibold text-[#038EDC]">
              Inventory Managment System
            </h1>
            {/* <p className="text-sm text-gray-500">Administrative Dashboard</p> */}
          </div>
        </div>

        {/* Search + Profile */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Search */}
          {/* <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Global search..."
              className="w-full pl-10 pr-3 py-2 bg-gray-100 border-0 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
            />
          </div> */}

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              A
            </div>
            <div className="text-sm hidden sm:block">
              <div className="font-medium text-gray-900">Admin User</div>
              {/* <div className="text-gray-500">System Administrator</div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
