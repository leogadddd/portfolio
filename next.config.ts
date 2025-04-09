import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // disable eslint and ts errors in production build
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
