const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "swiperjs.com" },
    ],
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;