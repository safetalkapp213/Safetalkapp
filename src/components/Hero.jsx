import React from "react";
import heroImage from "../assets/image.png";
import Button from "../SharedComponent/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center bg-green-50 py-16 md:py-24 w-full px-6 md:px-12">
      
      {/* Hero Text */}
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h2 className="font-extrabold mb-6 text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
          Your Mental Health Journey Starts Here
        </h2>

        <p className="text-lg md:text-xl text-primary max-w-lg md:max-w-xl mb-8 mx-auto md:mx-0 leading-relaxed">
          Connect with a verified, professional therapist for secure, confidential sessions.<br />
          Book appointments easily and take control of your mental well-being with SafeTalk.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
    <Link to="/login">
    <Button variant="primary">Find A Therapist</Button>
    </Link>
    <Link to="/signup">
    <Button variant="secondary">Get Started</Button>
    </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={heroImage}
          alt="Therapist talking to a patient"
          className="rounded-xl rounded-tl-[150px] rounded-br-[150px] shadow-xl w-full max-w-md md:max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
