"use client";

import ProductCard from "@/components/cards/ProductCard";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-5 place-items-center">
        <ProductCard name="Product Name" image="/images/image.png" price="$99.99" slug={1}/>
        <ProductCard name="Product Name" image="/images/image.png" price="$99.99" slug={1}/>
        <ProductCard name="Product Name" image="/images/image.png" price="$99.99" slug={1}/>
        <ProductCard name="Product Name" image="/images/image.png" price="$99.99" slug={1}/>
        <ProductCard name="Product Name" image="/images/image.png" price="$99.99" slug={1}/>
        <ProductCard name="Product Name" image="/images/image.png" price="$99.99" slug={1}/>
        <ProductCard name="Product Name" image="/images/image.png" price="$99.99" slug={1}/>
        <ProductCard name="Product Name" image="/images/image.png" price="$99.99" slug={1}/>
        <ProductCard name="Product Name" image="/images/image.png" price="$99.99" slug={1}/>
      </div>
    </div>
  );
}
