/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist/.next',
  poweredByHeader: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  }
}

module.exports = nextConfig
