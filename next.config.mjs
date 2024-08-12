/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "image.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
