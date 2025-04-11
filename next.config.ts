import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/products/**",
      },
      {
        protocol: "https",
        hostname: "api.relara.ir",
        pathname: "/storage/products/**",
      },
    ],
  },
};

export default nextConfig;
