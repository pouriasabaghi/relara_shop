import Image from "next/image";
import React from "react";
import loginImage from "../../assets/images/login.jpg";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div>
        <Image src={loginImage} alt="" />
      </div>
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
          Login to Your Account
        </h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border p-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border p-3"
          />
          <button className="w-full rounded-md bg-blue-600 p-3 text-white hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
