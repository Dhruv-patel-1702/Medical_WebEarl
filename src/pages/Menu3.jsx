import React from 'react'

const Menu3 = () => {
  const specialities = [
    { id: 1, name: 'Dentist', isHighlighted: false },
    { id: 2, name: 'Padriatric', isHighlighted: false },
    { id: 3, name: 'Cardiology', isHighlighted: false },
    { id: 4, name: 'Traumatologi', isHighlighted: true },
    { id: 5, name: 'Orthopaedi', isHighlighted: true },
    { id: 6, name: 'Anestesiologi', isHighlighted: true },
    { id: 7, name: 'Reumatologi', isHighlighted: false },
    { id: 8, name: 'Andrologi', isHighlighted: false },
    { id: 9, name: 'Ortodonsia', isHighlighted: false },
  ];

  return (
    <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-28 ">
        {/* Left Content */}
        <div className="lg:w-1/2 mt-24">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Our Speciality
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque, gravida consequat velit venenatis at.
          </p>

          {/* Speciality Tags */}
          <div className="flex flex-wrap gap-4 mt-10">
            {specialities.map((specialty) => (
              <span
                key={specialty.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer
                  ${specialty.isHighlighted 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {specialty.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right Illustration */}
        <div className="lg:w-1/2">
          <div className="relative w-full max-w-[500px] mx-auto">
            {/* Main Illustration */}
            <img
              src="/assets/Illustration & Title.svg"
              alt="Doctor Illustration"
              className="w-full "
            />

            {/* Floating Icons */}
            <div className="absolute top-10 right-20 bg-green-500 p-3 rounded-full" >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="absolute top-1/2 right-0 bg-blue-500 p-3 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="absolute bottom-20 left-10 bg-pink-500 p-3 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu3 