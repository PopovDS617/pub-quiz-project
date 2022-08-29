/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    firebaseRoute:
      'smoothie-project-e7bb3-default-rtdb.europe-west1.firebasedatabase.app',
  },
};

module.exports = nextConfig;
