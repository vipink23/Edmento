// 

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",             // Match the root path
        destination: "/Dashboard", // Redirect to /Dashboard
        permanent: true,          // Use permanent (301) redirect
      },
    ];
  },
  // You can keep any other config options here
};

export default nextConfig;
