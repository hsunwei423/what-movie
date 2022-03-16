/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  },
  images: {
    domains: ['image.tmdb.org'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
