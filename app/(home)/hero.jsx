"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <section className="relative lg:mt-[157px]">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
        >
          <div className="relative h-[540px]">
            <Image
              src="/images/slider1.jpg"
              alt="Sale 1"
              className="h-full w-full object-cover"
              width={1920}
              height={500}
            />
            <div className="absolute inset-0 bg-black/60">
              <div className="animate-fadeInBottom absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold">
                  Biggest Deals of the Year
                </h1>
                <p className="mt-3 text-lg">
                  Up to 50% off on selected products
                </p>
                <Link
                  href="/products"
                  className="text-md mt-10 rounded-sm bg-customAccent px-8 py-2 font-semibold text-primaryDark transition-all duration-300 hover:bg-yellow-400"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-[540px]">
            <Image
              src="/images/slider2.jpg"
              alt="Sale 2"
              className="h-full w-full object-cover"
              width={1920}
              height={500}
            />
            <div className="absolute inset-0 bg-black/60">
              <div className="animate-fadeInRight absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold">New Arrivals</h1>
                <p className="mt-3 text-lg">Check out the latest collection</p>
                <Link
                  href="/new-arrivals"
                  className="text-md mt-10 rounded-sm bg-customAccent px-8 py-2 font-semibold text-primaryDark transition-all duration-300 hover:bg-yellow-400"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-[540px]">
            <Image
              src="/images/slider4.jpg"
              alt="Sale 2"
              className="h-full w-full object-cover"
              width={1920}
              height={500}
            />
            <div className="absolute inset-0 bg-black/60">
              <div className="animate-fadeInLeft absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold">Best Sellers</h1>
                <p className="mt-3 text-lg">
                  Check out the best sellers of the month
                </p>
                <Link
                  href="/new-arrivals"
                  className="text-md mt-10 rounded-sm bg-customAccent px-8 py-2 font-semibold text-primaryDark transition-all duration-300 hover:bg-yellow-400"
                >
                  See Now
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    </div>
  );
}
