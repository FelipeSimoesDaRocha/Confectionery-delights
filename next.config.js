/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withOffline = require('next-offline');

const nextConfig = {
  reactStrictMode: true,
  withOffline: {
    workboxOpts: {
      swDest: process.env.NEXT_EXPORT ? 'service-worker.js' : 'static/service-worker.js',
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 200,
            },
          },
        },
      ],
    },
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ];
    },
  },
  webpack(cfg) {
    cfg.devtool = 'source-map';
    return cfg;
  },
};

module.exports = withOffline(nextConfig);
