import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {{SERVICE_NAME}}
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            {{DESCRIPTION}}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-white mb-4">Service Info</h2>
            <div className="text-left text-gray-300">
              <p><strong>Service:</strong> {{SERVICE_NAME}}</p>
              <p><strong>Tier:</strong> {{TIER}}</p>
              <p><strong>Team:</strong> {{TEAM}}</p>
              <p><strong>Status:</strong> <span className="text-green-400">Healthy</span></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}