import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PMOrderMaterial = () => {
    const [material, setMaterial] = useState("2100005346");
    const [quantity, setQuantity] = useState("10");
    const [store, setStore] = useState("MN");
    const [searchMaterial, setSearchMaterial] = useState("");
    const [searchStore, setSearchStore] = useState("");

    const navigate = useNavigate();

    const handlecart = () => {
        navigate('/cart')
    }

    const materialsData = [
        { id: "2100005347", name: "MTR,1PH,10-60A", bgColor: "bg-red-50", hoverColor: "hover:bg-red-100" },
        { id: "2100003400", name: "MTR,PWR FACTOR,TRINITY;VAF", bgColor: "bg-pink-50", hoverColor: "hover:bg-pink-100" },
        { id: "2100005346", name: "MTR,PWR,3PH,20-100A", bgColor: "bg-amber-50", hoverColor: "hover:bg-amber-100" },
        { id: "2100004936", name: "PI,EARTHING;2.5MTR;GS;40NB", bgColor: "bg-emerald-50", hoverColor: "hover:bg-emerald-100" },
    ];

    const storesData = [
        { code: "MNHP", name: "Nehru Place Mtc", bgColor: "bg-red-50", hoverColor: "hover:bg-red-100" },
        { code: "MNPF", name: "Najaf Garh Mtc", bgColor: "bg-pink-50", hoverColor: "hover:bg-pink-100" },
        { code: "MNZ1", name: "Nizamudin 1 Mtc", bgColor: "bg-emerald-50", hoverColor: "hover:bg-emerald-100" },
        { code: "MNZ2", name: "Sarita VhrNZD2Mtc", bgColor: "bg-amber-50", hoverColor: "hover:bg-amber-100" },
    ];

    const filteredMaterials = materialsData.filter(item =>
        item.name.toLowerCase().includes(searchMaterial.toLowerCase()) ||
        item.id.toLowerCase().includes(searchMaterial.toLowerCase())
    );

    const filteredStores = storesData.filter(item =>
        item.code.toLowerCase().includes(searchStore.toLowerCase()) ||
        item.name.toLowerCase().includes(searchStore.toLowerCase())
    );

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
                            Maintenance Requisition System
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                            <div className="bg-rose-100 p-2 rounded-lg mr-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-rose-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium">
                                    Employee Name
                                </div>
                                <div className="text-sm font-semibold text-gray-800">
                                    NEERAJ KUMAR
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                            <div className="bg-rose-100 p-2 rounded-lg mr-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-rose-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium">
                                    Employee No.
                                </div>
                                <div className="text-sm font-semibold text-gray-800">
                                    41016363
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                            <div className="bg-rose-100 p-2 rounded-lg mr-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-rose-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium">
                                    Mobile
                                </div>
                                <div className="text-sm font-semibold text-gray-800">
                                    8470945770
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-rose-600 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <span className="text-sm font-medium text-gray-700">
                                Date: 05.03.2025
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-700 mr-2">
                                PM Order:
                            </span>
                            <span className="text-sm font-semibold text-blue-700">
                                800000049024
                            </span>
                        </div>
                    </div>
                </div>

                {/* Sub Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                    <h2 className="text-center text-white text-xl font-semibold">
                        PM Order Material
                    </h2>
                    <p className="text-center text-blue-100 text-sm mt-1">
                        Add materials to your maintenance requisition
                    </p>
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
                                    value={searchMaterial}
                                    onChange={(e) => setSearchMaterial(e.target.value)}
                                    className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all"
                                    placeholder="Enter material code or description"
                                />
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center">
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

                    {/* Materials Table */}
                    <div className="mb-6 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        <div className="grid grid-cols-2 bg-blue-50 text-sm font-semibold text-gray-700">
                            <div className="p-4 border-r border-gray-200">Material Description</div>
                            <div className="p-4">Material Code</div>
                        </div>

                        {filteredMaterials.length > 0 ? (
                            filteredMaterials.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`grid grid-cols-2 text-sm transition-colors ${item.bgColor} ${item.hoverColor}`}
                                >
                                    <div className="p-4 border-r border-gray-200 font-medium">
                                        {item.name}
                                    </div>
                                    <div className="p-4 font-mono text-blue-600">
                                        E {item.id}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-8 text-center text-gray-500 col-span-2">
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

                    {/* Form Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Material Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Material
                            </label>
                            <input
                                type="text"
                                value='10'
                                onChange={(e) => setMaterial(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                            />
                        </div>

                        {/* Quantity Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Quantity
                            </label>
                            <input
                                type="text"
                                value='10'
                                onChange={(e) => setQuantity(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                            />
                        </div>
                    </div>

                    {/* Store Location */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Store Location
                        </label>
                        <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
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
                                    value={searchStore}
                                    onChange={(e) => setSearchStore(e.target.value)}
                                    className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all"
                                    placeholder="Search store location"
                                />
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center">
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
                                Search Stores
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 ml-1">Plant: D021</p>
                    </div>

                    {/* Store Table */}
                    <div className="mb-6 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        <div className="grid grid-cols-2 bg-blue-50 text-sm font-semibold text-gray-700">
                            <div className="p-4 border-r border-gray-200">SLoc</div>
                            <div className="p-4">Description</div>
                        </div>

                        {filteredStores.length > 0 ? (
                            filteredStores.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`grid grid-cols-2 text-sm transition-colors ${item.bgColor} ${item.hoverColor}`}
                                >
                                    <div className="p-4 border-r border-gray-200 font-medium">
                                        {item.code}
                                    </div>
                                    <div className="p-4">
                                        {item.name}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-8 text-center text-gray-500 col-span-2">
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
                                <p>No stores found matching your search criteria</p>
                            </div>
                        )}
                    </div>

                    {/* Add Button */}
                    <div className="flex justify-end">
                        <button 
                            onClick={handlecart}
                            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
                        >
                           Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PMOrderMaterial;