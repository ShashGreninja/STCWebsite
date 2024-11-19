import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

  module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'stc.iitp.ac.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
