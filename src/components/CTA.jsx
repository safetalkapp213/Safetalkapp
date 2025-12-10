import React from "react";
import Button from "../SharedComponent/Button.jsx";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-orange-500 text-black py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to Take the First Steps?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Join thousands of people who have found support and healing through SafeTalk.
        </p>

<Link to="/signup">
  <Button variant="secondary">Sign Up Now</Button>
</Link>

      </div>
    </section>
  );
};

export default CTA;
