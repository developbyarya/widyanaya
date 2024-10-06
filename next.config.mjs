/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
