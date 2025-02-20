"use client";
import { useState } from "react";
import Link from "next/link"; // Use Next.js Link for navigation
import { Menu, X } from "lucide-react"; // Add icons for the menu (hamburger) and close (X)

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle navbar visibility on mobile
  };

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo or Title */}
        <h2 className="text-white text-3xl font-bold">VideoStream</h2>

        {/* Centered Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-white hover:no-underline">
            Home
          </Link>
          <Link href="/contact" className="text-white hover:no-underline">
            Contact
          </Link>
          <Link href="/disclaimer" className="text-white hover:no-underline">
            Disclaimer
          </Link>
          <Link href="/terms" className="text-white hover:no-underline">
            Terms of Service
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 bg-gray-800 text-white rounded-l-lg focus:outline-none"
          />
          <button className="p-2 bg-blue-500 text-white rounded-r-lg">
            <span className="h-5 w-5">🔍</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="text-white md:hidden" onClick={toggleNavbar}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Links (Centered) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 px-4 py-2 bg-black rounded-lg shadow-lg">
          <Link href="/" className="block text-white text-xl py-2 hover:no-underline">
            Home
          </Link>
          <Link href="/contact" className="block text-white text-xl py-2 hover:no-underline">
            Contact
          </Link>
          <Link href="/disclaimer" className="block text-white text-xl py-2 hover:no-underline">
            Disclaimer
          </Link>
          <Link href="/terms" className="block text-white text-xl py-2 hover:no-underline">
            Terms of Service
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;