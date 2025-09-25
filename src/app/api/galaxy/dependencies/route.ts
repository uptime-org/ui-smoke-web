import { NextResponse } from 'next/server'

// Galaxy service metadata - Template placeholders replaced by CLI
const SERVICE_NAME = "{{SERVICE_NAME}}"

// Load dependencies from environment variables
function loadDependencies() {
  const depsConfig: Record<string, any> = {};
  
  // Get the list of dependency service names
  const galaxyDeps = (process.env.GALAXY_DEPS || '').trim();
  if (!galaxyDeps) {
    return depsConfig;
  }
  
  // Parse the comma-separated dependency names
  const depNames = galaxyDeps.split(',').map(name => name.trim()).filter(name => name);
  
  for (const depName of depNames) {
    // Convert service name to environment variable format
    const envPrefix = depName.toUpperCase().replace(/-/g, '_');
    
    // Load dependency configuration from environment
    const depConfig = {
      name: depName,
      url: process.env[`${envPrefix}_SERVICE_URL`] || '',
      host: process.env[`${envPrefix}_SERVICE_HOST`] || '',
      port: process.env[`${envPrefix}_SERVICE_PORT`] || '',
    };
    
    // Clean service name for object access (remove prefixes)
    const cleanName = depName.replace(/^(app-|ui-|infra-)/, '');
    depsConfig[cleanName] = depConfig;
  }
  
  return depsConfig;
}

export async function GET() {
  const dependencies = loadDependencies();
  
  return NextResponse.json({
    service: SERVICE_NAME,
    dependencies,
    dependency_count: Object.keys(dependencies).length,
    example_usage: {
      description: "Access dependencies via environment variables",
      available_services: Object.keys(dependencies),
      properties: ["name", "url", "host", "port"]
    },
    timestamp: new Date().toISOString()
  })
}