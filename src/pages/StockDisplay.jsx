import React, { useState } from "react";

const StockDisplay = () => {
  const [material, setMaterial] = useState("");
  const [data, setData] = useState([
    { code: "2100005346", desc: "1Ph Meter", loc: "MNZ2", stock: 100 },
    { code: "2100005347", desc: "3Ph Meter", loc: "MNZ2", stock: 50 },
    { code: "2100003400", desc: "Power Factor Meter", loc: "CALN", stock: 500 },
    { code: "2100004936", desc: "Earthing Material", loc: "CVKP", stock: 600 },
  ]);

  const [filtered, setFiltered] = useState(data);

  const handleSearch = () => {
    if (material.trim() === "") {
      setFiltered(data);
    } else {
      setFiltered(
        data.filter((item) =>
          item.code.toLowerCase().includes(material.toLowerCase()) ||
          item.desc.toLowerCase().includes(material.toLowerCase())
        )
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Get current date in DD.MM.YYYY format
  const getCurrentDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  };

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
              Material Stock Display
            </p>
          </div>

     
        </div>

        {/* Sub Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
          <h2 className="text-center text-white text-xl font-semibold">
            Material Stock 
          </h2>
          {/* <p className="text-center text-blue-100 text-sm mt-1">
            View material stock levels across storage locations
          </p> */}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Search Material */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Material
            </label>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-1">
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
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all"
                  placeholder="Enter material code or description"
                />
              </div>
              <button 
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center"
              >
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
                Search Materials
              </button>
            </div>
          </div>

          {/* Stock Table */}
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-700">
                  <th className="px-6 py-3 border-b border-gray-200">Material Code</th>
                  <th className="px-6 py-3 border-b border-gray-200">Material Description</th>
                  <th className="px-6 py-3 border-b border-gray-200">Storage Location</th>
                  <th className="px-6 py-3 border-b border-gray-200">Stock Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filtered.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-blue-700 font-medium">
                      {item.code}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {item.desc}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item.loc}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium mr-2 ${
                          item.stock > 300
                            ? "bg-green-100 text-green-700"
                            : item.stock > 100
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}>
                          {item.stock} units
                        </span>
                        <div className={`w-2 h-2 rounded-full ${
                          item.stock > 300 ? "bg-green-500" : 
                          item.stock > 100 ? "bg-yellow-500" : "bg-red-500"
                        }`}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filtered.length === 0 && (
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
                <p>No materials found matching your search criteria</p>
              </div>
            )}
          </div>

          {/* Summary Footer */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold text-blue-800">Stock Summary</h3>
                <p className="text-sm text-blue-600 mt-1">
                  Showing {filtered.length} of {data.length} materials • Total stock: {filtered.reduce((sum, item) => sum + item.stock, 0)} units
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-blue-600">Last updated: {getCurrentDate()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDisplay;