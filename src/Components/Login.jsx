import React from 'react'
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";




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
    <>
     <div lassName="static">
        <div className="relative w-full h-screen overflow-hidden">
        <div className="">
          <img className="absolute w-180 h-140  mt-15 ml-85" src="src\assets\Images\background.jpg" alt="" />
        </div>
        
         <div className="absolute top-25 mb-10 left-10 w-110 h-110 ml-110 bg-white/85  justify-items-center rounded-xl">
            <img className='w-10 mt-5 ' src="src\assets\Images\safetalk.png" alt="online image" />
            <h2 className='text-teal-600'>Welcome Back</h2>
            <p className="text-center text-sm font-semibold mb-6 text-green-800">Log in to your SafeTalk Account</p>
           

            <div className="w-100 max-w-sm  p-1 rounded-xl" >
             <label className="text-xs mb-1 block text-gray-700">Email or Username</label>
              <input
                type="text"
                className="w-full mb-1 px-2 py-1 bg-white/40 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder=""
                   onChange={(e) => setEmail(e.target.value)}/>
               <label className="text-xs mb-1 block text-gray-700"
               >Password</label>
                <input
                  type="password"
                  className="w-full mb-6 px-1 py-1 bg-white/40 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="" onChange={(e) => setPassword(e.target.value)}/>
                   <button type='submit' onSubmit={handleLogin} className="w-full py-1 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 transition cursor-pointer"> Log In </button>
                </div>
          <div className="w-full max-w-md mx-auto text-center">
            <p className="text-gray-700 mt-2 mb-3 cursor-pointer hover:underline">Forgot Password?</p>
            <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-400"></div>
              <span className="px-3 text-gray-700 text-sm">Or Sign in with</span>
            <div className="flex-1 h-px bg-gray-400"></div>
            </div>
            </div>
            <div className="flex justify-center gap-8 mt-4 ">
              <FaApple className="text-3xl text-black cursor-pointer" />
              <FcGoogle className="text-3xl cursor-pointer"/>
              <FaFacebook className="text-3xl text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
     </div>
    </>
    
  )
}

export default Login
