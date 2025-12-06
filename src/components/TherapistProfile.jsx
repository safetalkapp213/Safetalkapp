import React, {useState} from 'react';
import { Star, CheckCircle, GraduationCap, Globe, Clock, MapPin, ArrowLeft, User } from 'lucide-react';
import backgroundImage from '../assets/Therapist-background.png'
import logo from '../assets/safetalk-logo.png'
import photo from '../assets/Therapist-Placeholder.jpg'

export default function TherapistProfile() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:`url(${backgroundImage})`,
          // filter: none,
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* logo */}
             <img src={logo} alt="safetalk-logo" className="h-10 w-auto" />
            </div>
            <div className="flex items-center gap-6">
              <button className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Find Therapists
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <User size={20} />
                <span className="text-sm font-medium">Ola Yin</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button className="flex items-center gap-2 text-white mb-8 hover:text-gray-200 transition">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Browse</span>
          </button>

          {/* Cards Container */}
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* Left Card - Profile */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 sm:p-8">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {/* Placeholder for therapist photo */}
                <img 
                  src={photo}
                  alt="Dr. Bello Afifi"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-2xl font-bold text-gray-800">Dr. Bello Afifi</h1>
                    <CheckCircle size={20} className="text-teal-600" fill="currentColor" />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400" fill="currentColor" />
                      <span className="font-semibold text-gray-700">4.2 rating</span>
                    </div>
                    <span className="text-gray-500 text-sm">10+ years</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                      Anxiety
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                      Depression
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                      Stress Management
                    </span>
                  </div>
                </div>
              </div>

              {/* About Me */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">About Me</h2>
                <p className="text-gray-600 leading-relaxed">
                  Licensed clinical psychologist with over 10 years of experience helping individuals 
                  overcome anxiety and depression. I use evidence-based approaches including CBT 
                  and mindfulness techniques.
                </p>
              </div>

              {/* Education */}
              <div className="mb-6 flex gap-3">
                <GraduationCap size={24} className="text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Education</h3>
                  <p className="text-gray-600 text-sm">PhD in Clinical Psychology, Harvard University</p>
                </div>
              </div>

              {/* Languages */}
              <div className="mb-6 flex gap-3">
                <Globe size={24} className="text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Languages</h3>
                  <p className="text-gray-600 text-sm">English, Yoruba, Spanish</p>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6 flex gap-3">
                <Clock size={24} className="text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Availability</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 border border-gray-300 rounded text-sm">Mon 9-5</span>
                    <span className="px-3 py-1 border border-gray-300 rounded text-sm">Wed 9-5</span>
                    <span className="px-3 py-1 border border-gray-300 rounded text-sm">Fri 9-5</span>
                  </div>
                </div>
              </div>

              {/* Session Format */}
              <div className="flex gap-3">
                <MapPin size={24} className="text-gray-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Session Format</h3>
                  <p className="text-gray-600 text-sm">Remote sessions via secure video call</p>
                </div>
              </div>
            </div>

            {/* Right Card - Pricing */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-teal-700 mb-1">$ 200</div>
                  <div className="text-gray-600 text-sm">per session (50 minutes)</div>
                </div>

                <button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg mb-6 transition">
                  Book A Session
                </button>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Verified credentials</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Secure and confidential</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Instant confirmation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">24h cancellation policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Client Reviews</h2>
            
            {/* Review 1 */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
                ))}
                <span className="text-gray-500 text-sm ml-2">2 weeks ago</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Dr. Sarah Johnson has been incredibly helpful in my journey. Their approach is both 
                professional and compassionate."
              </p>
            </div>

            {/* Review 2 */}
            <div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
                ))}
                <span className="text-gray-500 text-sm ml-2">1 month ago</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Highly recommend! The sessions have made a real difference in my life. Very understanding 
                and skilled therapist."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}