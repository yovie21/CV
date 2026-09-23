import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CV",
  assetPrefix: "/CV",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;