/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },

  // Enable standalone output for optimized serverless deployment
  output: "standalone",
  // Custom dist directory for build output
  distDir: "out",
  // Set React strict mode for development
  reactStrictMode: false,
  // Add experimental features if required
  experimental: {
    appDir: true, // Enable app directory for Next.js 13+
  },
};

module.exports = nextConfig;
