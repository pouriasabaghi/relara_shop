import Image from "next/image";
import React from "react";
import { GoHeartFill } from "react-icons/go";

export default function Wishlist() {
  const wishlist = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$199.99",
      image: "/images/image.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149.99",
      image: "/images/productImage.png",
    },
    {
      id: 3,
      name: "Gaming Keyboard",
      price: "$89.99",
      image: "/images/image.png",
    },
    { id: 4, name: "4K Monitor", price: "$499.99", image: "/images/image.png" },
  ];

  return (
    <div>
      <p  className="mb-4 md:mb-2 text-2xl font-bold">
        My Wishlist
      </p>
      <div className="md:p-3">
        {wishlist.length === 0 ? (
          <p className="text-lg text-gray-500">Your wishlist is empty.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {wishlist.map((item) => (
              <li key={item.id} className="flex flex-col md:flex-row gap-2 w-full border bg-white p-2 lg:p-4 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="rounded-sm border border-gray-200"
                  width={120}
                  height={120}
                />
                <div className="lg:ml-2 flex w-full flex-col gap-2 justify-between">
                  <div>
                    <p className="text-md font-semibold md:pr-9 line-clamp-2">{item.name}</p>
                    <p className="font-semibold text-customPrimary my-2">
                      {item.price}
                    </p>
                  </div>
                  <button className="w-full rounded-sm border border-customPrimary py-1 text-sm text-customPrimary hover:bg-customPrimary hover:text-white">
                    See More
                  </button>
                </div>

                {/* Wishlist Button */}
                <span className="absolute right-2 top-2 cursor-pointer rounded-full bg-white p-2.5 shadow-md hover:shadow-lg transition-all">
                  <GoHeartFill className="text-lg text-red-500" />
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
