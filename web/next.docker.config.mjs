/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
