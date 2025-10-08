// src/pages/CreateUser.jsx
import { useState } from "react";
import Layout from "../components/Layout";
import { Eye, EyeOff, CheckCircle, XCircle, Upload, UserPlus } from "lucide-react";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    division: "",
    department: "",
    role: "",
    userid: "",
    password: "",
    isAdmin: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    
    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be 10 digits";
    
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.userid.trim()) newErrors.userid = "User ID is required";
    
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      // Reset form on successful submission
      setTimeout(() => {
        setFormData({
          username: "",
          email: "",
          mobile: "",
          division: "",
          department: "",
          role: "",
          userid: "",
          password: "",
          isAdmin: false,
        });
        setAvatarPreview(null);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateUserId = () => {
    const randomId = Math.floor(10000000 + Math.random() * 90000000);
    setFormData({ ...formData, userid: randomId.toString() });
  };

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData({ ...formData, password });
  };

  return (
    <Layout>
      <div className="bg-white shadow-xl rounded-xl w-full h-auto p-8 border border-gray-100">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <UserPlus className="w-6 h-6" />
              Create User
            </h1>
            {/* <p className="text-gray-500 mt-1">Add a new user to the system</p> */}
          </div>
          
          {/* Status Indicator */}
          {submitStatus === "success" && (
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg">
              <CheckCircle className="w-5 h-5" />
              <span>User created successfully!</span>
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg">
              <XCircle className="w-5 h-5" />
              <span>Error creating user. Please try again.</span>
            </div>
          )}
        </div>

        {/* Admin Toggle */}
        <div className="flex items-center mb-8 p-4 bg-blue-50 rounded-lg">
          <label className="flex items-center cursor-pointer">
            <div className="mr-3 font-medium text-gray-700">Admin User</div>
            <div className="relative">
              <input
                type="checkbox"
                name="isAdmin"
                checked={formData.isAdmin}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`w-14 h-7 rounded-full transition-colors ${formData.isAdmin ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div className={`absolute top-0.5 left-0.5 bg-white w-6 h-6 rounded-full transition-transform ${formData.isAdmin ? 'transform translate-x-7' : ''}`}></div>
            </div>
          </label>
          <span className="ml-4 text-sm text-blue-600">
            {formData.isAdmin ? "Administrator privileges enabled" : "Standard user account"}
          </span>
        </div>

        {/* Avatar Upload */}
        <div className="mb-8 flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {avatarPreview ? (
                <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <UserPlus className="w-8 h-8 text-gray-400" />
              )}
            </div>
            <div>
              <label className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <Upload className="w-4 h-4" />
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </label>
              <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF - Max 2MB</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Username */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                User Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full border ${errors.username ? 'border-red-300' : 'border-gray-300'} p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm`}
                placeholder="Enter full name"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${errors.email ? 'border-red-300' : 'border-gray-300'} p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm`}
                placeholder="user@company.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full border ${errors.mobile ? 'border-red-300' : 'border-gray-300'} p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm`}
                placeholder="10-digit number"
              />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>

            {/* Division */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Division
              </label>
              <select
                name="division"
                value={formData.division}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
              >
                <option value="">Select Division</option>
                <option value="IT">Information Technology</option>
                <option value="HR">Human Resources</option>
                <option value="Finance">Finance</option>
                <option value="Operations">Operations</option>
              </select>
            </div>

            {/* Department */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
              >
                <option value="">Select Department</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
              </select>
            </div>

            {/* Role */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Role <span className="text-red-500">*</span>
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`w-full border ${errors.role ? 'border-red-300' : 'border-gray-300'} p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm`}
              >
                <option value="">Select Role</option>
                <option value="Admin">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="User">Standard User</option>
                <option value="Guest">Guest</option>
              </select>
              {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
            </div>

            {/* User ID */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                User ID <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="userid"
                  value={formData.userid}
                  onChange={handleChange}
                  className={`w-full border ${errors.userid ? 'border-red-300' : 'border-gray-300'} p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm`}
                  placeholder="Auto-generated"
                  readOnly
                />
                <button
                  type="button"
                  onClick={generateUserId}
                  className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
                >
                  Generate
                </button>
              </div>
              {errors.userid && <p className="text-red-500 text-xs mt-1">{errors.userid}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full border ${errors.password ? 'border-red-300' : 'border-gray-300'} p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm pr-10`}
                    placeholder="Enter secure password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={generatePassword}
                  className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
                >
                  Generate
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-2 h-2 rounded-full ${formData.password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <span className="text-xs text-gray-600">At least 8 characters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${/[A-Z]/.test(formData.password) && /[0-9]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <span className="text-xs text-gray-600">Uppercase letters and numbers</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-2.5 rounded-lg border border-gray-300 font-medium shadow-sm transition hover:bg-gray-50 text-gray-700"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-lg font-medium shadow-sm transition bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating...
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  Create User
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateUser;