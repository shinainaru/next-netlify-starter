/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.myanimelist.net", "api.yimian.xyz"],
  },
  future: {
    webpack5: true
  }
}

module.exports = nextConfig
