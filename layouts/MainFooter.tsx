import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsArrowRight,
} from "react-icons/bs";

export default function MainFooter() {
  return (
    <footer className="relative mt-16 bg-primaryDark text-white">
      {/* Top Section */}
      <div className="animate-movingGradient absolute left-0 right-0 -top-[65] mx-auto flex h-32 w-[80vw] items-center justify-between rounded-md bg-gradient-to-r from-customPrimary to-customAccent bg-[length:200%_200%] px-16">
        <p className="text-3xl font-extrabold">Try Relara Shop Now..</p>
        <div className="flex items-center space-x-4">
          <button className="flex items-center gap-3 rounded-full bg-primaryDark px-5 py-1 text-sm">
            Sign Up
            <BsArrowRight />
          </button>
          <button className="rounded-full bg-white px-5 py-1 text-sm text-primaryDark">
            Contact Us
          </button>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 pb-16 pt-28 md:grid-cols-3">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide">
            Realara Shop
          </h2>
          <p className="mt-3 text-sm text-gray-200">
            The best place to find your favorite electronics at the best prices.
            Quality products, unbeatable deals, and fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-gray-100">Quick Links</h3>
          <a
            href="#"
            className="text-gray-300 transition hover:text-yellow-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-300 transition hover:text-yellow-300"
          >
            FAQs
          </a>
          <a
            href="#"
            className="text-gray-300 transition hover:text-yellow-300"
          >
            Shipping & Returns
          </a>
          <a
            href="#"
            className="text-gray-300 transition hover:text-yellow-300"
          >
            Contact
          </a>
        </div>

        {/* Social Media & Newsletter */}
        <div className="flex flex-col space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-100">Follow Us</h3>
            <div className="mt-3 flex space-x-6">
              <a href="#" className="transition hover:scale-110">
                <BsInstagram size={24} />
              </a>
              <a href="#" className="transition hover:scale-110">
                <BsFacebook size={24} />
              </a>
              <a href="#" className="transition hover:scale-110">
                <BsTwitter size={24} />
              </a>
              <a href="#" className="transition hover:scale-110">
                <BsLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100">
              Subscribe to Our Newsletter
            </h3>
            <div className="mt-3 flex items-center space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-white/10 px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-customAccent"
              />
              <button className="rounded-full bg-customAccent px-5 py-2 text-primaryDark transition hover:bg-customAccent">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20 bg-white/10 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Relara Shop. All rights reserved.
      </div>
    </footer>
  );
}
