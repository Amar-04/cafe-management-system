import React from 'react';

const Header = () => {
  // Get the customer's name from localStorage
  const customerName = localStorage.getItem('customerName');

  return (
    <div className='flex flex-col items-start justify-center w-full p-4 text-[#834D1E] mb-4'>
        <h2 className='text-3xl font-bold'>Welcome {customerName}!</h2>
        <p className='text-sm sm:text-xl font-medium'>Ready to experience something special today?</p>
    </div>
  );
}

export default Header;
