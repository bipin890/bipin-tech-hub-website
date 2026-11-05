import type { NextConfig } from "next";

// GitHub Pages project sites are hosted under /<repository-name>/.
// The configure-pages action supplies the correct base path at build time.
// On a custom domain or local development this value is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
