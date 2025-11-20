import React from 'react'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import FeaturesSection from "./components/FeaturesSection.jsx"
import StepsCard from "./components/StepsCard.jsx"
import CTA from "./components/CTA.jsx"
import ContactUs from "./components/ContactUs.jsx"
import Footer from "./components/Footer.jsx"

function App() {
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

export default App
