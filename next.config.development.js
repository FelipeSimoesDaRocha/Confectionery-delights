/* eslint-disable @typescript-eslint/no-var-requires */
const nextConfig = {
  reactStrictMode: true,
  webpack(cfg) {
    cfg.devtool = 'source-map';
    return cfg;
  },
};

if (process.env.NODE_ENV === 'production') {
  const withOffline = require('next-offline');

  nextConfig.workboxOpts = {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst', // fetch data from the network, if not, fetching from the cache.
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  };

  module.exports = withOffline(nextConfig);
} else {
  module.exports = nextConfig;
}