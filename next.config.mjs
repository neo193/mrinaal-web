/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> ./out  (deployable to Cloudflare Pages, Traffic Pullz, or any static host)
  output: "export",
  // /about-us/ style URLs, matching the existing WordPress site's slugs
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
