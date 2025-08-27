import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  turbopack: {
    root: '/home/student/movieapi-next/movie-app',
  },
};

export default nextConfig;

