import { NextResponse } from 'next/server';

// Galaxy service metadata - Template placeholders replaced by CLI
const SERVICE_NAME = "ui-smoke-web"
const SERVICE_TIER = "ui"
const SERVICE_TEAM = "team2"

export async function GET() {
  return NextResponse.json({
    service: SERVICE_NAME,
    tier: SERVICE_TIER,
    team: SERVICE_TEAM,
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: "1.0.0"
  });
}
