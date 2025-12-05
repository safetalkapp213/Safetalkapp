import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./SharedComponent/Navbar";
import ContactUs from "./SharedComponent/ContactUs";
import Footer from "./SharedComponent/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
