import ProductCard from "@/components/cards/ProductCard";
import React from "react";

export default async function Products() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
