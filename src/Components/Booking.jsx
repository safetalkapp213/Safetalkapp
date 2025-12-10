import { FaUserCircle } from "react-icons/fa";
import { FaArrowLeft } from 'react-icons/fa';
import { CiCreditCard1 } from "react-icons/ci";
import { useState } from "react";
import BookingConfirmedPopUp from './BookingConfirmedPopUp';


function Booking() {
     const [showPopup, setShowPopup] = useState(false);
   
  return (
    <>
        <div className="min-h-screen bg-gray-100">
        <div>
           
         <div>  
            <div className="flex items-center gap-2">
                <img className="h-10 ml-20 mt-2 mb-2" 
                    src="src\assets\Images\safetalk.png" 
                    alt="logo"
                />
                <button className="px-4 py-2 rounded-xl bg-white border border-none text-gray-700 shadow-sm hover:bg-gray-50 ml-220 cursor-pointer text-xs">Find Therapists</button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-none text-gray-700 shadow-sm hover:bg-gray-50 cursor-pointer text-xs">
                <FaUserCircle className="text-gray-600 text-sm" />Ola Yin</button>
            </div>

            <div className="relative w-full h-64 bg-blue-300">
                <div className="w-full bg-cover">
                    <img className="w-full h-134" src="src\assets\Images\background.png" alt="background"/>
                </div>

                <div className="absolute top-6 left-30 w-24 h-24 ">
                    <div>
                       <button className="flex cursor-pointer text-gray-900"><FaArrowLeft className="text-gray-600 text-xs w-4 h-5 m-1" />Back</button>
                    </div>
                    
                    <div className="flex flex-col items-center gap-6 mt-6">

                        {/* Step 1 */}
                        <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-[#1D4E4C] text-white flex items-center justify-center text-xs">1</div>
                            <span className="text-xs p-1">Select Date</span>
                        </div>
                        <div className="w-20 h-px bg-[#1D4E4C] -mt-8 ml-45"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-[#1D4E4C] text-white flex items-center justify-center ml-75 -mt-10 text-xs">2</div>
                        <span className="text-xs -mt-5 ml-100 w-16 ">Select Time</span>
                        </div>
                        <div className="w-20 h-px bg-[#1D4E4C] -mt-12 ml-140"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-[#1D4E4C] text-white flex items-center justify-center ml-170 -mt-10 text-xs">
                            3
                            </div>
                            <span className="text-xs -mt-5 ml-190  text-[#1D4E4C]">Confirm</span>
                        </div>
                    </div>
                    <div className="absolute w-115 ml- max-w-3xl  bg-white/90
                      rounded-3xl shadow-xl p-8 backdrop-blur-md">
                        <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-none text-[#1D4E4C] rounded flex items-center justify-center">
                            <CiCreditCard1 className="text-[#1D4E4C] w-7 h-7" />
                        </div>
                        <h2 className=" cursor-pointer text-xs font-semibold text-green-700">
                            Confirm Your Booking
                        </h2>
                         </div>

                        {/* Booking Info */}
                        <div className="space-y-3 text-gray-700">

                        <div className="flex justify-between text-xs">
                            <span>Date</span>
                            <span className="font-medium">20/11/2025</span>
                        </div>
                         <hr />

                        <div className="flex justify-between text-xs">
                            <span>Time</span>
                            <span className="font-medium">4:00 PM</span>
                        </div>
                        <hr />
                         <div className="flex justify-between text-xs">
                            <span>Duration</span>
                            <span className="font-medium">50 minutes</span>
                        </div>
                        <hr />

                        <div className="flex justify-between text-xs">
                            <span>Total Amount</span>
                            <span className="font-medium">$ 200</span>
                        </div>

                        {/* Note Box */}
                        <div className="mt-6 p-4 border rounded-xl bg-gray-50 text-xs">
                            <p>
                             <strong>Next steps:</strong> After confirming, you’ll receive an email 
                            with a secure payment link. Complete payment to finalize your booking.
                            </p>
                        </div>
                             
                        
                        <button onClick={() => setShowPopup(true)} className="w-full bg-green-800 text-white py-3 rounded-xl mt-4 text-xs cursor-pointer hover:bg-green-900">
                            Confirm Booking
                        </button>
                        </div>
                       {showPopup && (< BookingConfirmedPopUp onClose={() => setShowPopup(false)} />)}
                        
                    </div>
                    <div className=" ml-130 -mt-10  w-55 bg-white shadow-md rounded-xl p-3 border border-gray-200">
                    <div className="flex items-center gap-4">
                        <img src="src\assets\Images\dr bello.jpg" alt="Doctor"
                        className=" mt-3 ml-3 w-15 h-15 rounded-full object-cover"
                        />
                    <div>
                        <h2 className="mt-3 text-xs font-semibold">Dr. Bello Afifi</h2>
                        <p className="text-xs text-gray-500">10+ years</p>
                        </div>
                    </div>
                    <p className=" ml-3 mt-4 text-xs">
                        <span className="font-semibold">Price:</span> $ 200/Session
                    </p>
                    <p className=" ml-3 mt-2 text-xs">
                        <span className="font-semibold">Specializations:</span> Anxiety,
                        Depression, Stress Management
                    </p>
                    </div>
                      


                    

                         




                </div>
            </div>
            

        </div>
        </div>
            











        </div>
    
    
    
    
    </>
  )
}

export default Booking
