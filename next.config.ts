/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Required for Cloudflare Pages
  images: {
    unoptimized: true,
  },
  // Enable static exports for Cloudflare Pages
  output: 'export',
}

module.exports = nextConfig