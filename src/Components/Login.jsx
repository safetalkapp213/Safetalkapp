import React from 'react'
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";



const Login = () => {
  return (
    <>
     <div className="relative w-200 h-60 justify-items-center ml-50 top-20">
        <div className=" w-900 h-700 justify-items-center">
          <img className='w-250 ' src="src\assets\Images\background.jpg" alt="" />
        </div>

         <div className="absolute top-15 left-0 w-130 h-140 ml-35 bg-white/85  justify-items-center rounded-xl">
            <img className='w-20 mt-5 ' src="src\assets\Images\safetalk.png" alt="online image" />
            <h2 className='text-teal-600'>Welcome Back</h2>
            <p className="text-center text-sm font-semibold mb-6 text-green-800">Log in to your SafeTalk Account</p>
           

            <div className="w-full max-w-md  p-1 rounded-xl" >
             <label className="text-sm mb-1 block text-gray-700">Email or Username</label>
              <input
                type="text"
                className="w-full mb-4 px-4 py-3 bg-white/40 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder=""/>
               <label className="text-sm mb-1 block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full mb-6 px-4 py-3 bg-white/40 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder=""/>
                   <button className="w-full py-3 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 transition"> Log In </button>
          </div>
          <div className="w-full max-w-md mx-auto text-center">
            <p className="text-gray-700 mt-4 mb-4 cursor-pointer hover:underline">Forgot Password?</p>
            <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-400"></div>
              <span className="px-4 text-gray-700 text-sm">Or Sign in with</span>
            <div className="flex-1 h-px bg-gray-400"></div>
            </div>
            </div>
            <div className="flex justify-center gap-8 mt-4">
              <FaApple className="text-4xl text-black" />
              <FcGoogle className="text-4xl" />
              <FaFacebook className="text-4xl text-blue-600" />
            </div>
          </div>
        
      </div>
    </>
    
  )
}

export default Login