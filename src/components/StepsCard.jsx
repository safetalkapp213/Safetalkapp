import React from "react"

function StepsCard() {
  const steps = [
    {
      number: "1",
      title: "Book Therapists",
      description: "Explore our directory of verified therapists and find the perfect match for your needs"
    },
    {
      number: "2",
      title: "Book A Session",
      description: "Choose a time that works for you and receive instant conformation via email"
    },
    {
      number: "3",
      title: "Start Your Journey",
      description: "Explore our directory of verified therapists and find the perfect match for your needs"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 font-semibold">
            Get Started in Three Simple Steps
          </p>
        </div>
        
        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center max-w-xs mx-auto">
              <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsCard 