import React from "react";
import Button from "../SharedComponent/Button.jsx";

const CTA = () => {
  return (
    <section className="bg-primary text-black py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to Take the First Steps?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Join thousands of people who have found support and healing through SafeTalk.
        </p>
        <Button variant="secondary" className="px-8 py-3 text-lg">
          Sign Up Now
        </Button>
      </div>
    </section>
  );
};

export default CTA;
