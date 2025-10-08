import React, { useState } from "react";
import { CheckCircle, Package, Send } from "lucide-react";

const MaterialTable = () => {
  const [isPosted, setIsPosted] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const data = [
    {
      code: "2100003687",
      desc: "G,STRT;1.1KV;4CX300MM2;HS;RAY",
      qty: 10,
      sloc: "MNHP",
      stock: 120,
    },
    {
      code: "2100003687",
      desc: "G,STRT;1.1KV;4CX300MM2;HS;RAY",
      qty: 15,
      sloc: "MNZD",
      stock: 125,
    },
    {
      code: "2100003687",
      desc: "G,STRT;1.1KV;4CX300MM2;HS;RAY",
      qty: 22,
      sloc: "MVKP",
      stock: 135,
    },
  ];

  const handlePost = () => {
    setIsPosting(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      setIsPosted(true);
      setIsPosting(false);
    }, 1500);
  };

  return (
    <div className="ml-72 p-6">
      <div className="w-full max-w-8xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Material Inventory</h1>
              <p className="text-blue-100 mt-1">Stock overview and issuance</p>
            </div>
            <div className="flex items-center bg-blue-500/20 px-4 py-2 rounded-lg">
              <Package size={20} className="mr-2" />
              <span className="font-semibold">{data.length} Items</span>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="p-6">
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-700">
                  <th className="px-6 py-3 border-b border-gray-200">Material Code</th>
                  <th className="px-6 py-3 border-b border-gray-200">Description</th>
                  <th className="px-6 py-3 border-b border-gray-200">Quantity</th>
                  <th className="px-6 py-3 border-b border-gray-200">Storage Location</th>
                  <th className="px-6 py-3 border-b border-gray-200">Stock Available</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-blue-700 font-medium">{row.code}</td>
                    <td className="px-6 py-4 text-gray-700 max-w-xs">{row.desc}</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {row.qty}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {row.sloc}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mr-2">
                          {row.stock}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${
                          row.stock > 100 ? "bg-green-500" : 
                          row.stock > 50 ? "bg-yellow-500" : "bg-red-500"
                        }`}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold text-blue-800">Inventory Summary</h3>
                <p className="text-sm text-blue-600 mt-1">
                  Total items: {data.length} • Total stock: {data.reduce((sum, item) => sum + item.stock, 0)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-blue-600">Last updated: 05.03.2025</p>
                <p className="text-xs text-blue-600">Status: <span className="font-medium">In Stock</span></p>
              </div>
            </div>
          </div>

          {/* POST button */}
          {/* <div className="flex justify-center mt-8">
            <button 
              onClick={handlePost}
              disabled={isPosting || isPosted}
              className={`px-8 py-3 rounded-lg shadow-md transition-all font-semibold flex items-center ${
                isPosting 
                  ? "bg-blue-400 cursor-not-allowed" 
                  : isPosted 
                    ? "bg-green-600 cursor-default" 
                    : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-lg"
              }`}
            >
              {isPosting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  POSTING...
                </>
              ) : isPosted ? (
                <>
                  <CheckCircle size={18} className="mr-2" />
                  POSTED SUCCESSFULLY
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  POST MATERIAL ISSUANCE
                </>
              )}
            </button>
          </div> */}

          {/* Confirmation message - only shown after posting */}
          {/* {isPosted && (
            <div className="flex justify-center mt-6">
              <div className="bg-green-50 border border-green-200 rounded-lg px-6 py-4 text-center w-full max-w-md">
                <div className="flex items-center justify-center text-green-700">
                  <CheckCircle size={20} className="mr-2" />
                  <span className="font-medium">Material Issued</span>
                </div>
                <p className="text-green-600 mt-1 text-sm">
                  Material issued against the Order number xxxx.
                </p>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default MaterialTable;