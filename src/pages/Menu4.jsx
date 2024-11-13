import React, { useState } from 'react'

const Menu4 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const doctors = [
    {
      id: 1,
      name: "dr. Jena Doe",
      image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years"
    },
    {
      id: 2,
      name: "dr. Jean Doe",
      image: "https://img.freepik.com/free-photo/attractive-young-female-doctor-with-stethoscope-hospital_651396-974.jpg",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years"
    },
    {
      id: 3,
      name: "dr. John Doe",
      image: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years"
    },
    {
      id: 4,
      name: "dr. James Doe",
      image: "https://img.freepik.com/free-photo/young-doctor-with-stethoscope-white-uniform_176474-8391.jpg",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years"
    },
    {
      id: 5,
      name: "dr. Jim Doe",
      image: "https://img.freepik.com/free-photo/portrait-successful-mature-doctor-with-stethoscope_1262-12136.jpg",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years"
    },
    {
      id: 6,
      name: "dr. Joana Doe",
      image: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years"
    }
  ];

  const categories = [
    'All',
    'Orthopedic',
    'Nutritionist',
    'Pediatric',
    'Anaesthestic'
  ];

  return (
    <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar - Title and Categories */}
        <div className="md:w-64 flex-shrink-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Ask Doctos</h1>
          <div className="flex flex-col gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 text-left rounded-lg text-sm font-medium transition-colors duration-300
                  ${selectedCategory === category 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content - Doctors Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-lg p-4 flex items-start gap-4">
                {/* Doctor Image */}
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                
                {/* Doctor Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{doctor.specialty}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {doctor.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {doctor.experience}
                    </div>
                  </div>

                  {/* Chat Button */}
                  <button className="px-6 py-2 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
                    CHAT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu4 