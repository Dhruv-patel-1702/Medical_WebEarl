import React from 'react'
import { Link } from 'react-router-dom'

const AllFacilities = () => {
  const allFacilities = [
    {
      id: 1,
      image: "https://img.freepik.com/free-photo/medical-equipment-arrangement-close-up_23-2149455271.jpg",
      title: "Lorem ipsum dolor",
      description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f",
      title: "Lorem ipsum dolor",
      description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c",
      title: "Lorem ipsum dolor",
      description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
      title: "Lorem ipsum dolor",
      description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d",
      title: "Lorem ipsum dolor",
      description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus."
    },
    {
      id: 6,
      image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-working_23-2149611193.jpg",
      title: "Lorem ipsum dolor",
      description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus."
    }
  ];

  return (
    <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">All Clinic Facilities</h1>
          <p className="text-gray-600">
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
          </p>
        </div>
        <Link 
          to="/Menu2"
          className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          BACK
        </Link>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allFacilities.map((facility) => (
          <div 
            key={facility.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="h-[200px] overflow-hidden">
              <img 
                src={facility.image} 
                alt={facility.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {facility.description}
              </p>
              <button className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition-colors text-sm font-medium w-fit">
                SEE DETAIL
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllFacilities 