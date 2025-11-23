import React from 'react'
import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import FeaturesSection from "./FeaturesSection.jsx"
import StepsCard from "./StepsCard.jsx"
import CTA from "./CTA.jsx"
import ContactUs from "./ContactUs.jsx"
import Footer from "./Footer.jsx"

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FeaturesSection />
        <StepsCard />
        <CTA />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default LandingPage