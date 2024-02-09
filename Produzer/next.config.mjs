/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "templates.casloop.net",
                pathname: "**",
            }
        ]
    }
};

export default nextConfig;