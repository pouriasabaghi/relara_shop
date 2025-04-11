import React from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const brands = ["Apple", "Samsung", "Xiaomi", "OnePlus", "Google"];
const colors = ["pink-300", "amber-50", "emerald-300", "indigo-300", "black"];

export default function ProductSidebar() {
  return (
    <div className="w-72 border border-gray-200 bg-gray-50 p-4">
      <h2 className="text-lg font-semibold text-gray-700">Filters</h2>

      <div className="space-y-5 py-5">
        {/* Brand Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-600">Brand</h3>
          <div className="mt-2 space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2 text-sm">
                <Checkbox id={brand} />
                {brand}
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-600">Price Range</h3>
          <Slider defaultValue={[200]} max={2000} step={50} className="mt-2" />
          <p className="mt-1 text-xs text-gray-500">Max: $2000</p>
        </div>

        {/* Color Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-600">Color</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {colors.map((color) => (
              <div
                key={color}
                className={`h-6 w-6 cursor-pointer rounded-full border border-gray-300 bg-${color}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
