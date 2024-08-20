/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'uploadthing.com',
        'utfs.io',
        'img.clerk.com',
        'subdomain',
        'files.stripe.com',
        "dc.om"
      ],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
          },
          {
            protocol: 'http',
            hostname: '*',
          },
        ],
      },
      typescript: {
        // Ignoring TypeScript errors during build
        ignoreBuildErrors: true,
      },
  
      eslint:{
        ignoreDuringBuilds: true
    },
    reactStrictMode: true,
  };
  
  export default nextConfig;