/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 禁用 turbopack，避免构建问题
  turbopack: false,
};

module.exports = nextConfig;
