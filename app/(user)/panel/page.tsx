import React from "react";
import { PiShoppingCart, PiHeart, PiMapPin, PiPackage } from "react-icons/pi";

export default function Panel() {
  const stats = [
    { id: 1, label: "Total Orders", value: 12, icon: <PiShoppingCart /> },
    { id: 2, label: "Wishlist Items", value: 5, icon: <PiHeart /> },
    { id: 3, label: "Saved Addresses", value: 2, icon: <PiMapPin /> },
    { id: 4, label: "Delivered Orders", value: 8, icon: <PiPackage /> },
  ];

  return (
    <div>
      <p className="mb-4 md:mb-2 text-2xl font-bold">Dashboard</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:p-3">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex items-center gap-4 p-5 border rounded-sm bg-white cursor-pointer shadow-md hover:shadow-lg"
          >
            <div className="text-3xl text-customPrimary">{stat.icon}</div>
            <div>
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
