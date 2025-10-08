// src/pages/ChangeUser.jsx
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Eye, EyeOff, Save, RotateCcw, User, CheckCircle, XCircle, Key, Mail, Phone, Building, Users, Shield } from "lucide-react";

const ChangeUser = () => {
  const [formData, setFormData] = useState({
    username: "Vinit Yadav",
    email: "v.yadav@relianceada.com",
    mobile: "9867453412",
    division: "BIDC",
    department: "IT",
    role: "Maintenance engineer",
    userId: "41001461",
    password: "",
    isActive: true,
    permissions: {
      canCreate: true,
      canEdit: true,
      canDelete: false,
      canView: true
    }
  });

  const [originalData, setOriginalData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [changesMade, setChangesMade] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Initialize original data
  useEffect(() => {
    setOriginalData({ ...formData });
  }, []);

  // Check for changes
  useEffect(() => {
    const hasChanges = JSON.stringify(formData) !== JSON.stringify(originalData);
    setChangesMade(hasChanges);
  }, [formData, originalData]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) newErrors.username = "Username is required";
    
    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }
    
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith("permissions.")) {
      const permissionField = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        permissions: {
          ...prev.permissions,
          [permissionField]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success case
      setSubmitStatus("success");
      setOriginalData({ ...formData });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ ...originalData });
    setErrors({});
    setSubmitStatus(null);
  };

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData(prev => ({ ...prev, password }));
  };

  const permissionOptions = [
    { key: "canCreate", label: "Create Records", icon: <Save className="w-4 h-4" /> },
    { key: "canEdit", label: "Edit Records", icon: <Edit className="w-4 h-4" /> },
    { key: "canDelete", label: "Delete Records", icon: <Trash2 className="w-4 h-4" /> },
    { key: "canView", label: "View Records", icon: <Eye className="w-4 h-4" /> }
  ];

  return (
    <Layout>
      <div className="w-full max-w-8xl h-auto bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100">
        {/* Header Section */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                <User className="w-7 h-7" />
                Update User
              </h1>
              {/* <p className="text-gray-500 mt-2">
                Modify user information and permissions
              </p> */}
            </div>
            
            {/* Status Indicator */}
            {submitStatus === "success" && (
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5" />
                <span>User updated successfully!</span>
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg border border-red-200">
                <XCircle className="w-5 h-5" />
                <span>Error updating user. Please try again.</span>
              </div>
            )}
          </div>
        </div>

        {/* User Status Toggle */}
        <div className="flex items-center mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <label className="flex items-center cursor-pointer">
            <div className="mr-3 font-medium text-gray-700">Account Status</div>
            <div className="relative">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`w-14 h-7 rounded-full transition-colors ${formData.isActive ? 'bg-green-600' : 'bg-gray-300'}`}></div>
              <div className={`absolute top-0.5 left-0.5 bg-white w-6 h-6 rounded-full transition-transform ${formData.isActive ? 'transform translate-x-7' : ''}`}></div>
            </div>
          </label>
          <span className="ml-4 text-sm text-gray-600">
            {formData.isActive ? "Account is active" : "Account is disabled"}
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* User Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <User className="w-4 h-4" />
                User Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full border ${errors.username ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm`}
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <Mail className="w-4 h-4" />
                Email ID
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
              />
              <p className="text-xs text-gray-500">Email cannot be changed</p>
            </div>

            {/* Mobile */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <Phone className="w-4 h-4" />
                Mobile Number
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full border ${errors.mobile ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm`}
                placeholder="10-digit number"
              />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>

            {/* Division */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <Building className="w-4 h-4" />
                Division
              </label>
              <select
                name="division"
                value={formData.division}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
              >
                <option value="BIDC">BIDC</option>
                <option value="Finance">Finance</option>
                <option value="Operations">Operations</option>
                <option value="HR">Human Resources</option>
              </select>
            </div>

            {/* Department */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <Users className="w-4 h-4" />
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
              >
                <option value="IT">IT</option>
                <option value="Development">Development</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Support">Support</option>
              </select>
            </div>

            {/* Role */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Role <span className="text-red-500">*</span>
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
              >
                <option value="Maintenance engineer">Maintenance Engineer</option>
                <option value="Developer">Developer</option>
                <option value="Administrator">Administrator</option>
                <option value="Analyst">Analyst</option>
                <option value="Manager">Manager</option>
              </select>
            </div>

            {/* User ID */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                User ID
              </label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                disabled
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
              />
              <p className="text-xs text-gray-500">User ID cannot be changed</p>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <Key className="w-4 h-4" />
                New Password
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm pr-10`}
                    placeholder="Leave blank to keep current"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={generatePassword}
                  className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap text-sm"
                  title="Generate secure password"
                >
                  Generate
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              <p className="text-xs text-gray-500">Minimum 8 characters with letters and numbers</p>
            </div>
          </div>

          {/* Permissions Section */}
          {/* <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              User Permissions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {permissionOptions.map(({ key, label, icon }) => (
                <label key={key} className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    name={`permissions.${key}`}
                    checked={formData.permissions[key]}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border rounded mr-3 flex items-center justify-center transition-colors ${
                    formData.permissions[key] 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : 'border-gray-300'
                  }`}>
                    {formData.permissions[key] && <CheckCircle className="w-3 h-3" />}
                  </div>
                  <div className="flex items-center gap-2">
                    {icon}
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div> */}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handleReset}
              disabled={!changesMade || isSubmitting}
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 order-2 sm:order-1"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Changes
            </button>
            
            <button
              type="button"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200 font-medium order-1 sm:order-2"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={!changesMade || isSubmitting}
              className={`px-6 py-3 rounded-lg shadow-sm transition-all duration-200 font-medium flex items-center gap-2 order-3 ${
                !changesMade || isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Updating...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Update User
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

// Add missing icon components
const Edit = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const Trash2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export default ChangeUser;