import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">ALX Listings</h3>
          <p className="text-gray-400 text-sm">
            Your trusted platform for finding the best properties worldwide.
          </p>
          <p className="text-gray-400 text-sm mt-2">© 2025 ALX Listings. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                Contact
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul>
            <li className="mb-2">
              <Link href="/category/villas" className="text-gray-400 hover:text-white text-sm">
                Villas
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/category/apartments" className="text-gray-400 hover:text-white text-sm">
                Apartments
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/category/chalets" className="text-gray-400 hover:text-white text-sm">
                Chalets
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/category/cabins" className="text-gray-400 hover:text-white text-sm">
                Cabins
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;