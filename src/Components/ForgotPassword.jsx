import React from 'react';
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <div>
        <div className="">
          <img className="absolute w-180 h-140  mt-15 ml-85" src="src\assets\Images\background.jpg" alt="" />
        </div>
        <div className="relative top-30 mb-10 left-10 w-110 h-110 ml-110 bg-white/85  justify-items-center rounded-xl">
          <img className='w-15 mt-10 pt-5' src="src\assets\Images\safetalk.png" alt="safetalk" />
          <h1 className='text-teal-600 text-2xl mt-2'>Forgot Your Password</h1>
          <p className="text-green-600 mb-6 text-sm w-100 mt-3 text-center ">
          Please enter the email address associated with your account
          </p>
        </div>
        <div className=" relative w-100 max-w-sm  p-1 rounded-xl ml-125 -top-55" >
          <label className="text-xs w-50 mt-5 mb-1 block text-gray-700">Email address</label>
          <input type="text" className="w-full px-2 py-1 text-sm bg-white/40 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Enter your registered email"/>

          <button type='submit' className="w-full py-1 mt-5 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 transition cursor-pointer"> Reset Password </button>
        </div>
    
      </div>
    </>
  )
}

export default ForgotPassword
