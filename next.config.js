/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.myanimelist.net"],
  },
  future: {
    webpack5: true
  }
}

module.exports = nextConfig
