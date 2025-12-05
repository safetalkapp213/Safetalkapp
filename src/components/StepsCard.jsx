import React from "react";

function StepsCard() {
  const steps = [
    {
      number: "1",
      title: "Book a Therapist",
      description: "Explore our directory of verified therapists and find the perfect match for your needs.",
    },
    {
      number: "2",
      title: "Schedule a Session",
      description: "Choose a time that works for you and receive instant confirmation via email.",
    },
    {
      number: "3",
      title: "Start Your Journey",
      description: "Connect with your therapist and take the first steps toward better mental health.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Get Started in Three Simple Steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center relative group">
              
              {/* Connector line (behind circles) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 right-0 w-full h-1 bg-gray-300 z-[-1]"></div>
              )}

              {/* Step Circle */}
              <div className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold shadow-lg transition-transform duration-300 group-hover:scale-110 z-10">
                {step.number}
              </div>

              {/* Step Content */}
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepsCard;
