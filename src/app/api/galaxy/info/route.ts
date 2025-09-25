import { NextResponse } from 'next/server'

// Galaxy service metadata - Template placeholders replaced by CLI
const SERVICE_NAME = "ui-smoke-web"
const SERVICE_TIER = "ui"
const SERVICE_TEAM = "team2"

export async function GET() {
  return NextResponse.json({
    service: SERVICE_NAME,
    type: "ui-service",
    tier: SERVICE_TIER,
    team: SERVICE_TEAM,
    status: "operational",
    features: [
      "next-js",
      "react-server-components",
      "health-monitoring",
      "ssr-support"
    ],
    endpoints: {
      health: "/api/health",
      info: "/api/galaxy/info",
      root: "/api/galaxy/root",
      dependencies: "/api/galaxy/dependencies"
    },
    timestamp: new Date().toISOString()
  })
}