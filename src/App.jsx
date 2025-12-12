import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./SharedComponent/Navbar";
import ContactUs from "./SharedComponent/ContactUs";
import Footer from "./SharedComponent/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Homepage from "./Pages/Homepage";

function App() {
  const location = useLocation();

  const hideLayout = ["/login", "/signup", "/forgot-password", "/homepage"];

  const shouldHideLayout = hideLayout.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>

      {!shouldHideLayout && <ContactUs />}
      {!shouldHideLayout && <Footer />}
    </>
  );
}
export default App;
