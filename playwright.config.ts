import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;
const baseURL = 'http://localhost:3000';

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: isCI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: {
    // Prefer localhost over 127.0.0.1 so Next.js dev client bundles hydrate
    // (Next blocks cross-origin /_next access from 127.0.0.1 by default).
    baseURL,
    trace: 'on-first-retry',
    ...devices['Desktop Chrome'],
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    // Locally reuse a running next dev/start; otherwise build then start.
    // In CI the workflow builds first, so only start is needed.
    command: isCI ? 'npm run start' : 'npm run build && npm run start',
    url: baseURL,
    reuseExistingServer: !isCI,
    timeout: 180_000,
  },
});
