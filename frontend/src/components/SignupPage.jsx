import React, { useState } from 'react';
import backgroundImage from "../assets/safetalk-background.png"
import logo from "../assets/safetalk-logo.png"


export default function SignupPage() {
  const [formData, setFormData] = useState({
    userType: 'client',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Account created successfully!');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
          style={{
           backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
     <div className="absolute inset-0 bg-black opacity-10"></div>

     <div className="relative bg- white rounded-2x1 shadow-2x1 p-8 w-full max-w-md">
       {/* Logo*/}
       <div className="flex justify-center mb-6">
        <img
         src={logo}
         alt="SafeTalk-logo"
         className="h-24 w-auto"
         />
         </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Create Account</h2>
          <p className="text-gray-500 text-sm">Join SafeTalk and start your wellness journey</p>
        </div>

        <div>
          {/* User Type Selection */}
          <div className="mb-6">
            <p className="text-gray-700 text-sm mb-3">I am a 
            </p>
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="client"
                  checked={formData.userType === 'client'}
                  onChange={handleChange}
                  className="w-4 h-4 text-teal-700 focus:ring-teal-500"
                />
                <span className="ml-2 text-gray-700 text-sm">Client (seeking therapy)</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="therapist"
                  checked={formData.userType === 'therapist'}
                  onChange={handleChange}
                  className="w-4 h-4 text-teal-700 focus:ring-teal-500"
                />
                <span className="ml-2 text-gray-700 text-sm">Therapist (providing services)</span>
              </label>
            </div>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
              placeholder=""
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
              placeholder=""
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
              placeholder=""
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
              placeholder=""
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an Account?{' '}
            <button className="text-teal-700 font-semibold hover:underline">
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}