import React from 'react'
import shield from "../assets/shield.svg"
import calender from "../assets/calender.svg"
import heart from "../assets/heart.svg"
import circle from "../assets/circle.svg"

const FeaturesSection = () => {
  const features = [
    {
      title: "Verified Therapists",
      description: "All therapists are verified professionals with proper credentials and licenses",
      icon: shield
    },
    {
      title: "Easy Booking",
      description: "Schedule sessions at your convience with our simple booking system",
      icon: calender
    },
    {
      title: "Personalized Care",
      description: "Find therapists specialized for your specific needs and concerns",
      icon: heart
    },
    {
      title: "Secure & Confidential",
      description: "Your privacy is our priority with encrypted, secure communications",
      icon: circle
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose SafeTalk?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional therapy services designed with your safety and comfort in mind
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 shadow-md rounded-lg p-6 text-center gap-8 max-w-6xl">
                <div className="mb-4 flex items-center justify-center bg-lightGreen rounded-full p-2 aspect-square max-w-[80px] mx-auto">
                    <img src={feature.icon} className="h-10 w-10 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className=" text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection