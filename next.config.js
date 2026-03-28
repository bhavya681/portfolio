/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      { source: "/services", destination: "/skills", permanent: true },
      { source: "/technologies", destination: "/skills", permanent: true },
      // { source: "/testimonials", destination: "/work", permanent: true },
    ];
  },
};

module.exports = nextConfig;
