import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu2 = () => {
  const [imageError, setImageError] = useState({});

  const facilities = [
    {
      id: 1,
      image: "https://img.freepik.com/free-photo/medical-equipment-arrangement-close-up_23-2149455271.jpg",
      title: "Advanced Medical Equipment",
      description: "State-of-the-art medical equipment for accurate diagnosis and treatment."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f",
      title: "Modern Laboratory",
      description: "Fully equipped laboratory with latest technology for precise testing."
    }
  ];

  const handleImageError = (id) => {
    setImageError(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="flex flex-col">
          {/* Text Content */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
              Clinic Facilities
            </h1>
            <p className="text-gray-600 text-lg">
              Experience world-class healthcare with our modern facilities and expert care.
            </p>
          </div>

          {/* Circle Image with Error Handling */}
          <div className="relative w-[400px] h-[400px] mx-auto lg:mx-0">
            <div className="absolute w-[300px] h-[300px] bg-pink-100 rounded-full left-10 top-10 animate-pulse" />
            <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-blue-100 opacity-30 animate-spin-slow" />
            <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-green-100 opacity-30 top-6 left-6" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" 
                alt="Medical Illustration" 
                className="w-[400px] h-[400px] object-contain z-10 transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.src = '/fallback-image.jpg';
                  e.target.onerror = null;
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Section - Cards */}
        <div className="flex flex-col">
          {/* See All Button */}
          <div className="flex justify-end mb-6">
            <Link 
              to="/Menu2/all"
              className="group bg-blue-50 text-blue-600 hover:bg-blue-100 font-semibold flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
            >
              SEE ALL
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility) => (
              <div 
                key={facility.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-[160px] overflow-hidden">
                  <img 
                    src={imageError[facility.id] ? '/fallback-image.jpg' : facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError(facility.id)}
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {facility.description}
                  </p>
                  <button 
                    className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 text-sm font-medium w-fit flex items-center gap-2 group"
                    onClick={() => {/* Add your click handler here */}}
                  >
                    SEE DETAIL
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Menu2 