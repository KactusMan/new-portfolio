/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/playground',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
