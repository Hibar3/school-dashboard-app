/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['api-production.s3.amazonaws.com', 'i.pravatar.cc', 'flowbite.com' ,'cdn-icons-png.flaticon.com'], // whitelist custom domains
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
};

export default nextConfig;
