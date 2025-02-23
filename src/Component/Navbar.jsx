
import React from 'react';
import { Link } from 'react-router';

const navItems = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Portfolio", path: "portfolio" },
  { name: "Experience", path: "experience" },
  { name: "Contacts", path: "contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-gray-300 bg-white shadow-md z-50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center space-x-4">
            <img
              src="/roshni.jpg"
              alt="Roshni Paudel"
              className="h-16 w-16 rounded-full border-2 border-green-500 shadow-sm"
            />
            <div className="leading-tight ">
              <span className="font-bold text-2xl cursor-pointer">
                ROSHN<span className="text-green-500 text-2xl">I</span>
              </span>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
          </div>

          <nav>
            <ul className="hidden md:flex space-x-10 font-medium ">


              {navItems.map(({ name, path }) => (
                <li  key={name} className="cursor-pointer text-lg">
                <span
               
                  onClick={() => document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-800 hover:text-green-500"
                >
                 {name}
                </span>
              </li>
              
                
              ))}

            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}