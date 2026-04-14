import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [100, 75],
  },
  allowedDevOrigins: ["untagged-strife-starch.ngrok-free.dev"],
};

export default nextConfig;
