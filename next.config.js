/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /*experimental: {
    images: {
      unoptimized: true
    }
  }*/
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig
