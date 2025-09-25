/** @type {import('next').NextConfig} */
// User custom Next.js configuration
// This file is never overwritten by Galaxy sync
// Add your custom Next.js config here

module.exports = {
  // Example: Custom experimental features
  // experimental: {
  //   appDir: true,
  // },
  
  // Example: Custom build optimizations
  compress: true,
  
  // Example: Custom image optimization
  images: {
    domains: ['example.com'],
  },
  
  // Example: Custom webpack configuration
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Custom webpack modifications
  //   return config
  // },
  
  // Add any other custom Next.js configuration options here
}