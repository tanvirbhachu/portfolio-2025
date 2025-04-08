import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if nextjs lint fails
    // Lowkey, not worth it
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: {
      memoryLimit: 10,
    },
    reactCompiler: true,
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default nextConfig;
