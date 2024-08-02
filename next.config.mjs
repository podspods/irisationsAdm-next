/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    // domains: ['firebasestorage.googleapis.com','via.placeholder.com','unsplash.com','www.irisations.com','irisations.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.irisations.com',
      },
      {
        protocol: 'https',
        hostname: 'irisations.com',
      },      
      {
        protocol: 'http',
        hostname: 'irisations.com',
      },
    ],
  },


};



export default nextConfig;

