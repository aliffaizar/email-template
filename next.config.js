/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['email-template-aliffaizar.vercel.app'],
  },
}

module.exports = nextConfig
