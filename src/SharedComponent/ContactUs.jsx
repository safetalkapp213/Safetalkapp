import React from "react";

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200 w-full px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-primary">
        
        {/* Brand */}
       {/* Brand */}
<div className="flex flex-col items-start">
  <h4 className="text-2xl font-semibold mb-2">SafeTalk</h4>
  <p className="text-base text-gray-700 leading-relaxed">
    Professional therapy services for everyone, everywhere.
  </p>
</div>


        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-600 transition">Find Therapists</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">How it Works</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Pricing</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">GDPR Compliance</a></li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
