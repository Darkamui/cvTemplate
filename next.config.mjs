/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "contentstatic.techgig.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
