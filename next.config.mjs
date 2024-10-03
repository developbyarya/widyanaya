/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scholar.google.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
