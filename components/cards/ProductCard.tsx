import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";

type ProductCardProps = {
  slug: string | number;
  name: string;
  image: string;
  price: string;
};

export default function ProductCard({
  slug,
  name,
  image,
  price,
}: ProductCardProps) {
  return (
    <div className="relative flex h-96 w-64 cursor-pointer flex-col items-center justify-between rounded-sm border border-gray-200 bg-gray-50 shadow-lg transition-all hover:shadow-xl">
      {/* Product Image */}
      <div className="relative mx-auto h-52 w-52 overflow-hidden">
        <Image src={image} alt={name} className="object-cover" fill />
      </div>

      {/* Discount */}
      <span className="absolute left-0 top-0 rounded-br-md bg-amber-400 px-3.5 py-1 text-xs font-semibold text-white shadow-md">
        12%
      </span>

      {/* Wishlist Button */}
      <span className="absolute right-2 top-2 cursor-pointer rounded-full bg-white p-2.5 shadow-md transition-all">
        <GoHeart className="text-lg text-red-500" />
      </span>

      {/* Product Details */}
      <div className="w-full space-y-4 px-4">
        <Link
          href={`/products/${slug}`}
          className="text-lg font-semibold text-gray-700"
        >
          {name}
        </Link>

        <div className="flex items-center justify-between gap-2">
          {/* Available Colors */}
          <div className="flex justify-center gap-2.5">
            <div className="h-5 w-5 rounded-sm border border-gray-300 bg-pink-300"></div>
            <div className="h-5 w-5 rounded-sm border border-gray-300 bg-amber-50"></div>
            <div className="h-5 w-5 rounded-sm border border-gray-300 bg-emerald-300"></div>
            <div className="h-5 w-5 rounded-sm border border-gray-300 bg-indigo-300"></div>
            <div className="h-5 w-5 rounded-sm border border-gray-300 bg-black"></div>
          </div>

          {/* Rating (Stars) */}
          <div className="flex items-center gap-1">
            <FaStar className="text-sm text-amber-400" />
            <p className="text-xs font-medium text-gray-400">4.5</p>
          </div>
        </div>

        {/* Price */}
        <div className="flex">
          <p className="text-left text-lg font-semibold text-gray-800">
            {price && `${price} $`}
            {!price && "N/A"}
          </p>
          {/* <del className="pl-2 text-sm text-gray-400">1500.2$</del> */}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-customPrimary py-2 font-medium text-white transition-all hover:bg-primaryDark">
        Add to Cart
      </button>
    </div>
  );
}
