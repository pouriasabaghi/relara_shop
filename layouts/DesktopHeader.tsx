'use client'

import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import MiniShopCart from "@/components/cards/MiniShopCart";
import Link from "next/link";

export default function DesktopHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 w-full z-50 bg-gradient-to-r from-customPrimary to-customAccent text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-extrabold tracking-wide">
            Relara Shop
          </span>
        </div>

        {/* Search Bar */}
        <div className="mx-16 flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-full border-2 border-white bg-white/20 px-6 py-2 pl-12 text-white placeholder-white backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
            <Search className="absolute left-4 top-2.5 text-white" size={22} />
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-8">
          <button className="relative transition-transform duration-200 hover:scale-110">
            <ShoppingCart
              size={24}
              className="text-white hover:text-customPrimary"
              onClick={() => setIsOpen(!isOpen)}
            />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primaryDark text-xs text-white">
              3
            </span>
          </button>
          <Link href="/panel" className="transition-transform duration-200 hover:scale-110">
            <User size={24} className="text-white hover:text-customPrimary" />
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="border-t border-white/20 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto flex justify-center space-x-10 px-8 py-3">
          <a
            href="#"
            className="font-semibold tracking-wide text-white transition-colors duration-200 hover:text-yellow-300"
          >
            Mobile
          </a>
          <a
            href="#"
            className="font-semibold tracking-wide text-white transition-colors duration-200 hover:text-yellow-300"
          >
            Laptops
          </a>
          <a
            href="#"
            className="font-semibold tracking-wide text-white transition-colors duration-200 hover:text-yellow-300"
          >
            Accessories
          </a>
          <a
            href="#"
            className="font-semibold tracking-wide text-white transition-colors duration-200 hover:text-yellow-300"
          >
            Special Offers
          </a>
          <a
            href="#"
            className="font-semibold tracking-wide text-white transition-colors duration-200 hover:text-yellow-300"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen &&<MiniShopCart />}
    </header>
  );
}
