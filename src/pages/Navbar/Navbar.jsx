import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null); // Reference for the menu div

  const handleMobileHamburger = () => {
    setShow(!show);
  };

  // Effect to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false); // Close the menu if clicked outside
      }
    };

    // Add event listener to detect outside clicks
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-screen text-white relative">
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#1a1a1a] to-[#4b4b4b] shadow-lg">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dfxkazmkc/image/upload/v1723829037/kc9dtfns6bq35eghyunl.webp"
            alt="Sree Veerabadhareshwara Jewelry Works"
            className="w-20 h-20 rounded-full md:ml-5 ml-1 mr-2  "
          />
        </Link>
        <p className=" text-[10px] lg:text-2xl font-semibold text-gold p-3 hover:text-yellow-300 ">
          Sree Veerabadhareshwara Jewellery Works
        </p>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-200 transition-colors">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/about" className="hover:text-gold transition-colors">
              About Us
            </Link>
          </li> */}
          <li>
            <Link
              to="/contactuS"
              className="hover:text-yellow-200 transition-colors"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-yellow-200 transition-colors"
            >
              Cart
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={handleMobileHamburger}
          aria-expanded={show}
          aria-controls="mobile-menu"
          className="text-3xl lg:hidden"
        >
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>

      {/* Mobile Menu (Hidden on larger screens) */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-[60%] bg-gradient-to-b from-[#1a1a1a] to-[#4b4b4b] text-white shadow-lg transform ${
          show ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50 lg:hidden`}
      >
        <ul className="flex flex-col p-6 space-y-4 text-lg font-medium">
          <li>
            <Link
              to="/"
              onClick={() => setShow(false)}
              className="hover:text-yellow-200 transition-colors"
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              to="/about"
              onClick={() => setShow(false)}
              className="hover:text-gold transition-colors"
            >
              About Us
            </Link>
          </li> */}
          <li>
            <Link
              to="/contact"
              onClick={() => setShow(false)}
              className="hover:text-yellow-200 transition-colors"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              onClick={() => setShow(false)}
              className="hover:text-yellow-200 transition-colors"
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
