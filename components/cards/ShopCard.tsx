import Image from "next/image";
import React from "react";
import productImage from "../../assets/images/productImage.png";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

export default function ShopCard() {
  return (
    <div className="relative flex w-full max-w-xl items-center gap-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-all hover:shadow-lg md:max-w-2xl">
      {/* product image */}
      <div className="relative h-28 w-28 overflow-hidden rounded-lg border border-gray-200">
        <Image
          src={productImage}
          alt="Product image"
          className="object-cover"
          layout="fill"
        />
      </div>

      {/* product details */}
      <div className="flex flex-1 flex-col justify-between">
        {/* product name */}
        <p className="text-sm md:text-lg font-semibold text-customPrimary line-clamp-1 mt-2 md:mt-0">
          iPhone 14 Pro Max
        </p>

        {/* product color */}
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full border border-gray-300 bg-pink-300"></div>
          <p className="text-sm text-gray-600">Pink</p>
        </div>

        {/* trash button */}
        <button className="absolute right-4 top-4 text-gray-400 transition hover:text-red-500 text-sm md:text-base">
          <FaTrash />
        </button>

        <div className="mt-3 flex items-center justify-between">
          {/* price */}
          <div className="flex flex-col">
            <del className="text-xs md:text-sm text-gray-400 pl-5 md:pl-10">$1500.2</del>
            <p className="text-md md:text-lg font-semibold text-gray-900">$1250.2</p>
          </div>

          {/* increment and decrement buttons */}
          <div className="flex items-center gap-2 md:gap-4 rounded-md border border-gray-300 bg-gray-100 px-2 py-1 ml-3">
            <button className="text-gray-600 transition hover:text-gray-900 text-sm md:text-base">
              <FaMinus />
            </button>
            <span className="text-sm font-semibold text-gray-800">1</span>
            <button className="text-gray-600 transition hover:text-gray-900 text-sm md:text-base">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
