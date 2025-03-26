/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This allows production builds to successfully complete even if
    // your project has TypeScript errors.
    ignoreBuildErrors: true,
  },
  // For compatibility with modern syntax and features
  experimental: {
    // Enable modern features that might help with compatibility
    esmExternals: 'loose',
  },
  swcMinify: true,
  // Ensure we output proper error tracking
  webpack(config) {
    return config;
  },
  // Disable source maps in production to reduce build size
  productionBrowserSourceMaps: false
};

module.exports = nextConfig; 