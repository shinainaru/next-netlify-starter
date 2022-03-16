/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.myanimelist.net"],
  },
  async rewrites() {
    return [
      {
        source: '/search?q=:slug',
        destination: '/search/:slug', // Matched parameters can be used in the destination
      },
    ]
  },
}

module.exports = nextConfig
