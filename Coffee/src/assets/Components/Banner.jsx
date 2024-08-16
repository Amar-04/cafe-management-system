import React from 'react';

const Banner = () => {
  return (
    <div 
      className="w-[90%] max-w-md mx-auto relative h-56 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url('./banner.jpg')` }}
    >
      <div className="absolute inset-0 bg-[#693812aa] rounded-lg flex flex-col items-center justify-center text-center text-[#F8E3B6] p-4">
        <img src="logoo.avif" alt="Logo" className="w-48 mt-2 mb-4" /> 
        <h1 className="text-xl font-bold mb-2">Where Every Sip Tells a Story</h1>
        <p className="text-md font-semibold">Discover the perfect blend <br />of comfort and flavor.</p>
      </div>
    </div>
  );
};

export default Banner;
