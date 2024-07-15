/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
