import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'local-origin.dev', 
    '*.local-origin.dev',
    '192.168.0.5',
    '192.168.0.5:3000'
  ],
};

export default nextConfig;
