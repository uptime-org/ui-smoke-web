import { NextResponse } from 'next/server';

// Galaxy service metadata - Template placeholders replaced by CLI
const SERVICE_NAME = "{{SERVICE_NAME}}"
const SERVICE_TIER = "{{TIER}}"
const SERVICE_TEAM = "{{TEAM}}"

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
