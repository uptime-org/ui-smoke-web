/** @type {import('next').NextConfig} */
const galaxyConfig = {
  // App directory is stable in Next.js 13+
  distDir: '.next',
  
  // Galaxy service configuration
  env: {
    GALAXY_SERVICE_NAME: 'ui-smoke-web',
    GALAXY_SERVICE_TIER: 'ui',
    GALAXY_SERVICE_TEAM: 'team2',
    // Next.js API proxy environment variables
    API_URL: process.env.API_URL || '',
    INTERNAL_API_URL: process.env.INTERNAL_API_URL || '',
    ANALYZER_SERVICE_URL: process.env.ANALYZER_SERVICE_URL || '',
  },
  
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Galaxy-managed API rewrites
  async rewrites() {
    return [
      {
        source: '/api/analyzer/:path*',
        // Proxy analyzer service requests (knowledge graph, entities, etc.)
        destination: `${process.env.ANALYZER_SERVICE_URL || 'http://analyzer-service:8000'}/api/v1/:path*`,
      },
      {
        source: '/api/:path*',
        // Use internal Docker URL for server-side proxy, fallback to localhost for dev
        destination: `${process.env.INTERNAL_API_URL || process.env.API_URL || 'http://localhost:8000'}/api/:path*`,
      },
    ]
  },
  
  // Galaxy service headers
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-Galaxy-Service',
            value: 'ui-smoke-web',
          },
          {
            key: 'X-Galaxy-Tier',
            value: 'ui',
          },
        ],
      },
    ];
  },
};

// Import user custom config if it exists
let customConfig = {}
try {
  customConfig = require('./next.config.custom.js')
} catch {}

module.exports = { ...galaxyConfig, ...customConfig };
