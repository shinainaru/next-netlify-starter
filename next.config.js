/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.myanimelist.net"],
  },
  async rewrites() {
    return [
      {
        source: '/search',
        has: [
          {
            type: 'query',
            key: 'q',
            value: '(?<q>.*)',
          }
        ],
        destination: '/search/:q', // Matched parameters can be used in the destination
      },
    ]
  },
}

module.exports = nextConfig
