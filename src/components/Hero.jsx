import React from 'react'
import heroImage from "../assets/safetalk-hero-img.png"
import Button from "./Button"

const Hero = () => {
  return (

    <section className="flex flex-col md:flex-row items-center bg-lightGreen py-16 md:py-20 w-full px-4 md:px-8">

      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 m-3"> {/*Hero Text*/}

        <h2 className="font-bold mb-6 text-2xl md:text-4xl lg:text-5xl text-primary">Your Mental Health Journey Starts Here</h2>

        <p className="text-lg text-primary max-w-2xl mb-8 mx-auto leading-relaxed">Connect with a verified, professional therrapist for secure, confidential sessions. <br/>
        Book appointments easily and take control of your mental well-being with SafeTalk.
        </p>
        
        {/* Button Container */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">

          <Button variant="primary">Find A Therapists</Button>
          <Button variant="secondary">Get Started</Button>
          
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end">{/* Hero Image */}
        <img 
        src={heroImage} 
        alt="Therapist talking to a patient"
        className="rounded-lg shadow-lg w-full"
        />
      </div>
    </section>
  )
}

export default Hero