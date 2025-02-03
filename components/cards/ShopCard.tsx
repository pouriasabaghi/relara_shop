import Image from "next/image";
import React from "react";
import productImage from "../../assets/images/productImage.png";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

export default function ShopCard() {
  return (
    <div className="relative mb-5 flex max-w-[400px] items-center gap-4 overflow-hidden rounded-sm border border-gray-300 bg-gray-50 p-2 shadow-sm transition-all hover:shadow-md">
      {/* product image */}
      <div className="relative h-24 w-24 overflow-hidden rounded-sm border border-gray-200">
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
        <p className="line-clamp-1 text-sm font-semibold text-customPrimary">
          Iphone 14 Pro Max
        </p>

        {/* product color */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-sm border border-gray-300 bg-pink-300"></div>
          <p className="text-sm text-gray-600">Pink</p>
        </div>

        {/* trash button */}
        <button className="absolute right-2 top-2 text-sm text-gray-400/70 transition hover:text-red-500">
          <FaTrash />
        </button>

        <div className="mt-2 flex items-center justify-between">
          {/* price */}
          <div className="flex">
            <p className="text-base font-semibold text-gray-700">1250.2$</p>
            <del className="pl-1 text-xs text-gray-400">1500.2$</del>
          </div>

          {/* increment and decrement buttons */}
          <div className="flex items-center gap-3 rounded-sm border border-gray-300 bg-gray-50 px-2 py-1">
            <button className="text-sm text-gray-600 transition hover:text-gray-900">
              <FaMinus />
            </button>
            <span className="text-sm font-semibold text-gray-800">1</span>
            <button className="text-sm text-gray-600 transition hover:text-gray-900">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
