import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
};

module.exports = {
  // allowedDevOrigins: ['192.168.1.8', '/_next/*'],
    images: {
        unoptimized: true
    }
}

export default nextConfig;
