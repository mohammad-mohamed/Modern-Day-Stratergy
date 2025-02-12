import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/a1aa/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
