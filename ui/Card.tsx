import Image from "next/image";
import React from "react";

import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";

import productImage from "../assets/images/productImage.png";

export default function Card() {
  return (
    <div className="relative flex h-96 w-64 cursor-pointer flex-col items-center justify-between border border-gray-200 shadow-lg transition-all hover:shadow-xl">
      {/* Product Image */}
      <div className="relative mx-auto h-52 w-52 overflow-hidden">
        <Image
          src={productImage}
          alt="Product image"
          className="object-cover"
          layout="fill"
        />
      </div>

      {/* Discount */}
      <span className="absolute left-0 top-0 rounded-br-md bg-amber-400 px-2.5 py-1 text-xs text-white">
        12%
      </span>

      {/* Wishlist Button */}
      <span className="bg-customPrimary/90 absolute right-2 top-2 cursor-pointer rounded-sm p-2 text-white">
        <GoHeart />
      </span>

      {/* Product Details */}
      <div className="w-full space-y-4 px-4">
        <p className="text-lg font-semibold text-gray-800">Iphone 14 pro max</p>

        <div className="flex items-center justify-between gap-2">
          {/* Available Colors */}
          <div className="flex justify-center gap-2">
            <div className="h-4 w-4 rounded-sm bg-pink-300"></div>
            <div className="h-4 w-4 rounded-sm bg-amber-50"></div>
            <div className="h-4 w-4 rounded-sm bg-indigo-400"></div>
            <div className="h-4 w-4 rounded-sm bg-green-300"></div>
            <div className="h-4 w-4 rounded-sm bg-black"></div>
          </div>

          {/* Rating (Stars) */}
          <div className="flex items-center gap-1">
            <FaStar className="text-sm text-amber-400" />
            <p className="text-xs font-medium text-gray-400">4.5</p>
          </div>
        </div>

        {/* Price */}
        <p className="text-lg font-semibold text-gray-800">1250.2$</p>
      </div>

      {/* Add to Cart Button */}
      <button className="bg-customSecondary hover:bg-secondaryLight w-full py-2 font-medium text-white transition-all">
        Add to Cart
      </button>
    </div>
  );
}
