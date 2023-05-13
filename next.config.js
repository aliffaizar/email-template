/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  host: {
    domain: 'localhost',
    port: 3000,
  },
}

module.exports = nextConfig
