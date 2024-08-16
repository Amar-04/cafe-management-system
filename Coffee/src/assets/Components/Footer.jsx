import React from "react";
import { FaHome, FaCoffee, FaUtensils, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#47201C] text-[#FCF2D9] py-2 fixed bottom-0 w-full flex justify-around items-center mt-4">
      <div>
        <Link to="/" className="flex flex-col items-center">
          <FaHome className="text-2xl"/>
          <span className="text-sm">Home</span>
        </Link>
      </div>
      <div>
        <Link to="/drinks" className="flex flex-col items-center">
          <FaCoffee className="text-2xl" />
          <span className="text-sm">Drinks</span>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <FaUtensils className="text-2xl" />
        <span className="text-sm">Food</span>
      </div>
      <div className="flex flex-col items-center">
        <FaShoppingCart className="text-2xl" />
        <span className="text-sm">Order</span>
      </div>
    </footer>
  );
};

export default Footer;
