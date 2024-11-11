/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['cdn.imagin.studio'], // Add 'cdn.imagin.studio' to the allowed domains
    },
    typescript: {
      ignoreBuildErrors: true,
    },
};

export default nextConfig;
