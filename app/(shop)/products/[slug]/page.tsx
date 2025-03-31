import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

type ProductType = {
  id: number;
  name: string;
  price: number;
  primary_image: {
    url: string;
  };
  description: string;
};

async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`,
    {
      headers: {
        Accept: "application/json",
      },
    },
  );

  const product: ProductType = await response.json();

  return (
    <div className="container mx-auto border bg-gray-50 px-4 py-12">
      {/* Product Name */}
      <h1 className="mb-6 text-left text-2xl font-semibold text-gray-800 lg:text-3xl">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < 4 ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <p className="ml-2 text-sm text-gray-500">4.5 Stars</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Images */}
        <div className="relative m-auto h-96 w-full max-w-md">
          <Image
            src={product.primary_image?.url}
            alt={product.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Product Details */}
        <div className="space-y-4">
          {/* Price */}
          <p className="text-2xl font-semibold text-gray-900">
            {product.price}
          </p>

          {/* Choose Color */}
          <Accordion type="single" collapsible defaultValue="color">
            <AccordionItem value="color" className="border-none">
              <AccordionTrigger className="text-lg">
                Choose Color
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2 flex gap-2.5 overflow-auto pb-4">
                  <button className="scroll flex w-full items-center gap-3 rounded-md border-2 border-gray-200 bg-gray-50 px-2 py-2 font-semibold text-customPrimary transition-all hover:border-customPrimary">
                    <div className="h-6 w-6 rounded-full border border-gray-300 bg-pink-300"></div>
                    pink
                  </button>
                  <button className="scroll flex w-full items-center gap-3 rounded-md border-2 border-gray-200 bg-gray-50 px-2 py-2 font-semibold text-customPrimary transition-all hover:border-customPrimary">
                    <div className="h-6 w-6 rounded-full border border-gray-300 bg-amber-50"></div>
                    amber
                  </button>
                  <button className="scroll flex w-full items-center gap-3 rounded-md border-2 border-gray-200 bg-gray-50 px-2 py-2 font-semibold text-customPrimary transition-all hover:border-customPrimary">
                    <div className="h-6 w-6 rounded-full border border-gray-300 bg-emerald-300"></div>
                    emerald
                  </button>
                  <button className="scroll flex w-full items-center gap-3 rounded-md border-2 border-gray-200 bg-gray-50 px-2 py-2 font-semibold text-customPrimary transition-all hover:border-customPrimary">
                    <div className="h-6 w-6 rounded-full border border-gray-300 bg-indigo-300"></div>
                    indigo
                  </button>
                  <button className="scroll flex w-full items-center gap-3 rounded-md border-2 border-gray-200 bg-gray-50 px-2 py-2 font-semibold text-customPrimary transition-all hover:border-customPrimary">
                    <div className="h-6 w-6 rounded-full border border-gray-300 bg-black"></div>
                    black
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Choose Storage */}
          <Accordion type="single" collapsible defaultValue="storage">
            <AccordionItem value="storage" className="border-none">
              <AccordionTrigger className="text-lg">
                Choose Storage
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2 flex flex-col gap-2.5 lg:flex-row">
                  <button className="w-full rounded-md border-2 border-gray-200 bg-gray-50 py-3 pl-4 text-left font-bold text-customPrimary transition-all hover:border-customPrimary">
                    256G
                  </button>
                  <button className="w-full rounded-md border-2 border-gray-200 bg-gray-50 py-3 pl-4 text-left font-bold text-customPrimary transition-all hover:border-customPrimary">
                    512G
                  </button>
                  <button className="w-full rounded-md border-2 border-gray-200 bg-gray-50 py-3 pl-4 text-left font-bold text-customPrimary transition-all hover:border-customPrimary">
                    1T
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Buttons */}
          <div>
            <button className="w-full rounded-md bg-customPrimary py-3 text-white transition-all hover:bg-primaryDark">
              Add to Cart
            </button>
            <button className="mt-4 w-full rounded-md border-2 border-gray-200 py-2.5 text-customPrimary transition-all hover:border-primaryDark hover:text-primaryDark">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-12">
        <h2 className="border-b pb-2 text-2xl font-semibold text-gray-800">
          Product Description
        </h2>
        <p className="mt-4 text-gray-700">{product.description}</p>
      </div>

      {/* Technical Specifications */}
      <div className="mt-12">
        <h2 className="border-b pb-2 text-2xl font-semibold text-gray-800">
          Technical Specifications
        </h2>
        <table className="mt-4 w-full border-collapse border border-gray-300 text-gray-700">
          <tbody>
            <tr className="border border-gray-300">
              <td className="p-2 font-semibold">Processor</td>
              <td className="border-l px-2 py-2 sm:px-4">A16 Bionic Chip</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 font-semibold">Camera</td>
              <td className="border-l px-2 py-2 sm:px-4">
                48MP + 12MP Ultra-Wide
              </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 font-semibold">Battery</td>
              <td className="border-l px-2 py-2 sm:px-4">4500mAh</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 font-semibold">Display</td>
              <td className="border-l px-2 py-2 sm:px-4">6.7-inch OLED</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <h2 className="border-b pb-2 text-2xl font-semibold text-gray-800">
          Customer Reviews
        </h2>
        <div className="mt-5 flex flex-col gap-5 lg:flex-row">
          <div className="flex items-center gap-4 rounded-md border p-4">
            <div className="rounded-full border border-gray-200 p-2 text-gray-500">
              <IoPerson size={20} />
            </div>
            <div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} size={13} />
                ))}
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Great phone! Amazing battery life.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-md border p-4">
            <div className="rounded-full border border-gray-200 p-2 text-gray-500">
              <IoPerson size={20} />
            </div>
            <div>
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} size={13} />
                ))}
                <FaStar className="text-gray-300" size={13} />
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Camera is fantastic, but a bit pricey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="border-b pb-2 text-2xl font-semibold text-gray-800">
          Related Products
        </h2>
        <div className="mt-10 grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
