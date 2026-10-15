/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // geist ships ESM that imports next/font/local; the pages router needs it transpiled.
  transpilePackages: ["geist"],
};

export default nextConfig;
