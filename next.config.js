const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
