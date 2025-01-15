'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from React Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="hover:text-gray-200 transition cursor-pointer">
              Word Counter
            </span>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`md:flex space-x-6 text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${
            isOpen ? "flex flex-col items-center space-y-4" : "hidden"
          } z-10 md:flex-row md:space-y-0 md:space-x-6`}
        >
          <li className="py-2 md:py-0">
            <Link href="/">
              <span className="hover:text-gray-200 transition cursor-pointer">
                Home
              </span>
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/about">
              <span className="hover:text-gray-200 transition cursor-pointer">
                About
              </span>
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/privacy-policy">
              <span className="hover:text-gray-200 transition cursor-pointer">
                Privacy Policy
              </span>
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/contact">
              <span className="hover:text-gray-200 transition cursor-pointer">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
