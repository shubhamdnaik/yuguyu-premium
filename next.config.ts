import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/yuguyu-premium',
  assetPrefix: '/yuguyu-premium/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
