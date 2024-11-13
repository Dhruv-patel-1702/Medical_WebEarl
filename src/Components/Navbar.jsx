import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import useScrollTo from '../hooks/useScrollTo';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const { scrollToElement } = useScrollTo();
  
  const navLinks = [
    { path: "/", text: "Menu1" },
    { path: "/Menu2", text: "Menu2" },
    { path: "/Menu3", text: "Menu3" },
    { path: "/Menu4", text: "Menu4" },
    { path: "/Menu5", text: "Menu5" }
  ];

  const handleMenuToggle = useCallback(() => {
    setShowMenu(prev => !prev);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToElement(sectionId, 80); // 80px offset for navbar height
  };

  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  return (
    <nav className="font-lota fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center text-xl px-4 md:px-12 fixed top-0 left-0 right-0 z-20 h-14 text-gray-800 -tracking-tight shadow-md bg-white">
        {/* Left Section - Logo and Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex-shrink-0 ml-12">
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/Landsacpe@3x.svg" 
                alt="Medical Logo" 
                className="h-10 object-contain" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Updated with new styles */}
          <div className="hidden lg:flex">
            <ul className="flex gap-x-6 font-semibold">
              {navLinks.map(({ path, text }) => (
                <li key={path} className="relative">
                  <Link 
                    to={path} 
                    className={`nav-link transition-colors duration-300 py-1 ${
                      location.pathname === path 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {text}
                    {/* Active indicator line */}
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${
                      location.pathname === path 
                        ? 'bg-blue-500 opacity-100' 
                        : 'bg-transparent opacity-0'
                    }`} />
                    {/* Hover indicator line */}
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100 ${
                      location.pathname === path ? 'hidden' : ''
                    }`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Auth & Settings */}
        <div className="flex items-center gap-4 mr-12">
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/login" 
              className="px-4 py-1.5 rounded-md bg-green-100 text-green-700 hover:bg-green-200 transition-colors duration-300 text-sm font-medium"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-1.5 rounded-md text-white hover:bg-[#1a9447] transition-colors duration-300 text-sm font-medium"
              style={{ backgroundColor: '#15803d' }}
            >
              Register
            </Link>
          </div>
          
          {/* Settings Button */}
          <button 
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-300"
            aria-label="Settings"
          >
            <img 
              src="/assets/android-settings.svg" 
              alt="Settings" 
              className="w-6 h-6 text-gray-600"
            />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden transition-opacity duration-500"
            style={{ opacity: showMenu ? 0.5 : 1 }}
            aria-label={showMenu ? "Close Menu" : "Open Menu"}
            aria-expanded={showMenu}
          >
            <img 
              src={showMenu ? "/assets/close.png" : "/assets/menu.png"} 
              alt={showMenu ? "Close Menu" : "Open Menu"} 
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Updated with new styles */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-10 transition-transform duration-700 ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-y-8 h-full font-semibold">
          {navLinks.map(({ path, text }) => (
            <li key={path} className="relative">
              <Link 
                to={path} 
                className={`nav-link text-lg transition-colors duration-300 py-1 ${
                  location.pathname === path 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={handleMenuToggle}
              >
                {text}
                {/* Active indicator line for mobile */}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${
                  location.pathname === path 
                    ? 'bg-blue-500' 
                    : 'bg-transparent'
                }`} />
              </Link>
            </li>
          ))}
          <div className="flex flex-col items-center gap-4 mt-6">
            <Link 
              to="/login" 
              className="px-6 py-2 rounded-md bg-green-100 text-green-700 hover:bg-green-200 transition-colors duration-300"
              onClick={handleMenuToggle}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-6 py-2 rounded-md text-white hover:bg-[#1a9447] transition-colors duration-300"
              style={{ backgroundColor: '#15803d' }}
              onClick={handleMenuToggle}
            >
              Register
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 