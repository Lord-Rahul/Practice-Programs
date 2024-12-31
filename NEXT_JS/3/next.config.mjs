/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'], // Allow localhost for images
        unoptimized: true,      // Optional: Disable optimization for local images
    },

};


export default nextConfig;


