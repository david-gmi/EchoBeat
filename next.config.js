/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'misc.scdn.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'geo-media.beatsource.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i1.sndcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.pitchfork.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'seed-mix-image.spotifycdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'slruzvnzvhostjmljxxg.supabase.co',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig
