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
    <div
      className="w-screen text-white relative"
      style={{
        backgroundImage: "linear-gradient(180deg, #623900 11%, #35270c 68%)",
      }}
    >
      <div className="flex justify-between items-center p-4">
        <Link to="/">
          <img
            src="DALL·E 2024-08-16 15.09.25 - A luxurious logo design for 'Sree Veerabadhareshwara Jewelry Works' (SVJW), incorporating a gold theme with elegant typography and an artistic depicti.webp"
            alt="Sree Veerabadhareshwara Jewelry Works"
            className="w-12 h-12 rounded-full mr-1 ml-0 lg:ml-2 lg:w-28 lg:h-28 md:ml-2 md:w-28 md:h-28"
          />
        </Link>
        <h6 className="text-sm mr-1 lg:text-xl md:text-xl  2xl:text-3xl ">
          Sree Veerabadhareshwara Jewellery Works
        </h6>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-2xl">
          <li>
            <Link to="/" className="hover:text-[#d4af37] cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#d4af37] cursor-pointer">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#d4af37] cursor-pointer">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-[#d4af37] mr-8 cursor-pointer"
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
          className="text-[26px] lg:hidden"
        >
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>

      {/* Mobile Menu (Hidden on larger screens) */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-[60%] bg-gradient-to-b from-[#623900] to-[#35270c] text-white shadow-lg transform ${
          show ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50 lg:hidden`}
      >
        <ul className="flex flex-col p-6 space-y-4 text-lg">
          <li>
            <Link
              to="/"
              onClick={() => setShow(false)}
              className="hover:text-[#d4af37]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setShow(false)}
              className="hover:text-[#d4af37]"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setShow(false)}
              className="hover:text-[#d4af37]"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              onClick={() => setShow(false)}
              className="hover:text-[#d4af37]"
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
