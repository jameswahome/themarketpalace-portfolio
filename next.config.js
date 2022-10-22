/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "d312ms1ujly8di.cloudfront.net"],
  },
};

module.exports = nextConfig;
