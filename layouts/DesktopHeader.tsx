import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

export default function DesktopHeader() {
  return (
    <header className="bg-gradient-to-r from-customPrimary to-customAccent text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-8 py-7 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          {/* <img src="/logo.png" alt="Realara Shop" className="h-12 w-auto rounded-full shadow-md" /> */}
          <span className="text-3xl font-extrabold tracking-wide">Realara Shop</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border-2 border-white bg-white/20 text-white placeholder-white rounded-full py-2 px-6 pl-12 focus:outline-none focus:ring-4 focus:ring-purple-400 backdrop-blur-sm"
            />
            <Search className="absolute left-4 top-2.5 text-white" size={22} />
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-8">
          <button className="relative hover:scale-110 transition-transform duration-200">
            <ShoppingCart size={24} className="text-white hover:text-yellow-300" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="hover:scale-110 transition-transform duration-200">
            <User size={24} className="text-white hover:text-green-300" />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="container mx-auto px-8 py-3 flex space-x-10 justify-center">
          <a href="#" className="text-white hover:text-yellow-300 font-semibold tracking-wide transition-colors duration-200">Mobile</a>
          <a href="#" className="text-white hover:text-yellow-300 font-semibold tracking-wide transition-colors duration-200">Laptops</a>
          <a href="#" className="text-white hover:text-yellow-300 font-semibold tracking-wide transition-colors duration-200">Accessories</a>
          <a href="#" className="text-white hover:text-yellow-300 font-semibold tracking-wide transition-colors duration-200">Special Offers</a>
          <a href="#" className="text-white hover:text-yellow-300 font-semibold tracking-wide transition-colors duration-200">Contact Us</a>
        </div>
      </nav>
    </header>
  );
}
