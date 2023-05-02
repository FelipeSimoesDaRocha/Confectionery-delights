/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withOffline = require('next-offline');

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js',
      },
    ];
  },
  webpack(cfg) {
    cfg.devtool = 'source-map';
    return cfg;
  },
};

module.exports = withOffline(nextConfig);
