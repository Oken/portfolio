/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   forceSwcTransforms: false,
  // },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },
};

module.exports = nextConfig;