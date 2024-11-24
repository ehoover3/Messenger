/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },
  output: "standalone", // Enable standalone output for optimized serverless deployment
  reactStrictMode: false, // Set React strict mode for development
  experimental: {
    appDir: true, // Enable app directory for Next.js 13+
  },
};

module.exports = nextConfig;
