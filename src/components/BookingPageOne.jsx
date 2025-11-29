import React, { useState } from 'react';
import BookingPageBg from "../assets/bookingpage-bg.png";
import SafetalkLogo from "../assets/safetalk-logo.png";
import Therapist from "../assets/therapist.jpg";

// Icon Components (SVG)
const ChevronLeft = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const Calendar = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const User = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

// Navigation Bar Component
const NavigationBar = () => {
  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex items-center mb-0 justify-between">
      <div className="flex items-center gap-2">
        <div className="relative">
            <img src={SafetalkLogo} className="w-20 h-18"/>
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <button href="#" className="text-[#2D5F5D] hover:bg-teal-600 transition border rounded p-4 font-medium">
          Find Therapists
        </button>
        <div className="flex items-center gap-2">

          <button className="border rounded p-3 flex items-center gap-2 hover:bg-gray-100">
              <span className="block w-8 h-8 bg-gray-300 rounded-full flex flex-row items-center justify-center">
              <User size={16} className="text-gray-600" />
            </span>
            <span className="block text-gray-800 font-medium">Ola Yin</span>
          </button>

        </div>
      </div>
    </nav>
  );
};

// Progress Stepper Component
const ProgressStepper = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Select Date' },
    { number: 2, label: 'Select Time' },
    { number: 3, label: 'Confirm' }
  ];

  return (
    <div className="flex items-center justify-center py-10 px-4">
      {steps.map((step, index) => (
        <div key={step.number} className="flex  flex-wrap items-center">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
              step.number === currentStep 
                ? 'bg-[#2D5F5D] text-white shadow-lg' 
                : step.number < currentStep
                ? 'bg-[#2D5F5D] text-white'
                : 'bg-white border-2 border-gray-300 text-[#2D5F5D]'
            }`}>
              {step.number}
            </div>
            <span className={`text-sm font-medium whitespace-wrap ${
              step.number <= currentStep ? 'text-gray-800' : 'text-gray-400'
            }`}>
              {step.label}
            </span>
          </div>
          
          {index < steps.length - 1 && (
            <div className={`md:w-32 h-0.5 mx-4 transition-all ${
              step.number < currentStep ? 'bg-[#2D5F5D]' : 'bg-gray-300'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
};

// Back Button Component
const BackButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 m-8 text-[#2D5F5D]  hover:text-teal-600 transition mb-8 font-medium"
    >
      <ChevronLeft size={22} className="stroke-[2.5]" />
      <span className="text-base text-xl">Back</span>
    </button>
  );
};

// Calendar Component
const CalendarComponent = ({ selectedDate, onDateSelect, onContinue }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1)); // November 2025
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };
  
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const daysInPrevMonth = getDaysInMonth(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    
    const days = [];
    
    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        isPrevMonth: true
      });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        isPrevMonth: false
      });
    }
    
    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isPrevMonth: false
      });
    }
    
    return days;
  };
  
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const isToday = (day) => {
    const today = new Date(2025, 10, 29); // November 29, 2025
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };
  
  const isSelected = (day) => {
    if (!selectedDate) return false;
    return day === selectedDate.getDate() && 
           currentDate.getMonth() === selectedDate.getMonth() && 
           currentDate.getFullYear() === selectedDate.getFullYear();
  };
  
  const handleDateClick = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return;
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    onDateSelect(newDate);
  };
  
  const calendarDays = generateCalendarDays();
  
  return (
    <div className="bg-white rounded-2xl  p-8 bg-opacity-50">
      {/* Calendar Header */}
      <div className="flex items-center gap-3 mb-8 ">
        <div className="w-10 h-10 bg-[#2D5F5D] rounded-lg flex items-center justify-center">
          <Calendar className="text-white" size={22} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Select Date</h2>
      </div>
      
      {/* Calendar Inner Container */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-100">
        {/* Month Navigator */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={handlePrevMonth}
            className="p-2 hover:bg-white rounded-lg transition"
          >
            <ChevronLeft size={20} className="text-gray-500" />
          </button>
          
          <h3 className="text-base font-bold text-gray-800">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          
          <button 
            onClick={handleNextMonth}
            className="p-2 hover:bg-white rounded-lg transition"
          >
            <ChevronRight size={20} className="text-gray-500" />
          </button>
        </div>
        
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-2 mb-3">
          {weekDays.map(day => (
            <div key={day} className="text-center text-xs font-bold text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>
        
        {/* Date Grid */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((dateObj, index) => {
            const isTodayDate = dateObj.isCurrentMonth && isToday(dateObj.day);
            const isSelectedDate = dateObj.isCurrentMonth && isSelected(dateObj.day);
            
            return (
              <button
                key={index}
                onClick={() => handleDateClick(dateObj.day, dateObj.isCurrentMonth)}
                disabled={!dateObj.isCurrentMonth}
                className={`
                  aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all
                  ${!dateObj.isCurrentMonth ? 'text-gray-300 cursor-not-allowed' : ''}
                  ${dateObj.isCurrentMonth && !isTodayDate && !isSelectedDate ? 'text-gray-700 hover:bg-white hover:shadow-sm' : ''}
                  ${isTodayDate ? 'bg-gray-900 text-white font-bold hover:bg-gray-800 shadow-md' : ''}
                  ${isSelectedDate && !isTodayDate ? 'bg-teal-500 text-white font-bold shadow-md' : ''}
                `}
              >
                {dateObj.day}
              </button>
            );
          })}
        </div>
      </div>
      {/* The Drop */}
      {/* Continue Button */}
      <button 
        onClick={onContinue}
        disabled={!selectedDate}
        className={`
          w-full py-4 rounded-xl font-bold text-white mt-7 text-base transition-all shadow-lg
          ${selectedDate 
            ? 'bg-teal-600 hover:bg-teal-700 hover:shadow-xl cursor-pointer' 
            : 'bg-[#2D5F5D] cursor-not-allowed '
          }
        `}
      >
        Continue to Time Selection
      </button>
    </div>
  );
};

// Therapist Info Card Component
const TherapistInfoCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">      
      {/* Therapist Details */}
      <div className="flex flex-row align-center gap-10 mb-5">
          <div className="w-24 h-24 rounded-full shadow-lg">
            <img src={Therapist} alt="Therapist Image" className="w-24 h-24 rounded-full object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Dr. Bello Afifi</h3>
            <p className="text-sm text-gray-500 font-medium">10+ years</p>
          </div>
      </div>
      
      {/* Price */}
      <div className="mb-5 pb-5 ">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Price:</span>$ 200/Session
        </p>
      </div>
      
      {/* Specializations */}
      <div>
        <p className="text-sm font-bold text-gray-800 mb-2">Specializations:</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Anxiety, Depression, Stress Management
        </p>
      </div>
    </div>
  );
};

// Main Booking Page Component
const TherapyBookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  
  const handleContinue = () => {
    if (selectedDate) {
      setCurrentStep(2);
      // Navigate to next step
    }
  };
  
  return (
    <div className="">
      {/* Main Content */}
      <div 
        className="relative mt-0 min-h-[calc(100vh-200px)] bg-cover bg-center"
        style={{
          backgroundImage: `url(${BookingPageBg})`,
          backgroundColor: 'rgba(245, 247, 250, 0.92)'
        }}
      >
      {/* Navigation Bar */}
          <NavigationBar />

        {/* Back Button */}
      <BackButton onClick={() => console.log('Go back')} />
        <div className="max-w-7xl mx-auto px-8 py-10">
          
           {/* Progress Stepper */}
      <ProgressStepper currentStep={currentStep} />
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Date Selection */}
            <div className="lg:col-span-2">
              <CalendarComponent 
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
                onContinue={handleContinue}
              />
              
            </div>
            
            {/* Right Column - Therapist Info */}
            <div className="lg:col-span-1">
              <TherapistInfoCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyBookingPage;