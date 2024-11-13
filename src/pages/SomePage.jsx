import React from 'react';
import Ready from '../Components/Ready';
import ScrollToTopButton from '../Components/ScrollToTopButton';

const SomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Other content */}
      
      {/* Add the Ready component with some margin */}
      <div className="my-12">
        <Ready />
      </div>
      
      <ScrollToTopButton />
      
      {/* Other content */}
    </div>
  );
};

export default SomePage; 