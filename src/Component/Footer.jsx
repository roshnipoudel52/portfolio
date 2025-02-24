import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">


          <div className="hidden md:block"></div>


          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end items-center space-x-4">
              <a href="#" className="hover:text-white transition duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />


        <p className="text-center text-sm">
          © {new Date().getFullYear()} Roshni Paudel.
        </p>
      </div>
    </footer>
  );
}
