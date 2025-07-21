import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: isProd ? true : undefined, // Disable default image optimization
  },
  // assetPrefix: isProd ? '/kolo-natury/' : '',
  basePath: isProd ? '/kolo-natury' : '',
  output: isProd ? 'export' : undefined
};

export default nextConfig;
