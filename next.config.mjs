// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**", // Allow all paths from i.ibb.co
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        pathname: "/**", // Allow all paths from i.ibb.com
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**", // Allow all paths from i.ibb.com
      },
      {
        protocol: "https",
        hostname: "imageshack.com",
        pathname: "/**", // Allow all paths from i.ibb.com
      },
    ],
  },
};

export default nextConfig;
