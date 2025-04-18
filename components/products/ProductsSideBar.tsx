import React from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const brands = ["Apple", "Samsung", "Xiaomi", "OnePlus", "Google"];
const colors = ["pink-300", "amber-50", "emerald-300", "indigo-300", "black"];

export default function ProductSidebar() {
  return (
    <div className="w-72 p-4 border border-gray-200 space-y-6 bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-700">Filters</h2>

      {/* Brand Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-600">Brand</h3>
        <div className="space-y-2 mt-2">
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
        <p className="text-xs text-gray-500 mt-1">Max: $2000</p>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-600">Color</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {colors.map((color) => (
            <div
              key={color}
              className={`w-6 h-6 rounded-full border border-gray-300 cursor-pointer bg-${color}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
