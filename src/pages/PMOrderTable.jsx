import React from "react";
import { useNavigate } from "react-router-dom";

const PMOrderTable = () => {
  const orderNo = "100001249763";
  const items = [
    { item: 1, material: "2100003687", desc: "TRT;1.1KV;4CX30", qty: 2, sloc: "MNZ2" },
    // { item: 2, material: "2100002639", desc: "300MM2;4;1.1KV", qty: 3, sloc: "MNZ2" },
  ];

  const navigate = useNavigate();

  const handleMaterialTable = () => {
    navigate('/material-Table')
  }

  return (
    <div className="ml-72 p-6">
      {/* <div className="w-full max-w-8xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"></div> */}
      {/* <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex justify-center items-start"> */}
      <div className=" w-full max-w-8xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Preventive Maintenance Order</h1>
            <p className="text-blue-100 text-sm mt-1">Material requisition details</p>
          </div>
          <div className="bg-blue-500/20 px-4 py-2 rounded-lg">
            <span className="font-mono text-lg font-semibold">{orderNo}</span>
          </div>
        </div>

        {/* Table Container */}
        <div className="p-6">
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">Item</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">Material</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">Description</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">Quantity</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">Storage Loc.</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-700 text-sm font-medium px-2.5 py-1 rounded-full">
                        {row.item}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-blue-700 font-medium">{row.material}</td>
                    <td className="px-6 py-4 text-gray-700 max-w-xs">{row.desc}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                        {row.qty}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                        {row.sloc}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                    

                        <button
                          onClick={handleMaterialTable}
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

          {/* Action Buttons */}
          <div className="mt-6 flex justify-end space-x-4">
            <button className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm">
              Export
            </button>
            <button onClick={handleMaterialTable} className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
              Process Selected
            </button>
          </div>

          {/* Summary */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold text-blue-800">Order Summary</h3>
                <p className="text-sm text-blue-600 mt-1">{items.length} items • Total quantity: {items.reduce((sum, item) => sum + item.qty, 0)}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-blue-600">Status: <span className="font-medium">Pending</span></p>
                <p className="text-xs text-blue-600">Created: 05.03.2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMOrderTable;