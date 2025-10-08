import React, { useState } from "react";
import { Trash2, ShoppingCart, CheckCircle } from "lucide-react";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { code: "2100005346", desc: "1Ph Meter", qty: 10, sloc: "MNZ2", stock: 75 },
    { code: "2100005347", desc: "3Ph Meter", qty: 10, sloc: "MNZ2", stock: 120 },
  ]);

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    // Simulate API call
    setShowSuccess(true);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const removeItem = (code) => {
    setCartItems(cartItems.filter(item => item.code !== code));
  };

  return (
    <div className="ml-72 p-6">
      {/* <div className="w-full max-w-8xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"></div> */}
      {/* <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6 flex justify-center items-start"> */}
        <div className="w-full max-w-8xl bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Cart Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 md:p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Material Cart</h1>
                <p className="text-blue-100 mt-1 text-sm md:text-base">Review and submit your material requests</p>
              </div>
              <div className="flex items-center bg-blue-500/20 px-3 py-1 md:px-4 md:py-2 rounded-full self-start md:self-auto">
                <ShoppingCart size={18} className="mr-2" />
                {/* <span className="font-semibold text-sm md:text-base">CART ({cartItems.length})</span> */}
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="p-4 md:p-6 overflow-x-auto">
            {cartItems.length > 0 ? (
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <table className="w-full min-w-max">
                  <thead>
                    <tr className="bg-gray-50 text-left text-xs md:text-sm font-semibold text-gray-700">
                      <th className="p-3 md:p-4 md:pl-6">Material Code</th>
                      <th className="p-3 md:p-4">Description</th>
                      <th className="p-3 md:p-4">Quantity</th>
                      <th className="p-3 md:p-4">Storage Location</th>
                      <th className="p-3 md:p-4 text-red-600">Stock Available</th>
                      {/* <th className="p-3 md:p-4 md:pr-6 text-center">Actions</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, idx) => (
                      <tr
                        key={idx}
                        className={`border-t border-gray-200 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                          }`}
                      >
                        <td className="p-3 md:p-4 md:pl-6 font-mono text-blue-700 font-medium text-xs md:text-sm">
                          {item.code}
                        </td>
                        <td className="p-3 md:p-4 text-gray-700 text-sm md:text-base">{item.desc}</td>
                        <td className="p-3 md:p-4">
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                            {item.qty}
                          </span>
                        </td>
                        <td className="p-3 md:p-4">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                            {item.sloc}
                          </span>
                        </td>
                        <td className="p-3 md:p-4 font-medium">
                          <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm ${item.stock > item.qty
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            }`}>
                            {item.stock}
                          </span>
                        </td>
                        {/* <td className="p-3 md:p-4 md:pr-6 text-center">
                          <button
                            onClick={() => removeItem(item.code)}
                            className="text-gray-400 hover:text-red-500 p-1 md:p-2 rounded-full hover:bg-red-50 transition-colors"
                          >
                            <Trash2 size={16} className="md:size-[18px]" />
                          </button>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 md:py-12">
                <ShoppingCart size={40} className="mx-auto text-gray-300 mb-3 md:mb-4 md:size-12" />
                <p className="text-gray-500 text-base md:text-lg">Your cart is empty</p>
                <p className="text-gray-400 mt-1 text-sm md:text-base">Add materials to get started</p>
              </div>
            )}

            {/* Submit Section */}
            {/* <div className="mt-6 md:mt-8 flex flex-col items-center">
              {cartItems.length > 0 && (
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg shadow-md hover:shadow-lg transition-all font-semibold flex items-center text-sm md:text-base"
                >
                  <CheckCircle size={18} className="mr-2 md:size-5" />
                  SUBMIT MATERIAL REQUEST
                </button>
              )} */}

              {/* Confirmation Box - Only shown after submission */}
              {/* {showSuccess && (
                <div className="mt-4 md:mt-6 bg-green-50 border border-green-200 rounded-lg px-4 py-3 md:px-6 md:py-4 text-center w-full max-w-md">
                  <div className="flex items-center justify-center text-green-700">
                    <CheckCircle size={18} className="mr-2 md:size-5" />
                    <span className="font-medium text-sm md:text-base">Successfully Submitted</span>
                  </div>
                  <p className="text-green-600 mt-1 text-xs md:text-sm">
                    Material request submitted successfully. Order number: PM-{Math.floor(1000 + Math.random() * 9000)}.
                  </p>
                </div>
              )}
              </div> */}
              </div>

          {/* Summary Footer */}
          {cartItems.length > 0 && (
            <div className="bg-gray-50 border-t border-gray-200 p-3 md:p-4">
              <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-600 gap-2 md:gap-0">
                <span>Total Items: {cartItems.length}</span>
                <span>Total Quantity: {cartItems.reduce((sum, item) => sum + item.qty, 0)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
  

  );
};

export default CartScreen;