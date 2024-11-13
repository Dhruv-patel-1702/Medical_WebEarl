import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/assets/Landsacpe@3x.svg" 
                alt="Medical Logo" 
                className="h-8"
              />
              <span className="text-xl font-bold">Medical</span>
            </div>
            <p className="text-gray-600 text-sm">
              Nam posuere accumsan porta. Integer id tincidunt sit amet sed libero.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              © Skyrev Theme {currentYear}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-blue-500 font-bold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-gray-800">Donec dignissim</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-800">Curabitur egestas</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-800">Nam posuere</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-800">Aenean facilisis</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-blue-500 font-bold mb-4">SERVICES</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-gray-800">Cras convallis</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-800">Vestibulum faucibus</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-800">Quisque lacinia purus</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-800">Aliquam nec ex</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-blue-500 font-bold mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-gray-800">Suspendisse porttitor</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-800">Nam posuere</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-800">Curabitur egestas</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          {/* Language Selector */}
          <div className="mb-4 md:mb-0">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <img src="/assets/globe-icon.svg" alt="Language" className="w-5 h-5" />
              English - En
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link to="#" className="text-blue-400 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link to="#" className="text-blue-400 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
              </svg>
            </Link>
            <Link to="#" className="text-blue-400 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            <Link to="#" className="text-pink-500 hover:text-pink-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0-.795-.646-1.44-1.44-1.44-.795 0-1.44.646-1.44 1.44 0 .794.646 1.439 1.44 1.439.793-.001 1.44-.645 1.44-1.439z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 