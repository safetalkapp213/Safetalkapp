import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/background.png";
import logo from "../assets/safetalk-logo.png"
import Button from "../SharedComponent/Button";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    alert("If this email exists, a reset link will be sent.");
    setEmail("");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background */}
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/30 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-10 text-center">
        <img src={logo} alt="SafeTalk Logo" className="w-20 mx-auto mb-4" />
        <h1 className="text-teal-600 text-2xl font-bold mb-2">Forgot Your Password</h1>
        <p className="text-green-600 mb-6 text-sm">
          Please enter the email address associated with your account
        </p>

        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-3xl bg-white/50 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <Button type="submit" variant="primary" className="w-full py-3 rounded-3xl">
            Reset Password
          </Button>
        </form>

<div className="mt-6 flex justify-center gap-6 text-sm text-gray-900">
  <Link to="/login" className="text-teal-700 font-semibold hover:underline">
    Back to Login
  </Link>
  <Link to="/" className="text-teal-700 font-semibold hover:underline">
    Back to Home
  </Link>
</div>

      </div>
    </div>
  );
};

export default ForgotPassword;
