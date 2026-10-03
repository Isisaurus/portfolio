import { withSentryConfig } from '@sentry/nextjs/config';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {};

export default withSentryConfig(nextConfig, {
  org: 'isisaurus',
  project: 'javascript-nextjs-d2',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,
});
