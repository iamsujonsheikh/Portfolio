import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Only allow the image hosts this site actually uses.
    // (Wildcard "**" lets anyone use your Vercel image optimizer as a free proxy.)
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "i.ibb.co.com" },
    ],
  },
};

export default nextConfig;