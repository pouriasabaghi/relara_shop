import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center rounded-lg bg-gray-100 m-2">
      <div className="hidden lg:block relative rounded-bl-lg rounded-tl-lg">
        <div className="absolute left-20 top-36 z-50">
          <p className="text-4xl font-extrabold text-white">
            Welcome To Relara Shop
          </p>
          <p className="text-xl text-white pl-1 pt-2">
           Enjoy Your Online Store..
          </p>
        </div>
        <Image
          src="/images/login.jpg"
          width={560}
          height={560}
          alt=""
          className="rounded-bl-lg rounded-tl-lg"
        />
        <div className="absolute inset-0 rounded-bl-lg rounded-tl-lg bg-black/20"></div>
      </div>
      <div className="w-full max-w-lg rounded-lg lg:rounded-bl-none lg:rounded-tl-none bg-gray-100 py-10 px-4 md:p-8">
        <h2 className="mb-6 md:mb-12 text-center text-2xl font-bold text-gray-700">
          Login to Your Account
        </h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-gray-200 p-3 my-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border border-gray-200 p-3"
          />
          <button className="w-full rounded-md bg-gradient-to-r from-customPrimary to-customAccent p-3 font-bold text-white transition mt-6 md:mt-8">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
