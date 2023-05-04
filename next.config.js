/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(cfg) {
    cfg.devtool = 'source-map';
    return cfg;
  },
};

module.exports = nextConfig;
