import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/safetalk-background.png";
import logo from "../assets/safetalk-logo.png";
import Button from "../SharedComponent/Button";



export default function Signup() {
  const [formData, setFormData] = useState({
    userType: "client",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Account created successfully!");
      setFormData({
        userType: "client",
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="SafeTalk Logo" className="h-20 sm:h-24 w-auto" />
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-sm sm:text-base text-gray-800">
            Join SafeTalk and start your wellness journey
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* User Type */}
          <div className="mb-6">
            <p className="text-gray-900 text-sm font-semibold mb-2">I am a</p>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="client"
                  checked={formData.userType === "client"}
                  onChange={handleChange}
                  className="w-5 h-5 text-teal-700 focus:ring-teal-500"
                />
                <span className="ml-3 text-gray-900 text-sm sm:text-base font-medium">
                  Client (seeking therapy)
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="therapist"
                  checked={formData.userType === "therapist"}
                  onChange={handleChange}
                  className="w-5 h-5 text-teal-700 focus:ring-teal-500"
                />
                <span className="ml-3 text-gray-900 text-sm sm:text-base font-medium">
                  Therapist (providing services)
                </span>
              </label>
            </div>
          </div>

          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded-3xl bg-white/30 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded-3xl bg-white/30 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded-3xl bg-white/30 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mb-6 px-4 py-3 rounded-3xl bg-white/30 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-xs mt-1">{errors.confirmPassword}</p>
          )}

          {/* Submit */}
          <Button type="submit" variant="primary" className="w-full py-3 rounded-3xl">
                      Submit
                    </Button>
        </form>

        {/* Navigation Links */}
        <p className="text-center mt-4 text-sm sm:text-base">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-700 font-semibold hover:underline">
            Log In
          </Link>
        </p>

        <p className="text-center mt-2 text-sm sm:text-base">
          <Link to="/" className="text-teal-700 font-semibold hover:underline">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
