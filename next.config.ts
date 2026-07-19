import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Cache Components ('use cache' + cacheTag + cacheLife + updateTag).
   *
   * We read through Mongoose, not fetch(), so `cacheTag` inside a `'use cache'`
   * function is the only way to attach an invalidation tag to a read — and
   * `unstable_cache`, the alternative, is deprecated in Next 16. This is also
   * what lets admin writes invalidate exactly one product instead of nuking
   * every cached page with revalidatePath.
   */
  cacheComponents: true,

  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false, // Keep viewBox for SVGs
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
        as: "*.ts",
      },
    },
  },
  images: {
    /**
     * A missing entry here is a hard RUNTIME ERROR in next/image, not a silent
     * fallback — so every host the app can actually load an image from has to be
     * listed. These were checked against what the live feeds really return, not
     * guessed:
     *
     *   ik.imagekit.io          — admin-uploaded product and site images
     *   behold.pictures         — Instagram reel COVERS (Behold rehosts them)
     *   **.cdninstagram.com     — Instagram's own CDN. The hostname is SHARDED
     *                             (scontent-sea1-1, scontent-sea5-1, …) and varies
     *                             by region, so a literal hostname would work in
     *                             testing and break for users elsewhere. `**`
     *                             matches any subdomain.
     *   lh3.googleusercontent.com — Google reviewer avatars
     */
    remotePatterns: [
      { protocol: "https", hostname: "ik.imagekit.io" },
      { protocol: "https", hostname: "behold.pictures" },
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],

    // Required from Next 16 (defaults to [75]). A `quality` prop that isn't in
    // this list silently snaps to the nearest allowed value, so declare what we use.
    qualities: [75, 90],

    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
