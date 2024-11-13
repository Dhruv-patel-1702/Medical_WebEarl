import React, { useState } from 'react'

const Menu5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Chief Digital Officer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero.",
      rating: 5
    },
    {
      id: 2,
      name: "John Doe",
      role: "Chief Digital Officer",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      content: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero.",
      rating: 5
    }
  ];

  return (
    <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          People Testimonials
        </h1>
        <p className="text-gray-600 text-lg">
          Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
        </p>
      </div>

      {/* Testimonials */}
      <div className="flex flex-wrap gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="flex-1 min-w-[300px] bg-white rounded-3xl p-8 relative overflow-hidden"
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              minHeight: '300px'
            }}
          >
            {/* Content */}
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                {testimonial.content}
              </p>
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className="w-6 h-6 text-yellow-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Background Circle */}
            <div 
              className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-50 rounded-full opacity-10"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {[...Array(6)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${i === currentSlide 
                ? 'w-8 bg-blue-500' 
                : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu5
