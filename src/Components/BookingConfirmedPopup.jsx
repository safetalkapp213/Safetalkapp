import React from 'react'

const BookingConfirmedPopUp = ({ onClose }) => {
  return (
    <>
        <div className="fixed inset-0 bg-gray/50 backdrop-blur-xs flex items-center justify-center  w-250 h-80 ">
      {/* Popup Box */}
      <div className="bg-[#0c2b4a] text-white p-8 rounded-xl text-center">
        <h2 className="text-xl font-semibold mb-2">Booking Confirmed!</h2>
        <p className="text-sm mb-6">Check your email for payment link.</p>

        
        <button 
          onClick={onClose} 
          className="mt-4 bg-white text-[#0c2b4a] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 cursor-pointer"> Close
        </button>
      </div>
    </div>
    </>
  )
}

export default BookingConfirmedPopUp;
