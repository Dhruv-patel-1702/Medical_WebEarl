import React from 'react';
import { Link } from 'react-router-dom';

const Ready = () => {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-400 to-teal-100 py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ready to get started?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
          </p>
        </div>

        {/* Right Button */}
        <div className="flex-shrink-0">
          <Link
            to="/appointment"
            className="inline-block px-6 py-3 bg-white text-blue-500 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            CREATE APPOINTMENT NOW!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ready; 