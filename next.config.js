/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = withPWA({
    reactStrictMode: true,
    images: {
        domains: ['media.valorant-api.com', 'valorant-store.xyz'],
    },
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
    },
});

module.exports = nextConfig;
