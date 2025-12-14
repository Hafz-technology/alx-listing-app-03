import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ACCOMMODATION_TYPES } from "@/constants";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <Image
            src="/logo.svg" // Make sure you have a logo.svg in your public folder
            alt="ALX Listing App Logo"
            width={40}
            height={40}
          />
          <span className="ml-2 text-2xl font-bold text-gray-800">
            ALX Listings
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-grow max-w-xl mx-auto w-full md:w-auto mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search by location, property type..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types Navigation */}
      <nav className="container mx-auto mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ul className="flex justify-center md:justify-start space-x-6">
          {ACCOMMODATION_TYPES.map((type) => (
            <li key={type}>
              <Link
                href={`/category/${type.toLowerCase().replace(/\s/g, "-")}`}
                className="text-gray-600 hover:text-blue-600 py-2 block"
              >
                {type}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;