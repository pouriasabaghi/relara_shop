import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import productImage from "../../../assets/images/productImage.png";

export default function Product() {
  return (
    <div className="container mx-auto border bg-gray-50 px-4 py-12">
      {/* Product Name */}
      <h1 className="mb-6 text-left text-2xl font-semibold text-gray-800 lg:text-3xl">
        Apple iPhone 16 Pro Max
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
            src={productImage}
            alt="Apple iPhone 16 Pro Max"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          {/* Price */}
          <p className="text-2xl font-semibold text-gray-900">$1099.99</p>

          {/* Choose Color */}
          <Accordion type="single" collapsible defaultValue="color">
            <AccordionItem value="color" className="border-none">
              <AccordionTrigger className="text-lg">
                Choose Color
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2 flex gap-2.5">
                  <div className="h-8 w-8 rounded-full border border-gray-300 bg-pink-300"></div>
                  <div className="h-8 w-8 rounded-full border border-gray-300 bg-amber-50"></div>
                  <div className="h-8 w-8 rounded-full border border-gray-300 bg-emerald-300"></div>
                  <div className="h-8 w-8 rounded-full border border-gray-300 bg-indigo-300"></div>
                  <div className="h-8 w-8 rounded-full border border-gray-300 bg-black"></div>
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
            <button className="mt-4 w-full rounded-md border-2 border-gray-200 py-2.5 text-customPrimary transition-all hover:border-primaryDark hover:bg-primaryDark hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Product Description
        </h2>
        <p className="mt-4 text-gray-700">
          The iPhone 16 Pro Max features an advanced 48MP camera system, A16
          Bionic chip, and a stunning OLED display. Experience the best of
          Apples smartphone technology with cutting-edge features, powerful
          performance, and sleek design.
        </p>
      </div>
    </div>
  );
}
