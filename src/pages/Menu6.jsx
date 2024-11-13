import React from 'react'

const Menu6 = () => {
  const clinics = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      title: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc",
      title: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
      title: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
      title: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      title: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
      title: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A"
    }
  ];

  return (
    <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header - Now aligned to the left */}
      <div className="mb-12 text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Clinics
        </h1>
        <p className="text-gray-600 text-lg max-w-xl">
          Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
        </p>
      </div>

      {/* Clinics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clinics.map((clinic) => (
          <div 
            key={clinic.id}
            className="bg-white rounded-xl overflow-hidden flex"
          >
            {/* Clinic Image */}
            <div className="w-32 h-32 flex-shrink-0">
              <img 
                src={clinic.image}
                alt={clinic.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Clinic Info */}
            <div className="flex-grow p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {clinic.title}
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {clinic.phone}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {clinic.email}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {clinic.address}
                </div>
              </div>

              {/* Contact Button */}
              <button className="w-full text-center py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-50 transition-colors text-sm font-medium">
                CONTACT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu6 