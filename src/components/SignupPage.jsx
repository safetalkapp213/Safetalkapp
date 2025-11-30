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
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
    <div
      className="absolute inset-0 z-0"
          style={{
           backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
       </div>
          {/* Overlay */}
     <div className="absolute inset-0 z-0 bg-black/10"></div>

     {/* Signup Card - Responsive width and padding */}
     <div className="relative z-10 bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-10 w-full max-w-md">
       {/* Logo - Responsive size*/}
       <div className="flex justify-center mb-6">
        <img
         src={logo}
         alt="SafeTalk-logo"
         className="h-20 sm:h-24 w-auto"
         />
         </div>

        {/* Title -Responsive text size */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p className="text-sm sm:text-base text-gray-800">Join SafeTalk and start your wellness journey</p>
        </div>

        <div>
          {/* User Type Selection */}
          <div className="mb-6">
            <p className="text-gray-900 text-sm font-semibold mb-3">I am a 
            </p>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="client"
                  checked={formData.userType === 'client'}
                  onChange={handleChange}
                  className="w-5 h-5 text-teal-700 focus:ring-teal-500"
                />
                <span className="ml-3 text-gray-900 text-sm sm:text-base font-medium">Client (seeking therapy)</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="therapist"
                  checked={formData.userType === 'therapist'}
                  onChange={handleChange}
                  className="w-5 h-5 text-teal-700 focus:ring-teal-500"
                />
                <span className="ml-3 text-gray-900 text-sm sm:text-base font-medium">Therapist (providing services)</span>
              </label>
            </div>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 border-0"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              placeholder=""
            />
            {errors.fullName && <p className="text-red-600 text-xs mt-1 font-semibold">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 border-0"
              style={{
                backgroundColor:'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              placeholder=""
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 border-0"
              style={{
                backgroundColor:'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'         
              }}
              placeholder=""
            />
            {errors.password && <p className="text-red-600 text-xs mt-1 font-semibold">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-8">
            <label className="block text-gray-900 text-sm font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 border-0"
    style={{
                backgroundColor:'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'         
              }}          
              placeholder=""
            />
            {errors.confirmPassword && <p className="text-red-600 text-xs mt-1 fontsemibold">{errors.confirmPassword}</p>}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 rounded-xl transition duration-200 text-base sm:text-lg shadow-lg"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-900 text-sm sm:text-base mt-6 font-medium">
            Already have an Account?{' '}
            <button className="text-teal-700 font-bold hover:underline">
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}