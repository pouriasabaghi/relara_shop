import ProductCard from "@/components/cards/ProductCard";
import ProductSidebar from "@/components/product_sidebar/ProductsSideBar";
import React from "react";

export default async function Products() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Sidebar */}
      <div className="hidden lg:block lg:col-span-3 place-items-center">
        <ProductSidebar />
      </div>

      {/* Product Grid */}
      <div className="lg:col-span-9 place-items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-10 xl:gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
