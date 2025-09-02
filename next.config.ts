import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  experimental: {
  turbo: {
    loaders: {},
  },
},

};

export default nextConfig;
