import React from 'react'

const ContactUs = () => {
  return (
<section className="py-16 bg-gray-50 border-b border-gray-200 text-primary w-full px-4">
  <div className="flex flex-col  md:flex-row justify-between mx-3 md:mx-9 md:space-x-6 space-y-8 md:space-y-0">
    <div>
      <h4 className="text-xl mb-3">SafeTalk</h4>
      <p className="text-lg">Professional therapy services for everyone, everywhere.</p>
    </div>

    <div>
      <h4 className="text-xl mb-3 font-bold">Services</h4>
      <ul className="flex-col space-y-2">
        <li><a href="#">Find Therapists</a></li>
        <li><a href="#">How it Works</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg mb-3 font-bold">Company</h4>
      <ul className="flex-col space-y-2">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg mb-3 font-bold">Legal</h4>
      <ul className="flex-col space-y-2">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">GDPR Compliance</a></li>
      </ul>
    </div>
  </div>
</section>

  )
}

export default ContactUs