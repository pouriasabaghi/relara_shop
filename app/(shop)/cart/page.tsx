import ShopCard from "@/components/cards/ShopCard";
import React from "react";

export default function Cart() {
  return (
    <div className="mx-auto my-10 flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start md:justify-between">
      {/* products */}
      <div className="flex w-full flex-col gap-5 md:w-2/3">
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>

      {/* Order Summary */}
      <div className="w-full max-w-sm rounded-lg border border-gray-300 bg-white p-5 shadow-md md:w-1/3">
        <h2 className="mb-4 text-lg font-bold text-gray-800">Order Summary</h2>

        <div className="flex justify-between border-b pb-2 text-sm text-gray-700">
          <span>Subtotal:</span>
          <span>$6899</span>
        </div>

        <div className="flex justify-between border-b py-2 text-sm text-gray-700">
          <span>Discount:</span>
          <span className="text-green-600">-$789</span>
        </div>

        <div className="flex justify-between py-3 text-base font-semibold text-gray-900">
          <span>Total:</span>
          <span>$6119</span>
        </div>

        <button className="mt-4 w-full rounded-md bg-yellow-400 px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-yellow-500">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
