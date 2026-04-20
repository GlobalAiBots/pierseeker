/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect duplicate-topic slugs to existing canonical posts.
      { source: "/blog/pier-fishing-for-beginners", destination: "/blog/pier-fishing-tips-for-beginners", permanent: true },
      { source: "/blog/best-bait-for-pier-fishing", destination: "/blog/best-bait-pier-fishing", permanent: true },
      { source: "/blog/kids-first-pier-fishing-trip", destination: "/blog/pier-fishing-with-kids", permanent: true },
    ];
  },
};

export default nextConfig;
