import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export
  trailingSlash: true, // Ensures files are named like test-page.html
};

export default nextConfig;
