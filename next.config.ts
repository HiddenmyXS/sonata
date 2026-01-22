import type { NextConfig } from "next";

const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/discord',
        destination: 'https://discord.gg/2ACACacQ2J',
        permanent: true,
      },
      {
        source: '/billing',
        destination: 'https://my.zerocloud.id',
        permanent: true,
      },
      {
        source: '/panel',
        destination: 'https://ctrl.zerocloud.id',
        permanent: true,
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.iconscout.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'zerocloud.id',
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'discord.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },


    ],
  },
};

export default nextConfig;
