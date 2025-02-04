import ProductCard from "@/components/cards/ProductCard";
import ProductSidebar from "@/components/product_sidebar/ProductsSideBar";
import React from "react";

export default async function Products() {
  return (
    <div className="flex gap-5 justify-between">
        {/* Sidebar */}
        <div className="hidden place-items-start lg:col-span-3 lg:block">
          <ProductSidebar />
        </div>

        {/* Product Grid */}
        <div className="place-items-center lg:col-span-9">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-5">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
    </div>
  );
}
