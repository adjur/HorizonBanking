/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        isnoreDuringBuilds: true
    }
};

export default nextConfig;
