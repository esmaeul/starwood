import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  /* config options here */
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true, // Use permanent: true for 301 redirect
        },
      ];
    },
  
};

export default nextConfig;
