import React, { useState } from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import bg from "../assets/background.png";
import logo from "../assets/safetalk-logo.png";
import Button from "../SharedComponent/Button";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4">
      {/* Background */}
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

    
      <div className="relative z-10 w-full max-w-md bg-white/30 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-10 text-center">
        {/* Logo */}
        <img src={logo} alt="SafeTalk Logo" className="w-16 mx-auto mb-2" />

        <h2 className="text-teal-700 font-bold text-xl sm:text-2xl mb-2">
          Welcome Back
        </h2>
        <p className="text-sm sm:text-base text-green-800 font-semibold mb-6">
          Log in to your SafeTalk Account
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-3xl bg-white/50 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 px-4 py-3 rounded-3xl bg-white/50 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <Button type="submit" variant="primary" className="w-full py-3 rounded-3xl">
            Log In
          </Button>
        </form>

        <p className="text-sm mt-3 cursor-pointer hover:underline">
  <Link to="/forgot-password" className="text-gray-700">
    Forgot Password?
  </Link>
</p>


        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-400"></div>
          <span className="px-3 text-gray-700 text-sm">Or Sign in with</span>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-2">
          <FaApple className="text-3xl text-black cursor-pointer" />
          <FcGoogle className="text-3xl cursor-pointer" />
          <FaFacebook className="text-3xl text-blue-600 cursor-pointer" />
        </div>

        {/* Back to Home */}
        <p className="mt-6 text-sm sm:text-base text-gray-900">
          <Link to="/" className="text-teal-700 font-semibold hover:underline">
            Back to Home
          </Link>
        </p>

        {/* Signup Link */}
        <p className="mt-4 text-sm sm:text-base text-gray-900">
          Don't have an account?{" "}
          <Link to="/signup" className="text-teal-700 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
