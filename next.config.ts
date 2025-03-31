import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      memoryLimit: 10,
    },
    reactCompiler: true,
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default nextConfig;
