import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Portfolio", path: "portfolio" },
  { name: "Experience", path: "experience" },
  { name: "Contacts", path: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (path) => {
    document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu on item click
  };

  return (
    <header className="fixed top-0 left-0 w-full border-b border-gray-300 bg-white shadow-md z-50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-16">

          {/* Logo Section */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => handleScroll('home')}>
            <img
              src="/roshni.jpg"
              alt="Roshni Paudel"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-green-500 shadow-sm"
            />
            <div className="leading-tight">
              <span className="font-bold text-xl sm:text-2xl">
                ROSHN<span className="text-green-500">I</span>
              </span>
              <p className="text-xs sm:text-sm text-gray-600">Web Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 font-medium">
            {navItems.map(({ name, path }) => (
              <li
                key={name}
                className="list-none cursor-pointer text-lg text-gray-800 hover:text-green-500"
                onClick={() => handleScroll(path)}
              >
                {name}
              </li>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {navItems.map(({ name, path }) => (
              <li
                key={name}
                className="cursor-pointer text-lg text-gray-800 hover:text-green-500"
                onClick={() => handleScroll(path)}
              >
                {name}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
