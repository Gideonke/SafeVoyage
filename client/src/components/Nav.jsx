import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full top-0 bg-white shadow-2xl py-3 z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[5em]">
          <div>
            <img
              src="src/assets/images/Screenshot_from_2024-06-11_09-00-02-removebg-preview.png"
              className="w-[200px] h-[10vh]"
              alt="Logo"
            />
          </div>
          <div className="hidden md:flex gap-8 text-blue-400 cursor-pointer">
            <Link to="/">Home</Link>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
            <Link to="/faqs">FAQs</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-blue-400">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 text-blue-400 text-center">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/register" onClick={toggleMenu}>Sign Up</Link>
            <Link to="/login" onClick={toggleMenu}>Login</Link>
            <Link to="/faqs" onClick={toggleMenu}>FAQs</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
